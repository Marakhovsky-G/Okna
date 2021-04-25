
const modals = () => {

  function modalOpen(modalSelector) {
    document.querySelector(modalSelector).style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function modalClose(modalSelector) {
    document.querySelector(modalSelector).style.display = 'none';
    document.body.style.overflow = '';
  }

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (evt) => {
        if (evt.target) {
          evt.preventDefault();
        }

        modalOpen(modalSelector);
      });
    });

    close.addEventListener('click', () => {
      modalClose(modalSelector);
    });

    modal.addEventListener('click', (evt) => {
      if (evt.target === modal) {
        modalClose(modalSelector);
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {modalOpen(selector);}, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // showModalByTime('.popup', 60000);
};

export default modals;

