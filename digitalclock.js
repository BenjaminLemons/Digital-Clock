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
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${parts.minuteFormatted}`;
        const amPM = parts.isAm ? 'AM' : "PM";

        this.element.querySelector(".clocktime").textContent = timeFormatted;
        this.element.querySelector(".clockampm").textContent = amPM;

    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAM: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

console.log(clockObject.getTimeParts());

clockObject.start();
