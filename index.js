"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timerDivSet() {
    return document
      .querySelector(this.selector)
      .querySelectorAll("span[data-value]");
  }

  myTime(time) {
    const fullTime = {};
    fullTime.days = Math.floor(time / (1000 * 60 * 60 * 24));
    fullTime.hours = this.addZero(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    fullTime.mins = this.addZero(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    fullTime.secs = this.addZero(Math.floor((time % (1000 * 60)) / 1000));
    return fullTime;
  }

  changeMarkup() {
    const restTime = this.targetDate - new Date();
    this.timerDivSet().forEach((element) => {
      element.textContent = this.myTime(restTime)[element.dataset.value];
    });
  }

  addZero(num) {
    return String(num).padStart(2, "0");
  }
}

const myCounter = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020"),
});

const intervalId = setInterval(myCounter.changeMarkup.bind(myCounter), 1000);
