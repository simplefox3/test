// ==UserScript==
// @name        百度重定向
// @description 百度重定向，解决一部分用户baidu无法拦截辣鸡网站的问题。
// @author      zhang6666j
// @icon        https://www.baidu.com/favicon.ico
// @version     1.4
// @include       *://www.baidu.com/
// @exclude       *://www.baidu.com/?tn=44004473_41_oem_dg
// @grant       none
// @license     MIT
// @namespace https://greasyfork.org/users/894511
// ==/UserScript==
 
window.location.replace('//www.baidu.com/?tn=44004473_41_oem_dg');
