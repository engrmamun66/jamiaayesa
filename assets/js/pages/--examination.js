$(document).ready(function(){

    var top_tabs = $(".exam-page-top-tabs p");
    $(top_tabs).on('click', function(){
        $(this).parent().parent().find('p').removeClass('active animate__animated animate__pulse');
        $(this).addClass('active animate__animated animate__pulse');

        var view = $(this).attr('view');
        var target = $("#page-examination .top-tabs-target div[sub1="+ view +"]");
        $(target).siblings().hide(200);
        $(target).show(200);
        
        pushState('?page=examination&sub1='+ view +'&lan=' + php_url_params['lan'])
        
    });



    // class routin
    var selection = $("select#class-routin");
    var object = $("#class-routin-object");
    var embed = $("#class-routin-embed");   

    $(selection).on("change", function(){  
        var value = $(this).val();
        (object).attr("data", value);
        (embed).attr("src", value);
    }); 



    // exam routin
    var selection2 = $("select#exam-routin");
    var object2 = $("#exam-routin-object");
    var embed2 = $("#exam-routin-embed");

    $(selection2).on("change", function(){
        var value = $(this).val();
        (object2).attr("data", value);
        (embed2).attr("src", value);
    }); 


    // exam result
    var selection3 = $("select#exam-result");
    var object3 = $("#exam-result-object");
    var embed3 = $("#exam-result-embed");
    
    $(selection3).on("change", function(){  
        var value = $(this).val();        
        $(object3).attr("data", value);
        $(embed3).attr("src", value);
    });

   
});