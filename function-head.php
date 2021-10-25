<?php

$_baseUrl = $_SERVER['REQUEST_SCHEME'].'://localhost/jamiaayesa';
// $_baseUrl = $_SERVER['REQUEST_SCHEME'].'://jamiaayesa.com';

parse_str(@$_SERVER['QUERY_STRING'], $output);

$cur_language = @$output['lan'];
if ($cur_language == null) $cur_language = "bl";
// page = examination & sub1 = 2 & sub2 = 3 & sub3 = 3 & lan = bl

if (!isset($output['page'])) {
    $output['page'] = "home";
}
if (!isset($output['sub1'])) {
    $output['sub1'] = "";
}
if (!isset($output['sub2'])) {
    $output['sub2'] = ""; 
}
if (!isset($output['sub3'])) {
    $output['sub3'] = "";
}
if (!isset($output['lan'])) {
    $output['lan'] = "bl";
}


$_PAGE = @$output['page'];
$_SUB1 = @$output['sub1'];
$_SUB2 = @$output['sub2'];
$_SUB3 = @$output['sub3'];
$_LAN = @$output['lan'];
if ($_LAN == 'bl') $_forErrMsg = 'এটা পূরণ করা আবশ্যক';
if ($_LAN == 'en')  $_forErrMsg =  'This field is required.';
if ($_LAN == 'ar') $_forErrMsg = 'هذه الخانة مطلوبه';



// echo "<pre>";
// var_dump($_SUB2);
// die();