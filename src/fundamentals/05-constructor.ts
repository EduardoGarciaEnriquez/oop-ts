export class MyDate {
  constructor(
    private year: number = 1995,
    private month: number = 10,
    private day: number = 27
  ) {}

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

const myDate = new MyDate();
console.log(myDate.printDate()); // 27/10/1995
