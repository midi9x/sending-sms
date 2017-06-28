(function() {
    'use strict';
    // DOM
    var numberField = document.querySelector('input[name=number]');
    var textField = document.querySelector('input[name=text]');
    var button = document.querySelector('input[type=button]');
    var msg = document.querySelector('.response');

    // UI Events
    textField.addEventListener('keyup', function(e) {
        (e.keyCode || e.charCode) === 13 && send()
    }, false);
    button.addEventListener('click', send, false);

    // Send data to server to send a SMS via Nexmo
    function send() {
        var number = numberField.value.replace(/\D/g,''); // Remove all non-numeric chars
        if (!number) return;

        var text = textField.value || 'Hello!';

        if(!self.fetch) {
            alert("Bummer, your browser doesn't support Fetch API!");
            return;
            // Ideally, use XHR as the fallback for fetch.
        }

        fetch('/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number: number,
                text: text
            })
        })
        .then(function(res){ 
            document.getElementById("response").innerHTML = "Gửi thành công!";
        })
        .catch(function(error){ 
            document.getElementById("response").innerHTML = "Gửi thất bại!";
        });
    }
})();
