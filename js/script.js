$(function() {
  // slickを利用してカルーセルを実装する
  $('.slider').slick({
    aroows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false
  });

  //リンクのホバー時に不透明度をアニメーションで変更する（カンマで区切る）
  $('a').hover(
    // a要素にマウスを載せた時の処理
    function() {
      $(this).animate({'opacity':0.6}, 300);
    },
    // a要素からマウスを離した時の処理
    function() {
      $(this).animate({'opacity': 1.0},300);
    });

    // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える
    $(window).scroll(function () {
      if($(this).scrollTop() > 100) {
        $('#page-top').fadeIn();
      } else {
        $('#page-top').fadeOut();
      }
    });

    // ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
    $('a[href^="#"]').click(function () {
      const speed = 500;
      const href = $(this).attr('href');
      let $target;
      if (href == '#') {
        $target = $('html');
      } else {
        $target = $(href);
      }
      const position = $target.offset().top;
      $('html, body').animate({'scrollTop': position}, speed, 'swing');
      return false;
    });

    // スクロールした時にセクションをフェードインさせる
    $(window).scroll(function () {
      // scrollTopでスクロールの縦位置（左上の位置）を取得
      const scrollAmount = $(window).scrollTop();
      // heightで要素の高さ（画面の上から下までの高さ）を取得
      const windowHeight = $(window).height();
      $('section').each(function () {
        // offset().topでセレクタのtop位置を取得
        const position = $(this).offset().top;
        if(scrollAmount > position - windowHeight + 100) {
          $(this).addClass('fade-in');
        }
      });
    });

    // Worksの画像をクリックした時にモーダルで拡大表示する
    $('.works img').on('click', function () {
      const imgSrc = $(this).attr('src');
      console.log(imgSrc);
      $('.big-img').attr('src', imgSrc);
      $('.modal').fadeIn();
      return false;
    });

    // 閉じるボタンをクリックした時にモーダルを閉じる
    $('.close-btn').click(function () {
      $('.modal').fadeOut();
      return false;
    });

});