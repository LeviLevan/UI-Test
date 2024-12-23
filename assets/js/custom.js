;var wp_custom;

(function ($) {
    'use strict';

    wp_custom = {

        init: function () {
            this.faq();
        },

       faq: function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                const questionHeader = question.querySelector('.faq-q');
                questionHeader.addEventListener('click', () => {
                    faqQuestions.forEach(q => {
                        if (q !== question && q.classList.contains('open')) {
                            q.classList.remove('open');
                        }
                    });
                    question.classList.toggle('open');
                });
            });
        },


    };

    $(document).ready(function () {
        wp_custom.init();
    })

}(jQuery));