/**
 *  Updated:  2019-04-12
 */
 

/** Edit Event **/

function onEdit(e) {
  /*
   *  arguments:  e
   *
   *  e  ->  Edit Event object
   *
   */

  var $ = new Edit(e);

  executeEditResponse($);

}


/** Open Event **/

function onOpen() {

}


/** Change Event **/

function onChange() {

}


/** Misc **/

function Edit(evt) {
  /*
   *  arguments:  evt
   *
   *  evt  ->  Edit Event object
   *
   */

  var ss = SpreadsheetApp.getActive(),
      sheet = ss.getActiveSheet(),
      sheetName = activeSheet.getName(),
      range = evt.range,
      row = range.getRow(),
      column = range.getColumn(),
      value = range.getValue(),
      oldValue = evt.oldValue;

  if (typeof value == 'string') value = value.trim();

  this.ss = ss;
  this.sheet = sheet;
  this.sheetName = sheetName;
  this.range = range;
  this.row = row;
  this.column = column;
  this.value = value;
  this.oldValue = oldValue;

}
