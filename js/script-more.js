$(function () {
  const $tabMenu = $(".tab-menu > a");
  const $tabContent = $(".tab-contents > div");

  // **전체페이지

  // 탭메뉴를 클릭했을 때
  $tabMenu.on("click", function (e) {
    e.preventDefault();
    // 선택한 메뉴의 인덱스 구하기
    let tIdx = $(this).index();
    tabAction(tIdx);
  });

  function tabAction(index) {
    $tabMenu.removeClass("on");
    $tabMenu.eq(index).addClass("on");
    // 콘텐츠 영역 보이게
    $tabContent.hide();
    $tabContent.eq(index).show();
  }

  // 포트폴리오 링크를 클릭했을 때
  // 1.index.html의 (부모밑에 같은 요소)li부분에data-index="(0 or 1 or 2 ..)"을 직접준다.
  // 2.(크롬은 오류가 많아)edge에 검사에 (연결되는 파일의 값이 같이 따라와)응용프로그램에 저장소에 로컬저장소에 file///부분에 찍히는 값을 이용할거야
  // 3.index.html에도script-more.js파일링크를 연결해
  // 4.아래처럼js에 명령어 추가
  let portIdx = localStorage.getItem("pIdx");

  if (portIdx == 0) {
    // 초기 설정
    tabAction(0);
  } else {
    tabAction(portIdx);
  }

  $(".port-link").on("click", function () {
    portIdx = $(this).attr("data-index");
    localStorage.setItem("pIdx", portIdx);
  });

  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });
});
