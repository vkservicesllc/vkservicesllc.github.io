
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
        var data = xhr.responseXML;
        
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
  xhr.open('GET', 'files/xmlData.xml', true);
  xhr.send();
}
