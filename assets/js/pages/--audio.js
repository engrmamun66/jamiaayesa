$(document).ready(function(){
    
    $("#page-audio .audio-leftside ").on('click', function(event){        
        event.preventDefault();
        
        
    });

    $("#page-audio .audio-rightside .audio-list p a").on('click', function(event){        
        event.preventDefault();
        var href = $(this).attr('source');
        var text = $(this).text();
        song.src = href;
        stop();
        playpause();
        $('#player-audio-title').text(text);
        
        var author = $(this).attr('author');
        $('#audio-author').text("(" + author + ")");

        // var table_of_content = $("#page-audio .audio-rightside");
        // table_of_content.find('div .audio-list p').css({background:"", color:""});
        // table_of_content.find('div .audio-list:eq('+ Number(params.sub1-1) +') p:first').css({background:"rgb(217, 248, 241, .94)", color:'#555'}); 
        $("#page-audio .audio-rightside .audio-list").find('p').css({background:"", color:""});
        $(this).parent().css({background:"rgb(217, 248, 241, .94)", color:'#555'}); 

        
    });

   $(".always_on_top_toggler span").on('click', function(){  
       $("#audio-player").removeClass("animate__animated animate__fadeOutDown animate__zoomIn");

       $("#audio-player").toggleClass("animate__animated animate__fadeOutDown");
       setTimeout(() => {
           $("#audio-player").toggleClass("animate__fadeOutDown animate__zoomIn fixed");
       }, 500);

   });

    
});

