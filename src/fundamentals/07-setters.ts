export class MyDate {
  constructor(
    private _year: number = 1995,
    private _month: number = 10,
    private _day: number = 27
  ) {}

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printDate() {
    const _day = this.addPadding(this._day);
    const _month = this.addPadding(this._month);
    return `${_day}/${_month}/${this._year}`;
  }

  add(amount: number, type: "_day" | "_month" | "year") {
    if (type === "_day") {
      this._day += amount;
    } else if (type === "_month") {
      this._month += amount;
    } else if (type === "year") {
      this._year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error("Month out of range.");
    }
  }
}

const myDate = new MyDate();
console.log(myDate.printDate()); // 27/10/1995
console.log(myDate.day);
myDate.month = 23; //error
console.log("is 1995 leap? ", myDate.isLeapYear); //should not display.
