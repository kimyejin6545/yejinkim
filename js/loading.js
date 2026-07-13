const $win = $(window);
const $body = $("body");

//** */ loading설정
let tag = '<div class ="loading"><div class="spinner">';
tag += '<div class="double-bounce1"></div>';
tag += '<div class="double-bounce2"></div>';
tag += "</div>";
tag += "</div>";
$body.append(tag);
// 문서의 로딩이 끝나면(load)
$win.on("load", function () {
  const $loading = $(".loading");
  // 1초후에
  setTimeout(function () {
    $loading.fadeOut();
  }, 1000);
});
