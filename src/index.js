window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let popUps = require('./parts/popUps.js'),
      timer = require('./parts/timer.js'),
      forms = require('./parts/forms.js'),
      tabs = require('./parts/tabs.js');

  popUps();
  timer();
  forms();
  tabs();



  


});