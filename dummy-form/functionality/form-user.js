let inputs = {
    ids: ['fn', 'sn', 'ln', 'un', 'em', 'pw', 'pc'],
    placeholders: [
      ' e.g.  John', ' e.g.  "Roy"', ' e.g.  McClane', ' e.g.  john-mcclane',
      ' e.g.  john-mcclane@domain.hollywood', ' don\'t make it simple', ' confirm password'
    ]
  },
  inp = [],
  acs = document.getElementById('acs'),
  slct = document.getElementById('slct');
let selOptions = {
  dispatcher: 'Dispatcher',
  safety: 'Safety',
  hr: 'HR',
  ifta: 'IFTA',
  accounting: 'Accounting',
  expense: 'Expense',
};
for (let i = 0; i < inputs.ids.length; i++)
  inp[i] = document.getElementById(inputs.ids[i]);

window.onload = ()=> {
  for (let p = 0; p < inputs.placeholders.length; p++)
    inp[p].setAttribute('placeholder', inputs.placeholders[p]);
  slct.setAttribute('class', 'placeholder');
  let optKeys = Object.keys(selOptions),
      selLen = optKeys.length;
  for (let o = 0; o < selLen; o++) {
    let optEl = document.createElement('option');
    optEl.setAttribute('value', optKeys[o]);
    let optTxtNd = document.createTextNode(selOptions[optKeys[o]]);
    optEl.appendChild(optTxtNd);
    slct.appendChild(optEl);
  }
};

inp[0].addEventListener('input', (e)=> {processName(e, false);});
inp[1].addEventListener('input', (e)=> {processName(e, false, true);});
inp[2].addEventListener('input', (e)=> {processName(e, true);});
inp[3].addEventListener('input', (e)=> {
  let target = e.target,
      value = target.value;
  if (value)
    value = value.toLowerCase()
                   .replace(/[\s`~!@#\$%\^&\*\(\)=\+\[\{\]\}\\\|;:'",<\.>\/\?]/g, '')
                   .slice(0, 12);
  target.value = value;
});
inp[4].addEventListener('blur', (e)=> {
  let target = e.target,
      value = target.value;
  if (value) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(value.toLowerCase())) {
      value = value.toLowerCase();
    } else {
      value = '';
      alert(
        `
          The email address you entered did not pass
          standard email validation test.
          Please try again!
        `
      );
      target.focus();
    }
    target.value = value;
  }
});
acs.addEventListener('click', ()=> {
  if (acs.checked) {
    inp[0].value = processValue(inp[0].value);
    inp[2].value = autoCorrect(processValue(inp[2].value));
  } else {
    alert(
      'PLEASE READ\n' +
      'It is advised to keep Autocorrector active,\n' +
      'unless you noticed it had capitalized non-boundary character\n' +
      'that was supposed to remain in lower case!'
    );
    showAutoCorrectMsg(false);
  }
});
slct.addEventListener('change', ()=> {slct.removeAttribute('class');});
for (let i = 0; i < inputs.ids.length; i++) {
  let el = inp[i];
  el.onfocus = ()=> {
    el.removeAttribute('placeholder');
    let value = el.value,
        vLen = value.length;
    if (vLen) {
      el.setSelectionRange(0, vLen);
    }
  };
  el.onblur = ()=> {
    el.setAttribute('placeholder', inputs.placeholders[i]);
    el.value = el.value.trim();
  };
}

let processName = (e, lastName, pseudo)=> {
  let target = e.target,
      value = target.value,
      processedValue = '';
  if (value) value = value
                       .replace(/[\d`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\\\|;:",<\.>\/\?]/g, '')
                       .replace(/\s+/g, ' ');
  if (acs.checked) {
    if (value) {
      processedValue = processValue(value);
    }
    if (lastName) {
      processedValue = autoCorrect(processedValue);
    }
  } else processedValue = value;
  let q = (pseudo && value) ? '"' : '';
  target.value = q + processedValue + q;
  if (pseudo) {
    let vLen = value.length;
    if (vLen) {
      target.setSelectionRange(vLen + 1, vLen + 1);
    }
  }
}
let processValue = (input)=> {
  if (input) {
    input = input.toLowerCase()
              .replace(/\b[a-z]/g, (fC)=> {return fC.toUpperCase();});
  }
  return input;
}
let autoCorrect = (input)=> {
  if (input) {
    switch (true) {
      case input.slice(0, 2) == 'Mc':
        input = input
                  .replace(/Mc[a-z]/g, (x)=> {return x.toUpperCase().replace(/\bMC/g, 'Mc');});
        showAutoCorrectMsg(true);
        break;
      case input.slice(0, 3) == 'Mac':
        input = input
                  .replace(/Mac[a-z]/g, (x)=> {return x.toUpperCase().replace(/\bMAC/g, 'Mac');});
        showAutoCorrectMsg(true);
        break;
      case input.slice(0, 2) == 'De':
        input = input
                  .replace(/De[a-z]/g, (x)=> {return x.toUpperCase().replace(/\bDE/g, 'De');});
        showAutoCorrectMsg(true);
        break;
      case input.trim() == '':
        showAutoCorrectMsg(false);
        break;
      default: showAutoCorrectMsg(false);
    }
  }
  return input;
}
let showAutoCorrectMsg = (bln)=> {
  let msgCont = document.getElementById('acm'),
      msg = `<span>ONLY</span> if auto capitalization of non-boundary character occured in error,<br>
             unselect Autocorrector option at the top of the form and make corrections in text manually`,
      cont = '';
  if (bln) cont = msg;
  msgCont.innerHTML = cont;
}
