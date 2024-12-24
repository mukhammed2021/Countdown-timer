import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export default function App() {
   // this component remembers "time" object
   const [time, setTime] = useState({
      hours: 0,
      minutes: 0,
      seconds: 0,
   });
   const [inputTime, setInputTime] = useState({
      hours: 0,
      minutes: 0,
      seconds: 0,
   });
   const [isTicking, setIsTicking] = useState(false);

   useEffect(() => {
      let intervalId: NodeJS.Timeout;

      if (isTicking) {
         intervalId = setInterval(() => {
            setTime((t) => {
               if (t.hours === 0 && t.minutes === 0 && t.seconds === 0) {
                  setIsTicking(false);
               }

               return {
                  ...t,
                  seconds: t.seconds - 1,
               };
            });
         }, 1000);
      }
      return () => clearInterval(intervalId); // прочитать про cleanup function
   }, [isTicking]);

   function handleHoursChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputTime({ ...inputTime, hours: +e.target.value });
   }

   function handleMinutesChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputTime({ ...inputTime, minutes: +e.target.value });
   }

   function handleSecondsChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputTime({ ...inputTime, seconds: +e.target.value });
   }

   function handleStartClick() {
      setIsTicking(true);
      setTime(inputTime);
   }

   function handleResetClick() {
      setInputTime({
         hours: 0,
         minutes: 0,
         seconds: 0,
      });
      setTime({
         hours: 0,
         minutes: 0,
         seconds: 0,
      });
      setIsTicking(false);
   }

   function handlePauseClick() {
      setIsTicking(false);
   }

   return (
      <div className="mx-auto max-w-96 rounded-lg bg-white p-8 shadow-md">
         <h1 className="mb-6 text-center text-2xl font-bold min-[375px]:text-3xl">
            Countdown Timer
         </h1>
         <div className="mb-8 text-center text-5xl font-bold min-[375px]:text-6xl">
            {time.hours.toString().padStart(2, "0")}:
            {time.minutes.toString().padStart(2, "0")}:
            {time.seconds.toString().padStart(2, "0")}
         </div>
         <div className="mb-6 grid grid-cols-3 gap-4">
            <div>
               <Label htmlFor="hours">Hours</Label>
               <Input
                  id="hours"
                  type="number"
                  min={0}
                  max={23}
                  value={inputTime.hours}
                  onChange={handleHoursChange}
                  className="h-10 py-2 text-sm"
               />
            </div>
            <div>
               <Label htmlFor="minutes">Minutes</Label>
               <Input
                  id="minutes"
                  type="number"
                  min={0}
                  max={59}
                  value={inputTime.minutes}
                  onChange={handleMinutesChange}
                  className="h-10 py-2 text-sm"
               />
            </div>
            <div>
               <Label htmlFor="seconds">Seconds</Label>
               <Input
                  id="seconds"
                  type="number"
                  min={0}
                  max={59}
                  value={inputTime.seconds}
                  onChange={handleSecondsChange}
                  className="h-10 py-2 text-sm"
               />
            </div>
         </div>
         <div className="flex items-center justify-between">
            <Button
               type="button"
               disabled={isTicking}
               onClick={handleStartClick}
            >
               Start
            </Button>
            <Button
               type="button"
               disabled={!isTicking}
               onClick={handlePauseClick}
            >
               Pause
            </Button>
            <Button type="button" onClick={handleResetClick}>
               Reset
            </Button>
         </div>
      </div>
   );
}
