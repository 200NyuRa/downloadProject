// (function () {
//     let trigger = $('.md-trigger');
//     let form = $('#popup-form').find('form');
//     let inputs = form.find('input[name]').val('');
//     let noticeBlock = $('.md-trigger-notice');
//     if (trigger.length) {
//         trigger.magnificPopup({
//             type: 'inline',
//             removalDelay: 300,
//             focus: '#name1ID',
//             mainClass: 'my-mfp-zoom-in',
//             callbacks: {
//                 close: function () {
//                     inputs.each(function () {
//                         if ($(this).val !== '') {
//                             $(this).val('');
//                         }
//                         if ($(this).hasClass('field__input_error')) {
//                             $(this).removeClass('field__input_error');
//                         }
//                     });
//                 }
//             }
//         });
//         $.magnificPopup.open({
//             items: {
//                 src: '#popup-form'
//             },
//             type: 'image'
//         });
//     }
//
//     if (!$.cookie('smartCookies') && noticeBlock.length) {
//         let temeId,
//         var temeId = void 0,
//             arrTimeDelay = ['4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '14000', '15000'],
//                 currentTimeDelay = Math.floor(Math.random() * arrTimeDelay.length);
//
//         console.log(arrTimeDelay[currentTimeDelay]);
//
//         noticeBlock.magnificPopup({
//             type: 'inline',
//             removalDelay: 300,
//             mainClass: 'my-mfp-zoom-in'
//         });
//
//         clearInterval(temeId);
//         temeId = setTimeout(function () {
//             $('.md-trigger-notice').click();
//         }, currentTimeDelay);
//
//         $.cookie('smartCookies', true, {
//             expires: 180,
//             path: '/'
//         });
//     }
// })();
//
