/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import overcast from "../assets/icons/overcast.png";

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  //update mini card icon respective to the icon string received
  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      } else if (iconString.toLowerCase().includes("overcast")) {
        setIcon(overcast);
      }
    }
  }, [iconString]);
  return (
    <div
      data-testid="mini-card"
      className="glassCard w-[10rem] h-[11rem] p-4 flex flex-col hover:scale-110 transition-all duration-500"
    >
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr className="pb-1" />
      <div className="w-full flex justify-center items-center flex-1 ">
        <img
          src={icon}
          alt="forecast not available"
          className="w-[4rem] h-[4rem] text-xs rounded-full"
        />
      </div>
      <p className="text-center font-bold">{temp}&deg;C</p>
      <p className="text-center font-bold text-sm">{iconString}</p>
    </div>
  );
};

export default MiniCard;
