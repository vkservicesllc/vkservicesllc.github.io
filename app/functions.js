/* VK Services, LLC
   v1.0 | 20180811
   License: none (public)
*/

var el = [], list = '',
    gHttp = 'https://docs.google.com/spreadsheets/d/',
    idPointer = '/edit#gid=',
    IDs = [
      'tH', 'tC', 'tL',
      'bH', 'bC', 'bL',
      'hist',
      'uno', 'dos', 'tres'
    ],
    idLen = IDs.length,
    user1 = '<span>Helen</span>',
    user2 = '<span>Joyce</span>';

// timers / decisions
var wkEffDt = new Date('2018-09-28'),
    mnEffDt = new Date('2018-09-28'),
    today = new Date(),
    weeklyTopKey = (today >= wkEffDt) ? '1Pufb8yCXh0CNG5Kizm-jfyD2BV1dQyXlgQUXYP8ZrZM' : '#',
    mI = (today >= mnEffDt) ? 1 : 0;

// weekly URLS
var weeklyUrls = {
  top:
    {
      header:      'Sep 30 — Oct 6',
      key:         weeklyTopKey,
      collectorId: '914973738',
      linkId:      '978213208'
    },
  bottom:
    {
      header:      'Sep 23 — Sep 29',
      key:         '1n2EEk44WA_KRJqLNzVaZDqTF7K0HNiOHWsXHtk-ifVw',
      collectorId: '914973738',
      linkId:      '978213208'
    },
  show:
    function(top, purpose) {
      var dir, val;
      if (top) {
        dir = this.top;
      } else {
        dir = this.bottom;
      }
      var linkBuilder =
        (purpose > 0) ?
          '<a class="h" target="_blank" title="' +
          dir.header + '" href="' +
          gHttp + dir.key + idPointer :
          undefined;
      switch (purpose) {
        case 0:
          val = dir.header;
          break;
        case 1:
          if (dir.key != '#') {
            val = linkBuilder + dir.collectorId + '">' + 'URL Collector</a>';
          } else {
            val = linkBuilder + '#"></a>URL Collector';
          }
          break;
        case 2:
          if (dir.key != '#') {
            val = linkBuilder + dir.linkId + '">' + 'Payroll Hyperlinks</a>';
          } else {
            val = linkBuilder + '#"></a>Payroll Hyperlinks';
          }
      }
      return val;
    }
};

// history
var historyList = [
  {
    header:      ' — ',
    key:         '#',
    id:          '1250765514'
  },
  {
    header:      'Sep 16 — Sep 22',
    key:         '1w8CbjzLOVtQ-BJhdo5RzIxFqhsrZeSCcPKorX7opZq0',
    id:          '1250765514'
  },
  {
    header:      'Sep 9 — Sep 15',
    key:         '1onTJWxXam4hqJwoEY6HWj7OXBbvr24iIaIDkMnF3RxE',
    id:          '1250765514'
  },
  {
    header:      'Sep 2 — Sep 8',
    key:         '1G9G1599r3C9FaMtC83OyErB1byAdKr9DxBIfzp7-vaY',
    id:          '1250765514'
  },
  {
    header:      'Aug 26 — Sep 1',
    key:         '1TSDMsATXzu7LqabccJLfgpM8G0y1Ux64IOh9pkGqf2s',
    id:          '1250765514'
  },
  {
    header:      'Aug 19 — Aug 25',
    key:         '1Dku5Hw_HUVGVhFYQjNOSHxLhjazYjxKPJ-97OyE1fjQ',
    id:          '1250765514'
  },
  {
    header:      'Aug 12 — Aug 18',
    key:         '1SOxJyR4Lu9g9uZnxkNDFogeplQOiLBTcfknKhQJJGLU',
    id:          '1250765514'
  },
  {
    header:      'Aug 5 — Aug 11',
    key:         '1-_pg13i_0z9AQ1htln6TQtuVG4tlGsat8EoIjpJQKsM',
    id:          '1250765514'
  },
  {
    header:      'Jul 29 — Aug 4',
    key:         '16VR3LxYIjSRBOCUcsN9pd6GlD6sGNUwHfPUx1mma9Y0',
    id:          '1250765514'
  },
  {
    header:      'Jul 22 — Jul 28',
    key:         '1Me0A2QT1rjs4yjkzk9VmF2IesMFnbcNvRt_t8aMLTrQ',
    id:          '1250765514'
  },
  {
    header:      'Jul 15 — Jul 21',
    key:         '1om2yc9ZZzw-sSEpwTe5zsXSPDv-LJLOb1l3qxcew09w',
    id:          '1250765514'
  },
  {
    header:      'Jul 8 — Jul 14',
    key:         '1FFdgUldfpiBPMzoi9DRqOFPWDC3wio0cUipYj78C1F4',
    id:          '1250765514'
  },
  {
    header:      'Jul 1 — Jul 7',
    key:         '1vWTfjW7OPc5ref78iwDh_5QuU5e1ZHNCS9TCuzT4LL0',
    id:          '1250765514'
  },
];

// monthly URLs
var monthlyUrls = {
  CL:
    {
      title: 'Carolina Logistic, Inc',
      name: '<th>CAROLINA LOGISTIC &nbsp<span>708305151783320</span></th>',
      month1_cards: {
        user0:     [0, '686342087'],
        user1:     [1, '1995296890'],
        user2:     [1, '2117669368'],
        month_key: ['Sep', '1QCWWVbPVr6UbN6rGbJ85zVP-k3o_vFcrmmnD4InF1jA']
      },
      month2_cards: {
        user0:     [mI, '686342087'],
        user1:     [mI, '1995296890'],
        user2:     [mI, '2117669368'],
        month_key: ['Oct', '1iGfQHOCjvbpy-oY6LDaKmbzh8yLIw6ECGF-KTKHDbbM']
      },
      month1_codes: {
        user0:     [1, '1165085359', '1782605551'],
        month_key: ['Sep', '1VRiexm8ouME8GutSM9Xck0AYiedbwGVWsF4CkXaJIT4']
      },
      month2_codes: {
        user0:     [mI, '1165085359', '1782605551'],
        month_key: ['Oct', '1DgqMnLzN6I85wUdkM8YKSbTk5Mp9kJdGb-rLZWHsfXY']
      }
    },
  CT:
    {
      title: 'Carolina Transportation, Inc',
      name: '<th>CAROLINA TRANSPORTATION &nbsp<span>70830515178290</span></th>',
      month1_cards: {
        user0:     [0, '686342087'],
        user1:     [0, '1995296890'],
        user2:     [0, '2117669368'],
        month_key: ['Sep', '1JrOiQbsnkiXY97YCCrJ0i_EGPGtQmE31-Jqf5xUnAS0']
      },
      month2_cards: {
        user0:     [mI, '686342087'],
        user1:     [mI, '1995296890'],
        user2:     [mI, '2117669368'],
        month_key: ['Oct', '1n9RDORRFa7HgjHqKE_ELi-vKA75IVzMNpOYYsuWkxJQ']
      },
      month1_codes: {
        user0:     [1, '1165085359', '1782605551'],
        month_key: ['Sep', '1wJiBqNlMp64yuUbZtGGLfN4VrV6eSPoCf-LoBXeu8_k']
      },
      month2_codes: {
        user0:     [mI, '1165085359', '1782605551'],
        month_key: ['Oct', '1axHhWC77PrYxQgBYwLO5BtfyTfI_LiPdYNMoku-JJ70']
      }
    },
  DE:
    {
      title: 'Delta Express, Inc',
      name: '<th>DELTA EXPRESS &nbsp<span>70830515177576</span></th>',
      month1_cards: {
        user0:     [0, '686342087'],
        user1:     [0, '1995296890'],
        user2:     [0, '2117669368'],
        month_key: ['Sep', '1AFbcZiIZRpdK8VdxnMe9K-mdFyRyoerE-CTT6vdjty0']
      },
      month2_cards: {
        user0:     [mI, '686342087'],
        user1:     [mI, '1995296890'],
        user2:     [mI, '2117669368'],
        month_key: ['Oct', '1mxNC1B3zz1MwwKthZUJyw_7ANA8j9Exoddv-wSqFt_o']
      },
      month1_codes: {
        user0:     [0, '1165085359', '1782605551'],
        month_key: ['Aug', '#']
      },
      month2_codes: {
        user0:     [mI, '1165085359', '1782605551'],
        month_key: ['Sep', '#']
      }
    }
}

// reporting drivers
var repId = '1432498814',
    month = 'Sep';
var el_rd = '<a class="h" target="_blank" ' +
            'href="https://docs.google.com/spreadsheets/d/1b2g3BARa4ibqdqtTj5_IQoBSI8hp6A4R5A3bSbrfA58/edit#gid=' + repId + '">' +
            'Reporting Drivers <span>' + month + '</span></a>';
document.getElementById('repD').innerHTML = el_rd;

// element list by IDs
for (var i = 0; i < idLen; i++) {
  el[i] = document.getElementById(IDs[i]);
}

// history list
for (var j = 1; j <= 12; j++) {
  list += '<li><a class="h" target="_blank" href="' +
          gHttp + historyList[j].key +
          idPointer + historyList[j].id + '">' +
          historyList[j].header + '</a></li>'
}
list = list.concat(
  '<li style="background: beige;"><a class="h" target="_blank" ' +
  'title="Open Google Drive folder' + String.fromCharCode(10) +
  'containing all weeks' + String.fromCharCode(10) +
  'starting Dec 10, 2017" ' +
  ' href="https://drive.google.com/drive/folders/1MfNPealueJQJKTeV_J9iu9vCQr6qGPn1">' +
  '<span>... Entire History</span></a></li>'
);

// monthly URLs distribution
function showMonthlyUrls(idx) {
  var comps = ['CL', 'CT', 'DE'],
      dir = monthlyUrls[comps[idx]], val;
  var pt1 = '', pt2 = '', pt3 ='',
      pt4 = '', pt5 = '', pt6 = '',
      pt7 = '', pt8 = '',
      anchor = '<a class="h" target="_blank" title="' +
               dir.title + '" href="';
  if (dir.month1_cards.month_key[1] != '#') {
    pt1 = anchor;
    switch (dir.month1_cards.user0[0]) {
      case 0:
        pt1 += '"></a>' + dir.month1_cards.month_key[0];
        break;
      case 1:
        pt1 += gHttp + dir.month1_cards.month_key[1] + idPointer + dir.month1_cards.user0[1] + '">';
        pt1 += dir.month1_cards.month_key[0] + '</a>';
    }
    pt2 = anchor;
    switch (dir.month1_cards.user1[0]) {
      case 0:
        pt2 += '"></a>' + user1;
        break;
      case 1:
        pt2 += gHttp + dir.month1_cards.month_key[1] + idPointer + dir.month1_cards.user1[1] + '">';
        pt2 += user1 + '</a>';
    }
    pt3 = anchor;
    switch (dir.month1_cards.user2[0]) {
      case 0:
        pt3 += '"></a>' + user2;
        break;
      case 1:
        pt3 += gHttp + dir.month1_cards.month_key[1] + idPointer + dir.month1_cards.user2[1] + '">';
        pt3 += user2 + '</a>';
    }
  }
  if (dir.month2_cards.month_key[1] != '#') {
    pt4 = anchor;
    switch (dir.month2_cards.user0[0]) {
      case 0:
        pt4 += '"></a>' + dir.month2_cards.month_key[0];
        break;
      case 1:
        pt4 += gHttp + dir.month2_cards.month_key[1] + idPointer + dir.month2_cards.user0[1] + '">';
        pt4 += dir.month2_cards.month_key[0] + '</a>';
    }
    pt5 = anchor;
    switch (dir.month2_cards.user1[0]) {
      case 0:
        pt5 += '"></a>' + user1;
        break;
      case 1:
        pt5 += gHttp + dir.month2_cards.month_key[1] + idPointer + dir.month2_cards.user1[1] + '">';
        pt5 += user1 + '</a>';
    }
    pt6 = anchor;
    switch (dir.month2_cards.user2[0]) {
      case 0:
        pt6 += '"></a>' + user2;
        break;
      case 1:
        pt6 += gHttp + dir.month2_cards.month_key[1] + idPointer + dir.month2_cards.user2[1] + '">';
        pt6 += user2 + '</a>';
    }
  }
  if (dir.month1_codes.month_key[1] != '#') {
    pt7 = anchor;
    switch (true) {
      case dir.month1_codes.user0[0] == 0:
        pt7 += '"></a>' + dir.month1_codes.month_key[0];
        break;
      case dir.month1_codes.user0[0] > 0:
        var n = dir.month1_codes.user0[0];
        pt7 += gHttp + dir.month1_codes.month_key[1] + idPointer + dir.month1_codes.user0[n] + '">';
        pt7 += dir.month1_codes.month_key[0] + '</a>';
    }
  }
  if (dir.month2_codes.month_key[1] != '#') {
    pt8 = anchor;
    switch (true) {
      case dir.month2_codes.user0[0] == 0:
        pt8 += '"></a>' + dir.month2_codes.month_key[0];
        break;
      case dir.month2_codes.user0[0] > 0:
        var n = dir.month2_codes.user0[0];
        pt8 += gHttp + dir.month2_codes.month_key[1] + idPointer + dir.month2_codes.user0[n] + '">';
        pt8 += dir.month2_codes.month_key[0] + '</a>';
    }
  }
  val = dir.name +
        '<td><em>' + pt1 + '</em>&nbsp&nbsp ' + pt2 + ' ' + pt3 + '</td>' +
        '<td><em>' + pt4 + '</em>&nbsp&nbsp ' + pt5 + ' ' + pt6 + '</td>' +
        '<td>' + pt7 + '</td>' +
        '<td>' + pt8 + '</td>';
  return val;
}

// element insertion
el[0].innerHTML = weeklyUrls.show(true, 0);
el[1].innerHTML = weeklyUrls.show(true, 1);
el[2].innerHTML = weeklyUrls.show(true, 2);
el[3].innerHTML = weeklyUrls.show(false, 0);
el[4].innerHTML = weeklyUrls.show(false, 1);
el[5].innerHTML = weeklyUrls.show(false, 2);
el[6].innerHTML = list;
el[7].innerHTML = showMonthlyUrls(0);
el[8].innerHTML = showMonthlyUrls(1);
el[9].innerHTML = showMonthlyUrls(2);
