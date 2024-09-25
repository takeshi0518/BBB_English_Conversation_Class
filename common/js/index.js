
// ハンバーガーメニュー
(() => {
//余力があればエラーハンドリングを実装

const $burger = document.getElementById('js-burger');
const $burgerMenu = document.getElementById('js-burgerMenu');
const $logoImg = document.getElementById('js-logoImg');
const $burgerIcons = document.querySelectorAll('.burger__icon');
const $burgerIcon = document.querySelector('.burger__inner');
const srcRed = '/common/img/logo-r.svg';  //ロゴ画像レッド
const srcWhite = '/common/img/logo-w.svg'; //ロゴ画像ホワイト


$burger.addEventListener('click', () => {
  $burgerMenu.classList.toggle('is-active');
  if($burgerMenu.classList.contains('is-active')) {
    $logoImg.setAttribute('src', srcWhite);
  } else {
    $logoImg.setAttribute('src', srcRed);
  }
  $burgerIcons.forEach((icon) => {
    icon.classList.toggle('is-active');
  });
  $burgerIcon.classList.toggle('is-active');
});
})();


//スクロールアニメーション
(() => {






})();