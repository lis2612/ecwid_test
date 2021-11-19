"use strict";

var userForm = document.getElementById('formFB');
var userName = document.getElementById('inpName');
var userBDay = document.getElementById('inpBday');
var userPhone = document.getElementById('inpTel');
var userEmail = document.getElementById('inpEmail');
var userText = document.getElementById('inpText');
var btnSubmit = document.getElementById('btnSubmit');
var templateHTML = ['<!DOCTYPE html> \n', '  <html lang="en"> \n', '    <head> \n', '      <meta charset="utf-8"> \n', '      <title>Обратная связь</title> \n', '    </head> \n', '    <body> \n', '      <div id="formWrapper"> \n', '        <div id="formLabel">Напишите нам</div> \n', '        <form id="formFB"> \n', '          <label for="inpName">Имя</label> \n', '          <input id="inpName" name="Name" type="text" placeholder="Кот Котофеич"> \n', '          <label for="inpBday">Дата рождения</label> \n', '          <input id="inpBday" name="Birthday" type="date"> \n', '          <label for="inpTel">Телефон</label> \n', '          <input id="inpTel" name="Phone" type="tel" placeholder="+78001234567" maxlength="14"> \n', '          <label for="inpEmail">Почта</label> \n', '          <input id="inpEmail" name="Email" type="email" placeholder="kotofei@catmail.com"> \n', '          <label for="inpText">Ваш вопрос:</label> \n', '          <textarea id="inpText" name="Text" placeholder="А мыши кто?"></textarea> \n', '          <input id="btnSubmit" name="btnSubmit" type="submit" value="ОТПРАВИТЬ"> \n', '        </form> \n', '      </div> \n', '    </body> \n', '  </html>'].join('');

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
    Email.send({
      // Host: 'smtp.mail.ru',
      // Username: 'testmail87@internet.ru',
      // Password: 'JViT2FZndzPjKVhvmq9X',
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