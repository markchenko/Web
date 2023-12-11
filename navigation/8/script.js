$(document).ready(function() {
    var $popup = $('#popup');
    var $openFormBtn = $('#openFormBtn');
    var $feedbackForm = $('#feedbackForm');
    var $responseMessage = $('#responseMessage');

    // Проверка поддержки LocalStorage
    function supportsLocalStorage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

   
    if (supportsLocalStorage()) {
        if (localStorage.getItem('feedbackFormData')) {
            var formData = JSON.parse(localStorage.getItem('feedbackFormData'));
          
            $('#fullName').val(formData.fullName);
            $('#email').val(formData.email);
            $('#phone').val(formData.phone);
            $('#organization').val(formData.organization);
            $('#message').val(formData.message);
            $('#agreement').prop('checked', formData.agreement);
        }
    }

    // Обработка отправки формы
    $feedbackForm.submit(function(event) {
        event.preventDefault();
        
        var formData = $feedbackForm.serialize();
        
        // Отправка данных на сервер
        $.ajax({
            type: 'POST',
            url: 'https://formcarry.com/s/wa5jL-RNxy', 
            data: formData,
            success: function(response) {
                $responseMessage.text('Форма успешно отправлена');
                $feedbackForm[0].reset(); // Очистка формы
                if (supportsLocalStorage()) {
                    localStorage.removeItem('feedbackFormData'); 
                }
            },
            error: function(xhr, status, error) {
                if (xhr.status === 406) {
                    $responseMessage.text('Ошибка на сервере');
                } else {
                    $responseMessage.text('Произошла ошибка при отправке формы');
                }
                
            }
        });
    });

 
    $openFormBtn.click(function() {
        $popup.show();
        history.pushState({ formOpen: true }, "", "#form");
    });

    window.onpopstate = function(event) {
        if (!event.state || !event.state.formOpen) {
            $popup.hide();
        }
    };
   
    
   
    $feedbackForm.on('input change', function() {
        if (supportsLocalStorage()) {
            var formData = {
                fullName: $('#fullName').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                organization: $('#organization').val(),
                message: $('#message').val(),
                agreement: $('#agreement').prop('checked')
            };
            localStorage.setItem('feedbackFormData', JSON.stringify(formData));
        }
    });

    
});



