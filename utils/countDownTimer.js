import dayjs from "dayjs";

const getRemainingDays = (nowDayjs, timestampDayjs) => {
  const days = timestampDayjs.diff(nowDayjs, "days");
  return days.toString();
};

const addZeros = (time, minLength) => {
  const timeString = time.toString();
  if (timeString.length >= minLength) return timeString;
  return "0".repeat(minLength - timeString.length) + timeString;
};

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  return addZeros(seconds, 2);
};
const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  return addZeros(minutes, 2);
};
const getRemainingHours = (nowDayjs, timestampDayjs) => {
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
  return addZeros(hours, 2);
};

export default function getRemainingTime(timestamp) {
  const timestampDayjs = dayjs(timestamp);
  const nowDayjs = dayjs();
  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}
