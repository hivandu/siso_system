// Created by Hivan Du 2015(Siso brand interactive team).

"use strict";

var calendar = {
    toggleTask: function () {
        //  click task title to show task summary
        $('.calendar .task-hd').click(function (e) {
            e.stopPropagation();
            components.floatPanel.show($('.task-detail'));
        });

        //  show psd preview
        $('.calendar .task .icon-jpg').click(function (e) {
            e.stopPropagation();
            components.floatPanel.show($('.task-preview'));
        });
    },

    toggleSidebar: function () {
        $('.calendar-btn, .calendar-mask').click(function (e) {
            e.stopPropagation();
            $('.calendar-sidebar, .calendar-mask').toggleClass('active');
        });
    },

    init: function () {
        this.toggleTask();
        this.toggleSidebar();

        components.toggle('.task-editor .more', '.task-editor .desc');

        //  create task
        $('.calendar-editor .calendar-hd .create').click(function (e) {
            e.stopPropagation();
            $('.task-editor').removeClass('task-editor-editing');
            components.floatPanel.show($('.task-editor'));
        });

        //  edit task
        $('.calendar-editor .task-hd .icon-edite').click(function (e) {
            e.stopPropagation();
            $('.task-editor').addClass('task-editor-editing');
            components.floatPanel.show($('.task-editor'));
            console.log(111);
        });
    }
};

$(function (){
    // init app
    calendar.init();
});

