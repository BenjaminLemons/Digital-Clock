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
        const timeDay = this.getWeekDay();
        const dayFormatted = `${timeDay}`;
        const dateFormatted = `${parts.date}`;

        this.element.querySelector(".clocktime").textContent = timeFormatted;
        this.element.querySelector(".clockampm").textContent = amPM;
        this.element.querySelector(".clockday").textContent = dayFormatted;
        this.element.querySelector(".clockdate").textContent = dateFormatted;

        console.log(dayFormatted);

    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes().toString().padStart(2, "0"),
            isAM: now.getHours() < 12,
            day: now.getDay() + 1,
            date: now.getDate()
        };
    }

    getWeekDay() {
        const timeDay = this.getTimeParts();
        let weekDay = "";
        if (timeDay.day == 1) {
            weekDay = "Sunday";
        } else if (timeDay.day == 2) {
            weekDay = "Monday";
        } else if (timeDay.day == 3) {
            weekDay = "Tuesday";
        } else if (timeDay.day == 4) {
            weekDay = "Wednesday";
        } else if (timeDay.day == 5) {
            weekDay = "Thursday";
        } else if (timeDay.day == 6) {
            weekDay = "Friday";
        } else if (timeDay.day == 7) {
            weekDay = "Saturday";
        }
        return weekDay;
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

console.log(clockObject.getTimeParts());

clockObject.start();
