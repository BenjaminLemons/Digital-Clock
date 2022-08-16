class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const timeFormatted = `${parts.hour}:${parts.minute}`;
        const amPM = parts.isAm ? 'AM' : "PM";
        const dayFormatted = `${parts.days}`;
        const dateFormatted = `${parts.date}`;
        //const monthFormatted = `${parts.months}`;

        this.element.querySelector(".clocktime").textContent = timeFormatted;
        this.element.querySelector(".clockampm").textContent = amPM;
        this.element.querySelector(".clockday").textContent = dayFormatted;
        this.element.querySelector(".clockdate").textContent = dateFormatted;


        console.log();

    }

    getTimeParts() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
        const weekDay = days[now.getDay()];
        const timeMonth = months[now.getMonth()];

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes().toString().padStart(2, "0"),
            isAM: now.getHours() < 12,
            days: weekDay,
            months: timeMonth,
            date: now.getDate()
        };
    }

}



const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

console.log(clockObject.getTimeParts());

clockObject.start();
