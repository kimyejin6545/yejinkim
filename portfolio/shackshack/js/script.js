$(function () {
  $('.slide').slick({
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    // centerMode: true,
    // slidesToShow: 3,

    // 버튼 커스텀
    arrows: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',

    // 인디케이터
    dots: true,
    pauseOnDotsHover: true,
  });
  //AOS.js실행
  AOS.init();
  const $aniTarget = $('[data-aos]');
  $('.slide').on('beforeChange', function (event, slick, currentSlide) {
    $aniTarget.removeClass('aos-animate');
    console.log(event, slick, currentSlide);
  });
  $('.slide').on('afterChange', function (event, slick, currentSlide) {
    AOS.init();
  });

  // bestmenu
  const $tabMenu = $('.tab-menu > a');
  const $tabContent = $('.tab-contents > div');
  const $bestMenu = $('.bestmenu');
  const bgImg = ['bestmenu-content1.png', 'bestmenu-content2.png', 'bestmenu-content3.png'];
  // 초기 설정
  tabAction(0);
  // 탭메뉴를 클릭했을 때
  $tabMenu.on('click', function () {
    // 선택한 메뉴의 인덱스 구하기
    let tIdx = $(this).index();
    tabAction(tIdx);
  });

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    //배경설정
    // $body.css('background-image', bgimg[index]);
    console.log(bgImg[index]);
    $bestMenu.css({
      backgroundImage: 'url(img/' + bgImg[index] + ')',
    });
    // 클래스 부여
    $tabMenu.removeClass('on');
    $tabMenu.eq(index).addClass('on');

    // 콘텐츠 영역 보이게
    $tabContent.hide();
    $tabContent.eq(index).show();
  }
});
