import React from "react";

const SpinReels = (props) => {
  return props.reels.map((reel) => {
    return <p>{reel[Math.floor(Math.random() * reel.length)]}</p>;
  });
};

export default SpinReels;
