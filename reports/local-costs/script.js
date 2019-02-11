function getReportFromServer() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      var repObj = JSON.parse(xhr.responseText),
          repKeys = Object.keys(repObj);
      var table = document.getElementById('table'),
          content = '<tr><th>Week</th><th>Total Payroll</th><th>Total Expense</th></tr>';
      for (var i = 0; i < repKeys.length; i++) {
        content += '<tr><th>' + repKeys[i] + '</th>';
        content += '<td>' + repObj[repKeys[i]].payroll.total + '</td>';
        content += '<td>' + repObj[repKeys[i]].expense.total + '</td></tr>'
      }
      table.innerHTML = content;
    }
  }
  xhr.open('GET', 'Report.json', true);
  xhr.send();
}
