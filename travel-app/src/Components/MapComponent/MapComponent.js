import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapState = {
  center: [48.704272, 65.60203],
  zoom: 4,
};

const COLOR = "#FF0000";

function MapComponent(props) {
  const mapRef = React.createRef(null);

  const getRegions = (ymaps) => {
    if (mapRef && mapRef.current) {
      var objectManager = new ymaps.ObjectManager();
      ymaps.borders
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
          console.log(region);
          region.options.fillColor = COLOR;
          // Добавим регионы на карту.
          result.features = [];
          result.features.push(region);
          objectManager.add(result);
          mapRef.current.geoObjects.add(objectManager);
        });
    }
  };

  console.log(props.capitalCoordinates);

  return (
    <div className="App">
      <YMaps>
        <Map
          // Создаем ссылку на инстанс мапа, чтобы использовать его
          instanceRef={mapRef}
          state={{ center: props.capitalCoordinates, zoom: 4 }}
          // Используем коллбэк функцию при загрузке карты
          onLoad={(ymaps) => getRegions(ymaps)}
          // Подключаем модули регионов и ObjectManager
          modules={["borders", "ObjectManager"]}
        >
          <Placemark geometry={props.capitalCoordinates} />
        </Map>
      </YMaps>
    </div>
  );
}

export default MapComponent;
