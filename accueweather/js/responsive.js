// 모바일 햄버거 버튼 클릭 시
$(".hamburger").click(function() {
  $(".mobile.hamburger").hide()       // display : none
  $(".mobile.close").show()           // display : block

  $("#mobile_menu").empty()           // #mobile_menu 하위 태그 초기화

  var nav = $(".nav").clone()

  $("#mobile_menu").append(nav)       // append : 선택한 요소 하위 태그로 삽입
  $("#mobile_menu").show()
})

// 모바일 햄버거 버튼 닫기
$(".close").click(function() {
  $(".mobile.hamburger").show()       // display : block
  $(".mobile.close").hide()           // display : none
  $("#mobile_menu").hide()
})


// 브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지
$(window).resize(function() {
  var width = $(window).width()               // 브라우저의 width 구함

  if (width >= 767) {
    if ($("#mobile_menu").is(":visible")) {   // 얘가 보이냐?
      $(".mobile.hamburger").show()
      $(".mobile.close").hide()
      $("#mobile_menu").hide()
    }
  }
})