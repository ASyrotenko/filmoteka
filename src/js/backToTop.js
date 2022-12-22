import { getRefs } from './get-refs';
const refs = getRefs();

const btnUp = {
  el: refs.btnUp,
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },

  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 900 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
