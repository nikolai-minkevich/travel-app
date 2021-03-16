import React from 'react';
import s from './Rating.module.scss';

const Rating = props => {
    const { rating } = props;
    const style = {
        width: `${rating * 21.8}px`
    }

    
    return (
        <div className={s.box}>
            <div className={s.starsTransparent}></div>
            <p>{ rating }</p>
            <div className={s.starsFill} style={style}></div>
        </div>
    )
};

export default Rating;