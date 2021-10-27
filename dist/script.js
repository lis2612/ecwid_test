

function popupSubmit(event) {
  event.preventDefault();
  let form = document.forms.formFB;

  confirm(form.inpName.value + "\n" + form.inpBday.value + "\n" + form.inpTel.value + "\n" + form.inpEmail.value + "\n" + form.inpText.value)

}

window.onload=function(){
  var f= document.getElementById('formFB');
  f.addEventListener('submit', popupSubmit);
}
