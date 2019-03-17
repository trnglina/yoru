// The MIT License (MIT)
//
// Copyright (c) 2013 Kelly Martin
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define([],b):'object'==typeof exports?exports.smartquotes=b():a.smartquotes=b()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=3)}([function(a,b,c){'use strict';var d=c(1);a.exports=function(a,b){return b=b||{},d.forEach(function(c){var d='function'==typeof c[1]?c[1](b.retainLength):c[1];a=a.replace(c[0],d)}),a}},function(a){'use strict';a.exports=[[/'''/g,function(a){return'\u2034'+(a?'\u2063\u2063':'')}],[/(\W|^)"(\w)/g,'$1\u201C$2'],[/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g,'$1\u201D$2'],[/([^0-9])"/g,'$1\u201D'],[/''/g,function(a){return'\u2033'+(a?'\u2063':'')}],[/(\W|^)'(\S)/g,'$1\u2018$2'],[/([a-z])'([a-z])/ig,'$1\u2019$2'],[/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig,'\u2019$2$3'],[/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig,'$1\u2019$3'],[/(\B|^)\u2018(?=([^\u2018\u2019]*\u2019\b)*([^\u2018\u2019]*\B\W[\u2018\u2019]\b|[^\u2018\u2019]*$))/ig,'$1\u2019'],[/"/g,'\u2033'],[/'/g,'\u2032']]},function(a,b,c){'use strict';function d(a){if(-1===['CODE','PRE','SCRIPT','STYLE'].indexOf(a.nodeName.toUpperCase())){var b,c,h,i='',j=a.childNodes,k=[];for(b=0;b<j.length;b++)c=j[b],c.nodeType===g||'#text'===c.nodeName?(k.push([c,i.length]),i+=c.nodeValue||c.value):c.childNodes&&c.childNodes.length&&(i+=d(c));for(b in i=f(i,{retainLength:!0}),k)h=k[b],h[0].nodeValue?h[0].nodeValue=e(i,h[0].nodeValue,h[1]):h[0].value&&(h[0].value=e(i,h[0].value,h[1]));return i}}function e(a,b,c){return a.substr(c,b.length).replace('\u2063','')}var f=c(0),g='undefined'!=typeof Element&&Element.TEXT_NODE||3;a.exports=function(a){return d(a),a}},function(a,b,c){'use strict';function d(a){return'undefined'!=typeof document&&'undefined'==typeof a?(g.runOnReady(function(){return f(document.body)}),d):'string'==typeof a?h(a):f(a)}var e=c(1),f=c(2),g=c(4),h=c(0);a.exports=d,a.exports.string=h,a.exports.element=f,a.exports.replacements=e,a.exports.listen=g},function(a,b,c){'use strict';function d(a){var b=new MutationObserver(function(a){a.forEach(function(a){var b,c=!0,d=!1;try{for(var f,g,h=a.addedNodes[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,e(g)}catch(a){d=!0,b=a}finally{try{!c&&h.return&&h.return()}finally{if(d)throw b}}})});return d.runOnReady(function(){b.observe(a||document.body,{childList:!0,subtree:!0})}),b}var e=c(2),f=c(0);d.runOnReady=function(a){if('loading'!==document.readyState)a();else if(document.addEventListener)document.addEventListener('DOMContentLoaded',a,!1);else var b=setInterval(function(){'loading'!==document.readyState&&(clearInterval(b),a())},10)},a.exports=d}])});
