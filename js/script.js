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


// 左上の名前が変化する
// const variations = [
//   "(MAYO KUSUMI)",
//   "!MAYO KUSUMI!",
//   "?MAYO KUSUMI?",
//   "&MAYO KUSUMI&",
//   "#MAYO KUSUMI#"
// ];

// let current = -1;

// $(window).on('scroll', function () {
//   const scroll = $(window).scrollTop();
//   const index = Math.floor(scroll / 10) % variations.length;

//   if (index !== current) {
//     current = index;
//     $('#name').fadeOut(0, function () {
//       $(this).text(variations[index]).fadeIn(0);
//     });
//   }
// });


// アンカーリンク
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  const target = $($(this).attr('href'));
  const offset = $('.header').outerHeight() || 0;

  if (target.length) {
    $('html, body').stop().animate({
      scrollTop: target.offset().top - offset
    }, 900, 'easeInOutCubic'); 
  }
});

$(function () {
  $('#header').load('header.html');
  $('#footer').load('footer.html');
  $('#works').load('works.html');
  $('#about').load('about.html');
  $('#contact').load('contact.html');
});

// ランダムに背景の色が変化
// const colors = [
//   "#fdf6f0", // ほんのりベージュ
//   "#f0f8ff", // 薄いブルー
//   "#fff0f5", // 薄いピンク
//   "#f5f5f5", // グレー
//   "#f0fff4"  // 薄いグリーン
// ];

// const randomColor = colors[Math.floor(Math.random() * colors.length)];

// document.body.style.backgroundColor = randomColor;