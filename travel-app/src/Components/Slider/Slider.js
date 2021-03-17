import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import cn from "classnames";

import s from "./Slider.module.scss";
import "./style.css";
import RatingSelect from "../RatingSelect/RatingSelect.js";
import Rating from "../../Components/Rating/Rating.js";
import TravelAppAPI from "../../Utils/TravelAppAPI";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.travelAppAPI = new TravelAppAPI();
    this.state = {
      attractions: props.attractions,
      mask: [0, 1, 2],
      maskLength: 3,
      left: false,
      right: false,
      fullscreen: false,
    };
  }

  activeBtn = (mask, arr) => {
    const left = mask[0] === 0 ? false : true;
    const right = mask[mask.length - 1] === arr.length - 1 ? false : true;
    return { left, right };
  };

  initBtn = () => {
    const arr = this.state.attractions;
    const mask = this.state.mask;
    const { left, right } = this.activeBtn(mask, arr);
    this.setState({ left, right });
  };

  handlerCardList = (event) => {
    const vector = event.target.dataset.vektor;
    const arr = this.state.attractions;
    const mask = this.state.mask.concat();
    if (vector === "left" && mask[0] !== 0) {
      for (let i = 0; i < mask.length; i++) mask[i] = mask[i] - 1;
    }
    if (vector === "right" && mask[mask.length - 1] !== arr.length - 1) {
      for (let i = 0; i < mask.length; i++) mask[i] = mask[i] + 1;
    }
    const { left, right } = this.activeBtn(mask, arr);
    this.setState({ mask, left, right });
  };
  handlerChangeRating = async (event) => {
    let changedAttrId = event.target.dataset["id"];
    let changedAttrRating = event.target.value;
    let userEmail;
    if (localStorage.getItem("travelApp43_UserEmail")) {
      userEmail = localStorage.getItem("travelApp43_UserEmail");
    } else {
      return;
    }
    const resp = await this.travelAppAPI.setRating(changedAttrId, changedAttrRating, userEmail);
    if (resp) {
      let newAttractions = this.state.attractions.map((attraction) => {
        if (attraction._id === resp.id) {
          attraction.votes = resp.votes;
        }
        return attraction;
      });
      this.setState({
        attraction: newAttractions,
      });
    }
  };
  startFullscreen = (event) => {
    if (event.target.tagName !== "SELECT") {
      const index = event.target.closest(".data-index").dataset.index;
      const arr = this.state.attractions;
      const mask = [Number(index)];
      const { left, right } = this.activeBtn(mask, arr);
      document.getElementById("slider__64bit").webkitRequestFullScreen();
      this.setState({ mask, left, right, fullscreen: true });
    }
  };

  stopFullscreen = () => {
    if (!document.webkitFullscreenElement) {
      const arr = this.state.attractions;
      const mask = this.state.mask.concat();
      const index = mask[0];
      if (index === 0) {
        for (let i = 0; i < this.state.maskLength; i++) mask[i] = i;
      } else if (index === arr.length - 1) {
        for (let i = 0; i < this.state.maskLength; i++) mask[i] = i + arr.length - this.state.maskLength;
      } else {
        for (let i = 0; i < this.state.maskLength; i++) mask[i] = i + index - 1;
      }
      const { left, right } = this.activeBtn(mask, arr);
      this.setState({ mask, left, right, fullscreen: false });
    }
  };

  componentDidMount() {
    this.initBtn();
    document.addEventListener("webkitfullscreenchange", this.stopFullscreen);
  }
  calculateRating(attraction) {
    let voters = [];
    let rating = 0;
    attraction.votes.map((vote) => {
      if (vote.user !== undefined && vote.rate !== undefined) {
        voters.push(vote.user);
        rating += parseFloat(vote.rate);
      }
      return vote;
    });
    attraction.rating = rating;
    attraction.voters = voters;
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.attractions !== prevState.attractions) {
      return { attractions: nextProps.attractions };
    } else {
      return null;
    }
  }

  render() {
    const { attractions, mask, left, right, fullscreen } = this.state;

    return (
      <section className={cn(s.slider, fullscreen ? s.fullscreen : null)} id="slider__64bit">
        <div className={cn(s.left, left ? null : s.disabled)} onClick={this.handlerCardList} data-vektor="left">
          &#9668;
        </div>
        <TransitionGroup component={"div"} className={s.cardList}>
          {attractions.map((item, index) => {
            if (mask.includes(index)) {
              if (item.votes.length > 0) {
                this.calculateRating(item);
              }
              return (
                <CSSTransition classNames="anime" timeout={250} key={index}>
                  <div className={`${s.card} data-index`} onClick={this.startFullscreen} data-index={index} /* key={index} */>
                    <p className={cn(s.title, s.cut_title)}>{item.title}</p>
                    <div className={s.img} style={{ backgroundImage: `url(${item.imageURL})` }} />
                    <div className={s.rating_container}>
                      {fullscreen ? (
                        <Rating rating={item.rating} voters={item.voters} onClick={() => {}} cursor={{ cursor: "pointer" }} />
                      ) : (
                        <Rating rating={item.rating} voters={item.voters} />
                      )}
                      <RatingSelect handlerChangeRating={this.handlerChangeRating} id={item._id} />
                    </div>
                    <p className={cn(s.description, s.cut)}>{item.description}</p>
                  </div>
                </CSSTransition>
              );
            } else {
              return null;
            }
          })}
        </TransitionGroup>
        <div className={cn(s.right, right ? null : s.disabled)} onClick={this.handlerCardList} data-vektor="right">
          &#9658;
        </div>
      </section>
    );
  }

  componentWillUnmount() {
    document.removeEventListener("webkitfullscreenchange", this.stopFullscreen);
  }
}

export default Slider;
