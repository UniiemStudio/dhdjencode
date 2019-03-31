<?php
/**
 * Dhdjencode
 * @author dhdj
 * @copyright @dhdjfoundation
 * @param $str
 * @return string
 */
function dhdjencode($str){
    $content = md5(sha1(base64_encode(md5(urlencode(md5(sha1(sha1(md5(md5(urlencode(md5(strlen($str)).md5($str).md5(substr($str,0,1).md5(md5($str)).urlencode($str)))))))).sha1(sha1($str)))))).sha1(md5(urlencode(base64_encode(md5("key"))))));
    return $content;
}

echo dhdjencode("Hacking to the Gate."); //ep