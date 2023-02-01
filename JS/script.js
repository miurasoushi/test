'use strict';

const mySwiper = new Swiper ('.swiper', {
  loop: true, //最後に達したら先頭に戻る
  slidesPerView: '1', //何枚表示するか
  speed: 1500, // スライドアニメーションのスピード（ミリ秒）
  centeredSlides : true,
   autoplay: { //自動再生する
       delay: 4000, //次のスライドに切り替わるまでの時間
     disableOnInteraction: false, //ユーザーが操作したら止めるか
     waitForTransition: false, // アニメーションの間にスライドを止めるか
  },
  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーション要素のクラス名
    clickable: true, //クリック可能にするか
    type: 'bullets', //ページネーションの種類
  },
});

window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};
