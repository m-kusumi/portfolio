$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  
});

const variations = [
  "(MAYO KUSUMI)",
  "!MAYO KUSUMI!",
  "?MAYO KUSUMI?",
  "&MAYO KUSUMI&",
  "#MAYO KUSUMI#"
];

let current = -1;

$(window).on('scroll', function () {
  const scroll = $(window).scrollTop();
  const index = Math.floor(scroll / 10) % variations.length;

  if (index !== current) {
    current = index;
    $('#name').fadeOut(0, function () {
      $(this).text(variations[index]).fadeIn(0);
    });
  }
});
