import React from "react";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="content-body">
        <div className="hero-content-body">
          <div className="hero-left-side">
            <div className="small-title-light">Who we are</div>
            <div className="title-light">
              Engage brand and increase viewability.
            </div>
            <div className="text-light">
              Elementum sagittis vitae et leo duis ut. Eufeugiat pretium nibh
              ipsum consequat.
            </div>
            <div className="button-group">
              <button className="button">Download Now</button>
              <a target="_blank" className="link">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-right-side">
            <img src="/images/Device_Ipad.png" className="device-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
