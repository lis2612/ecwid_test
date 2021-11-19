"use strict";

var userForm = document.getElementById('formFB');
var userName = document.getElementById('inpName');
var userBDay = document.getElementById('inpBday');
var userPhone = document.getElementById('inpTel');
var userEmail = document.getElementById('inpEmail');
var userText = document.getElementById('inpText');
var btnSubmit = document.getElementById('btnSubmit');

function popupSubmit(event) {
  event.preventDefault();

  if (!userName.value || !userBDay.value || !userPhone.value || !userEmail.value || !userText.value) {
    alert('Заполните форму!');
    return;
  }

  if (userName.style.borderColor == 'red' || userBDay.style.borderColor == 'red' || userPhone.style.borderColor == 'red' || userEmail.style.borderColor == 'red' || userText.style.borderColor == 'red') {
    alert('Некорректно заполнена форма!');
    return;
  }

  if (userName.style.borderColor != 'red' && userBDay.style.borderColor != 'red' && userPhone.style.borderColor != 'red' && userEmail.style.borderColor != 'red' && userText.style.borderColor != 'red') {
    //Get data from form
    //let form = document.forms.formFB;
    var templateHTML = ['<!DOCTYPE html> \n', '  <html lang="ru"> \n', '    <head> \n', '      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> \n', '      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n', '    </head> \n', '    <body> \n', "       <div border=\"1px\">", "         <div style=\"border: 1px;\">\u0418\u043C\u044F: ".concat(userName.value, "</div>"), "         <div>\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(userBDay.value, "</div>"), "         <div>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ".concat(userPhone.value, "</div>"), "         <div>E-mail: ".concat(userEmail.value, "</div>"), "         <div>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: ".concat(userText.value, "</div>"), '       </div>\n', '    </body> \n', '  </html>'].join('');
    Email.send({
      SecureToken: 'a5e2add3-4073-485a-b25c-3972602d89b0',
      To: 'lyamin.ilya.s@gmail.com',
      From: 'testmail87@internet.ru',
      Subject: 'Вам что-то оставили...',
      Body: templateHTML
    }).then(function (message) {
      return alert(message);
    });
  }
}

function validateName() {
  if (!userName.value) {
    userName.style.border = '2px solid red';
  } else userName.style.border = '2px solid #55ff66';
}

function validateBDay() {
  if (!userBDay.value) {
    userBDay.style.border = '2px solid red';
  } else userBDay.style.border = '2px solid #55ff66';
}

function validatePhone() {
  if (!userPhone.value) {
    userPhone.style.border = '2px solid red';
  } else {
    var re = /^\+\d[\d\(\)\ -]{4,14}\d$/;
    var valid = re.test(userPhone.value);

    if (!valid) {
      userPhone.style.border = '2px solid red';
    } else userPhone.style.border = '2px solid #55ff66';
  }
}

function validateEmail() {
  if (!userEmail.value) {
    userEmail.style.border = '2px solid red';
  } else {
    var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    var valid = re.test(userEmail.value);

    if (!valid) {
      userEmail.style.border = '2px solid red';
    } else userEmail.style.border = '2px solid #55ff66';
  }
}

function validateText() {
  if (!userText.value) {
    userText.style.border = '2px solid red';
  } else userText.style.border = '2px solid #55ff66';
}

window.onload = function () {
  userForm.addEventListener('submit', popupSubmit);
  userName.addEventListener('blur', validateName);
  userBDay.addEventListener('blur', validateBDay);
  userPhone.addEventListener('blur', validatePhone);
  userEmail.addEventListener('blur', validateEmail);
  userText.addEventListener('blur', validateText);
};