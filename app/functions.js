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
var wkEffDt = new Date('2019-02-09'),
    mnEffDt = new Date('2019-01-31'),
    today = new Date(),
    weeklyTopKey = (today >= wkEffDt) ? '1Tw8fGgviUCf_jAO0gLeZNB7YTpyRlf0jf9hz1u1fEQc' : '#',
    mI = (today >= mnEffDt) ? 1 : 0;

// weekly URLS
var weeklyUrls = {
  top:
    {
      header:      'Feb 10 — Feb 16',
      key:         weeklyTopKey,
      collectorId: '914973738',
      linkId:      '978213208'
    },
  bottom:
    {
      header:      'Feb 3 — Feb 9',
      key:         '1W2ZsjZjIn7szvVVGu14HXcQbBcnQGMvBimjico_4-gU',
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
    header:      'Jan 27 — Feb 2',
    key:         '1zXEgZDMoW3ecdYdjxRY60o2A2krDHWeUCBrXj7LmHlM',
    id:          '1250765514'
  },
  {
    header:      'Jan 20 — Jan 26',
    key:         '1u3B80MmlDW8A6_nQfMvmZu8st0A6g2NVoaKldhyElQY',
    id:          '1250765514'
  },
  {
    header:      'Jan 13 — Jan 19',
    key:         '1PLK_2jUxYmg2es6jFmdTHSvfVkerz_TbprN-AfbxXcI',
    id:          '1250765514'
  },
  {
    header:      'Jan 6 — Jan 12',
    key:         '18TF-qICrvRnSguniN_W2Flg2UKCRDZx1P5LN6lEcSZ4',
    id:          '1250765514'
  },
  {
    header:      'Dec 30 — Jan 5',
    key:         '1TMc9yBcQ0e3xXAfCOf1JSjKPJAnYLmhyb93lStgHBF4',
    id:          '1250765514'
  },
  {
    header:      'Dec 23 — Dec 29',
    key:         '1NKyun7xNhFPTKtt7PDqLQAr5AwZqxt1B6BYLOYsnKtI',
    id:          '1250765514'
  },
  {
    header:      'Dec 16 — Dec 22',
    key:         '1AOztmo9umzL-32Yk7T-12L-9EKYPgYnWeKR69UD4Lu0',
    id:          '1250765514'
  },
  {
    header:      'Dec 9 — Dec 15',
    key:         '1DxeYjtjjZpC1rpFyv57qC8L9W4535-GbuRht71N2WnY',
    id:          '1250765514'
  },
  {
    header:      'Dec 2 — Dec 8',
    key:         '1huGFtNL17OFVacpdRI7cVX1SQaBGEUwGUhqJmuM57XE',
    id:          '1250765514'
  },
  {
    header:      'Nov 25 — Dec 1',
    key:         '1ng5y3VpoZHbA301r5Yj3jDXlsgUCjLazt0iFDfumY0Q',
    id:          '1250765514'
  },
  {
    header:      'Nov 18 — Nov 24',
    key:         '1A_2qNLSE8qO8JzrXUj6FVQ2BhqjTthrmF7YfM4fPMtk',
    id:          '1250765514'
  },
  {
    header:      'Nov 11 — Nov 17',
    key:         '1XXzAh2Z-7ET9sVugRZ8wBJukZ8KbDuytDXj-WxD9mo4',
    id:          '1250765514'
  },
  {
    header:      'Nov 4 — Nov 10',
    key:         '1hPDs0yB9gy_4iUMu2a1HePXRqRzOScFU9bcyxzJJEM8',
    id:          '1250765514'
  },
  {
    header:      'Oct 28 — Nov 3',
    key:         '1LLhxzVZcZoYgdML7uGghlt6n3FByr1hJMe-alSEcfGw',
    id:          '1250765514'
  },
  {
    header:      'Oct 21 — Oct 27',
    key:         '11x3ZRsTrQiKHeZkOUDqZ9kWVNO6OuzhyJWUm-S45Atg',
    id:          '1250765514'
  },
  {
    header:      'Oct 14 — Oct 20',
    key:         '1gV1QNaRESX95EnLXonsAMTa3eY_l_q7nPMYPnj-AGQ0',
    id:          '1250765514'
  },
  {
    header:      'Oct 7 — Oct 13',
    key:         '1bWEbPgE2Zs8u4sZ5ys5qlFcXRj2oWMYce9c4WL0wP3w',
    id:          '1250765514'
  },
  {
    header:      'Sep 30 — Oct 6',
    key:         '1Pufb8yCXh0CNG5Kizm-jfyD2BV1dQyXlgQUXYP8ZrZM',
    id:          '1250765514'
  },
  {
    header:      'Sep 23 — Sep 29',
    key:         '1n2EEk44WA_KRJqLNzVaZDqTF7K0HNiOHWsXHtk-ifVw',
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
      name: '<th>CAROLINA LOGISTIC &nbsp<span>70830515178332</span></th>',
      month1_cards: {
        user0:     [0, '686342087'],
        user1:     [1, '1995296890'],
        user2:     [1, '2117669368'],
        month_key: ['Jan', '1vljEzUZObrOxJJtcgL-LIh8KhtRAKyUHNp06qvkureo']
      },
      month2_cards: {
        user0:     [mI, '686342087'],
        user1:     [mI, '1995296890'],
        user2:     [mI, '2117669368'],
        month_key: ['Feb', '137DS8sWgQvqudiwrWyPrJ3lxsYdYX4f88e2IMl60yLY']
      },
      month1_codes: {
        user0:     [1, '1165085359', '1782605551'],
        month_key: ['Jan', '114ITlh_ZBP4Blx-BE171-MnNLkwZ6-K-88jRcKYD7Zc']
      },
      month2_codes: {
        user0:     [mI, '1165085359', '1782605551'],
        month_key: ['Feb', '1K45hcyhkaBgaaoqnPiunF6nAFEJn8Ab2nG5LT4Lw1iw']
      }
    },
  CT:
    {
      title: 'Carolina Transportation, Inc',
      name: '<th>CAROLINA TRANSPORTATION &nbsp<span>70830515178290</span></th>',
      month1_cards: {
        user0:     [0, '686342087'],
        user1:     [1, '1995296890'],
        user2:     [0, '2117669368'],
        month_key: ['Jan', '1RP8q8IFgdXkwy-gR5G0A5Jtw4MW-_R-GU9yUFYFM5OE']
      },
      month2_cards: {
        user0:     [mI, '686342087'],
        user1:     [mI, '1995296890'],
        user2:     [mI, '2117669368'],
        month_key: ['Feb', '1lUlUSyZF4XG_TRfnD4rb8QedYdM-N8x8YTe8mERxsjM']
      },
      month1_codes: {
        user0:     [0, '1165085359', '1782605551'],
        month_key: ['Jan', '1le59wWGjOfOIvUuT8Fv7d0xJpy0ocIoIb5EVGnJC6co']
      },
      month2_codes: {
        user0:     [mI, '1165085359', '1782605551'],
        month_key: ['Feb', '1KX1-7VrH6kLdWKZ0H8N-yQGXKrJHypjPH5fFbVZOXB8']
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
        month_key: ['Jan', '1dXfes0O9sxYdp7f6aNtprg50MzjRLZXTqxI00x2QDKc']
      },
      month2_cards: {
        user0:     [mI, '686342087'],
        user1:     [mI, '1995296890'],
        user2:     [mI, '2117669368'],
        month_key: ['Feb', '1BYrhgNQDa13yY_XeTWatYI-WS8nB98WSgkwqWsoOQ9o']
      },
      month1_codes: {
        user0:     [0, '1165085359', '1782605551'],
        month_key: ['-', '#']
      },
      month2_codes: {
        user0:     [mI, '1165085359', '1782605551'],
        month_key: ['-', '#']
      }
    }
};

// reporting drivers
var repIds = ['20281730721', '1997412175'],
    months = ['Jan', 'Feb'],
    i = 0;
if (today > mnEffDt) i = 1;
var el_rd = '<a class="h" target="_blank" ' +
            'href="https://docs.google.com/spreadsheets/d/1b2g3BARa4ibqdqtTj5_IQoBSI8hp6A4R5A3bSbrfA58/edit#gid=' + repIds[i] + '">' +
            'Reporting Drivers <span>' + months[i] + '</span></a>';
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
          historyList[j].header + '</a></li>';
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
