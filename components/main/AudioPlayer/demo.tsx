import React from "react";
import AudioPlayer from ".";

const AudioPlayerDemo = () => {
  return (
    <AudioPlayer
      src="/audio/ncs.mp3"
      cover="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="NEFFEX & TOKYO MACHINE"
    />
  );
};

export default AudioPlayerDemo;
