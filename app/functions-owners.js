const periods = ['February 2019', 'March 2019', 'April 2019'],
      effDt = new Date('2019-03-30');
const urls = {
  'CAROLINA LOGISTICS, Inc': {
    id: '70830516181943',
    period1: 'https://docs.google.com/spreadsheets/d/1O0sSWtoj8SByE1dyhsRy2Cg6WXYd2Q-7r9X4xGMsKbE/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1nTPBp1lQM2CjStMzUlHe9i2aD9U2ZQ0oMDi5zksjmF4/edit#gid=1165085359',
    period3: 'https://docs.google.com/spreadsheets/d/1P5a6PUXrKf4wwAt1b6CHRLASynvgI4V51kNajvKGMSo/edit#gid=1165085359',
  },
  'DELTA EXPRESS, Inc': {
    id: '70830515177576',
    period1: 'https://docs.google.com/spreadsheets/d/1UN5CDshgEaziW9VFLIs1jErC7kvj1TcVZNfNo1rB-MA/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1Sp2wmtABSsPFCmy3SHohcYK_YIE2gOrVmI4tq9-pDps/edit#gid=1165085359',
    period3: 'https://docs.google.com/spreadsheets/d/1rJ0Jh62ypF-YuAJFjXPcaD-yZg90CsN2yHtCXSl9SPU/edit#gid=1165085359',
  },
  'DELTA EXPRESS SERVICES, Inc': {
    id: '',
    period1: '-',
    period2: '-',
    period3: '-',
  },
  'DELTA LOGISTICS, Inc': {
    id: '70830517302592',
    period1: 'https://docs.google.com/spreadsheets/d/1cbdhGctbi_0Rd3dTnM4WFEZ14QkmEmbxp_nyyRJTiKM/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1liSGmxnJIpvoa5n3a0ErXfkQlJfwcrpGOghrrZdGEWo/edit#gid=1165085359',
    period3: 'https://docs.google.com/spreadsheets/d/1IREZlVnUSgiYBnl9vyxYbjwgD0nztFkG-5czZd55wEc/edit#gid=1165085359',
  },
  'ONTRACK TRANSPORTATION, Inc': {
    id: '70830517305886',
    period1: 'https://docs.google.com/spreadsheets/d/1FVNvCDFYcUkzCCbTDtfddl6-JNT3nlrS1GWykXJv9tE/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1RpQ06ulIlJcje_3ciVUWrSlVWOK30dJ83DJi-7tImcI/edit#gid=1165085359',
    period3: 'https://docs.google.com/spreadsheets/d/1hplR0OBU_2ebxg4qjs5e8YOJLrpd2q3FUIilOWBu6Vw/edit#gid=1165085359',
  },
  'PRECISE TRANSPORTATION, Inc': {
    id: '70830517302433',
    period1: 'https://docs.google.com/spreadsheets/d/1yt13FktUUqzpgJHyqdnEeUJuaqu0-7oTu8HqamJ_jaA/edit#gid=1165085359',
    period2: 'https://docs.google.com/spreadsheets/d/1gtP3jhq7CEWyaNQgVJqRxIafeNCOqHzdvNoFn_SblE4/edit#gid=1165085359',
    period3: 'https://docs.google.com/spreadsheets/d/19SXcVUxLiY_bbs-T4-x-Wv0pA5vBqVm-v0nzSUHUdlU/edit#gid=1165085359',
  },
  'RAINIER TRANSPORTATION, Inc': {
    id: '', // '70830517307425',
    period1: '-',
    period2: '-',
    period3: '-',
  },
};
const pad = 'style="padding: 14px 24px;"';
let table = '<tr id="hdr"><th ' + pad + '>Company Name</th><th ' + pad + '>Period 1</th><th ' + pad + '>Period 2</th><th ' + pad + '>Period 3</th></tr>',
    keys = Object.keys(urls);
for (let i = 0; i < keys.length; i++) {
  let link1 = urls[keys[i]].period1, link2 = urls[keys[i]].period2, link3 = urls[keys[i]].period3,
      anchor1 = (link1 != '-') ? '<a class="h" target="_blank" href="' + link1 + '" title="' + keys[i] + '">' : '',
      anchor2 = (link2 != '-') ? '<a class="h" target="_blank" href="' + link2 + '" title="' + keys[i] + '">' : '',
      anchor3 = (link3 != '-') ? '<a class="h" target="_blank" href="' + link3 + '" title="' + keys[i] + '">' : '',
      anchName1 = (link1 == '-') ? '' :
                  (link1 != '#') ? periods[0] + '</a>' :
                  '</a>' + periods[0],
      anchName2 = (link2 == '-') ? '' :
                  (link2 != '#') ? periods[1] + '</a>' :
                  '</a>' + periods[1],
      anchName3 = (link3 == '-') ? '' :
                  (link3 != '#' && effDt <= new Date()) ? periods[2] + '</a>' :
                  '</a>' + periods[2];
  let efsKey = urls[keys[i]].id, efsKeyEl;
  let redCl = (!efsKey) ? ' class="redundant"' : '';
  efsKeyEl = (efsKey) ? ' &nbsp<span>' + efsKey + '</span>' : '';
  table += '<tr><th ' + pad + redCl + '>' + keys[i] + efsKeyEl + '</th>';
  table += '<td ' + pad + '>' + anchor1 + anchName1 + '</td><td ' + pad + '>' + anchor2 + anchName2 + '</td><td ' + pad + '>' + anchor3 + anchName3 + '</td></tr>';
}
document.getElementById('omcMon').innerHTML = table;
