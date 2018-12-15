window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let popUps = require('./parts/popUps.js'),
      timer = require('./parts/timer.js'),
      forms = require('./parts/forms.js');

  popUps();
  timer();
  forms();

 
  /*  
  //tabs
    // glazing_block
    let slickTabs = document.querySelector('.glazing_slider'),
      tabs = document.querySelectorAll('.glazing_block'),
      tabContent = document.querySelectorAll('.tree, .aluminum, .plastic');
    // console.log(tab[0].getAttribute('data-slick-index'));
    slickTabs.addEventListener('click', function (e) {
      let target = e.target;
      console.log(target);
      // console.log(target);
    });*/

});