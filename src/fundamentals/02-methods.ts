export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printDate() {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: "day" | "month" | "year") {
    if (type === "day") {
      this.day += amount;
    } else if (type === "month") {
      this.month += amount;
    } else if (type === "year") {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1995, 7, 16);
console.log(myDate.printDate()) // 16/7/1995
