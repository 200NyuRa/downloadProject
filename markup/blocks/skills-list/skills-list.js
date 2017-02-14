(function () {
    let skillsList = $('.skills-list'),
        skillsItems = skillsList.find('.skills-list__circle'),
        DURATIONANIMATION = 1000,
        windowScroll = $(window).scrollTop(),
        progressflag = false;

    function animate() {

        skillsItems.each(function (i, elem) {
            let percentage = parseInt($(elem).attr('data-percentage'), 10),
                percentageWrapper = $(elem).find('.skills-list__percentage'),
                skillsProgressBar = $(elem).find('.skills-list__bar');

            percentageWrapper.animate({ num: percentage}, {
                duration: DURATIONANIMATION,
                step: function (num) {
                    this.innerHTML = num.toFixed(0) + '%';
                }
            });

            $(skillsProgressBar).css('strokeDasharray', `${percentage}, 100`);
            progressflag = true;
        });
    }

    if (windowScroll - skillsList.offset().top >= 0 && !progressflag) {
        animate();
    }

    $(window).scroll(function () {
        windowScroll = $(this).scrollTop();

        $('.skills-list').each(function (i, elem) {
            let elemPatentOffsetTop = $(elem).closest('.section').offset().top;
            if (windowScroll - elemPatentOffsetTop >= 0 && !progressflag) {
                animate();
            }
        });
    });

})();

