var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return i[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,i){t[e]=i},e.parcelRequired7c6=n),n("bWo2c"),n("fzYh0"),n("la0xx");var r=n("fzYh0"),a=n("lpPzL"),l=n("2nhTy");const s=(0,a.getRefs)(),o=new(0,r.Firebase);async function c(){s.queue.classList.remove("film-btn--active"),s.watched.classList.add("film-btn--active"),s.paginationContainer.innerHTML="";let e=await o.getDoc("watched");0===e.length?(s.footer.classList.add("footer--empty-library"),document.querySelector(".spinner").classList.add("hidden"),s.filmGallery.innerHTML="",s.filmGallery.insertAdjacentHTML("beforeend",'<li class="film-list-error">\n      <p class="library__text">No watched movies found in the library</p>\n      <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No watched movies found in the library"/>\n    </li>')):(s.filmGallery.innerHTML="",(0,l.getPaginationFromLibrary)(e),document.querySelector(".spinner").classList.add("hidden"))}s.watched.addEventListener("click",c),s.queue.addEventListener("click",(async function(){s.watched.classList.remove("film-btn--active"),s.queue.classList.add("film-btn--active"),s.paginationContainer.innerHTML="";let e=await o.getDoc("queue");0===e.length?(document.querySelector(".spinner").classList.add("hidden"),s.filmGallery.innerHTML="",s.filmGallery.insertAdjacentHTML("beforeend",'<li class="film-list-error">\n        <p class="library__text">No movies saved for viewing were found in the library</p>\n        <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No movies saved for viewing were found in the library"/>\n      </li>')):(s.footer.classList.remove("footer--empty-library"),s.filmGallery.innerHTML="",(0,l.getPaginationFromLibrary)(e),document.querySelector(".spinner").classList.add("hidden"))}));const d=setInterval((function(e){try{s.watched.classList.add("film-btn--active"),o.userStatus(),c(),clearInterval(d)}catch(e){}}),250);n("2nhTy"),n("97fqm"),n("7bYU0"),n("au048"),n("3AN3U");
//# sourceMappingURL=my-library.224b1f50.js.map
