//버튼 업다운

const $btnUp = document.querySelector(".button__up");
const $btnDown = document.querySelector(".button__down");

$btnUp.onclick = () => {
  $('html,body').animate({ scrollTop: 0 }, 500);
  // window.scrollTo({top: 0, behavior: "smooth"});
  console.log(1)
}

$btnDown.onclick = () => {
	$("html, body").animate({ scrollTop: $(document).height() }, 500);
  console.log(2)
};


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

