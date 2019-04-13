/**
 *  Updated:  2019-04-12
 */
 

/** Formats **/

function Formats() {

  this.auto = '0.###############';
  this.text = '@';
  this.date = {
    reversed: 'yyyy-mm-dd',
    us: 'mm/dd/yyyy',
    intl: 'dd.mm.yyyy',
    month_short: 'mmm d, yyyy',
    month_long: 'mmmm d, yyyy',
  };
  this.dollar = {
    no_text: [
      '$#,##0.00;;;',
      '$#,##0.00;($#,##0.00);;',
      '$#,##0.00;($#,##0.00);$0.00;'
    ],
    text_allowed: [
      '$#,##0.00;;',
      '$#,##0.00;($#,##0.00);',
      '$#,##0.00;($#,##0.00);$0.00'
    ],
  };

}


/** Converters **/

function convertLocalDateToEST(params) {
  /*
   *  arguments:  [params]
   *
   *  paramas  ->  string representing time parameters
   *
   */

  var date;

  if (params != undefined) date = new Date(params);
    else date = new Date;

  return new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));

}

function convertDateToString(date, format) {
  /*
   *  arguments:  date, format
   *
   *  date    ->  date object to convert to string
   *  format  ->  string as date format representation
   *
   */

  var dateStr;

  var yyyy = date.getFullYear(),
      yy = date.getYear(),
      month = date.getMonth(),
      calendarDay = date.getDate(),
      weekDay = date.getDay(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

  var ap_ = /\bam\/pm\b/gi, ap = 'AM';

  if (format.search(ap) > -1 && hours > 12) {
    hours = hours - 12;
    ap = 'PM';
  }

  var months = {
    short: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    long: [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ],
  };

  var weekDays = {
    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    long: [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
  };

  dateStr = format
              .replace(/\byyyy\b/gi, yyyy)
              .replace(/\byy\b/gi, yy)
              .replace(/\bmmmm\b/gi, months.long[month])
              .replace(/\bmmm\b/gi, months.short[month])
              .replace(/\bmm\b/g, ((month + 1) < 10) ? '0' + (month + 1) : month + 1)
              .replace(/\bm\b/gi, month + 1)
              .replace(/\bdddd\b/gi, weekDays.long[weekDay])
              .replace(/\bddd\b/gi, weekDays.short[weekDay])
              .replace(/\bdd\b/gi, (calendarDay < 10) ? '0' + calendarDay : calendarDay)
              .replace(/\bd\b/gi, calendarDay)
              .replace(/\bHH\b/g, (hours < 10) ? '0' + hours : hours)
              .replace(/\bMM\b/g, (minutes < 10) ? '0' + minutes : minutes)
              .replace(/\bSS\b/g, (seconds < 10) ? '0' + seconds : seconds)
              .replace(ap_, ap);;

  return dateStr;

}

function convertDateStringReversedToUS(reversedDateStr) {
  /*
   *  arguments:  reversedDateStr
   *
   *  reversedDateStr  ->  string representing date pattern "yyyy-mm-dd"
   *
   */

  if (
    reversedDateStr && typeof reversedDateStr == 'string' &&
    reversedDateStr.length == 10 &&
    reversedDateStr.search('-') == 4 &&
    reversedDateStr.lastIndexOf('-') == 7
  )
  {
    var d = reversedDateStr.split('-');
    return d[1] + '/' + d[2] + '/' + d[0];
  }

}
