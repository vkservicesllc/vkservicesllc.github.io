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
