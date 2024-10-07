"use client";

import React from "react";
import Video from "next-video";
import "next-cloudinary/dist/cld-video-player.css";
import intro from "../../videos/intro.mp4";
import { Image } from "@nextui-org/react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div className="overflow-hidden w-full rounded-2xl   bg-blend-soft-light bg-white  shadow-sm">
      <div className="aspect-video  rounded-xl">
        <ReactPlayer
          url="https://youtu.be/0CXJN_HhakY"
          className="react-player"
          width="100%"
          height="100%"
          controls={false}
          playing={false}
          loop={false}
          muted={false}
          pip={true}
          volume={0.8}
          onError={(e) => console.error("Error playing video: ", e)}
        />
        {/* <Video src="https://videos.pexels.com/video-files/15556050/15556050-uhd_2560_1440_60fps.mp4">
          <Image
            slot="poster"
            src="/images/riders.png"
            alt="Some peeps doing something awesome"
          />
        </Video> */}
      </div>
    </div>
  );
};

export default Hero;
