
document.documentElement.style.setProperty('--animate-duration', '.4s');
// functions
function pushState(queryString){
    if(typeof queryString === 'undefined'){return;}
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryString;            
        window.history.pushState({path:newurl},'',newurl);
    }
}

function controll_menu_navigation(page="", sub1='1', sub2='1', sub3='1' ){ 
    // with main menu active
   var nav = $(".mr-nav-manu");
   //--page
   nav.find('a').removeClass("mr-active-menu");
   nav.find('a[data-page=' + page + ']').first().addClass("mr-active-menu");
   //  --sub1
   nav.find("ul ul li:eq("+ Number(sub1-1) +")").find('a:first').addClass("mr-active-menu");
   //  --sub2
 
   nav.find("ul ul ul li:eq("+ Number(sub2-1) +")").find('a:first').addClass("mr-active-menu");
   //  --sub3
   nav.find("ul ul ul li li li:eq("+ Number(sub3-1) +")").find('a').addClass("mr-active-menu");
  
}

// function controll_page_navigation_from_main_menu (this_obj, page="", event=false){

// }
function controll_page_navigation_from_table_content (this_obj, page="", event=false){   
    //Example: this_obj = $("#page-introduction .table-of-contents div p")
    
   
    event.preventDefault();

    let  sub1  = this_obj.attr('sub1');
    let  sub2  = this_obj.attr('sub2');      

    if(typeof sub2 === "undefined"){
        $("#page-" + page + " div[sub1="+ sub1 +"]").siblings().removeClass("animate__animated animate__bounceOutLeft animate__fadeInUp").hide(500);
        $("#page-" + page + " div[sub1="+ sub1 +"]").show(500).addClass("animate__animated animate__fadeInUp");
        if($("#page-" + page + " div[sub1="+ sub1 +"]").length){
            this_obj.parent().parent().find('p').css({background:"", color:""});
            this_obj.css({background:"rgb(217, 248, 241, .94)", color:'#555'}); 
        }
        if(typeof sub2 === "undefined"){
            $("#page-" + page + " div[sub1="+ sub1 +"] div").show();
        }
    }

    if(typeof sub2 !== "undefined"){  

        $("#page-" + page + " div[sub1="+ sub1 +"]").addClass("animate__animated animate__fadeInUp")
        .show().siblings().hide();        
        $("#page-" + page + " div[sub1="+ sub1 +"]").parents().find('p').css({background:"", color:""});
        
        
        $("#page-" + page + " div[sub2="+ sub2 +"]").siblings().removeClass("animate__animated animate__bounceOutLeft animate__fadeInUp").hide(500);
        $("#page-" + page + " div[sub2="+ sub2 +"]").show(500).removeClass("animate__animated animate__bounceOutLeft animate__fadeInUp").addClass("animate__animated animate__fadeInUp");
        if($("#page-" + page + " div[sub2="+ sub2 +"]").length){
            this_obj.parent().parent().find('p').css({background:"", color:""});
            this_obj.css({background:"rgb(217, 248, 241, .94)", color:'#555'}); 
        }        
    }
    var child = this_obj.find('a:eq(0)'); //catching <a> tag
    if(child.length){
        var href_value = child.attr('href');
        pushState(href_value);
    }
    
}