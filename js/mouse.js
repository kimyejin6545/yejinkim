const $cursor = $(".cursor");
const $follower = $(".follower");
let mouseX = 0;
let mouseY = 0;

$win.on("mousemove", function (e) {
  // 콘솔에 e가 찍힌다.(테스트용이므로 나중에 지우기)
  // console.log(e);
  // 마우스 위치값을 가져와서 mouseX, mouseY 변수에 담고
  mouseX = e.pageX;
  mouseY = e.pageY;
  // 가짜 커서의 offset값(위치값)으로 넣어준다.
  $cursor.add($follower).css({
    left: mouseX,
    top: mouseY,
  });
});
//   클릭했을 때
// 1. 마우스 버튼 눌렀을 때
// $win.on("mousedown", function () {
//   $cursor.addClass("click");
// });
// // 2. 마우스 버튼 뗏을 때
// $win.on("mouseup", function () {
//   $cursor.removeClass("click");
// });

//   따라다니는 애를 위한 --클릭했을때
$win.on("click", function () {
  $follower.add($cursor).addClass("active");
  //타이머 함수: setTimeout(동작, 시간);
  setTimeout(function () {
    $follower.add($cursor).removeClass("active");
  }, 700);
});
