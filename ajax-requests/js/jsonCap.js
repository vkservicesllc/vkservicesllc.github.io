function captureJSON() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      var div = document.getElementById('capturedJSON'),
          content = '',
          respObj = JSON.parse(xhr.responseText),
          len = respObj.length,
          i;
      console.log(xhr.responseText);
      content += '<table><tr><th>Company</th>';
      content += '<th>First Name</th><th>Last Name</th><th>Title</th></tr>';
      for (i = 0; i < len; i++) {
        content += '<tr><td>' + respObj[i].Company + '</td>';
        content += '<td>' + respObj[i]['First Name'] + '</td>';
        content += '<td>' + respObj[i]['Last Name'] + '</td>';
        content += '<td>' + respObj[i].Title + '</td></tr>';
        if (i == len) content += '</table>';
      }
      if (div.innerHTML != '') content = '';
      div.innerHTML = content;
    } else {
      console.log('Connection to Server succeeded. Content was not received due to error.');
    }
  };
  xhr.open('GET', '../files/jsonData.json', true);
  xhr.send();
}
