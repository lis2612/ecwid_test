var userForm = document.getElementById('form-feedback');
var userName = document.getElementById('inp-name');
var userBDay = document.getElementById('inp-bday');
var userPhone = document.getElementById('inp-tel');
var userEmail = document.getElementById('inp-email');
var userText = document.getElementById('inp-text');
var btnSubmit = document.getElementById('btn-submit');

function validateAndSend(event) {
  event.preventDefault();
  if (
    !userName.value ||
    !userBDay.value ||
    !userPhone.value ||
    !userEmail.value ||
    !userText.value
  ) {
    alert('Заполните форму!');
    return;
  }
  if (
    userName.style.borderColor == 'red' ||
    userBDay.style.borderColor == 'red' ||
    userPhone.style.borderColor == 'red' ||
    userEmail.style.borderColor == 'red' ||
    userText.style.borderColor == 'red'
  ) {
    alert('Некорректно заполнена форма!');
    return;
  }
  if (
    userName.style.borderColor != 'red' &&
    userBDay.style.borderColor != 'red' &&
    userPhone.style.borderColor != 'red' &&
    userEmail.style.borderColor != 'red' &&
    userText.style.borderColor != 'red'
  ) {
    const templateHTML = [
      `      <!DOCTYPE html public>`,
      `<html lang="ru">`,
      `  <head>`,
      `    <meta charset="UTF-8"/>`,
      `    <title>Письмо с сайта</title>`,
      `  </head>`,
      `  <body style="font-family: Verdana, Geneva, sans-serif;">`,
      `    <table frame="border" rules="none" border="1" cellpadding="0" cellspacing="0" bgcolor="#eeeeee" style="margin:0 auto; padding:0; width: 600px; border-radius:8px">`,
      `      <tr height="50px"><td style="font-size:20px; text-align:center;"><b>Танцуйте, Вам письмо!</b></td></tr>`,
      `      <tr height="50px"><td style="text-align:center;"><i>Вот всё, что мы знаем об отправителе:</i></td></tr>`,
      `      <tr><td><table frame="border" rules="none" border="1" cellpadding="0" cellspacing="0" bgcolor="#fff" style="width:95%; margin:0 auto; padding:0;">`,
      `            <tr><td style="text-align:left; padding-left:15px">Его зовут: ${userName.value}</td></tr>`,
      `            <tr><td style="text-align:left; padding-left:15px">Он родился: ${userBDay.value}</td></tr>`,
      `            <tr><td style="text-align:left; padding-left:15px">Его номер телефона:<a href="tel:${userPhone.value}" value="${userPhone.value}" target="_blank">${userPhone.value}</a></td></tr>`,
      `            <tr><td style="text-align:left; padding-left:15px">Его почта:<a href="mailto:${userEmail.value}" target="_blank">${userEmail.value}</a></td></tr>`,
      `            <tr><td style="text-align:left; padding-left:15px">А вот что он написал:</td></tr>`,
      `            <tr><td style="text-align:left; padding-left:15px"><i>${userText.value}</i></td></tr>`,
      `          </table></td></tr>`,
      `      <tr height="50px"><td style="text-align:center;"><i>Возможно, он очень ждет ответа...</i></td></tr></table>`,
      `  </body>`,
      `</html>`,
    ].join('\n');

    Email.send({
      SecureToken: 'a5e2add3-4073-485a-b25c-3972602d89b0',
      To: 'lyamin.ilya.s@gmail.com',
      From: 'testmail87@internet.ru',
      Subject: 'Вам что-то оставили...',
      Body: templateHTML,
    }).then((message) => {
      if (message == 'OK') {
        alert('Ваше письмо успешно отправлено!');
        userForm.reset();
      } else
        alert(
          `Что-то пошло не так... \n Возможно эта информация будет полезна: \n ${message}`
        );
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
