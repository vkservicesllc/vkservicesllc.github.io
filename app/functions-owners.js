const periods = ['Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019'],
      effDt = new Date('2019-04-30');

const urls = {
  'CAROLINA LOGISTICS, Inc': {
    id: '70830516181943',
    period1: '-',
    period2: '-',
    period3: 'https://docs.google.com/spreadsheets/d/1P5a6PUXrKf4wwAt1b6CHRLASynvgI4V51kNajvKGMSo/edit#gid=1165085359',
    period4: 'https://docs.google.com/spreadsheets/d/1eOC7f-ALEn-eCHeQOzljTIWCyo14wYs8Yi2jck54g8c/edit#gid=1165085359',
  },
  'DELTA EXPRESS, Inc': {
    id: '70830515177576',
    period1: 'https://docs.google.com/spreadsheets/d/1UN5CDshgEaziW9VFLIs1jErC7kvj1TcVZNfNo1rB-MA/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1Sp2wmtABSsPFCmy3SHohcYK_YIE2gOrVmI4tq9-pDps/edit#gid=1165085359',
    period3: 'https://docs.google.com/spreadsheets/d/1rJ0Jh62ypF-YuAJFjXPcaD-yZg90CsN2yHtCXSl9SPU/edit#gid=1165085359',
    period4: 'https://docs.google.com/spreadsheets/d/11iGHHoD4O0iIuj7A81QSC11QeLdT9bpvzo9HYlwcULk/edit#gid=1165085359',
  },
  'DELTA EXPRESS SERVICES, Inc': {
    id: '',
    period1: '-',
    period2: '-',
    period3: '-',
    period4: '-',
  },
  'DELTA LOGISTICS, Inc': {
    id: '70830517302592',
    period1: '-',
    period2: '-',
    period3: 'https://docs.google.com/spreadsheets/d/1IREZlVnUSgiYBnl9vyxYbjwgD0nztFkG-5czZd55wEc/edit#gid=1165085359',
    period4: 'https://docs.google.com/spreadsheets/d/1ofOIvCJIHIGO6plEsJZRrS4j2i1RX_odKNM82wqk15E/edit#gid=1165085359',
  },
  'ONTRACK TRANSPORTATION, Inc': {
    id: '70830517305886',
    period1: '-',
    period2: '-',
    period3: 'https://docs.google.com/spreadsheets/d/1hplR0OBU_2ebxg4qjs5e8YOJLrpd2q3FUIilOWBu6Vw/edit#gid=1165085359',
    period4: 'https://docs.google.com/spreadsheets/d/1eAKLPA9e9wNgrOBob4ZQ-BO98a4sWsNkDDYPV2aneVA/edit#gid=1165085359',
  },
  'PRECISE TRANSPORTATION, Inc': {
    id: '70830517302433',
    period1: '-',
    period2: 'https://docs.google.com/spreadsheets/d/1gtP3jhq7CEWyaNQgVJqRxIafeNCOqHzdvNoFn_SblE4/edit#gid=1165085359',
    period3: 'https://docs.google.com/spreadsheets/d/19SXcVUxLiY_bbs-T4-x-Wv0pA5vBqVm-v0nzSUHUdlU/edit#gid=1165085359',
    period4: 'https://docs.google.com/spreadsheets/d/1bN-anabHpj8wU6h6FvErexG6BCiW-Mg_Cw5euaMuOag/edit#gid=1165085359',
  },
  'RAINIER TRANSPORTATION, Inc': {
    id: '', // '70830517307425',
    period1: '-',
    period2: '-',
    period3: '-',
    period4: '-',
  },
};

const pad = 'style="padding: 12px 18px;"';
let table = '<tr id="hdr"><th ' + pad + '>Company Name</th><th ' + pad + '>Period 1</th><th ' + pad + '>Period 2</th><th ' + pad + '>Period 3</th><th ' + pad + '>Period 4</th></tr>',
    keys = Object.keys(urls);

for (let i = 0; i < keys.length; i++) {

  let link1 = urls[keys[i]].period1, link2 = urls[keys[i]].period2, link3 = urls[keys[i]].period3, link4 = urls[keys[i]].period4,
      anchor1 = (link1 != '-') ? '<a class="h" target="_blank" href="' + link1 + '" title="' + keys[i] + '">' : '',
      anchor2 = (link2 != '-') ? '<a class="h" target="_blank" href="' + link2 + '" title="' + keys[i] + '">' : '',
      anchor3 = (link3 != '-') ? '<a class="h" target="_blank" href="' + link3 + '" title="' + keys[i] + '">' : '',
      anchor4 = (link4 != '-') ? '<a class="h" target="_blank" href="' + link4 + '" title="' + keys[i] + '">' : '',
      anchName1 = (link1 == '-') ? '' :
                  (link1 != '#') ? periods[0] + '</a>' :
                  '</a>' + periods[0],
      anchName2 = (link2 == '-') ? '' :
                  (link2 != '#') ? periods[1] + '</a>' :
                  '</a>' + periods[1],
      anchName3 = (link3 == '-') ? '' :
                  (link3 != '#') ? periods[2] + '</a>' :
                  '</a>' + periods[2],
      anchName4 = (link4 == '-') ? '' :
                  (link4 != '#' && effDt <= new Date()) ? periods[3] + '</a>' :
                  '</a>' + periods[3];

  let efsKey = urls[keys[i]].id, efsKeyEl;
  let redCl = (!efsKey) ? ' class="redundant"' : '';

  efsKeyEl = (efsKey) ? ' &nbsp<span>' + efsKey + '</span>' : '';

  table += '<tr><th ' + pad + redCl + '>' + keys[i] + efsKeyEl + '</th>';

  table += '<td ' + pad + '>' + anchor1 + anchName1 + '</td><td ' + pad + '>' + anchor2 + anchName2 +
           '</td><td ' + pad + '>' + anchor3 + anchName3 + '</td><td ' + pad + '>' + anchor4 + anchName4 + '</td></tr>';

}

document.getElementById('omcMon').innerHTML = table;
