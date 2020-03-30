'use strict';

module.exports =
  new Date().getTimezoneOffset() === -480 || String(process.env.LC_CTYPE).includes('zh_CN');
