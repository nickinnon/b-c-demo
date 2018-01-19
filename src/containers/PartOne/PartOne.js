import React, { Component } from 'react';
import './PartOne.css'

class PartOne extends Component {
  render() {
    return (
      <section className="wrapper main flex-vertical-align">
        <div className="wrapper__status is-new--true kerning">
          New
        </div>

        <h1 className="wrapper__header">
          Good Hair Days Start with Safer Ingredients
        </h1>

        <span className="wrapper__sub-header">
          Formulated without fulfates, mineral oil, or synthedic fragances, our next-generation hair care delivers high performance and safety.
        </span>

        <div>
          <img className="hero-image" src="/images/hero.jpg" />
        </div>

        <ul className="nav wrapper__nav kerning">
          <li>Volume & Shape</li>
          <li>Smooth & Control</li>
          <li>Repair & Nourish</li>
          <li>Reviews</li>
          <li>How-to Videos</li>
          <li>Ingredients</li>
        </ul>

        <section className="content wrapper flex-wrap anchor">
          <div className="wrapper__container wrapper">
            <img className="content__image" src="/images/girl.jpg"/>
          </div>

          <div className="wrapper__container content__body">
              <h2 className="content__header">
                Volume & Shape
              </h2>
              <span className="content__sub-header">
                Reveal beatuiful body and enivaible oomph with this collection for fine, flat fair freaturing volumizing hibiscus proteins. Safe for color treated hair.
              </span>
          </div>

          <div className="free"></div>
        </section>
      </section>
    );
  }
}

export default PartOne;
