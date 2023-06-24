import styles from './Timer.module.scss';

const Timer = ({ time }) => {
    const timerFormat = (milliseconds) => {
        let hours = Math.floor(milliseconds / (1000*60*60));
        let minutes = Math.floor((milliseconds % (1000*60*60)) / (1000*60));
        let seconds = Math.floor((milliseconds % (1000*60)) / (1000));
        let millisecondsRest = milliseconds % 1000;

        return ( 
            `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${millisecondsRest.toString().padStart(1, "0")}`
            );
    };

    return ( 
        <div className={styles.timer}>{timerFormat(time)}</div>
    );
};

export default Timer;