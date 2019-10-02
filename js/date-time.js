const date_time = id => {

  let date = new Date;

  date = new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));

  let year = date.getFullYear(),
      month = date.getMonth(),
      months = new Months().short,
      d = date.getDate(),
      day = date.getDay(),
      days = new WeekDays().short,
      h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  result = days[day] + '&nbsp&nbsp&nbsp' +
           months[month] + ' ' + d + ', ' +
           year + '&nbsp&nbsp&nbsp' + h + ':' + m + ':' + s +
           '<span style="font-style: oblique;">US Eastern Standard Time</span>';

  $(`#${id}`).html(result);

  setTimeout('date_time("' + id + '");', 1000);

  return true;

};

function WeekDays() {

  this.short = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

}

function Months() {

  this.short = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

}
