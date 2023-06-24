import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);
  
  const handleStart = () => {
    if(!timerRunning) {
      setTimerRunning(true);
      setTimer(setInterval( () => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
      );
    }
  };

  const handleStop = () => {
    if(timerRunning) {
      setTimerRunning(false);
      clearInterval(timer);
    }
  };

  const handleReset = () => {
    setTimerRunning(false);
    setTime(0);
  };
  
  return (
    <div>
      <Timer time={time} />
      <Button action={handleStart}>Start</Button>
      <Button action={handleStop}>Stop</Button>
      <Button action={handleReset}>Reset</Button>
    </div>
  );
};

export default App;