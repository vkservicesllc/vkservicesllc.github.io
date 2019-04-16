/**
 *  Updated:  2019-04-16
 */


/** Form Entities **/

function Title_(value, row, column, height, width, horizontalAlignment, omitIndent) {
  /*
   *  arguments:  [value[, row[, column[, height[, width[, horizontalAlignment[, omitIndent]]]]]]]
   *
   *  value                ->  string
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *  horizontalAlignment  ->  selection op string options "left", "right" and "center" to override existing setting
   *  omitIndent           ->  boolean, if true indent will not be applied
   *
   */

  return new RangeDescription(value, row, column, {
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    font: { family: 'Montserrat', size: 12, color: '#434343', weight: 'bold', line: 'underline' },
    alignment: (horizontalAlignment) ? { horizontal: horizontalAlignment } : undefined,
    indent: (omitIndent) ? undefined : { left: 2, right: 2 },
  });

}

function HeaderMain_(value, row, column, height, width, horizontalAlignment, omitIndent) {
  /*
   *  arguments:  [value[, row[, column[, height[, width[, horizontalAlignment[, omitIndent]]]]]]]
   *
   *  value                ->  string
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *  horizontalAlignment  ->  selection op string options "left", "right" and "center" to override existing setting
   *  omitIndent           ->  boolean, if true indent will not be applied
   *
   */

  return new RangeDescription(value, row, column, {
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    font: { family: 'Roboto', size: 11, color: '#cccccc' },
    background: 'black',
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: Title_().font.color,
    },
    alignment: (horizontalAlignment) ? { horizontal: horizontalAlignment } : undefined,
    indent: (omitIndent) ? undefined : { left: 2, right: 2 },
  });

}

function Header_(value, row, column, height, width, horizontalAlignment, omitIndent) {
  /*
   *  arguments:  [value[, row[, column[, height[, width[, horizontalAlignment[, omitIndent]]]]]]]
   *
   *  value                ->  string
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *  horizontalAlignment  ->  selection op string options "left", "right" and "center" to override existing setting
   *  omitIndent           ->  boolean, if true indent will not be applied
   *
   */

  return new RangeDescription(value, row, column, {
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    font: { family: 'Roboto', size: 10, color: '#434343', style: 'italic' },
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: Title_().font.color,
    },
    alignment: (horizontalAlignment) ? { horizontal: horizontalAlignment } : undefined,
    indent: (omitIndent) ? undefined : { left: 2, right: 2 },
  });

}

function Label_(value, required, row, column, height, width, omitIndent, applyBorder) {
  /*
   *  arguments:  value[, required[, row[, column[, height[, width[, omitIndent[, applyBorder]]]]]]]
   *
   *  value        ->  string
   *  required     ->  boolean, determines if label points at required field
   *  row          ->  integer (>0)
   *  column       ->  integer (>0)
   *  height       ->  integer (>0)
   *  width        ->  integer (>0)
   *  omitIndent   ->  boolean, if true indent will not be applied
   *  applyBorder  ->  boolean, if true border will be applied
   *
   */

  if (value && typeof value == 'string') {

    var fontColor = '#666666';
    if (required) {
      value += ' *';
      fontColor = '#134f5c';
    }

    return new RangeDescription(value, row, column, {
      height: (height) ? height : undefined,
      width: (width) ? width : undefined,
      wrapStrategy: (!height && !width && !applyBorder) ? SpreadsheetApp.WrapStrategy.OVERFLOW : undefined,
      alignment: { horizontal: 'right' },
      font: { family: 'Roboto', color: fontColor },
      border: (applyBorder) ? {
        top: true,
        left: true,
        bottom: true,
        right: true,
        color: Title_().font.color,
      } : undefined,
      indent: (omitIndent) ? undefined : { right: 2 },
    });

  }

}

function Cell_(value, row, column, height, width, numberFormat, horizontalAlignment, omitIndent) {
  /*
   *  arguments:  [value[, row[, column[, height[, width[, numberFormat[, horizontalAlignment[, omitIndent]]]]]]]]
   *
   *  value                ->  any type
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *  numberFormat         ->  string reprsenting format pattern
   *  horizontalAlignment  ->  selection op string options "left", "right" and "center" to override existing setting
   *  omitIndent           ->  boolean, if true indent will not be applied
   *
   */

  return new RangeDescription(value, row, column, {
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    numberFormat: (numberFormat) ? numberFormat : undefined,
    font: { family: 'Poppins', size: 11 },
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: Title_().font.color,
    },
    alignment: (horizontalAlignment) ? { horizontal: horizontalAlignment } : undefined,
    indent: (omitIndent) ? undefined : { left: 2, right: 2 },
  });

}

function InputRequired_(value, row, column, height, width, validation, numberFormat, horizontalAlignment, unprotected) {
  /*
   *  arguments:  [value [,row[, column[, height[, width[, validation[, numberFormat[, horizontalAlignment[, unprotected]]]]]]]]]
   *
   *  value                ->  any type
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *  validation           ->  data validation object
   *  numberFormat         ->  string reprsenting format pattern
   *  horizontalAlignment  ->  selection op string options "left", "right" and "center" to override existing setting
   *  unprotected          ->  boolean, if false the range will be protected along with protected sheet
   *
   */

  if (unprotected == undefined) unprotected = true;

  return new RangeDescription(value, row, column, {
    tag: 'input',
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    numberFormat: (numberFormat) ? numberFormat : undefined,
    font: { family: 'Poppins', size: 11, weight: 'bold' },
    background: '#c9daf8',
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: Title_().font.color,
    },
    alignment: (horizontalAlignment) ? { horizontal: horizontalAlignment } : undefined,
    validation: (validation) ? validation : undefined,
    unprotected: unprotected,
  });

}

function InputOptional_(value, row, column, height, width, validation, numberFormat, horizontalAlignment, unprotected) {
  /*
   *  arguments:  [value [,row[, column[, height[, width[, validation[, numberFormat[, horizontalAlignment[, unprotected]]]]]]]]]
   *
   *  value                ->  any type
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *  validation           ->  data validation object
   *  numberFormat         ->  string reprsenting format pattern
   *  horizontalAlignment  ->  selection op string options "left", "right" and "center" to override existing setting
   *  unprotected          ->  boolean, if false the range will be protected along with protected sheet
   *
   */

  if (unprotected == undefined) unprotected = true;

  return new RangeDescription(value, row, column, {
    tag: 'input',
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    numberFormat: (numberFormat) ? numberFormat : undefined,
    font: { family: 'Poppins', size: 11, weight: 'bold' },
    background: '#d0e0e3',
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: Title_().font.color,
    },
    alignment: (horizontalAlignment) ? { horizontal: horizontalAlignment } : undefined,
    validation: (validation) ? validation : undefined,
    unprotected: unprotected,
  });

}

function InputAction_(value, row, column, height, width, validation) {
  /*
   *  arguments:  [value [,row[, column[, height[, width[, validation]]]]]]
   *
   *  value       ->  any type
   *  row         ->  integer (>0)
   *  column      ->  integer (>0)
   *  height      ->  integer (>0)
   *  width       ->  integer (>0)
   *  validation  ->  data validation object
   *
   */

  return new RangeDescription(value, row, column, {
    tag: 'input',
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    font: { family: 'Poppins', color: 'blue', size: 11, weight: 'bold' },
    background: '#d9ead3',
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: Title_().font.color,
    },
    validation: (validation) ? validation : undefined,
    unprotected: true,
  });

}

function Checkbox_(row, column, value, horizontalAlignment, applyBorder, height, width) {
  /*
   *  arguments:  [row[, column[, value[, horizontalAlignment[, applyBorder[, height[, width]]]]]]]
   *
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  value                ->  boolean (false by default)
   *  horizontalAlignment  ->  selection op string options "left", "right" and "center" to override existing setting
   *  applyBorder          ->  boolean, if true border will be applied
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *
   */

  if (value == undefined) value = false;

  return new RangeDescription(value, row, column, {
    tag: 'input',
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    font: { color: Label_('/').font.color },
    numberFormat: new Formats().auto,
    border: (applyBorder) ? {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: Title_().font.color,
    } : undefined,
    alignment: (horizontalAlignment) ? { horizontal: horizontalAlignment } : undefined,
    validation: buildValidation(['checkbox']),
    unprotected: true,
  });

}

function Message_(message, row, column, height, width) {
  /*
   *  arguments:  [message[, row[, column[, height[, width]]]]]
   *
   *  message              ->  string
   *  row                  ->  integer (>0)
   *  column               ->  integer (>0)
   *  height               ->  integer (>0)
   *  width                ->  integer (>0)
   *
   */

  return new RangeDescription(message, row, column, {
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    font: { family: 'Inconsolata', size: 11, color: '#cccccc' },
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: '#cccccc',
      style: SpreadsheetApp.BorderStyle.DOUBLE,
    },
  });

}

function Info_(info, row, column, height, width, background, color) {
  /*
   *  arguments:  [info[, row[, column[, height[, width]]]]]
   *
   *  info        ->  string
   *  row         ->  integer (>0)
   *  column      ->  integer (>0)
   *  height      ->  integer (>0)
   *  width       ->  integer (>0)
   *  background  ->  string, representing color
   *  color       ->  string, representing color
   *
   */

  return new RangeDescription(info, row, column, {
    height: (height) ? height : undefined,
    width: (width) ? width : undefined,
    font: { family: 'Roboto', color: (color) ? color : '#666666', style: 'italic' },
    background: (background) ? background : undefined,
    border: {
      top: true,
      left: true,
      bottom: true,
      right: true,
      color: '#999999',
      style: SpreadsheetApp.BorderStyle.DOTTED,
    },
    alignment: { horizontal: 'left' },
    indent: { 'left': 1 },
  });

}

function Separator_(direction, row, column, length) {
  /*
   *  arguments:  direction, start, length
   *
   *  direction  ->  string, either "vertical" or "horizontal"
   *  row        ->  integer (>0)
   *  column     ->  integer (>0)
   *  length     ->  integer (>0), height if vertical, width if horizontal
   *
   */

  var separator = new RangeDescription(undefined, row, column, {
    mustMerge: false,
    border: {
      color: '#cccccc',
      style: SpreadsheetApp.BorderStyle.SOLID_MEDIUM,
    },
  });

  switch (direction) {
    case 'vertical':
      separator.height = length;
      separator.border.right = true;
      break;
    case 'horizontal':
      separator.width = length;
      separator.border.bottom = true;
      break;
  }

  return separator;

}


/** Misc **/

function applyLabel() {

  var u;

  var value = this.label.value;

  var prop;

  switch (this.purpose) {
    case 'required':
    case 'optional':
    case 'action':
    case 'checkbox':
      prop = 'input';
      break;
    default: prop = 'text_range';
  }

  var required = (this.purpose == 'required') ? true : false,
      noIndent = (this.purpose == 'checkbox') ? true : false;

  return Label_(value, required, this[prop].row, col(this[prop].column) - 1, u, u, noIndent);

}

function applyInput() {

  var u;

  var input;

  var value = (isPropDefined(this.input, 'value')) ? this.input.value : '',
      row = this.input.row,
      column = col(this.input.column),
      height = (isPropDefined(this.input, 'height')) ? this.input.height : u,
      width = (isPropDefined(this.input, 'width')) ? this.input.width : u,
      validation = (isPropDefined(this.input, 'validation')) ? this.input.validation : u,
      numberFormat = (isPropDefined(this.input, 'numberFormat')) ? this.input.numberFormat : u,
      horizontalAlignment = (isPropDefined(this.input, 'horizontalAlignment')) ? this.input.horizontalAlignment : u,
      applyBorder = (isPropDefined(this.input, 'applyBorder')) ? this.input.applyBorder : u,
      unprotected = (isPropDefined(this.input, 'unprotected')) ? this.input.unprotected : u;

  switch (this.purpose) {
    case 'required':
      input = InputRequired_(value, row, column, height, width, validation, numberFormat, horizontalAlignment, unprotected);
      break;
    case 'optional':
      input = InputOptional_(value, row, column, height, width, validation, numberFormat, horizontalAlignment, unprotected);
      break;
    case 'action':
      input = InputAction_(value, row, column, height, width, validation);
      break;
    case 'checkbox':
      input = Checkbox_(row, column, value, horizontalAlignment, applyBorder, height, width);
      break;
  }

  return input;

}

function applyTextRange() {

  var u;

  var textRange;

  var value = (isPropDefined(this.text_range, 'value')) ? this.text_range.value : '',
      row = this.text_range.row,
      column = col(this.text_range.column),
      height = (isPropDefined(this.text_range, 'height')) ? this.text_range.height : u,
      width = (isPropDefined(this.text_range, 'width')) ? this.text_range.width : u,
      numberFormat = (isPropDefined(this.text_range, 'numberFormat')) ? this.text_range.numberFormat : u,
      horizontalAlignment = (isPropDefined(this.text_range, 'horizontalAlignment')) ?
                            this.text_range.horizontalAlignment : u,
      omitIndent = (isPropDefined(this.text_range, 'omitIndent')) ? this.text_range.omitIndent : u,
      background = (isPropDefined(this.text_range, 'background')) ? this.text_range.background : u,
      color = (isPropDefined(this.text_range, 'color')) ? this.text_range.color : u;

  switch (this.purpose) {
    case 'title':
      textRange = Title_(value, row, column, height, width, horizontalAlignment, omitIndent);
      break;
    case 'header_main':
      textRange = HeaderMain_(value, row, column, height, width, horizontalAlignment, omitIndent);
      break;
    case 'header':
      textRange = Header_(value, row, column, height, width, horizontalAlignment, omitIndent);
      break;
    case 'table_label':
      textRange = Label_(value, required, row, column, height, width, omitIndent, true);
      break;
    case 'cell':
      textRange = Cell_(value, row, column, height, width, numberFormat, horizontalAlignment, omitIndent);
      break;
    case 'message':
      textRange = Message_(value, row, column, height, width);
      break;
    case 'info':
      textRange = Info_(value, row, column, height, width, background, color);
      break;
  }

  return textRange;

}




/**
 *  Updated:  2019-04-16
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
  this.range = new RangeDescription;
  this.range.height = height;
  this.range.width = width;
  this.range.mustMerge = false;
  this.hasGridlines = false;

  // Protection
  this.protection = false;
  /*  must be either false or Protection Object (may be ommitted or deleted)
   *  Protection Object  ->  {
   *    warning      ->  boolean
   *    unprotected  ->  array of unprotected ranges
   *  }
   */

}


/** Builders **/

function buildForm(sheetIdx, formIdx) {
  /*
   *  arguments:  sheetIdx, formIdx
   *
   *  sheetIdx  ->  integer (>=0), representing sheet index in Custom Settings
   *  formIdx   ->  integer (>=0), representing form index in list of forms in sheet
   *
   */

  var builtForm = new Object;

  var settings = new Settings;
      sheetName = Object.keys(settings.sheets)[sheetIdx],
      sheetSettings = settings.sheets[sheetName],
      formProp = Object.keys(sheetSettings.forms)[formIdx],
      form = sheetSettings.forms[formProp],
      keys = Object.keys(form),
      sheetDesc = new SheetDescription,
      rangeDescs = new Array;

  sheetDesc.sheetName = sheetName;
  if (isPropDefined(sheetSettings, 'height')) sheetDesc.height = sheetSettings.height;
  if (isPropDefined(sheetSettings, 'width')) sheetDesc.width = col(sheetSettings.width);
  if (isPropDefined(sheetSettings, 'rowHeight')) sheetDesc.rowHeight = sheetSettings.rowHeight;
  if (isPropDefined(sheetSettings, 'columnWidth')) sheetDesc.columnWidth = sheetSettings.columnWidth;
  if (isPropDefined(sheetSettings, 'frozenRows')) sheetDesc.frozenRows = sheetSettings.frozenRows;
  if (isPropDefined(sheetSettings, 'frozenColumns')) sheetDesc.frozenColumns = col(sheetSettings.frozenColumns);
  if (isPropDefined(sheetSettings, 'protection')) sheetDesc.protection = sheetSettings.protection;

  for (var i = 0; i < keys.length; i++) {
    if (isPropDefined(form[keys[i]], 'setLabel')) rangeDescs.push(form[keys[i]].setLabel());
    if (isPropDefined(form[keys[i]], 'setInput')) rangeDescs.push(form[keys[i]].setInput());
    if (isPropDefined(form[keys[i]], 'setTextRange')) rangeDescs.push(form[keys[i]].setTextRange());
  }

  if (isPropDefined(sheetSettings, 'separators')) {
    var separators = sheetSettings.separators;
    if (Array.isArray(separators) && separators.length)
      rangeDescs = rangeDescs.concat(separators);
  }

  builtForm.sheetDesc = sheetDesc;
  builtForm.rangeDescs = rangeDescs;

  return builtForm;

}

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
   *  rangeArr  ->  array of ranges to build
   *  isNew     ->  boolean (false by default)
   */

  if (!isNew) isNew = false;

  var ss = SpreadsheetApp.getActive();
  var sheet, unprotected1 = [], unprotected2 = [];

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

  var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
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
    border: { top: false, right: false, bottom: false, left: false },
    font: { color: new RangeDescription().background }
  }));

}

function ssHasSheetWithName(sheetName, ss) {
  /*
   *  arguments:  sheetName[, ss]
   *
   *  sheetName  ->  string, sheet name to look for in spreadsheet
   *  ss         ->  spreadsheet
   *
   */

  if (ss == undefined) ss = SpreadsheetApp.getActiveSpreadsheet();

  var sheets = ss.getSheets(),
      hasSheet = false;

  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getName() == sheetName) {
      hasSheet = true;
      break;
    }
  }

  return hasSheet;

}




/**
 *  Updated:  2019-04-12
 */


/** Formats **/

function Formats() {

  this.auto = '0.###############';
  this.text = '@';
  this.date = {
    reversed: 'yyyy-mm-dd',
    us: 'mm/dd/yyyy',
    intl: 'dd.mm.yyyy',
    month_short: 'mmm d, yyyy',
    month_long: 'mmmm d, yyyy',
  };
  this.dollar = {
    no_text: [
      '$#,##0.00;;;',
      '$#,##0.00;($#,##0.00);;',
      '$#,##0.00;($#,##0.00);$0.00;'
    ],
    text_allowed: [
      '$#,##0.00;;',
      '$#,##0.00;($#,##0.00);',
      '$#,##0.00;($#,##0.00);$0.00'
    ],
  };

}


/** Converters **/

function convertLocalDateToEST(params) {
  /*
   *  arguments:  [params]
   *
   *  paramas  ->  string representing time parameters
   *
   */

  var date;

  if (params != undefined) date = new Date(params);
    else date = new Date;

  return new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));

}

function convertDateToString(date, format) {
  /*
   *  arguments:  date, format
   *
   *  date    ->  date object to convert to string
   *  format  ->  string as date format representation
   *
   */

  var dateStr;

  var yyyy = date.getFullYear(),
      yy = date.getYear(),
      month = date.getMonth(),
      calendarDay = date.getDate(),
      weekDay = date.getDay(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

  var ap_ = /\bam\/pm\b/gi, ap = 'AM';

  if (format.search(ap) > -1 && hours > 12) {
    hours = hours - 12;
    ap = 'PM';
  }

  var months = {
    short: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    long: [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ],
  };

  var weekDays = {
    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    long: [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
  };

  dateStr = format
              .replace(/\byyyy\b/gi, yyyy)
              .replace(/\byy\b/gi, yy)
              .replace(/\bmmmm\b/gi, months.long[month])
              .replace(/\bmmm\b/gi, months.short[month])
              .replace(/\bmm\b/g, ((month + 1) < 10) ? '0' + (month + 1) : month + 1)
              .replace(/\bm\b/gi, month + 1)
              .replace(/\bdddd\b/gi, weekDays.long[weekDay])
              .replace(/\bddd\b/gi, weekDays.short[weekDay])
              .replace(/\bdd\b/gi, (calendarDay < 10) ? '0' + calendarDay : calendarDay)
              .replace(/\bd\b/gi, calendarDay)
              .replace(/\bHH\b/g, (hours < 10) ? '0' + hours : hours)
              .replace(/\bMM\b/g, (minutes < 10) ? '0' + minutes : minutes)
              .replace(/\bSS\b/g, (seconds < 10) ? '0' + seconds : seconds)
              .replace(ap_, ap);;

  return dateStr;

}

function convertDateStringReversedToUS(reversedDateStr) {
  /*
   *  arguments:  reversedDateStr
   *
   *  reversedDateStr  ->  string representing date pattern "yyyy-mm-dd"
   *
   */

  if (
    reversedDateStr && typeof reversedDateStr == 'string' &&
    reversedDateStr.length == 10 &&
    reversedDateStr.search('-') == 4 &&
    reversedDateStr.lastIndexOf('-') == 7
  )
  {
    var d = reversedDateStr.split('-');
    return d[1] + '/' + d[2] + '/' + d[0];
  }

}




/**
 *  Updated:  2019-04-10
 */


/** Simplifiers **/

function abc_() {
  return [
           , 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'
           , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
         ];
}

function col(ltr_num, isUC) {
  /*
   *  arguments:  ltr_num[, isUC]
   *
   *  ltr_num  ->  string of letters (len<=2)  ||  integer (>0,len<=2)
   *  isUC     ->  boolean determining if return column must be presented in upper case
   *
   */

  var abc = abc_();

  if (typeof ltr_num == 'string') {

    var colIdx,
        ltr = ltr_num.toLowerCase();
    if (ltr.length == 2) colIdx = abc.indexOf(ltr[0]) * 26 + abc.indexOf(ltr[1]);
      else colIdx = abc.indexOf(ltr[0]);
    return colIdx;

  } else if (typeof ltr_num == 'number') {

    var ltr, num = ltr_num;
    if (num > 26) ltr = abc[quotient(num, 26)] + abc[num % 26];
      else ltr = abc[num];
    if (isUC) ltr = ltr.toUpperCase();
    return ltr;

  }

}

function quotient(n1, n2) {
  /*
   *  arguments:  n1, n2
   *
   *  n1  ->  integer
   *  n2  ->  integer
   *
   */

  return (n1 - (n1 % n2)) / n2;

}

function clone(source) {
  /*
   *  arguments:  source
   *
   *  source  ->  object to clone
   *
   */

  var target = new Object();

  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }

  return target;

}

function isPropDefined(source, prop) {
  /*
   *  arguments:  source, prop
   *
   *  source  ->  object to test
   *  prop    ->  string representing object's property
   *
   */

  return source.hasOwnProperty(prop) && source[prop] != undefined;

}


/** Polyfills **/

// String

function polyfills__String_repeat() {
  /*
   *  source:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
   *
   */

  if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
      'use strict';
      if (this == null)
        throw new TypeError('can\'t convert ' + this + ' to object');

      var str = '' + this;
      // To convert string to integer.
      count = +count;
      // Check NaN
      if (count != count)
        count = 0;

      if (count < 0)
        throw new RangeError('repeat count must be non-negative');

      if (count == Infinity)
        throw new RangeError('repeat count must be less than infinity');

      count = Math.floor(count);
      if (str.length == 0 || count == 0)
        return '';

      // Ensuring count is a 31-bit integer allows us to heavily optimize the
      // main part. But anyway, most current (August 2014) browsers can't handle
      // strings 1 << 28 chars or longer, so:
      if (str.length * count >= 1 << 28)
        throw new RangeError('repeat count must not overflow maximum string size');

      var maxCount = str.length * count;
      count = Math.floor(Math.log(count) / Math.log(2));
      while (count) {
         str += str;
         count--;
      }
      str += str.substring(0, maxCount - str.length);
        return str;
    }
  }

}
