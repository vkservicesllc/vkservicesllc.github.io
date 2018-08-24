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

// weekly URLS
var weeklyUrls = {
  top:
    {
      header:      'Aug 26 — Sep 1',
      key:         '1TSDMsATXzu7LqabccJLfgpM8G0y1Ux64IOh9pkGqf2s',
      collectorId: '914973738',
      linkId:      '978213208'
    },
  bottom:
    {
      header:      'Aug 19 — Aug 25',
      key:         '1Dku5Hw_HUVGVhFYQjNOSHxLhjazYjxKPJ-97OyE1fjQ',
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
            val = linkBuilder + '#"></a>URL Collector'
          }
          break;
        case 2:
          if (dir.key != '#') {
            val = linkBuilder + dir.linkId + '">' + 'Payroll Hyperlinks</a>';
          } else {
            val = linkBuilder + '#"></a>Payroll Hyperlinks'
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
  {
    header:      'Jun 24 — Jun 30',
    key:         '1_gwST1RzMGhwLuidUq7X-t8H2R8IwS_QtVl-SuCcgsU',
    id:          '1250765514'
  },
  {
    header:      'Jun 17 — Jun 23',
    key:         '1PMy5j5UpwonOSoMpnSswelh4iq9gw7ry9F51IQzStpk',
    id:          '1250765514'
  },
  {
    header:      'Jun 10 — Jun 16',
    key:         '1xAdGWQPos7Wa-DqPSKpIcvuMwtbWYHVTLm3Yd6aR-RE',
    id:          '1250765514'
  },
  {
    header:      'Jun 3 — Jun 9',
    key:         '1n8SzmWPte2hfX9-1oiyCSuS5nJQS-ElETJ8hE_Xia-M',
    id:          '1250765514'
  },
  {
    header:      'May 27 — Jun 2',
    key:         '1yNe7nfNRMUxj9T-0CqFSn3qssPY2C5LdFpepyaBWTGc',
    id:          '1250765514'
  },
  {
    header:      'May 20 — May 26',
    key:         '1AvdM6VwlSyMqg1yoU8lrltpNIPHMtknCe5e-LeaLiuU',
    id:          '1250765514'
  },
  {
    header:      'May 13 — May 19',
    key:         '1i6O2U1IXQeTm4ePmfyIIIlyFXFXy87lKXFv0-0YbAu4',
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
        user0:     [1, '686342087'],
        user1:     [1, '1995296890'],
        user2:     [1, '2117669368'],
        month_key: ['Aug', '1Z5WeJ_Lu827Ia9jlgpsVKn7ZOzlc7EkfuiVSM8mg6RE']
      },
      month2_cards: {
        user0:     [0, '686342087'],
        user1:     [0, '1995296890'],
        user2:     [0, '2117669368'],
        month_key: ['Sep', '-']
      },
      month1_codes: {
        user0:     [1, '1165085359', '1782605551'],
        month_key: ['Aug', '1evgxg0C-BkM9juH0n5P0odICToga4SK4oeSj1dGIrnY']
      },
      month2_codes: {
        user0:     [0, '1165085359', '1782605551'],
        month_key: ['Sep', '-']
      }
    },
  CT:
    {
      title: 'Carolina Transportation, Inc',
      name: '<th>CAROLINA TRANSPORTATION &nbsp<span>70830515178290</span></th>',
      month1_cards: {
        user0:     [1, '686342087'],
        user1:     [1, '1995296890'],
        user2:     [1, '2117669368'],
        month_key: ['Aug', '17BtRnZpTYmp7GsisgY3Tiq6ws2ZgOYG1DCwcG1eVNH4']
      },
      month2_cards: {
        user0:     [0, '686342087'],
        user1:     [0, '1995296890'],
        user2:     [0, '2117669368'],
        month_key: ['Sep', '-']
      },
      month1_codes: {
        user0:     [1, '1165085359', '1782605551'],
        month_key: ['Aug', '1GAbzqNz-0aDjYQRUSt9i45c07jhQPTiHi0YcSRkVHOU']
      },
      month2_codes: {
        user0:     [0, '1165085359', '1782605551'],
        month_key: ['Sep', '-']
      }
    },
  DE:
    {
      title: 'Delta Express, Inc',
      name: '<th>DELTA EXPRESS &nbsp<span>70830515177576</span></th>',
      month1_cards: {
        user0:     [1, '686342087'],
        user1:     [1, '1995296890'],
        user2:     [1, '2117669368'],
        month_key: ['Aug', '1nDhIHbKRnjcn__1TIyoDzsAgJ53WZYGVoRyt3X2Pi8Q']
      },
      month2_cards: {
        user0:     [0, '686342087'],
        user1:     [0, '1995296890'],
        user2:     [0, '2117669368'],
        month_key: ['Sep', '-']
      },
      month1_codes: {
        user0:     [0, '1165085359', '1782605551'],
        month_key: ['Aug', '#']
      },
      month2_codes: {
        user0:     [0, '1165085359', '1782605551'],
        month_key: ['Sep', '#']
      }
    }
}

// reporting drivers
var repId = '697755337',
    month = 'Aug';
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
        pt7 += gHttp + dir.month1_codes.month_key[1] + idPointer + dir.month1_cards.user0[n] + '">';
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
        pt8 += gHttp + dir.month2_codes.month_key[1] + idPointer + dir.month2_cards.user0[n] + '">';
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
