/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/store/Observable",["../_base/kernel","../_base/lang","../when","../_base/array"],function(c,g,p,s){c=function(b){function c(a,u){var d=b[a];d&&(b[a]=function(b){if(k)return d.apply(this,arguments);k=!0;try{var a=d.apply(this,arguments);p(a,function(a){u("object"==typeof a&&a||b)});return a}finally{k=!1}})}var m=[],t=0;b=g.delegate(b);b.notify=function(a,b){t++;for(var d=m.slice(),c=0,l=d.length;c<l;c++)d[c](a,b)};var w=b.query;b.query=function(a,c){c=c||{};var d=w.apply(this,arguments);
if(d&&d.forEach){var k=g.mixin({},c);delete k.start;delete k.count;var l=b.queryEngine&&b.queryEngine(a,k),v=t,q=[],r;d.observe=function(a,k){1==q.push(a)&&m.push(r=function(a,g){p(d,function(e){var d=e.length!=c.count,f,m;if(++v!=t)throw Error("Query is out of date, you must observe() the query prior to any data modifications");var p,n=-1,h=-1;if(void 0!==g){f=0;for(m=e.length;f<m;f++){var r=e[f];if(b.getIdentity(r)==g){p=r;n=f;(l||!a)&&e.splice(f,1);break}}}if(l){if(a&&(l.matches?l.matches(a):l([a]).length))f=
-1<n?n:e.length,e.splice(f,0,a),h=s.indexOf(l(e),a),e.splice(f,1),c.start&&0==h||!d&&h==e.length?h=-1:e.splice(h,0,a)}else a&&(void 0!==g?h=n:c.start||(h=b.defaultIndex||0,e.splice(h,0,a)));if((-1<n||-1<h)&&(k||!l||n!=h)){d=q.slice();for(f=0;e=d[f];f++)e(a||p,n,h)}})});var g={};g.remove=g.cancel=function(){var b=s.indexOf(q,a);-1<b&&(q.splice(b,1),q.length||m.splice(s.indexOf(m,r),1))};return g}}return d};var k;c("put",function(a){b.notify(a,b.getIdentity(a))});c("add",function(a){b.notify(a)});c("remove",
function(a){b.notify(void 0,a)});return b};g.setObject("dojo.store.Observable",c);return c});