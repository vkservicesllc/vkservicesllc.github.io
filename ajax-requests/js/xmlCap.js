
console.log('xmlCap.js has loaded...');

function captureXML() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var btn = document.getElementsByTagName('button')[1],
        btnTxt = btn.textContent,
        div = document.getElementById('capturedXML'),
        content = '',
        check = div.innerHTML == content;
    if (check) {
      if (xhr.status >= 200 && xhr.status < 400) {
        var data = xhr.responseXML.getElementsByTagName('expense');
        content += '<table><tr><th colspan="3">COMPANY EXPENSE</th></tr>';
        content += '<tr><th>Category</th><th>Group</th>File<br>for<br>Tax</th></tr>';
        for (var d = 0; d < data.length; d++) {
          var checked = (data[d].childNodes[2].textContent == 'true') ? ' checked' : '';
          content += '<tr><td>' + data[d].childNodes[0].textContent + '</td>';
          content += '<td>' + data[d].childNodes[1].textContent + '</td>';
          content += '<td><input type="checkbox"' + checked + '></td></tr>';
        }
        content += '</table>';
        btnTxt = btnTxt.replace('capture', 'hide');
      } else {
        console.log('Connection to Server succeeded. Content was not received due to error.');
      }
    } else {
      btnTxt = btnTxt.replace('hide', 'capture');
    }
    div.innerHTML = content;
    btn.textContent = btnTxt;
  };
  xhr.open('GET', 'files/xmlData.xml', true);
  xhr.send();
}
