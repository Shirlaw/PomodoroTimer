export default function(totalSeconds) {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - minutes * 60;
  if (`${seconds}`.length == 1) seconds = `0${seconds}`;
  return { minutes, seconds };
}
