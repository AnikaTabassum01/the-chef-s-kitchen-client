import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-bg bg-light">
        <div className="banner bg-light mx-auto">
          <div className="text text-dark">
            <h1 className="w-75">Cooking is Edible Art!</h1>
            <p className="w-75 mt-4">
            Cooking is an art that encompasses the world. It requires passion, precision, and most of all, love. The culinary arts are a complex mixture of balancing a variety of tastes and aromas, combined with beautiful plating. Cooking allows the artistic side of anyone to come alive. 
            </p>
          </div>
          {/* <div className="image bg-light">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/2/2020/11/Ragda-Pattice-V1_preview-82d4613.jpg"
              alt=""
            />
          </div> */}
        </div>
      </div>
    );
};

export default Banner;