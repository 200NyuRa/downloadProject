// анимация при скроле
// ------------------------------
(function () {
    function animateElement() {
        if ($('.js-animation-wrap').length) {
            let sections = $('.js-animation-wrap'),
                windowTop = $(window).scrollTop(),
                windowHeight = document.body.clientHeight;

            sections.each(function () {
                let section = $(this),
                    elPositionTop = section.offset().top,
                    sectionItem = section.children('[class*= "item"]'),
                    sectionPart = section.children('[class*= "part"]');

                if (section.height() >= windowHeight && sectionItem.length) {
                    section = sectionItem;
                } else if (sectionPart.length) {
                    section = sectionPart;
                }

                if (windowTop + windowHeight >= elPositionTop) {
                    section.addClass('on-scroll');

                } else {
                    section.removeClass('on-scroll');
                }
            });
        }
    }

    $(window).scroll(function () {
        let timer;

        clearTimeout(timer);
        timer = setTimeout(function () {
            animateElement();
        }, 400);
    });
})();
