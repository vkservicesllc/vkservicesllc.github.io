$(document).ready( () => {

  const ss = weeklySpreadsheets;
  var list = '',
      uno = '<th>CAROLINA LOGISTIC &nbsp<span>70830515178332</span></th>',
      dos = '<th>CAROLINA TRANSPORTATION &nbsp<span>70830515178290</span></th>',
      tres = '<th>DELTA EXPRESS &nbsp<span>70830515177576</span></th>',
      keys = Object.keys(monthlySpreadsheets);


  for (var i = 2; i < 9; i++) {

    if (!ss.length || i == ss.length) break;

    list += '<li><a class="h" target="_blank" href="';
    list += 'https://docs.google.com/spreadsheets/d/' + ss[i].key;
    list += '/edit#gid=1250765514">' + ss[i].setTitle() + '</a></li>'

  }

  list = list.concat(
    '<li><a class="h" target="_blank" ' +
    'title="Open Google Drive folder' + String.fromCharCode(10) +
    'containing all weeks' + String.fromCharCode(10) +
    'starting Dec 10, 2017" ' +
    ' href="https://drive.google.com/drive/folders/1MfNPealueJQJKTeV_J9iu9vCQr6qGPn1">' +
    '<span>... Entire History</span></a></li>'
  );

  uno = extend(uno, 'CL', 'Carolina Logistic, Inc');
  dos = extend(dos, 'CT', 'Carolina Transportation, Inc');
  tres = extend(tres, 'DE', 'Delta Express, Inc');


  $('#tH').html(ss[0].setTitle());
  $('#tC').html(ss[0].createAnchor('expense'));
  $('#tL').html(ss[0].createAnchor('payroll'));

  $('#bH').html(ss[1].setTitle());
  $('#bC').html(ss[1].createAnchor('expense'));
  $('#bL').html(ss[1].createAnchor('payroll'));

  $('#hist').html(list);

  $('#uno').html(uno);
  $('#dos').html(dos);
  $('#tres').html(tres);

  $('#repD').html(createRepD());


  function extend(row, key, title) {

    var obj1 = monthlySpreadsheets[keys[1]],
        obj2 = monthlySpreadsheets[keys[0]],
        mon1 = keys[1].split('-')[1],
        mon2 = keys[0].split('-')[1],
        now = new Date,
        date = new Date(mon2 + ' 1, ' + keys[1].split('-')[0]),
        active = now >= date,
        user1 = '<span>Helen</span>',
        user2 = '<span>Joyce</span>';

    const dropCardAnchor = (cardArr, mon, shouldUseActive) => {

      if (cardArr[0]) {

        let anchorHtml = '<a class="h" target="_blank" title="' + title +
                         '" href="https://docs.google.com/spreadsheets/d/' + cardArr[0];

        row += '<em>' + anchorHtml + '/edit#gid=686342087">';
        row += (((shouldUseActive) ? active : true) && cardArr[1]) ? mon + '</a>' : '</a>' + mon;
        row += '</em>&nbsp;&nbsp;&nbsp;';

        row += anchorHtml + '/edit#gid=1995296890">';
        row += (((shouldUseActive) ? active : true) && cardArr[2]) ? user1 + '</a>' : '</a>' + user1;

        row += '&nbsp;';

        row += anchorHtml + '/edit#gid=2117669368">';
        row += (((shouldUseActive) ? active : true) && cardArr[3]) ? user2 + '</a>' : '</a>' + user2;

      }

    };

    const dropMcAnchor = (mcArr, mon, shouldUseActive) => {

      if (mcArr[0]) {

        row += '<a class="h" target="_blank" title="' + title;
        row += '" href="https://docs.google.com/spreadsheets/d/' + mcArr[0];
        row += '/edit#gid=1165085359">';

        row += (((shouldUseActive) ? active : true) && mcArr[1]) ? mon + '</a>' : '</a>' + mon;

      }

    }

    row += '<td>'; dropCardAnchor(obj1.cards[key], mon1); row += '</td>';
    row += '<td>'; dropCardAnchor(obj2.cards[key], mon2, true); row += '</td>';

    row += '<td>'; dropMcAnchor(obj1.money_codes[key], mon1); row += '</td>';
    row += '<td>'; dropMcAnchor(obj2.money_codes[key], mon2, true); row += '</td>';

    return row;

  }

  function createRepD() {

    var el = 'Reporting Drivers',
        mon1 = keys[0].split('-')[1],
        mon2 = keys[1].split('-')[1],
        now = new Date,
        date = new Date(mon1 + ' 1, ' + keys[1].split('-')[0]),
        showNew = now >= date,
        id = (showNew) ? monthlySpreadsheets[keys[0]].repTabId : monthlySpreadsheets[keys[1]].repTabId,
        mon = '<span>' + ((showNew) ? mon1 : mon2) + '<span>';

    if (id) el = '<a class="h" target="_blank" href="https://docs.google.com/spreadsheets/d/' +
                 '1b2g3BARa4ibqdqtTj5_IQoBSI8hp6A4R5A3bSbrfA58/edit?pli=1#gid=' + id + '">' +
                 el + ' ' + mon + '</a>';

    return el;

  }

  $('legend').click(function() {
    $(this).siblings('table').fadeToggle(900);
  });

});
