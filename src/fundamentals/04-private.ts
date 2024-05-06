export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printDate() {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
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
console.log(myDate.printDate()); // 16/07/1995
