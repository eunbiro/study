/* 1. PC버전 서브메뉴 관련 */
const menu = document.querySelector('.menu__main')          // 전체 메뉴
const subMenus = document.querySelectorAll('.list__drop')   // 하위 메뉴
const panel = document.querySelector('.header__panel')      // 하위 메뉴 나올 때 나오는 판넬
const header = document.querySelector('.header')            // 전체 헤더

// 마우스 오버 시 하위 메뉴 보이기
menu.addEventListener('mouseover', () => {
  panel.style.display = 'block';                            // 마우스 오버시 panel 나타냄
  subMenus.forEach(submenu => {
    submenu.style.display = 'block';                        // 마우스 오버시 모든 하위메뉴 나타냄
  });
});

// 마우스 치울 때 하위 메뉴 숨기기
header.addEventListener('mouseout', () => {
  panel.style.display = 'none';                             // 마우스 아웃 시 panel 숨기기
  subMenus.forEach(submenu => {
    submenu.style.display = 'none';                         // 마우스 아웃 시 모든 하위메뉴 숨기기
  });
});
panel.addEventListener('mouseout', () => {
  panel.style.display = 'none';                             // 마우스 아웃 시 panel 숨기기
  subMenus.forEach(submenu => {
    submenu.style.display = 'none';                         // 마우스 아웃 시 모든 하위메뉴 숨기기
  });
});


/* 2. 모바일 버전 메뉴 보이기, 숨기기 */
const Mhamberger = document.querySelector('.mobile.hamberger')  // 햄버거 버튼
const Mclose = document.querySelector('.mobile.close')          // 닫기 버튼
const Mnav = document.querySelector('.header__Mnav')            // 모바일 메뉴 전체

Mhamberger.addEventListener('click', () => {
  Mnav.style.display = 'block';                                 // 마우스 클릭시 panel 나타냄
});
Mclose.addEventListener('click', () => {
  Mnav.style.display = 'none';                                  // 마우스 클릭시 panel 숨기기
});


/* 2. 모바일 하위 메뉴 보이기, 숨기기 */
showHide = (e) => {
  const MListDrop = e.children[2];                        // 내가 선택한 하위메뉴를 가져옴
  // const displayAttr = MListDrop.style.display;
  const displayAttr = window.getComputedStyle(MListDrop).display; // MListDrop의 display속성을 가져옴

  if (displayAttr === 'none') {                       // display 속성이 none일 때
    MListDrop.style.display = 'block';                // 하위 메뉴 나타냄
  } else {                                            // 아니면
    MListDrop.style.display = 'none';                 // 하위 메뉴 숨김
  };
};
/* 3. width가 767px 이상일 때 모바일 메뉴 보임 방지 */

(function() {
  var throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
          if (running) { return; }
          running = true;
           requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
          });
      };
      obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

// handle event

window.addEventListener('optimizedResize', () => {
  let winwidth = window.innerWidth;

  if (winwidth >= 767) {
    Mnav.style.display = 'none';
  }
});