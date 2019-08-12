// Weeks

function WeeklySpreadsheet(start, key) {

  this.start = new Date(start);

  this.key = key;

  this.setTitle = () => {
    let end = addDays(this.start, 6);
    let monthsArr = new Months().short;
    return monthsArr[this.start.getMonth()] + ' ' + this.start.getDate() + ' — ' +
           monthsArr[end.getMonth()] + ' ' + end.getDate();
  };

  this.createAnchor = purpose => {
    let title = this.setTitle(), text = '';
    let active = new Date().getTime() >= this.start.getTime();
    let anchor = '<a class="h" target="_blank" href="https://docs.google.com/spreadsheets/d/';
    anchor += this.key + '/edit#gid=';
    switch (purpose) {
      case 'expense': anchor += '914973738'; text = 'URL Collector'; break;
      case 'payroll': anchor += '978213208'; text = 'Payroll Hyperlinks'; break;
    }
    anchor += '" title="' + title + '">' + ((active) ? text + '</a>' : '</a>' + text);
    return anchor;
  };

}


// Assistance

function addDays(date, days) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}
