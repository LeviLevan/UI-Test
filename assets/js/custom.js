;var wp_custom;

(function ($) {
    'use strict';

    wp_custom = {

        init: function () {
            this.headerMenu();
            this.faq(); 
        },

        headerMenu:function(){
            const menuToggle = document.querySelector('.menu-toggle');
            const menu = document.querySelector('.menu');
            const hamburgerIcon = document.querySelector('.hamburger-icon');

            menuToggle.addEventListener('click', () => {
                menu.classList.toggle('open');
                menuToggle.classList.toggle('open'); // Добавляем/удаляем класс для гамбургера
            });


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