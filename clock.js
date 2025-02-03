const seondHand = document.getElementsById('second_hand');
const minuteHand = document.getElementsById('minute_hand');
const hourHnad = document.getElementsById('hour_hand');

function ClockTick() {
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minute = (seconds+date.getMinutes())/60;
    const hours = (minutes+date.getHours())/12;

    rotateClockHand(secondHand, seconds);
}