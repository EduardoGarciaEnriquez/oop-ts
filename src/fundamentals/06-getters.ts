export class MyDate {
  constructor(
    private year: number = 1995,
    private month: number = 10,
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
    const month = this.addPadding(this.month);
    return `${_day}/${month}/${this.year}`;
  }

  add(amount: number, type: "_day" | "month" | "year") {
    if (type === "_day") {
      this._day += amount;
    } else if (type === "month") {
      this.month += amount;
    } else if (type === "year") {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true
    if(this.year % 100 === 0) return false
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate();
console.log(myDate.printDate()); // 27/10/1995
console.log(myDate.day)
console.log('is 1995 leap? ', myDate.isLeapYear)
