import * as moment from 'moment';

export class DateHelpers {
  public static getCurrentDate(isResultDate = true) {
    return isResultDate ? moment().toDate() : moment().toISOString();
  }

  public static dateToStringFormat(date: Date, format: string) {
    return moment(date).format(format);
  }
}
