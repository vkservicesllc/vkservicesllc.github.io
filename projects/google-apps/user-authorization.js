/**
 *  Updated:  2019-04-14
 */


/** User Authorization **/

function authorizeActiveUser() {

  var ui = SpreadsheetApp.getUi(),
      ss = SpreadsheetApp.getActive();

  var name = ss.getName(),
      owner = ss.getOwner().getEmail(),
      user = Session.getActiveUser().getEmail(),
      id = ScriptApp.getScriptId(),
      storage = DriveApp.getStorageLimit(),
      qouta = MailApp.getRemainingDailyQuota(),
      fetchCode = UrlFetchApp.fetch(
        'https://vkservicesllc.github.io/projects/json/urlfetch-activation/activation.json'
      ).getResponseCode(),
      triggerMessage = '<i style="color: red;">No</i>';

  if (owner === user) {
    installTriggers();
    triggerMessage = '<b style="color: green">Yes</b>';
  }

  user = (!user) ? '<span style="color: red;">unknown</span>' : '<b style="color: blue;">' + user + '</b>';

  var td = '<td style="padding: 2px 7px;">',
      htmlBody = '<div style="font-family: Arial;"><table>';
  htmlBody += '<tr>' + td + 'Spreadsheet Name:</td>' + td + '<b>' + name + '</b></td></tr>';
  htmlBody += '<tr>' + td + 'Spreadsheet Owner:</td>' + td + '<b>' + owner + '</b></td></tr>';
  htmlBody += '<tr>' + td + 'Authorized User:</td>' + td + user + '</td></tr>';
  htmlBody += '<tr><td colspan="2"><span style="color: white;">---</span></td></tr>';
  htmlBody += '<tr>' + td + 'Project Script ID:</td>' + td + id + '</td></tr>';
  htmlBody += '<tr>' + td + 'Drive Storage:</td>' + td + storage + ' bytes</td></tr>';
  htmlBody += '<tr>' + td + 'Mail Daily Remaining Quota:</td>' + td + qouta + ' emails</td></tr>';
  htmlBody += '<tr>' + td + 'URL Fetch Response Code:</td>' + td + fetchCode + '</td></tr>';
  htmlBody += '<tr>' + td + 'Triggers Reset:</td>' + td + triggerMessage + '</td></tr>';

  ui.showModalDialog(
    HtmlService.createHtmlOutput(htmlBody + '</table></div>').setWidth(880).setHeight(220),
    'Authorization Confirmation'
  );

}
