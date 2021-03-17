import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import s from './MapComponent.module.scss';

const COLOR = "#FF0000";

function MapComponent(props) {
  const mapRef = React.createRef(null);

  const getRegions = (ymaps) => {
    if (mapRef && mapRef.current) {
      var objectManager = new ymaps.ObjectManager();
      ymaps.borders
        // 001 is Global ID
        // https://yandex.ru/dev/maps/jsbox/2.1/regions/
        .load("001", {
          lang: props.language,
          quality: 2,
        })
        .then(function (result) {
          let regions = result.features.reduce(function (acc, feature) {
            let iso = feature.properties.iso3166;
            feature.id = iso;
            // Добавим опции региона по умолчанию.
            feature.options = {
              fillOpacity: 0.6,
              strokeColor: "#FFF",
              strokeOpacity: 0.5,
            };
            acc[iso] = feature;
            return acc;
          }, {});
          let region = regions[props.codeISO2];
          region.options.fillColor = COLOR;
          // Добавим регионы на карту.
          result.features = [];
          result.features.push(region);
          objectManager.add(result);
          mapRef.current.geoObjects.add(objectManager);
        });
    }
  };

  return (
    <div className={s.App}>
      <YMaps>
        <Map
          // Создаем ссылку на инстанс мапа, чтобы использовать его
          instanceRef={mapRef}
          state={{ center: props.capitalCoordinates, zoom: 4 }}
          // Используем коллбэк функцию при загрузке карты
          onLoad={(ymaps) => getRegions(ymaps)}
          // Подключаем модули регионов и ObjectManager
          modules={["borders", "ObjectManager"]}

          style={{width: "100%", height: "100%"}}
        >
          <Placemark geometry={props.capitalCoordinates} />
        </Map>
      </YMaps>
    </div>
  );
}

export default MapComponent;
