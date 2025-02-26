import { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Calendar as CalenderIcon,
  ChevronDown,
  ChevronUp,
  Zap,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";
import { format } from "date-fns";

// interface DateTimeDialogProps {}

const nowDate = new Date();

// Extract hour and minute
let hours = nowDate.getHours();
const minutes = nowDate.getMinutes();

const amPm = hours >= 12 ? "PM" : "AM";

hours = hours % 12 || 12;

const DateTimeDialog: FC = ({}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedHour, setSelectedHour] = useState(hours);
  const [selectedMinute, setSelectedMinute] = useState(minutes);
  const [selectedAmPm, setSelectedAmPm] = useState(amPm);

  const [showDialog, setShowDialog] = useState(false);

  const { bookingDetails } = useSelector((store: RootState) => store.rides);

  const dispatch = useDispatch<AppDispatch>();

  const handleToggleAmPm = () => {
    if (selectedAmPm == "AM") {
      setSelectedAmPm("PM");
    } else {
      setSelectedAmPm("AM");
    }
  };

  const handleSelectDateTime = () => {
    if (!date) return;

    dispatch(
      updateRideStateValues({
        name: "bookingDetails",
        value: {
          ...bookingDetails,
          schedule_type: "scheduled",
          ride_time: `${selectedHour}:${selectedMinute}:${selectedAmPm}`,
          ride_date: format(date, "d/M/yyyy"),
        },
      })
    );

    setShowDialog(false);
  };

  const handleSelectDateTimeASAP = () => {
    dispatch(
      updateRideStateValues({
        name: "bookingDetails",
        value: {
          ...bookingDetails,
          schedule_type: "asap",
          ride_time: `${hours}:${minutes}:${amPm}`,
          ride_date: format(nowDate, "d/M/yyyy"),
        },
      })
    );

    setShowDialog(false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger className="">
        <Input
          className="w-full cursor-pointer rounded-sm"
          placeholder="Schedule or ASAP"
          value={
            bookingDetails?.ride_date && bookingDetails?.ride_time
              ? `${bookingDetails?.ride_date} ${bookingDetails?.ride_time}`
              : ""
          }
          readOnly
        />
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[60%]">
        <DialogTitle className="hidden">Auth Form</DialogTitle>
        <div className="space-y-[2rem]">
          <div className="grid grid-cols-2 h-[6rem]">
            <Button
              variant={"ghost"}
              onClick={() => {
                setSelectedTab(1);
              }}
              className={cn(
                "w-full h-full rounded-none hover:bg-white",
                selectedTab == 1
                  ? "bg-white text-black "
                  : "bg-gray-300 text-gray-700"
              )}
            >
              <CalenderIcon />
              <span>In the Future</span>
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => {
                setSelectedTab(2);
              }}
              className={cn(
                "w-full h-full rounded-none hover:bg-white",
                selectedTab == 2
                  ? "bg-white text-black "
                  : "bg-gray-300 text-gray-700"
              )}
            >
              <Zap />
              <span>Right now </span>
            </Button>
          </div>

          <div className="p-[3rem]">
            {selectedTab == 1 ? (
              <div className="grid grid-cols-2 gap-[4rem]">
                <div className="space-y-[2rem]">
                  <h4>Select a Pickup Date: </h4>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-[2rem] p-[2rem]"
                  />
                </div>
                <div className="space-y-[2rem]">
                  <h4>Select a Pickup Time: </h4>

                  <div className="flex items-center  gap-8">
                    <div className="flex flex-col gap-4">
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          selectedHour == 23
                            ? setSelectedHour(0)
                            : setSelectedHour(selectedHour + 1)
                        }
                        className="w-[4rem] p-0 grid place-content-center h-[4rem]"
                      >
                        <ChevronUp />
                      </Button>
                      <span className="w-[4rem] p-0 grid place-content-center h-[4rem]">
                        {selectedHour}
                      </span>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          selectedHour == 0
                            ? setSelectedHour(23)
                            : setSelectedHour(selectedHour - 1)
                        }
                        className="w-[4rem] p-0 grid place-content-center h-[4rem]"
                      >
                        <ChevronDown />
                      </Button>
                    </div>
                    <div>:</div>
                    <div className="flex flex-col gap-4">
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          selectedMinute == 59
                            ? setSelectedMinute(0)
                            : setSelectedMinute(selectedMinute + 1)
                        }
                        className="w-[4rem] p-0 grid place-content-center h-[4rem]"
                      >
                        <ChevronUp />
                      </Button>
                      <span className="w-[4rem] p-0 grid place-content-center h-[4rem]">
                        {selectedMinute}
                      </span>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          selectedMinute == 0
                            ? setSelectedMinute(59)
                            : setSelectedMinute(selectedMinute - 1)
                        }
                        className="w-[4rem] p-0 grid place-content-center h-[4rem]"
                      >
                        <ChevronDown />
                      </Button>
                    </div>
                    <div>:</div>
                    <div className="flex flex-col gap-4">
                      <Button
                        onClick={handleToggleAmPm}
                        variant={"ghost"}
                        className="w-[4rem] p-0 grid place-content-center h-[4rem]"
                      >
                        <ChevronUp />
                      </Button>
                      <span className="w-[4rem] p-0 grid place-content-center h-[4rem]">
                        {selectedAmPm}
                      </span>
                      <Button
                        onClick={handleToggleAmPm}
                        variant={"ghost"}
                        className="w-[4rem] p-0 grid place-content-center h-[4rem]"
                      >
                        <ChevronDown />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Button onClick={handleSelectDateTime}>Apply</Button>
                    <Button
                      onClick={() => setShowDialog(false)}
                      className="py-0"
                      variant={"ghost"}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-[2rem] py-[2rem]">
                Select this option if you want to be picked up as soon as
                possible
                <Button onClick={handleSelectDateTimeASAP}>
                  Pick me up ASAP
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DateTimeDialog;
