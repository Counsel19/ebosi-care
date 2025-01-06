import React, { FC, ReactNode } from "react";
import {
    Accessibility,
    CarFront,
    Clock,
    Luggage,
    MapPin,
    NotebookText,
    Plane,
    UserRound,
  } from "lucide-react";
  import { FaDog } from "react-icons/fa";

const ReservationDetails = () => {
  return (
    <div className="p-[2rem]  shadow-lg border">
      <h3 className="text-[2.2rem] font-bold">Reservation Details</h3>
      <hr className="border-gray-400 my-[1.5rem]" />
      <div>
        <Subtitle
          text="Pick up location"
          icon={<MapPin className="text-[#CC1815]" size={12} />}
        />
        <h5 className="font-semibold">Airport</h5>
      </div>
      <hr className="border-gray-400 my-[1.5rem]" />
      <div>
        <Subtitle
          text="Drop off location"
          icon={<MapPin className="text-[#CC1815]" size={12} />}
        />
        <h5 className="font-semibold">Westchester Ramsgate Ave, Los A</h5>
      </div>
      <hr className="border-gray-400 my-[1.5rem]" />
      <div>
        <Subtitle
          text="Pick up time"
          icon={<Clock className="text-[#CC1815]" size={12} />}
        />
        <h5 className="font-semibold">January 2, 2025 - 8:45AM</h5>
      </div>
      <hr className="border-gray-400 my-[1.5rem]" />
      <div>
        <Subtitle
          text="Flight information"
          icon={<Plane className="text-[#CC1815]" size={12} />}
        />
        <h5 className="font-semibold">United Airline 5192</h5>
      </div>
      <hr className="border-gray-400 mt-[1.5rem]" />
      <div className="grid grid-cols-[1fr_2px_1fr] gap-[1rem]">
        <div className="py-[1.5rem]">
          <Subtitle
            text="Passengers"
            icon={<UserRound className="" size={12} />}
          />
          <h5 className="font-semibold">1</h5>
        </div>
        <div className="h-full w-[0.1rem] bg-gray-500" />
        <div className="py-[1.5rem]">
          <Subtitle text="Luggages" icon={<Luggage className="" size={12} />} />
          <h5 className="font-semibold">1</h5>
        </div>
      </div>
      <hr className="border-gray-400 mb-[1.5rem]" />
      <div>
        <Subtitle
          text="Service type"
          icon={<CarFront className="text-[#CC1815]" size={12} />}
        />
        <h5 className="font-semibold">Wheelchair</h5>
      </div>
      <hr className="border-gray-400 my-[1.5rem]" />
      <div>
        <Subtitle
          text="Guest information"
          icon={<CarFront className="text-[#CC1815]" size={12} />}
        />
        <h5 className="font-semibold">Booking for myself</h5>
      </div>
      <hr className="border-gray-400 mt-[1.5rem]" />
      <div className="grid grid-cols-[1fr_2px_1fr] gap-[1rem]">
        <div className="py-[1.5rem]">
          <Subtitle
            text="Wheeelchair"
            icon={<Accessibility className="" size={12} />}
          />
          <h5 className="font-semibold">No</h5>
        </div>
        <div className="h-full w-[0.1rem] bg-gray-500" />
        <div className="py-[1.5rem]">
          <Subtitle
            text="Service dog"
            icon={<FaDog className="text-gray-500" size={12} />}
          />
          <h5 className="font-semibold">No</h5>
        </div>
      </div>
      <hr className="border-gray-400 mb-[1.5rem]" />
      <div>
        <Subtitle
          text="Driver note"
          icon={<NotebookText className="text-[#CC1815]" size={12} />}
        />
        <h5 className="font-semibold">No driver notes</h5>
      </div>
    </div>
  );
};

interface SubtitleProps {
    text: string;
    icon: ReactNode;
  }
  
  const Subtitle: FC<SubtitleProps> = ({ text, icon }) => {
    return (
      <div className="flex items-center gap-2 text-[1rem]">
        {icon}
        <span className="text-gray-500"> {text}</span>
      </div>
    );
  };
  

export default ReservationDetails;
