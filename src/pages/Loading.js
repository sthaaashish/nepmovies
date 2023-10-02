import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <lottie-player
        src="https://lottie.host/ad93b250-c1d4-44c8-92b3-271cac7b32e3/4VHBrpFC3M.json"
        background="#ffffff"
        speed="1"
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
    </div>
  );
};

export default Loading;
