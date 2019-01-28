const periods = ['December 2018', 'January 2019'],
      effDt = new Date('2018-12-29');
const urls = {
  'CAROLINA LOGISTICS, Inc': {
    id: '70830516181943',
    period1: '#',
    period2: 'https://docs.google.com/spreadsheets/d/1Yz7-XCIduFjAkC0viz6Vyb4YivWlkLe92VGR45hgdPU/edit#gid=1165085359',
  },
  'DELTA EXPRESS, Inc': {
    id: '70830515177576',
    period1: '#',
    period2: 'https://docs.google.com/spreadsheets/d/1m20SlaOddjd449cbF6SpdC7k5x-ZCB4WZ6U_loi6pMo/edit#gid=1165085359',
  },
  'DELTA LOGISTICS, Inc': {
    id: '70830517302592',
    period1: '#',
    period2: 'https://docs.google.com/spreadsheets/d/1vTfiX18K4Rb0sffwyDo2Y62Tms6XnLRB6TV1Fnzh4cE/edit#gid=1165085359',
  },
  'ONTRACK TRANSPORTATION, Inc': {
    id: '70830517305886',
    period1: '#',
    period2: 'https://docs.google.com/spreadsheets/d/1tqb5F5jq-95UV_yCHW4jJbxv83tM6BqaTwyb2EyjNcM/edit#gid=1165085359',
  },
  'PRECISE TRANSPORTATION, Inc': {
    id: '70830517302433',
    period1: '#',
    period2: 'https://docs.google.com/spreadsheets/d/1ROBjlyWa0eVmYcX-0_FEYJ0sYTMv7pBd-1Bl1O0PjD8/edit#gid=1165085359',
  },
  'RAINIER TRANSPORTATION, Inc': {
    id: '70830517307425',
    period1: '-',
    period2: '-',
  },
};
const pad = 'style="padding: 14px 45px;"';
let table = '<tr id="hdr"><th ' + pad + '>Company Name</th><th ' + pad + '>Period 1</th><th ' + pad + '>Period 2</th></tr>',
    keys = Object.keys(urls);
for (let i = 0; i < keys.length; i++) {
  let link1 = urls[keys[i]].period1, link2 = urls[keys[i]].period2,
      anchor1 = (link1 != '-') ? '<a class="h" target="_blank" href="' + link1 + '" title="' + keys[i] + '">' : '',
      anchor2 = (link2 != '-') ? '<a class="h" target="_blank" href="' + link2 + '" title="' + keys[i] + '">' : '',
      anchName1 = (link1 == '-') ? '' :
                  (link1 != '#') ? periods[0] + '</a>' :
                  '</a>' + periods[0],
      anchName2 = (link2 == '-') ? '' :
                  (link2 != '#' && effDt <= new Date()) ? periods[1] + '</a>' :
                  '</a>' + periods[1];
  table += '<tr><th ' + pad + '>' + keys[i] + ' &nbsp<span>' + urls[keys[i]].id + '</span></th>';
  table += '<td ' + pad + '>' + anchor1 + anchName1 + '</td><td ' + pad + '>' + anchor2 + anchName2 + '</td></tr>';
}
document.getElementById('omcMon').innerHTML = table;
