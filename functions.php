<?php

require 'function-head.php';

// =======================================================================================

function language_base_list_style(){
    global $cur_language;
    if('bl' == $cur_language){
        echo "list-style-bl";
    }elseif('en' == $cur_language){
        echo "list-style-en";
    }elseif('ar' == $cur_language){
        echo "list-style-ar";
    }
}

function _n(string $number){ 
    global $cur_language;
    $nn = [
        "bl" => [
            0 => "০",
            1 => "১",
            2 => "২",
            3 => "৩",
            4 => "৪",
            5 => "৫",
            6 => "৬",
            7 => "৭",
            8 => "৮",
            9 => "৯"            
        ],
        "en" => [
            0 => "0",
            1 => "1",
            2 => "2",
            3 => "3",
            4 => "4",
            5 => "5",
            6 => "6",
            7 => "7",
            8 => "8",
            9 => "9"
        ],
        "ar" => [
            0 => "٠",
            1 => "١",
            2 => "٢",
            3 => "٣",
            4 => "٤",
            5 => "٥",
            6 => "٦",
            7 => "٧",
            8 => "٨",
            9 => "٩"
        ]
        ];
    
    $len = strlen($number);    
    // if(!$len) return;
    $result = "";
    for ($i = 0; $i < $len; $i++) {
        $num = substr($number, $i, 1);
        if(!is_numeric($num)) return;
        $result .= $nn[$cur_language][(int) $num];
    }
    echo $result;
}

function _rtl(string $className=''){
    global $cur_language;

    $className = " " . $className;
    
    if('ar' == $cur_language && strpos($className, '-rtl')){
        echo  $className;
        return;     
    } 
    
    if('ar' == $cur_language && !strpos($className, '-rtl')){
        echo $className . "-rtl";
    } else {
        echo $className;
    }
}

function rtl_padding(int $padding_index){
    global $cur_language;    
    
    if('ar' == $cur_language){
        echo  'pr-' . $padding_index;
    }else{
        echo  'pl-' . $padding_index;
    }    
}


function _rtlp(string $padding_class=''){ // example pl-4
    // for padding
    global $cur_language;

    $explod = explode('-', $padding_class);

    if($explod[0] != 'pl') {
        echo $padding_class;
        return;
    }

    if ('ar' == $cur_language) {
        echo "pr-" . $explod[1];
    } else {
        echo $padding_class;
    }
}


?>