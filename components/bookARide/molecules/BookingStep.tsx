import { FC } from "react";

interface BookingStepProps {
  title: string;
  details: string;
}
const BookingStep: FC<BookingStepProps> = ({ details, title }) => {
  return (
    <div className="p-[4rem] rounded-lg border-2  border-primary border-dashed ">
      <h5 className="font-semibold text-center">{title}</h5>
      <p className="text-gray-700 text-center">{details}</p>
    </div>
  );
};

export default BookingStep;
