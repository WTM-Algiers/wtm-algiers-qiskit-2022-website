import { useState, useEffect } from 'react';
import getRemainingTime from '../../utils/countDownTimer'
import CounterAtom from "./CounterAtom";
const CounterContainer = ({ countDownLimit }) => {
    const defaultRemainingTime = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    }
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTime(countdown))
    }
    useEffect(() => {
        const timer = setInterval(() => {
            updateRemainingTime(countDownLimit)
        }, 1000)

        return () => clearInterval(timer)
    }, [countDownLimit])
  return (
    <div className="flex justify-center grow mt-12 lg:mt-0">
      <div className="flex items-center gap-12 lg:gap-8 lg:flex-row 2xl:gap-24">
        <CounterAtom time="Days" timeleft={remainingTime.days}/>
        <CounterAtom time="Hrs" timeleft={remainingTime.hours}/>
        <CounterAtom time="Mins" timeleft={remainingTime.minutes}/>
        <CounterAtom time="Secs" isHidden={true} timeleft={remainingTime.seconds}/>
      </div>
    </div>
  );
};

export default CounterContainer;
