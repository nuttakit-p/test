import { useState, useEffect } from 'react';

interface Props {
  startDate: string;
  endDate: string;
  onExpire?: () => void;
}

const CountdownTimer = ({ startDate, endDate, onExpire }: Props) => {
  // const createDate = new Date(startDate);
  const expireDate = new Date(endDate);

  // const [timeElapsed, setTimeElapsed] = useState<number>((new Date().getTime() - createDate.getTime()) / 1000);
  const [timeLeft, setTimeLeft] = useState<number>((expireDate.getTime() - new Date().getTime()) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      // const newTimeElapsed = (new Date().getTime() - createDate.getTime()) / 1000;
      const newTimeLeft = Math.max(0, (expireDate.getTime() - new Date().getTime()) / 1000);

      // setTimeElapsed(newTimeElapsed);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft === 0) {
        clearInterval(interval);
        onExpire && onExpire();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startDate, endDate]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {/* <h2>Countdown Timer</h2>
      <p>Time elapsed: {formatTime(timeElapsed)}</p> */}
      <span>{timeLeft ? formatTime(timeLeft) : '00.00'}</span>
    </div>
  );
};

export default CountdownTimer;
