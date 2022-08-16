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
        //var minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${parts.minute}`;
        //const timeFormatted = `${parts.hour}:${parts.minute.toString().padStart(2, "0")}`;
        const amPM = parts.isAm ? 'AM' : "PM";

        this.element.querySelector(".clocktime").textContent = timeFormatted;
        this.element.querySelector(".clockampm").textContent = amPM;

        console.log(timeFormatted);

    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes().toString().padStart(2, "0"),
            //minute: now.getMinutes(),
            isAM: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

console.log(clockObject.getTimeParts());

clockObject.start();
