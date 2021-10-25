$(document).ready(function(){
    
    // =========== Main page show/hide controlling by data attributes
    if("home" == php_url_params.page){
        $("#all-pages-contents section").first().show(); 
        $("#all-pages-contents section").first().siblings().hide();
    }
    
    $site_pages = ["introduction",
                "education",
                "admission",
                "examination",
                "fatua",
                "audio",
                "notice",
                "donation",
                "contact",
    ]
    

    //  introduction ------------------------- page
    //  introduction ========== click h5
    $("#page-introduction .table-of-contents h5").on('click', function(event){          
        $("#page-introduction div").show(500);
        $(this).siblings().css({background:""});
        pushState("?page=introduction&sub1=1"); 
    });    
    //  introduction ========== table-of-contents
    $("#page-introduction .table-of-contents div p").on('click', function(event){
        controll_page_navigation_from_table_content($(this), "introduction", event);         
    })
 

    
      
    //  education ------------------------- page
    //  education ========== click h5
    $("#page-education .table-of-contents h5").on('click', function(event){          
        $("#page-education div").show(500);
        $(this).siblings().css({background:""});
        pushState("?page=education&sub1=1"); 
    });    
    //  education ========== table-of-contents
    $("#page-education .table-of-contents div p").on('click', function(event){
        controll_page_navigation_from_table_content($(this), "education", event);         
    })


      
    //  admission ------------------------- page
    //  admission ========== click h5
    $("#page-admission .table-of-contents h5").on('click', function(event){          
        $("#page-admission div").show(500);
        $(this).siblings().css({background:""});
        pushState("?page=admission&sub1=1"); 
    });    
    //  admission ========== table-of-contents
    $("#page-admission .table-of-contents div p").on('click', function(event){
        controll_page_navigation_from_table_content($(this), "admission", event);         
    })

      
    //  fatua ------------------------- page
    //  fatua ========== click h5
    $("#page-fatua .table-of-contents h5").on('click', function(event){          
        $("#page-fatua div").show(500);
        $(this).siblings().css({background:""});
        pushState("?page=fatua&sub1=1"); 
    });    
    //  fatua ========== table-of-contents
    $("#page-fatua .table-of-contents div p").on('click', function(event){
        controll_page_navigation_from_table_content($(this), "fatua", event);         
    })
 

       
    //  notice ------------------------- page
    //  notice ========== click h5
    $("#page-notice .table-of-contents h5").on('click', function(event){          
        $("#page-notice div").show(500);
        $(this).siblings().css({background:""});
        pushState("?page=notice&sub1=1"); 
    });    
    //  notice ========== table-of-contents
    $("#page-notice .table-of-contents div p").on('click', function(event){
        controll_page_navigation_from_table_content($(this), "notice", event);         
    })
       
    //  donation ------------------------- page
    //  donation ========== click h5
    $("#page-donation .table-of-contents h5").on('click', function(event){          
        $("#page-donation div").show(500);
        $(this).siblings().css({background:""});
        pushState("?page=donation&sub1=1"); 
    });    
    //  donation ========== table-of-contents
    $("#page-donation .table-of-contents div p").on('click', function(event){
        controll_page_navigation_from_table_content($(this), "donation", event);         
    })
      
    
});




