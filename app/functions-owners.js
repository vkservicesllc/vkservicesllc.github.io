const periods = ['June 2019', 'July 2019'],
      effDt = new Date('2019-06-30');

const urls = {

  'CAROLINA LOGISTICS, Inc': {
    id: '70830516181943',
    period1: 'https://docs.google.com/spreadsheets/d/1gqNfRc4hBw56rBdUB4r5h4qlGI9IsMaMUNgH7etshtg/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1r4kELYN33dsoxD6IGcivMsFGKSP5Qebci0iR8fMGOsI/edit#gid=1165085359',
  },
  'DELTA EXPRESS, Inc': {
    id: '70830515177576',
    period1: 'https://docs.google.com/spreadsheets/d/1bQY3-NRQvNb2W9kafbWUvPQT3gf8r9vxX3pQnUhXhtE/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/12GULr80IX1HED0_ccG7fkaT4YZb_nrZKfGGDd5Vjy1U/edit#gid=1165085359',
  },
  'DELTA LOGISTICS, Inc': {
    id: '70830517302592',
    period1: 'https://docs.google.com/spreadsheets/d/11rmcFKPupWLdAWyp37EfX1h4hrLsAYfvccc1Td37-50/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1emjsj1mO4LqvKSBkWjWQQNmpQcrJQJauYsHW-0n7BT4/edit#gid=1165085359',
  },
  'ONTRACK TRANSPORTATION, Inc': {
    id: '70830517305886',
    period1: 'https://docs.google.com/spreadsheets/d/1Ee2hI9I9Tf_5HI9mlCspFePXols8ZPTGOHq5ZgSP5sw/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1QyFoBuVNdVvXiCqsiRF9vAg4Wzph0q6NwhgrNpfcqA4/edit#gid=1165085359',
  },
  'PRECISE TRANSPORTATION, Inc': {
    id: '70830517302433',
    period1: 'https://docs.google.com/spreadsheets/d/1RffsT0hXXmVUvBfWL1F6QH9FbZJ7r8LaJFN4idjHKG4/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/11Hq6FpGAY8LTsdMgOiLjZJl2dwEa97A0eHpu1UNEEog/edit#gid=1165085359',
  },
  // 'ALPHA EXPRESS, LLC': {
  //   id: '',
  //   period1: '-',
  //   period2: '-',
  // },
  'DELTA EXPRESS SERVICES, Inc': {
    id: '',
    period1: '-',
    period2: '-',
  },
  // 'HUGO HUNTER, INC': {
  //   id: '',
  //   period1: '-',
  //   period2: '-',
  // },
  'RAINIER TRANSPORTATION, Inc': {
    id: '', // '70830517307425',
    period1: '-',
    period2: '-',
  },

};

const pad = 'style="padding: 12px 54px;"';
let table = '<tr id="hdr"><th ' + pad + '>Company Name</th><th ' + pad + '>Period 1</th><th ' + pad + '>Period 2</th></tr>',
    keys = Object.keys(urls);

for (let i = 0; i < keys.length; i++) {

  let link1 = urls[keys[i]].period1, link2 = urls[keys[i]].period2, // link3 = urls[keys[i]].period3, link4 = urls[keys[i]].period4,
      anchor1 = (link1 != '-') ? '<a class="h" target="_blank" href="' + link1 + '" title="' + keys[i] + '">' : '',
      anchor2 = (link2 != '-') ? '<a class="h" target="_blank" href="' + link2 + '" title="' + keys[i] + '">' : '',
      // anchor3 = (link3 != '-') ? '<a class="h" target="_blank" href="' + link3 + '" title="' + keys[i] + '">' : '',
      // anchor4 = (link4 != '-') ? '<a class="h" target="_blank" href="' + link4 + '" title="' + keys[i] + '">' : '',
      anchName1 = (link1 == '-') ? '' :
                  (link1 != '#') ? periods[0] + '</a>' :
                  '</a>' + periods[0],
      anchName2 = (link2 == '-') ? '' :
                  (link2 != '#' && effDt <= new Date()) ? periods[1] + '</a>' :
                  '</a>' + periods[1];
      // anchName3 = (link3 == '-') ? '' :
      //             (link3 != '#') ? periods[2] + '</a>' :
      //             '</a>' + periods[2];
      // anchName4 = (link4 == '-') ? '' :
      //             (link4 != '#' && effDt <= new Date()) ? periods[3] + '</a>' :
      //             '</a>' + periods[3];

  let efsKey = urls[keys[i]].id, efsKeyEl;
  let redCl = (!efsKey) ? ' class="redundant"' : '';

  efsKeyEl = (efsKey) ? ' &nbsp<span>' + efsKey + '</span>' : '';

  table += '<tr><th ' + pad + redCl + '>' + keys[i] + efsKeyEl + '</th>';

  table += '<td ' + pad + '>' + anchor1 + anchName1 + '</td><td ' + pad + '>' + anchor2 + anchName2 +
           /* '</td><td ' + pad + '>' + anchor3 + anchName3 + '</td><td ' + pad + '>' + anchor4 + anchName4 + */ '</td></tr>';

}

document.getElementById('omcMon').innerHTML = table;
