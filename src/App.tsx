import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export default function App() {
   return (
      <div className="mx-auto max-w-96 rounded-lg bg-white p-8 shadow-md">
         <h1 className="mb-6 text-center text-2xl font-bold min-[375px]:text-3xl">
            Countdown Timer
         </h1>
         <div className="mb-8 text-center text-5xl font-bold min-[375px]:text-6xl">
            00:00:00
         </div>
         <div className="mb-6 grid grid-cols-3 gap-4">
            <div>
               <Label htmlFor="hours">Hours</Label>
               <Input id="hours" type="number" className="h-10 py-2 text-sm" />
            </div>
            <div>
               <Label htmlFor="minutes">Minutes</Label>
               <Input
                  id="minutes"
                  type="number"
                  className="h-10 py-2 text-sm"
               />
            </div>
            <div>
               <Label htmlFor="seconds">Seconds</Label>
               <Input
                  id="seconds"
                  type="number"
                  className="h-10 py-2 text-sm"
               />
            </div>
         </div>
         <div className="flex items-center justify-between">
            <Button type="button">Start</Button>
            <Button type="button">Pause</Button>
            <Button type="button">Reset</Button>
         </div>
      </div>
   );
}
