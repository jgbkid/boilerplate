$( document ).ready(function() {

// jQuery HTML5 placeholder fix.js
// Released under MIT license: http://www.opensource.org/licenses/mit-license.php
 
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur().parents('form').submit(function() {
  $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});


//--------- SIDE NAV DRAWER FUNCTIONALITY --------- //


// var container = $('.drawer');

// $('.menu-button').click(function(){

//   if (container.hasClass('open')) {

//     $(container).removeClass('open');
//   }
//   else {

//     $(container).addClass('open');
//   }
// });


//--------- MAGNIFIC POPUP --------- //


// $('.popup-link').magnificPopup({
//   delegate: 'a', // child items selector, by clicking on it popup will open
//   type: 'image',
//   gallery: {
//     enabled: true
//   }
// });


// Example with multiple objects
// $('.gallery').magnificPopup({
//     items: [
//       {
//         src: 'http://placehold.it/768x432&text=Image+1'
//       },
//       {
//         src: 'http://placehold.it/768x432&text=Image+2'
//         // type: 'iframe' // this overrides default type
//       },
//       {
//         src: 'http://placehold.it/768x432&text=Image+3' // Dynamically created element
//         // type: 'inline'
//       }
//     ],
//     gallery: {
//       enabled: true
//     },
//     type: 'image', // this is default type

//     // Delay in milliseconds before popup is removed
//     removalDelay: 300,

//     // Class that is added to popup wrapper and background
//     // make it unique to apply your CSS animations just to this exact popup
//     mainClass: 'mfp-fade'
// });

});
