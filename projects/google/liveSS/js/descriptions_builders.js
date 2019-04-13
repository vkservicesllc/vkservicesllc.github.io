/**
 *  Updated:  2019-04-12
 */
 

/** Descriptions **/

function RangeDescription(value, row, column, desc) {
  /*
   *  arguments:  [value[, row[, column[, desc]]]]
   *
   *  value   ->  any type
   *  row     ->  integer (>0)
   *  column  ->  integer (>0)
   *  desc    ->  object containing full range description to override default settings
   *
   */

  var tag = 'range',
      sheetName = '',
      row = (row && typeof row == 'number') ? row : 1,
      column = (column && typeof column == 'number') ? column : 1,
      height = 1, width = 1,
      mustMerge = true, // options: true, false, 'vertically', 'across'
      wrapStrategy = SpreadsheetApp.WrapStrategy.CLIP,
      numberFormat = '@',
      background = '#efefef',
      validation = null,
      value = (value) ? value : '',
      protection = false, // options: true, false, 'warning'
      unprotected = false;

  if (desc) {
    if (isPropDefined(desc, 'tag')) tag = desc.tag;
    if (desc.hasOwnProperty('sheetName') && typeof desc.sheetName == 'string') sheetName = desc.sheetName;
    if (desc.hasOwnProperty('row') && typeof desc.row == 'number') row = desc.row;
    if (desc.hasOwnProperty('column') && typeof desc.column == 'number') column = desc.column;
    if (desc.hasOwnProperty('height') && typeof desc.height == 'number') height = desc.height;
    if (desc.hasOwnProperty('width') && typeof desc.width == 'number') width = desc.width;
    if (isPropDefined(desc, 'mustMerge')) mustMerge = desc.mustMerge;
    if (isPropDefined(desc, 'wrapStrategy')) wrapStrategy = desc.wrapStrategy;
    if (isPropDefined(desc, 'numberFormat')) numberFormat = desc.numberFormat;
    if (isPropDefined(desc, 'background')) background = desc.background;
    if (isPropDefined(desc, 'validation')) validation = desc.validation;
    if (isPropDefined(desc, 'value')) value = desc.value;

    if (isPropDefined(desc, 'protection')) protection = desc.protection;
    if (isPropDefined(desc, 'unprotected')) unprotected = desc.unprotected;
  }

  function Border() {

    var top = null, left = null, bottom = null, right = null,
        vertical = null, horizontal = null,
        color = null, style = null;

    if (desc && isPropDefined(desc, 'border')) {
      var border = desc.border;
      if (isPropDefined(border, 'top')) top = border.top;
      if (isPropDefined(border, 'left')) left = border.left;
      if (isPropDefined(border, 'bottom')) bottom = border.bottom;
      if (isPropDefined(border, 'right')) right = border.right;
      if (isPropDefined(border, 'vertical')) vertical = border.vertical;
      if (isPropDefined(border, 'horizontal')) horizontal = border.horizontal;
      if (isPropDefined(border, 'color')) color = border.color;
      if (isPropDefined(border, 'style')) style = border.style;
    }

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
    this.vertical = vertical;
    this.horizontal = horizontal;
    this.color = color;
    this.style = style;

  }

  function Alignment() {

    var vertical = 'middle', horizontal = 'center';

    if (desc && isPropDefined(desc, 'alignment')) {
      var alignment = desc.alignment;
      if (isPropDefined(alignment, 'vertical')) vertical = alignment.vertical;
      if (isPropDefined(alignment, 'horizontal')) horizontal = alignment.horizontal;
    }

    this.vertical = vertical;
    this.horizontal = horizontal;

  }

  function Font() {

    var family = 'Inconsolata',
        color = null,
        size = 10,
        weight = 'normal',
        style = 'normal',
        line = 'none';

    if (desc && isPropDefined(desc, 'font')) {
      var font = desc.font;
      if (isPropDefined(font, 'family')) family = font.family;
      if (isPropDefined(font, 'color')) color = font.color;
      if (isPropDefined(font, 'size')) size = font.size;
      if (isPropDefined(font, 'weight')) weight = font.weight;
      if (isPropDefined(font, 'style')) style = font.style;
      if (isPropDefined(font, 'line')) line = font.line;
    }

    this.family = family;
    this.color = color;
    this.size = size;
    this.weight = weight;
    this.style = style;
    this.line = line;

  }

  function Indent() {

    var left = 0, right = 0;

    if (desc && isPropDefined(desc, 'indent')) {
      var indent = desc.indent;
      if (isPropDefined(indent, 'left')) left = indent.left;
      if (isPropDefined(indent, 'right')) right = indent.right;
    }

    this.left = left;
    this.right = right;

  }

  // Meta
  this.tag = tag;

  // Range
  this.sheetName = sheetName;
  this.row = row;
  this.column = column;
  this.height = height;
  this.width = width;
  this.mustMerge = mustMerge;

  // Appearance
  this.wrapStrategy = wrapStrategy;
  this.numberFormat = numberFormat;
  this.background = background;
  this.border = new Border;
  this.alignment = new Alignment;
  this.font = new Font;
  this.indent = new Indent;

  // Data
  this.validation = validation;
  this.value = value;

  // Protection
  this.protection = protection;
  this.unprotected = unprotected;

}

function SheetDescription(height, width, sheetName) {
  /*
   *  arguments:  [height[, width[, sheetName]]]
   *
   *  height      ->  integer (>0)  ||  array of integers(>0) representing different row heights
   *  width       ->  integer (>0)  ||  array of integers(>0) representing different column widths
   *  sheetName   ->  string
   *
   */

  if (!height) height = 1;
  if (!width) width = 1;

  var rowHeight = 21, columnWidth = 100;

  if (Array.isArray(height)) {
    if (height.every(function(n) { return typeof n == 'number'; })) {
      rowHeight = height;
      height = height.length;
    }
  }

  if (Array.isArray(width)) {
    if (width.every(function(n) { return typeof n == 'number'; })) {
      columnWidth = width;
      width = width.length;
    }
  }

  this.sheetName = (sheetName && typeof sheetName == 'string') ? sheetName : '';

  // Dimensions
  this.height = height;
  this.width = width;
  this.rowHeight = rowHeight;
  this.columnWidth = columnWidth;
  this.frozenRows = 0;
  this.frozenColumns = 0;

  // Body
  this.range = new RangeDescription(undefined, undefined, undefined, sheetName);
  this.range.height = height;
  this.range.width = width;
  this.range.mustMerge = false;
  this.hasGridlines = false;

  // Protection
  this.protection = false;
  /*  must be either false or object (may be ommitted or deleted)
   *  object: {
   *    warning = boolean
   *    unprotected = array of unprotected ranges
   *  }
   */

}


/** Builders **/

function buildRange(desc) {
  /*
   *  arguments:  desc
   *
   *  desc  ->  object containing full range description
   *
   */

  var ss = SpreadsheetApp.getActive(),
      sheet = (desc.sheetName) ? ss.getSheetByName(desc.sheetName) : ss.getActiveSheet(),
      range = sheet.getRange(desc.row, desc.column, desc.height, desc.width),
      cell = sheet.getRange(desc.row, desc.column);

  var value = desc.value;
  if (value && typeof value == 'string') {
    var left = desc.indent.left,
        right = desc.indent.right;
    if (left || right) {
      polyfills__String_repeat();
      var lI = (left) ? ' '.repeat(left) : '',
          rI = (right) ? ' '.repeat(right) : '';
      value = lI + value + rI;
    }
  }

  if (desc.mustMerge) {
    switch (desc.mustMerge) {
      case 'vertically': range.mergeVertically(); break;
      case 'across': range.mergeAcross(); break;
      default: range.merge();
    }
  } else range.breakApart();

  range
    .setBorder(
      desc.border.top, desc.border.left,
      desc.border.bottom, desc.border.right,
      desc.border.vertical, desc.border.horizontal,
      desc.border.color, desc.border.style
    )
    .setWrapStrategy(desc.wrapStrategy)
    .setNumberFormat(desc.numberFormat)
    .setHorizontalAlignment(desc.alignment.horizontal)
    .setVerticalAlignment(desc.alignment.vertical)
    .setBackground(desc.background)
    .setFontColor(desc.font.color)
    .setFontFamily(desc.font.family)
    .setFontSize(desc.font.size)
    .setFontLine(desc.font.line)
    .setFontWeight(desc.font.weight)
    .setFontStyle(desc.font.style)
    .setDataValidation(desc.validation);

  cell.setValue(value);

}

function buildRanges(descArr) {
  /*
   *  arguments:  descArr
   *
   *  descArr  ->  array of objects containing full range descriptions
   *
   */

  if (Array.isArray(descArr)) {
    for (var i = 0; i < descArr.length; i++) buildRange(descArr[i]);
  }

}

function buildSheet(desc, rangeArr, isNew) {
  /*
   *  arguments:  desc[, rangeArr[, isNew]]
   *
   *  desc      ->  object containing full sheet description
   *  rangeArr  ->  function to run after
   *  isNew     ->  boolean (false by default)
   */

  if (!isNew) isNew = false;

  var ss = SpreadsheetApp.getActive();
  var sheet, index, unprotected1 = [], unprotected2 = [];

  var sheetName = (desc.sheetName) ? desc.sheetName : undefined,
      height = desc.height,
      width = desc.width,
      rowHeight = desc.rowHeight,
      columnWidth = desc.columnWidth,
      frozenRows = desc.frozenRows,
      frozenColumns = desc.frozenColumns;

  if (isNew) {
    (sheetName) ? ss.insertSheet(sheetName) : ss.insertSheet();
    sheet = ss.getActiveSheet();
  } else {
    sheet = (sheetName) ? ss.getSheetByName(sheetName) : ss.getActiveSheet();
  }

  index = sheet.getIndex() - 1;

  shrinkSheet(sheet);

  sheet.setHiddenGridlines(!desc.hasGridlines);

  if (height > 1) sheet.insertRowsAfter(1, height - 1);
  if (width > 1) sheet.insertColumnsAfter(1, width - 1);

  if (Array.isArray(rowHeight)) {
    for (var r = 0; r < rowHeight.length; r++) {
      sheet.setRowHeight(r + 1, rowHeight[r]);
    }
  } else {
    sheet.setRowHeights(1, height, rowHeight);
  }

  if (Array.isArray(columnWidth)) {
    for (var c = 0; c < columnWidth.length; c++) {
      sheet.setColumnWidth(c + 1, columnWidth[c]);
    }
  } else {
    sheet.setColumnWidths(1, width, columnWidth);
  }

  if (frozenRows && frozenRows < height) sheet.setFrozenRows(frozenRows);
  if (frozenColumns && frozenColumns < width) sheet.setFrozenColumns(frozenColumns);

  if (rangeArr && Array.isArray(rangeArr)) {

    for (var r = 0; r < rangeArr.length; r++) {
      var rng = rangeArr[r];
      if (sheetName) rng.sheetName = sheetName;
      if (rng.unprotected) {
        unprotected1.push(sheet.getRange(rng.row, rng.column, rng.height, rng.width));
        if (unprotected1.length == 1) sheet.setCurrentCell(sheet.getRange(rng.row, rng.column));
      }
    }

    buildRanges(rangeArr);

  }

  var protection = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET)[index];
  if (protection) protection.remove();

  if (desc.hasOwnProperty('protection') && desc.protection) {

    protection = sheet.protect();

    if (desc.protection.hasOwnProperty('warning') && desc.protection.warning) {
      protection.setWarningOnly(true);
    } else {
      var owner = ss.getOwner();
      protection.addEditor(owner);
      protection.removeEditors(protection.getEditors());
    }

    var hasUnprotected = isPropDefined(desc.protection, 'unprotected');

    if (hasUnprotected || unprotected1.length) {

      if (hasUnprotected && desc.protection.unprotected.length) {
        unprotected2 = desc.protection.unprotected;
      }

      var unprotected = unprotected1.concat(unprotected2);

      if (unprotected.length) protection.setUnprotectedRanges(unprotected);

    }

  }

}

function buildValidation(desc, showArrow, allowInvalid) {
  /*
   *  arguments:  desc[, showArrow[, allowInvalid]]
   *
   *  desc          ->  array of description entities, where index 0 is purpose and others are arguments
   *  showArrow     ->  boolean, if true dropdown arrow will appear in dropdown type of validation
   *  allowInvalid  ->  boolean, if true will allow validation override
   *
   */

  if (desc) {

    var validation = SpreadsheetApp.newDataValidation(),
        purpose = desc[0];
    (showArrow == undefined || showArrow == null) ? showArrow = true : showArrow = showArrow;
    (allowInvalid == undefined) ? allowInvalid = false : allowInvalid = allowInvalid;

    switch (purpose) {

      // Dates
      case 'date': validation.requireDate(); break;
      case 'date =': validation = validation.requireDateEqualTo(date(desc[1])); break;
      case 'date >': validation = validation.requireDateAfter(date(desc[1])); break;
      case 'date >=': validation = validation.requireDateOnOrAfter(date(desc[1])); break;
      case 'date <': validation = validation.requireDateBefore(date(desc[1])); break;
      case 'date <=': validation = validation.requireDateOnOrBefore(date(desc[1])); break;
      case 'date <=>': validation = validation.requireDateBetween(date(desc[1]), date(desc[2])); break;
      case 'date <>': validation = validation.requireDateNotBetween(date(desc[1]), date(desc[2])); break;

      // Numbers
      case 'number =': validation = validation.requireNumberEqualTo(desc[1]); break;
      case 'number !=': validation = validation.requireNumberNotEqualTo(desc[1]); break;
      case 'number >': validation = validation.requireNumberGreaterThan(desc[1]); break;
      case 'number >=': validation = validation.requireNumberGreaterThanOrEqualTo(desc[1]); break;
      case 'number <': validation = validation.requireNumberLessThan(desc[1]); break;
      case 'number <=': validation = validation.requireNumberLessThanOrEqualTo(desc[1]); break;
      case 'number <=>': validation = validation.requireNumberBetween(desc[1], desc[2]); break;
      case 'number <>': validation = validation.requireNumberNotBetween(desc[1], desc[2]); break;

      // Text
      case 'text =': validation = requireTextEqualTo(desc[1]); break;
      case 'text +': validation = requireTextContallowInvalidns(desc[1]); break;
      case 'text -': validation = requireTextDoesNotContallowInvalidn(desc[1]); break;

      // Misc
      case 'checkbox':
        if (desc[1]) {
          if (desc[2]) validation = validation.requireCheckbox(desc[1], desc[2]);
            else validation = validation.requireCheckbox(desc[1]);
        } else validation = validation.requireCheckbox();
        break;
      case 'formula': validation = validation.requireFormulaSatisfied(desc[1]); break;
      case 'emallowInvalidl': validation = validation.requireTextIsEmallowInvalidl(); break;
      case 'url': validation = validation.requireTextIsUrl(); break;
      case 'list': validation = validation.requireValueInList(desc[1], showArrow); break;
      case 'range': validation = validation.requireValueInRange(desc[1], showArrow); break;

    }

    validation = validation.setAllowInvalid(allowInvalid).build();

    return validation;

  }

}


/** Misc **/

function shrinkSheet(sheet) {
  /*
   *  arguments:  sheet
   *
   *  sheet  ->  sheet object
   *
   */

  var u;

  var maxRows = sheet.getMaxRows(),
      maxColumns = sheet.getMaxColumns(),
      frozenRows = sheet.getFrozenRows(),
      frozenColumns = sheet.getFrozenColumns();

  if (frozenRows) sheet.setFrozenRows(0);
  if (frozenColumns) sheet.setFrozenColumns(0);
  if (maxRows > 1) sheet.deleteRows(2, maxRows - 1);
  if (maxColumns > 1) sheet.deleteColumns(2, maxColumns - 1);

  desc = new SheetDescription;
  sheet.setRowHeight(1, desc.rowHeight);
  sheet.setColumnWidth(1, desc.columnWidth);
  sheet.setHiddenGridlines(false);

  buildRange(new RangeDescription(u, u, u, {
    sheetName: sheet.getName(),
    font: { color: new RangeDescription().background }
  }));

}
