export function getRefs() {
  return {
    filmGallery: document.querySelector('.film__list'),
    movieCard: document.querySelectorAll('.film__item'),
    searchQuery: document.querySelector('.header__form-input'),
    searchBtn: document.querySelector('.header__form-button'),
    modalBackdrop: document.querySelector('.backdrop'),
    insertImgCont: document.querySelector('.img-wrap'),
    watchBtn: document.querySelector('.film-preview'),
    closeVideoBtn: document.querySelector('.film-preview-close'),
    movieBox: document.querySelector('.film-info-js'),
    modalCloseBtn: document.querySelector('.close-modal-btn'),
    backdrop: document.querySelector('.backdrop'),
    searchForm: document.querySelector('.header__form'),
    addToWatched: document.querySelector('.film-btn-watched'),
    addToQueue: document.querySelector('.film-btn-queue'),
    watched: document.querySelector('#watched'),
    queue: document.querySelector('#queue'),
    insertVideoCont: document.querySelector('.film-tiezer'),
    closeVideoBtn: document.querySelector('.film-preview-close'),
    watchBtn: document.querySelector('.film-preview'),
    videoBtnBox: document.querySelector('.film-btn-wrap'),
    iframeEl: document.querySelector('.iframe'),
    trailerOverlay: document.querySelector('.trailer__overlay'),
    trailerBox: document.querySelector('.trailer-box'),
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdropTeam: document.querySelector('.team-backdrop'),
    body: document.querySelector('body'),
  };
}
