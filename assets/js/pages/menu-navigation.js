$(document).ready(function(){

    let OBJ = {
        from_php: php_url_params,
        site_url : window.location.protocol + "//" + window.location.host + window.location.pathname,
        query_params: ''       
    }
    // preloader handle
    setTimeout(() => {
        $("#preloader").fadeTo(500, 0);
        setTimeout(() => {
            $("#preloader").hide();
        }, 500);
    }, 1000);

    // Logo hover
    $(".mr-middle-header .mr-logo-area-middle").mouseenter(function(){
        $(this).addClass("animate__animated animate__pulse");
    })
    $(".mr-top-header, .mr-menu-header, #all-pages-contents").mouseenter(function(){
        $(".mr-middle-header .mr-logo-area-middle").removeClass("animate__animated animate__pulse");
    })
    // Logo click
    $(".mr-middle-header .mr-logo-area-middle").on('click', function(){
        var url = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.location.replace(url + OBJ.query_params);
    })


    // Change language with reloading page
    $(".mr-top-header select[name=language]").on("change", function(){
       const site_url = OBJ.site_url;
       var language = $(this).val();
       if('bl' == language){
           window.location.replace(site_url);           
        }else if('en' == language){
           window.location.replace(site_url + "?lan=en");
       }else if('ar' == language){
           window.location.replace(site_url + "?lan=ar");
       }
   })
    // Change language with reloading page
    $(".mr-mobile-device select[name=language]").on("change", function(){
       const site_url = OBJ.site_url;
       var language = $(this).val();
       if('bl' == language){
           window.location.replace(site_url);           
        }else if('en' == language){
           window.location.replace(site_url + "?lan=en");
       }else if('ar' == language){
           window.location.replace(site_url + "?lan=ar");
       }
   })


    //footer copy to clipboard
    var message = $(".copy-to-clip");
    message.hide();
    $("footer .mr-footer-links a, footer .mr-bottom-footer-content a").on('click', function(){   
        
        
    }); // |||||

    // clicking menu item (a element), without reloading page, Set query parameters instanly
    $("nav.mr-nav-manu li a").on("click", function(event){
        event.preventDefault();

        // Mian page navigation
        let page = $(this).data('page');        
        var the_page = $("#all-pages-contents section[page="+ page +"]");
        the_page.show(500);
        the_page.siblings().hide(400);
        

        var href = $(this).attr('href');
        var language = $(".mr-top-header select[name=language]").val();
        pushState(href + "&lan=" + language); 
        OBJ.query_params = href + "&lan=" + language;
        
        href = href.replace("?","");
        var words = href.split('&');
        var params = {
            page:"", 
            sub1:"", 
            sub2:"", 
            sub3:""
        };
        for(var i=0; i<words.length; i++){
            var item_arr = words[i].split('=');
            var key = item_arr[0];
            var val = item_arr[1];
            if(key == "page") {
                params.page = val;
            }
            if(key == "sub1") {
                params.sub1 = val;
            }
            if(key == "sub2") {
                params.sub2 = val;
            }
            if(key == "sub3") {
                params.sub3 = val;
            }
        }

        // controll_menu_navigation(page, sub1, sub2, sub3); 
        controll_menu_navigation(params.page, params.sub1, params.sub2, params.sub3); 

        var table_of_content = $("#page-" + params.page + " .table-of-contents");
        
        if(params.sub1.length > 0){
            var __sub1 = $("#page-" + params.page + " div[sub1="+ params.sub1 +"]");        
            if(params.sub1.length){
                __sub1.siblings().removeClass("animate__animated animate__bounceOutLeft animate__fadeInUp").hide();
                __sub1.show(300)//.addClass("animate__animated animate__fadeInUp");
            
                table_of_content.find('div p').css({background:"", color:""});
                table_of_content.find('div:eq('+ Number(params.sub1-1) +') p:first').css({background:"rgb(217, 248, 241, .94)", color:'#555'}); 
            }
        }
        
        if(params.sub2.length > 0){
            var __sub2 = $("#page-" + params.page + " div[sub2="+ params.sub2 +"]");    
            if(params.sub2.length){
                __sub2.siblings().hide();
                __sub2.show(300);            
            
                table_of_content.parent().find('p').css({background:"", color:""});
                table_of_content.find('.indise-sub1 p:eq('+ Number(params.sub2-1) +')').css({background:"rgb(217, 248, 241, .94)", color:'#555'}); 
            }
        }


        // Examination page active top-nav        
        $(".exam-page-top-tabs div:eq("+ params.sub1 +")").siblings().find('p').removeClass('active');
        $(".exam-page-top-tabs div:eq("+ params.sub1 +")").find('p').addClass('active');

        console.log(params)



        
        
        

    });
   
    
    // browser initalizing...  >>>>>>>>>>>>>>>
   let page = php_url_params.page;
   let sub1 = php_url_params.sub1;
   let sub2 = php_url_params.sub2;
   let sub3 = php_url_params.sub3;
    // alert(sub2)
   // with-page
  
   var main_page = $("section[page=" + page + "]");
   main_page.siblings().hide()
   main_page.show(); 
   // with-sub1   
   if(sub1.length){
       $("#page-" + page + " div[sub1="+ sub1 +"]").siblings().hide();     
        $("#page-" + page + " div[sub1="+ sub1 +"]").show();
   }
   // with-sub2
   if(sub2.length){
       $("#page-" + page + " div[sub2="+ sub2 +"]").siblings().hide();     
        $("#page-" + page + " div[sub2="+ sub2 +"]").show();
   }
   // with-sub3
 
   if(sub3.length){
       var _three = $("#page-" + page + " div[sub3="+ sub3 +"]");
       if(_three.length){
           console.log("inside");
           $("#page-" + page + " div[sub3="+ sub3 +"]").siblings().hide();  
        $("#page-" + page + " div[sub3="+ sub3 +"]").show();
       }   
  
   }
   
//   controll_menu_navigation
   controll_menu_navigation(page, sub1, sub2, sub3);

   // active examination page top navs
   if(sub1.length){
       $(".exam-page-top-tabs div:eq("+ sub1 +")").find('p').addClass('active');
   }
  

   
});

