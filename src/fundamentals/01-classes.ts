const date = new Date();
const date2 = new Date(1995, 1, 12); //year month day

export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1995, 7, 16)
