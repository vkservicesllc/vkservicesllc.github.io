/**
 *  Updated:  2019-04-12
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
