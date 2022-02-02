import { Typography } from "@mui/material";

const children = ({ remainingTime }) => {
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

const renderTime = ({ remainingTime }) => {
  return (
    <Typography variant="h4">{children({ remainingTime })}</Typography>
  );
}

const playSound = () => {
  const stopGong = new Audio('/stop_gong.mp3');
  stopGong.play();
}

export { renderTime, playSound };
