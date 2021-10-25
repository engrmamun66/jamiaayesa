$(document).ready(function(){
    
    $("#page-fatua .fatua .qes-and-ans p").on('click', function(){
        

        if($(this).attr('class') !== "reference"){
            
            $(this).parent().siblings().find("div").removeClass('active');
            $(this).parent().find("div").addClass('active');           
    
            $(this).parent().parent().find('.question').removeClass('active')
            $(this).addClass('active').addClass('animate__animated')
    
            $(this).parent().parent().find('span').removeClass('icon3').addClass('icon2')
            $(this).find('span').removeClass('icon2').addClass('icon3')

            $(this).parent().parent().siblings().removeClass('animate__animated animate__slideInUp');
            $(this).siblings().addClass('animate__animated animate__slideInUp');  
            return;

        }
        
    });

    
});

