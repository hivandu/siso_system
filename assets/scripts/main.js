// Created by Hivan Du 2015(Siso brand interactive team).

"use strict";

//  limit browser drag move
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
},true);

var app = {
    create: function (){

    },

    start: function (){
        this.create();
    }
};

$(function (){
    // init app
    app.start();
    console.log('app started success...');
});

