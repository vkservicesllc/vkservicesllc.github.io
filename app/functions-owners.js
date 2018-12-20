const periods = ['December 2018', 'January 2019'];
const urls = {
  'CAROLINA LOGISTICS, Inc': {
    id: '70830516181943',
    period1: 'https://docs.google.com/spreadsheets/d/1LHkvGzcVTqjcnjTsZhBPhW2Y_OVdsjE0Gmob6ni8GWU/edit#gid=1165085359',
    period2: '#',
  },
  'DELTA EXPRESS, Inc': {
    id: '70830515177576',
    period1: 'https://docs.google.com/spreadsheets/d/1xRLKG4LWLJ9GbFIvkF1UIY9kkXiq4ScAwl7sO1RFCHk/edit#gid=1165085359',
    period2: '#',
  },
  'DELTA LOGISTICS, Inc': {
    id: '70830517302592',
    period1: 'https://docs.google.com/spreadsheets/d/1Wa55QZVf228iss4qS-wmKJYZkS9tOWL_YzAQlJowGuY/edit#gid=1165085359',
    period2: '#',
  },
  'ONTRACK TRANSPORTATION, Inc': {
    id: '70830517305886',
    period1: 'https://docs.google.com/spreadsheets/d/19QlNjRTd2IoXwiuQrw_Rm_GiuozJG0Z5ie_rLfTJVtA/edit#gid=1165085359',
    period2: '#',
  },
  'PRECISE TRANSPORTATION, Inc': {
    id: '70830517302433',
    period1: '#',
    period2: '#',
  },
  'RAINIER TRANSPORTATION, Inc': {
    id: '70830517307425',
    period1: '#',
    period2: '#',
  },
};
const pad = 'style="padding: 14px 45px;"';
let table = '<tr id="hdr"><th ' + pad + '>Company Name</th><th ' + pad + '>Period 1</th><th ' + pad + '>Period 2</th></tr>',
    keys = Object.keys(urls);
for (let i = 0; i < keys.length; i++) {
  let link1 = urls[keys[i]].period1, link2 = urls[keys[i]].period2,
      anchor1 = '<a class="h" target="_blank" href="' + link1 + '" title="' + keys[i] + '">',
      anchor2 = '<a class="h" target="_blank" href="' + link2 + '" title="' + keys[i] + '">',
      anchName1 = (link1 != '#') ? periods[0] + '</a>' : '</a>' + periods[0],
      anchName2 = (link2 != '#') ? periods[1] + '</a>' : '</a>' + periods[1];
  table += '<tr><th ' + pad + '>' + keys[i] + ' &nbsp<span>' + urls[keys[i]].id + '</span></th>';
  table += '<td ' + pad + '>' + anchor1 + anchName1 + '</td><td ' + pad + '>' + anchor2 + anchName2 + '</td></tr>';
}
document.getElementById('omcMon').innerHTML = table;
