import Image from "next/image";
import React from "react";

const TrackingMap = () => {
  return (
    <div className="shadow-lg border">
      <Image
        className="w-full h-full object-cover object-center"
        height={800}
        width={800}
        src="/images/map.png"
        alt="track vehicle map"
      />
    </div>
  );
};

export default TrackingMap;
