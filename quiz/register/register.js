const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submit_button = document.querySelector('#submit_button');

submit_button.addEventListener('click', () => {
  // 아이디 : 공백여부, 중복여부
  // 비밀번호 : 공백여부, 특정문자 여부
  // 비밀번호 확인 : 공백여부, 비밀번호와 일치하는지 여부
  // 이름 : 공백여부
  // 메일 : 공백여부, 메일 형식 일치여부  (test@abce.com)
  // 연락처 : 연락처 형식 일치여부  (010-1234-5678)
});

idConfirm (() => {
  if (!userid.value) {
    
  }
});
pwd1Confirm (() => {});
pwd2Confirm (() => {});
fullnameConfirm (() => {});
emailConfirm (() => {});
telConfirm (() => {});