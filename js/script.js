$(function () {
  const $header = $("header");
  const $btnTop = $(".btn-top");

  // **TOP버튼
  $win.on("scroll", function () {
    let scTop = $(this).scrollTop();

    if (scTop >= 500) {
      $btnTop.fadeIn(400);
    } else {
      $btnTop.fadeOut(400);
    }
    // visaul부분에 마우스에 따라 움직이는 효과를 내리면 멈추고
    if (scTop >= $(".about-me").offset().top) {
      cancelAnimationFrame(moving);
    }

    // TOP버튼 눌렀을때 맨위에 올라갔을때 menu나와라
    if (scTop == 0) {
      $header.removeClass("hide");
      // 마우스따라 움직이는 효과 시작해
      moving = requestAnimationFrame(mouseMove);
    }
  });
  $btnTop.hide();
  $btnTop.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  // **visual에 마우스움직이면 에니매이션
  const $obj1 = $(".obj1");
  const $obj2 = $(".obj2");
  const $obj3 = $(".obj3");
  const $obj4 = $(".obj4");
  const $obj5 = $(".obj5");

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.002;
  let moving;

  $win.on("mousemove", function (e) {
    //   시작짖점을 화면 중앙으로 좌표ㅕ값 조정
    x = e.clientX - $win.outerWidth() / 2;
    y = e.clientY - $win.outerHeight() / 2;
  });

  function mouseMove() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // 오브젝트 움직이기
    $obj1.css({
      transform: `translate(${mx / 1.5}px, ${my / 1.5}px)`,
    });
    // 마우스방향의 반대방향으로 움직
    $obj2.css({
      transform: `translate(${-mx / 2}px, ${-my / 2}px)`,
    });
    $obj3.css({
      transform: `translate(${mx / 2}px`,
    });
    $obj4.css({
      transform: `translate(${my / 2}px)`,
    });
    $obj5.css({
      transform: `translate(${mx / 3}px, ${my / 3}px)`,
    });
    //   동작의 반복
    moving = requestAnimationFrame(mouseMove);
  }
  // 마우스가 움직이면 작동해라
  mouseMove();
  // **프로젝트파일 심플 슬라이드주기
  $(".portfolio-slide").slick({
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,

    arrows: true,
    prevArrow: ".btn-prev",
    nextArrow: ".btn-next",
    fade: true,

    dots: true,
    pauseOnDotsHover: true,
  });

  // **스크롤 애미메이션 효과 주기
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });

  //**메뉴바 스크롤하면 없어졌다 나와라
  $win.on("wheel mousewheel DOMMouseScroll", function (e) {
    // console.log(e);
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      //휠을 올렸을 때(hide class삭제)
      $header.removeClass("hide");
    } else {
      //휠을 내렸을 때(hide class부여)
      $header.addClass("hide");
    }
  });
});
