'use strict';

function tabs(){
  //tabs
  // glazing_block
  let slickTabsG = document.querySelector('.glazing'),
    // tabs = document.querySelector('.glazing_list'),
    tabsImg = slickTabsG.querySelectorAll('img'),
    tabsA = slickTabsG.querySelectorAll('a'),
    tabDiv = slickTabsG.querySelectorAll('div.glazing_block'),
    tabContent = document.querySelectorAll('.tree, .aluminum, .plastic, .french, .rise');

  let tabsObj = {
    tree: {
      img: tabsImg[0],
      link: tabsA[0],
      tabDiv: tabDiv[0]
    },
    aluminum: {
      img: tabsImg[1],
      link: tabsA[1],
      tabDiv: tabDiv[1]
    },
    plastic: {
      img: tabsImg[2],
      link: tabsA[2],
      tabDiv: tabDiv[2]
    },
    french: {
      img: tabsImg[3],
      link: tabsA[3],
      tabDiv: tabDiv[3]
    },
    rise: {
      img: tabsImg[4],
      link: tabsA[4],
      tabDiv: tabDiv[4]
    }
  };

  slickTabsG.addEventListener('click', function (e) {
    let target = e.target;
    //0
    if (target == tabsObj.tree.img || target == tabsObj.tree.link || target == tabsObj.tree.tabDiv) {
      tabDiv[1].classList.remove('slick-current');
      tabDiv[2].classList.remove('slick-current');
      tabDiv[3].classList.remove('slick-current');
      tabDiv[4].classList.remove('slick-current');
      tabDiv[0].classList.add('slick-current');
      tabContent[1].style.display = 'none';
      tabContent[2].style.display = 'none';
      tabContent[3].style.display = 'none';
      tabContent[4].style.display = 'none';
      tabContent[0].style.display = 'block';
    } else
      //1
      if (target == tabsObj.aluminum.img || target == tabsObj.aluminum.link || target == tabsObj.aluminum.tabDiv) {
        tabDiv[0].classList.remove('slick-current');
        tabDiv[2].classList.remove('slick-current');
        tabDiv[3].classList.remove('slick-current');
        tabDiv[4].classList.remove('slick-current');
        tabDiv[1].classList.add('slick-current');
        tabContent[1].style.display = 'block';
        tabContent[0].style.display = 'none';
        tabContent[2].style.display = 'none';
        tabContent[3].style.display = 'none';
        tabContent[4].style.display = 'none';

      } else
        //2
        if (target == tabsObj.plastic.img || target == tabsObj.plastic.link || target == tabsObj.plastic.tabDiv) {
          tabDiv[0].classList.remove('slick-current');
          tabDiv[1].classList.remove('slick-current');
          tabDiv[3].classList.remove('slick-current');
          tabDiv[4].classList.remove('slick-current');
          tabDiv[2].classList.add('slick-current');
          tabContent[0].style.display = 'none';
          tabContent[1].style.display = 'none';
          tabContent[3].style.display = 'none';
          tabContent[4].style.display = 'none';
          tabContent[2].style.display = 'block';
        } else
          //3
          if (target == tabsObj.french.img || target == tabsObj.french.link || target == tabsObj.french.tabDiv) {
            tabDiv[0].classList.remove('slick-current');
            tabDiv[1].classList.remove('slick-current');
            tabDiv[2].classList.remove('slick-current');
            tabDiv[4].classList.remove('slick-current');
            tabDiv[3].classList.add('slick-current');
            tabContent[0].style.display = 'none';
            tabContent[1].style.display = 'none';
            tabContent[2].style.display = 'none';
            tabContent[4].style.display = 'none';
            tabContent[3].style.display = 'block';
          } else
            //4
            if (target == tabsObj.rise.img || target == tabsObj.rise.link || target == tabsObj.rise.tabDiv) {
              tabDiv[0].classList.remove('slick-current');
              tabDiv[1].classList.remove('slick-current');
              tabDiv[2].classList.remove('slick-current');
              tabDiv[3].classList.remove('slick-current');
              tabDiv[4].classList.add('slick-current');
              tabContent[0].style.display = 'none';
              tabContent[1].style.display = 'none';
              tabContent[2].style.display = 'none';
              tabContent[3].style.display = 'none';
              tabContent[4].style.display = 'block';
            }


  });

  //tabsDecoration
  // slick-track

  let slickTabsF = document.querySelector('.finish'),
    tabsFDiv = slickTabsF.querySelectorAll('div.decoration_item'),
    tabsFWrap = slickTabsF.querySelectorAll('.internal_link, .external_link, .rising_link, .roof_link'),
    tabsFImg = slickTabsF.querySelectorAll('img'),
    tabsFA = slickTabsF.querySelectorAll('a'),
    tabFDiv = slickTabsF.querySelectorAll('div'),
    tabsFContent = document.querySelectorAll('.internal, .external, .rising, .roof');

  

  slickTabsF.addEventListener('click', function (e) {
    let target = e.target;
    console.log(target);
    //0
    if (target == tabsFDiv[0] || target == tabsFA[0]) {
      tabsFDiv[0].classList.add('slick-current');
      tabsFDiv[1].classList.remove('slick-current');
      tabsFDiv[2].classList.remove('slick-current');
      tabsFDiv[3].classList.remove('slick-current');
      tabsFContent[0].style.display = 'block';
      tabsFContent[1].style.display = 'none';
      tabsFContent[2].style.display = 'none';
      tabsFContent[3].style.display = 'none';
      tabsFWrap[0].classList.add('after_click');
      tabsFWrap[1].classList.remove('after_click');
      tabsFWrap[2].classList.remove('after_click');
      tabsFWrap[3].classList.remove('after_click');

    } else
      //1
      if (target == tabsFDiv[1] || target == tabsFA[1]) {
        tabsFDiv[1].classList.add('slick-current');
        tabsFDiv[0].classList.remove('slick-current');
        tabsFDiv[2].classList.remove('slick-current');
        tabsFDiv[3].classList.remove('slick-current');
        tabsFContent[1].style.display = 'block';
        tabsFContent[0].style.display = 'none';
        tabsFContent[2].style.display = 'none';
        tabsFContent[3].style.display = 'none';
        tabsFWrap[1].classList.add('after_click');
        tabsFWrap[0].classList.remove('after_click');
        tabsFWrap[2].classList.remove('after_click');
        tabsFWrap[3].classList.remove('after_click');
      } else
        //2
        if (target == tabsFDiv[2] || target == tabsFA[2]) {
          tabsFDiv[2].classList.add('slick-current');
          tabsFDiv[1].classList.remove('slick-current');
          tabsFDiv[0].classList.remove('slick-current');
          tabsFDiv[3].classList.remove('slick-current');
          tabsFContent[2].style.display = 'block';
          tabsFContent[1].style.display = 'none';
          tabsFContent[0].style.display = 'none';
          tabsFContent[3].style.display = 'none';
          tabsFWrap[2].classList.add('after_click');
          tabsFWrap[0].classList.remove('after_click');
          tabsFWrap[1].classList.remove('after_click');
          tabsFWrap[3].classList.remove('after_click');
        } else
          //3
          if (target == tabsFDiv[3] || target == tabsFA[3]) {
            tabsFDiv[3].classList.add('slick-current');
            tabsFDiv[1].classList.remove('slick-current');
            tabsFDiv[2].classList.remove('slick-current');
            tabsFDiv[0].classList.remove('slick-current');
            tabsFContent[3].style.display = 'block';
            tabsFContent[1].style.display = 'none';
            tabsFContent[2].style.display = 'none';
            tabsFContent[0].style.display = 'none';
            tabsFWrap[3].classList.add('after_click');
            tabsFWrap[0].classList.remove('after_click');
            tabsFWrap[1].classList.remove('after_click');
            tabsFWrap[2].classList.remove('after_click');

          }
  });

}
module.exports = tabs;