"use client";
import { BeatLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <BeatLoader color="#032541" speedMultiplier={1} />
    </span>
  );
};

export default LoadingComponent;
// bg-[#171e65]
