/**
 * dhdjencode
 * @author lixworth
 * @copyright @dhdjfoundation
 * @param str
 * @returns {*}
 */
var sha1 = require('sha1')
var md5 = require('md5')
var base64url = require('base64-url')
var urlencode = require('urlencode')

function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
            len++;
        }
        else {
            len+=2;
        }
    }
    return len;
}

function dhdjencode(str){
    return md5(sha1(base64url.encode(md5(urlencode(md5(sha1(sha1(md5(md5(urlencode(md5(strlen(str))+md5(str)+md5(str.substr(0,1)+md5(md5(str))+urlencode(str))))))))+sha1(sha1(str))))))+sha1(md5(urlencode(base64url.encode(md5("key"))))))
}

console.log(dhdjencode("Hacking to the Gate+")) //ep
