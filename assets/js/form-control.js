$(document).ready(function() {
       
    $( "#masala_form").on('submit',function( event ) {
        event.preventDefault();
        $(this).validate();
        if(!$(this).valid()) return;

        var data = $(this).serializeArray();
        data.push({name: "action_name", value: 'ask_masala'});
        $(this).removeClass('animate__animated animate__flash animate__pulse');
        var _thisObject = this;        

         $(_thisObject).find('button img').show();

        jQuery.post(php_url_params.baseUrl+'/send-mail.php?lan='+ php_url_params.lan, data, function(response){            
            
            response = JSON.parse(response); 

            $(_thisObject).find('button img').hide();

            if(response['status'] == 'ok'){
                clear_form_fileds(_thisObject);
                $(_thisObject).find('.response_success').text(response['success']).show();
                $(_thisObject).addClass('animate__animated animate__pulse');
            }else{
                $(_thisObject).addClass('animate__animated animate__flash');
                $(_thisObject).find('.response_error').text(response['error']).show();
            }
            setTimeout(() => {
                $(_thisObject).find('.response_error').hide();
                $(_thisObject).find('.response_success').hide();
            }, 4000);
            
                    
        });
    });

    $( "#question_form").on('submit',function( event ) {
        event.preventDefault();
        $(this).validate();
        if(!$(this).valid()) return;

        var data = $(this).serializeArray();
        data.push({name: "action_name", value: 'general_question'});
        $(this).removeClass('animate__animated animate__flash animate__pulse');
        var _thisObject = this;  

        $(_thisObject).find('button img').show();

        jQuery.post(php_url_params.baseUrl+'/send-mail.php?lan='+ php_url_params.lan, data, function(response){
            response = JSON.parse(response);
        
            $(_thisObject).find('button img').hide();
            
            if(response['status'] == 'ok'){
                clear_form_fileds(_thisObject);
                $(_thisObject).find('.response_success').text(response['success']).show();
                $(_thisObject).addClass('animate__animated animate__pulse');
            }else{
                $(_thisObject).addClass('animate__animated animate__flash');
                $(_thisObject).find('.response_error').text(response['error']).show();
            } 
            setTimeout(() => {
                $(_thisObject).find('.response_error').hide();
                $(_thisObject).find('.response_success').hide();
            }, 4000);
            
        });
    });

    
});

function clear_form_fileds(_thisObject){
    $(_thisObject).find('input').val("");
    $(_thisObject).find('textarea').val("");
}

