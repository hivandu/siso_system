// Created by Hivan Du 2015(Siso brand interactive team).

"use strict";

var components = {
    floatPanel: {
        show: function (elem) {
            elem.addClass('active');
            $('.operate-mask').addClass('active');
        },

        hide: function (elem) {
            elem.removeClass('active');
            $('.operate-mask').removeClass('active');
        },

        init: function () {
            var that = this;

            //  prevent click event
            $('body').on('click', '.m-float-panel', function (e) {
                e.stopPropagation();
            });

            //  close panel
            $('.m-float-panel .icon-close').click(function (e) {
                e.stopPropagation();
                that.hide($(this).parents('.m-float-panel'));
            });

            $('body').click(function () {
                that.hide($('.m-float-panel'));
            });
        }
    },

    toggle: function (btn, wrap) {
        $(btn).click(function () {
            $(this).toggleClass('active');
            $(this).parents(wrap).toggleClass('active');
        });
    },

    init: function () {
        this.floatPanel.init();
    }
};

$(function (){
    // init app
    components.init();
});

