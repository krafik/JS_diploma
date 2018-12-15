'use strict';
function popUps(){


let popupEngBtn = document.querySelector('.popup_engineer_btn'),
    popUpWindow = document.querySelector('.popup_engineer'),
    closePopUp = popUpWindow.querySelector('.popup_close');

  popupEngBtn.addEventListener('click', function () {
    popUpWindow.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  popUpWindow.addEventListener('click', function (e) {
    let target = e.target;
    
    if (target == popUpWindow) {
      popUpWindow.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  closePopUp.addEventListener('click', function () {
    popUpWindow.style.display = 'none';
    document.body.style.overflow = '';
  });

  //popUp_2
  let phoneLink = document.querySelectorAll('.phone_link'),
    popUp = document.querySelector('.popup'),
    popUpClose = popUp.querySelector('.popup_close');

    popUp.addEventListener('click', function(e){
      let target = e.target;
      if(target == popUp){
        popUp.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

  phoneLink[0].addEventListener('click', function () {
    popUp.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  phoneLink[1].addEventListener('click', function (e) {
    e.preventDefault();
    popUp.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  popUpClose.addEventListener('click', function () {
    popUp.style.display = 'none';
    document.body.style.overflow = '';
  });

  function popUpAftLoad() {
    popUp.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  setTimeout(popUpAftLoad, 60000);

}

module.exports = popUps;