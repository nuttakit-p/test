import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const checkExpiration = (createDate: string | number | Date, expireDate: string | number | Date) => {
  const currentTime = new Date();
  const createDateTime = new Date(createDate);
  const expireDateTime = new Date(expireDate);

  if (currentTime >= createDateTime && currentTime <= expireDateTime) {
    return 'Active';
  } else if (currentTime > expireDateTime) {
    return 'Expired';
  } else {
    return 'NotYetActive';
  }
};

const timeZoneText = () => {
  const currentTimezone = dayjs.tz.guess();
  return currentTimezone;
};

const time = {
  checkExpiration,
  timeZoneText,
};

export default time;
