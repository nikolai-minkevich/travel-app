import React, { Component } from 'react';
import s from './Slider.module.scss';
import cn from 'classnames';

class Slider extends Component {
    constructor(props) {
        super(props)

        this.cardQuantity = 3;

        this.state = {
            cardList: this.initCardList(props.attractions, this.cardQuantity),
        }

        this.handlerCardList = this.handlerCardList.bind(this);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
        
    // }
    
    initCardList( arr, quantity ) {
        arr.forEach( (item, index) => {
            index < quantity ? item.displayed = true : item.displayed = false;
        });
        return arr;
    };


    handlerCardList(event) {
        const vector = event.target.dataset.vektor;
        const arr = this.state.cardList.concat();
        const mask = [];
        arr.forEach( (item, index) => item.displayed ? mask.push(index) : null );
        if (vector === 'left' && mask[0] !== 0) {
            for (let i=0; i<mask.length; i++) {
                mask[i] = mask[i] - 1;
            }
            arr.forEach( (item, index) => {
                mask.includes(index) ? item.displayed = true : item.displayed = false;
            } );    
            this.setState({ cardList: arr});
        }
        if (vector === 'right' && mask[this.cardQuantity - 1] !== arr.length - 1 ) {
            for (let i=0; i<mask.length; i++) {
                mask[i] = mask[i] + 1;
            }
            arr.forEach( (item, index) => {
                mask.includes(index) ? item.displayed = true : item.displayed = false;
            } );    
            this.setState({ cardList: arr});
        }
    }

    render() {
        const cardList = this.state.cardList;

        return (
            <section className={s.slider}>
                <div className={s.left} onClick={this.handlerCardList} data-vektor="left">&#9668;</div>
                <div className={s.cardList}>
                    { cardList.map( (item, index) => {
                        if (item.displayed) { return (
                            <div className={s.card} key={index}>
                                <p className={cn(s.title, s.cut_title)}>{ item.title }</p>
                                <div className={s.img} style={{ backgroundImage: `url(${item.imageURL})` }} />
                                {/* <Rating/> */}
                                <p className={cn(s.description, s.cut)}>{ item.description }</p>
                            </div>
                        ) } else { return null }
                    } ) }
                </div>
                <div className={s.right} onClick={this.handlerCardList} data-vektor="right">&#9658;</div>
            </section>
        )
    }
}

export default Slider;

// attractions: [
//     {
//     title: "Мост Золотые Ворота",
//     description: "Мост Золотые Ворота - это подвесной мост через Золотые Ворота, пролив шириной 1,6 км, соединяющий залив Сан-Франциско и Тихий океан.",
//     imageURL: "https://gpxies.ru/team43/usa/attractions/1_Golden-Gate-Bridge.jpg",
//     rating: "0",
//     votes: [
//     ""
//     ]
//     },