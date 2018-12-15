'use strict';

function forms() {

  let message = {
    loadding: 'Загррузка...',
    soccess: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelectorAll('.form'),
    input = document.getElementsByTagName('input'),
    statusMessege = document.createElement('div');

  for (let i = 0; i < input.length; i++) {
    if (input[i].getAttribute('name') == 'user_phone') {
      input[i].addEventListener('keypress', (e) => {
        if (!/\d/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  // function sendForm(a){
  for (let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', function (event) {
      event.preventDefault();
      form[i].appendChild(statusMessege);
      let formData = new FormData(form[i]);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/x-www-form-urrlencoded');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              //
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              // 
              resolve();
            } else {
              // 
              reject();
            }
          };
          request.send(formData);
        });
      }

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
        setTimeout(function () {
          statusMessege.innerHTML = '';
        }, 2000);
      }


      postData(formData)
        .then(() => statusMessege.innerHTML = message.loadding)
        .then(() => statusMessege.innerHTML = message.soccess)
        .catch(() => statusMessege.innerHTML = message.failure)
        .then(clearInput);
    });
  }
}
module.exports = forms;