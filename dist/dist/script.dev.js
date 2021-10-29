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
  console.clear;
  console.log('Name ' + userName.style.borderColor);
  console.log('BDay ' + userBDay.style.borderColor);
  console.log('Phone ' + userPhone.style.borderColor);
  console.log('Email ' + userEmail.style.borderColor);
  console.log('Text ' + userText.style.borderColor);

  if (!userName.value || !userBDay.value || !userPhone.value || !userEmail.value || !userText.value) {
    alert('Заполните форму!');
    return;
  }

  if (userName.style.borderColor == 'red' || userBDay.style.borderColor == 'red' || userPhone.style.borderColor == 'red' || userEmail.style.borderColor == 'red' || userText.style.borderColor == 'red') {
    alert('Некорректно заполнена форма!');
    return;
  }

  if (userName.style.borderColor != 'red' && userBDay.style.borderColor != 'red' && userPhone.style.borderColor != 'red' && userEmail.style.borderColor != 'red' && userText.style.borderColor != 'red') {
    var form = document.forms.formFB;
    alert(form.inpName.value + '\n' + form.inpBday.value + '\n' + form.inpTel.value + '\n' + form.inpEmail.value + '\n' + form.inpText.value);
    return;
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