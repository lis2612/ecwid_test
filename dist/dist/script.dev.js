"use strict";

var userForm = document.getElementById('formFB');
var userName = document.getElementById('inpName');
var userBDay = document.getElementById('inpBday');
var userPhone = document.getElementById('inpTel');
var userEmail = document.getElementById('inpEmail');
var userText = document.getElementById('inpText');
var btnSubmit = document.getElementById('btnSubmit');

function validateAndSend(event) {
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
    var templateHTML = ["      <!DOCTYPE html public>", "<html lang=\"ru\">", "  <head>", "    <meta charset=\"UTF-8\"/>", "    <title>\u041F\u0438\u0441\u044C\u043C\u043E \u0441 \u0441\u0430\u0439\u0442\u0430</title>", "  </head>", "  <body style=\"font-family: Verdana, Geneva, sans-serif;\">", "    <table frame=\"border\" rules=\"none\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#eeeeee\" style=\"margin:0 auto; padding:0; width: 600px; border-radius:8px\">", "      <tr height=\"50px\"><td style=\"font-size:20px; text-align:center;\"><b>\u0422\u0430\u043D\u0446\u0443\u0439\u0442\u0435, \u0412\u0430\u043C \u043F\u0438\u0441\u044C\u043C\u043E!</b></td></tr>", "      <tr height=\"50px\"><td style=\"text-align:center;\"><i>\u0412\u043E\u0442 \u0432\u0441\u0451, \u0447\u0442\u043E \u043C\u044B \u0437\u043D\u0430\u0435\u043C \u043E\u0431 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u0435:</i></td></tr>", "      <tr><td><table frame=\"border\" rules=\"none\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#fff\" style=\"width:95%; margin:0 auto; padding:0;\">", "            <tr><td style=\"text-align:left; padding-left:15px\">\u0415\u0433\u043E \u0437\u043E\u0432\u0443\u0442: ".concat(userName.value, "</td></tr>"), "            <tr><td style=\"text-align:left; padding-left:15px\">\u041E\u043D \u0440\u043E\u0434\u0438\u043B\u0441\u044F: ".concat(userBDay.value, "</td></tr>"), "            <tr><td style=\"text-align:left; padding-left:15px\">\u0415\u0433\u043E \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:<a href=\"tel:".concat(userPhone.value, "\" value=\"").concat(userPhone.value, "\" target=\"_blank\">").concat(userPhone.value, "</a></td></tr>"), "            <tr><td style=\"text-align:left; padding-left:15px\">\u0415\u0433\u043E \u043F\u043E\u0447\u0442\u0430:<a href=\"mailto:".concat(userEmail.value, "\" target=\"_blank\">").concat(userEmail.value, "</a></td></tr>"), "            <tr><td style=\"text-align:left; padding-left:15px\">\u0410 \u0432\u043E\u0442 \u0447\u0442\u043E \u043E\u043D \u043D\u0430\u043F\u0438\u0441\u0430\u043B:</td></tr>", "            <tr><td style=\"text-align:left; padding-left:15px\"><i>".concat(userText.value, "</i></td></tr>"), "          </table></td></tr>", "      <tr height=\"50px\"><td style=\"text-align:center;\"><i>\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043E\u043D \u043E\u0447\u0435\u043D\u044C \u0436\u0434\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0430...</i></td></tr></table>", "  </body>", "</html>"].join('\n'); // Email.send({
    //   SecureToken: 'a5e2add3-4073-485a-b25c-3972602d89b0',
    //   To: 'lyamin.ilya.s@gmail.com',
    //   From: 'testmail87@internet.ru',
    //   Subject: 'Вам что-то оставили...',
    //   Body: templateHTML,
    // }).then((message) => alert(message));

    Email.send({
      SecureToken: 'a5e2add3-4073-485a-b25c-3972602d89b0',
      To: 'lyamin.ilya.s@gmail.com',
      From: 'testmail87@internet.ru',
      Subject: 'Вам что-то оставили...',
      Body: templateHTML
    }).then(function (message) {
      if (message == "OK") {
        alert("Ваше письмо успешно отправлено!");
        userForm.reset();
      } else alert("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A... \n \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u044D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u0430: \n ".concat(message));
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
  userForm.addEventListener('submit', validateAndSend);
  userName.addEventListener('blur', validateName);
  userBDay.addEventListener('blur', validateBDay);
  userPhone.addEventListener('blur', validatePhone);
  userEmail.addEventListener('blur', validateEmail);
  userText.addEventListener('blur', validateText);
};