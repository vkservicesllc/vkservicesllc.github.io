console.log('jsonCap.js has loaded...');

function captureJSON() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var btn = document.getElementsByTagName('button')[0],
        btnTxt = btn.textContent,
        div = document.getElementById('capturedJSON'),
        content = '',
        check = div.innerHTML == content;
    if (check) {
      if (xhr.status >= 200 && xhr.status < 400) {
        var respObj = JSON.parse(xhr.responseText),
            len = respObj.length,
            i;
        content += '<table><tr><th>Company</th>';
        content += '<th>First Name</th><th>Last Name</th><th>Title</th></tr>';
        for (i = 0; i < len; i++) {
          content += '<tr><td>' + respObj[i].Company + '</td>';
          content += '<td>' + respObj[i]['First Name'] + '</td>';
          content += '<td>' + respObj[i]['Last Name'] + '</td>';
          content += '<td>' + respObj[i].Title + '</td></tr>';
          if (i == len) content += '</table>';
        }
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
  xhr.open('GET', 'files/jsonData.json', true);
  xhr.send();
}
