import anime from '/node_modules/animejs/lib/anime.es.js';

var LEO = document.querySelectorAll('#LEO');
var LEAO = document.querySelectorAll('#LEAO_ALL');
var MEIO = document.querySelectorAll('#MEIO');
var LOGO = document.querySelectorAll('#logo_leo');
var tlLogo = anime.timeline({
    easing: 'easeInOutSine',
    direction: 'reverse',
}); 
    // tlLogo.add({
    //     targets: LOGO,
    //     display: 'flex',
    //     justifyContent: 'left',
    //     alignItems: 'top',
    // });

    tlLogo.add({
        targets: LOGO,
        scale: [0.5, 1],
    });
  
  tlLogo.add({
    targets: LEO,
    translateY: 1000,    
  }); 
  tlLogo.add({
    targets: MEIO,
    translateY: 1000,
  });
  tlLogo.add({
    targets: LEAO,
    translateY: 1000,
  });
//   tlLogo.add({
//     targets: LOGO,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   })
  

