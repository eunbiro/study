const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');

//시험엔 공백체크정도만 나옴

/*
submit_button.addEventListener('click', () => {
  // 아이디 : 공백여부, 중복여부
  idConfirm();
  // 비밀번호 : 공백여부, 특정문자 여부
  pwd1Confirm();
  // 비밀번호 확인 : 공백여부, 비밀번호와 일치하는지 여부
  pwd2Confirm();
  // 이름 : 공백여부
  fullnameConfirm();
  // 메일 : 공백여부, 메일 형식 일치여부  (test@abcd.com)
  emailConfirm();
  // 연락처 : 연락처 형식 일치여부  (010-1234-5678)
  telConfirm();
});
*/
submitButton.addEventListener('click', (e) => {

  /*  첫번째 방법
  let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()]

  let chkFlag = true;
  for (const chk of chkArray) {
    if (!chk) {   // 함수의 리턴값이 false일 경우
      chkFlag = false;
    };
  }

  if (chkFlag) {
    document.signup.submit();
  }
*/

// 두번째 방법
  const idConf        =   idConfirm ();
  const pwd1Conf      =   pwd1Confirm ();
  const pwd2Conf      =   pwd2Confirm ();
  const fullnameConf  =   fullnameConfirm ();
  const emailConf     =   emailConfirm ();
  const telConf       =   telConfirm ();

  if (idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf) {
    document.signup.submit();                       // 모든 함수가 true일 경우 submit페이지 이동
  }

});


idConfirm = () => {
  const mustId = document.querySelector(".must_id");
  const overlap = document.querySelector(".overlap");

  // 텍스트가 남아있는걸 방지하기 위해
  mustId.style.display = "none";
  overlap.style.display = "none";

  // userid 공백체크 (null, undefined, "", 0 >> false)
  // userid.value.replace(/ |0/g,"") : 넓은 공백 또는 0 제거
  if (!userid.value.replace(/ /g,"")) {             // userid의 value값이 없을경우 == true
    mustId.style.display = "block";                 // true일때 mustId 스타일 표시
    return false;                                   // 공백이니까 false 출력 후 종료

  } else {
    // userid 중복체크
    if (!idCheck(userid.value)) {                   // 아이디 중복이 true가 아닌경우
      overlap.style.display = "block";              // true일때 overlap 스타일 표시
      return false;                                 // 중복이니까 false 출력 후 종료
    }
  }

  return true;                                      // 체크항목 모두 통과 시 true 출력 후 종료
};

pwd1Confirm = () => {
  const mustPwd1 = document.querySelector('.must_pwd1');
  const regPwd = document.querySelector('.reg_pwd');

  mustPwd1.style.display = "none";
  regPwd.style.display = "none";

  // pwd1 공백체크
  if (!pwd1.value.replace(/ /g,"")) {
    mustPwd1.style.display = "block";
    return false;
  } else {
    // 정규 표현식 체크
    if (!pwdCheck(pwd1.value)) {
      regPwd.style.display = "block";
      return false;
    }
  }

  return true;
};

pwd2Confirm = () => {
  const mustPwd2 = document.querySelector('.must_pwd2');
  const same = document.querySelector('.same');

  mustPwd2.style.display = "none";
  same.style.display = "none";

  if (!pwd2.value.replace(/ /g,"")) {
    mustPwd2.style.display = "block";
    return false;
    
  } else {
    if (pwd1.value && pwd2.value) {           // 두 패스워드 값이 존재하는지 확인
      if (pwd1.value !== pwd2.value) {        // 두 패스워드가 같은지 확인
        same.style.display = "block";
        return false;
      }
    }
  }

  return true;
};

fullnameConfirm = () => {
  const mustFullname = document.querySelector(".must_fullname");
  mustFullname.style.display = "none";

  if (!fullname.value.replace(/ /g,"")) {
    mustFullname.style.display = "block";
    return false;
  }

  return true;
};

emailConfirm = () => {
  const mustEmail = document.querySelector('.must_email');
  const regEmail = document.querySelector('.reg_email');

  mustEmail.style.display = "none";
  regEmail.style.display = "none";

  if (!email.value.replace(/ /g,"")) {
    mustEmail.style.display = "block";
    return false;

  } else {
    if (!emailCheck(email.value)) {
      regEmail.style.display = "block";
      return false;
    }
  }

  return true;
};

telConfirm = () => {
  const regTel = document.querySelector('.reg_tel');
  regTel.style.display = "none";
  
  if (!telCheck(tel.value) && tel.value) {      // 전화번호내용이 있고 형식(유효성)이 맞지않는경우
    regTel.style.display = "block";
    return false;
  }

  return true;
};



// 중복된 아이디 체크
// function idCheck (id) {
//   return true;
// };

idCheck = id => true;

// 비밀번호 정규식 체크
pwdCheck = (pwd) => {
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd);
  // 비교후 true || false 값을 반환
};

// 전화번호 체크
telCheck = (tel) => {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
};

// 이메일 체크
emailCheck = (email) => {
  const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
};