$(function () {
  const $win = $(window);
  const $header = $('header');
  const $btnTop = $('.btn-top');
  const $menu = $('.gnb > li');
  const $subMenu = $('.submenu');
  const duration = 350;

  //메뉴 스크롤시 효과
  $win.on('wheel mousewheel DOMMouseScroll', function (e) {
    console.log(e);
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      //휠을 올렸을 때(hide class삭제)
      $header.removeClass('hide');
    } else {
      //휠을 내렸을 때(hide class부여)
      $header.addClass('hide');
    }
  });

  //TOP버튼
  $win.on('scroll', function () {
    let scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop >= 500) {
      $btnTop.fadeIn(400);
    } else {
      $btnTop.fadeOut(400);
    }
    /*TOP버튼 눌렀을때 맨위에 올라갔을때 menu나와라*/
    if (scTop == 0) {
      $header.removeClass('hide');
    }
  });
  $btnTop.hide();
  $btnTop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 700);
  });

  // /*12.27 스크롤 애미메이션 효과*/
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out-back',
  });

  //12.28슬라이드 효과
  $('.slide').slick({
    autoplay: true, //기본 배치
    autoplaySpeed: 2000, //1초가 지나면 다음 이미지가 나온다
    speed: 500, //이미지가 넘어가는 속도});
    arrows: true,
    prevArrow: '.btn-prev', //문자열이여서 '' 필요, 기본으로 주는 버튼 사라짐
    nextArrow: '.btn-next',
    dots: true, //사진들을 숫자버튼으로 나열해줌
    pauseOnDotsHover: true, //마우스로 동그라미 누르면 거기서 멈춤
    slidesToShow: 1, //영역안에 3개의 이미지가 보여진다
    slidesToScroll: 1, //3개의 이미지가 한번에 넘어간다
  });
  $('.btn-pause').on('click', function () {
    $('.slide').slick('slickPause');
  });
  $('btn-go').on('click', function () {
    $('.slide').slick('slickGoTo', 1);
  });
});
