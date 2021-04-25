import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {

  const windowForm = document.querySelectorAll('.balcon_icons_img'),
  windowWidth = document.querySelectorAll('#width'),
  windowHeight = document.querySelectorAll('#height'),
  windowType = document.querySelectorAll('#view_type'),
  windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElems(eventType, element, prop) {
    element.forEach((item, i) => {
      item.addEventListener(eventType, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;

          case 'INPUT':
            if (item.getAttribute('type') == 'checkbox') {
              i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Тёплое';
              element.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
          break;

          case 'SELECT':
            state[prop] = item.value;
            break;
        }
      });
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;
