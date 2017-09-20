define([
    'vue'
], function(Vue) {
    'use strict'
   
    Vue.filter('trimZero', function(value) {
        var number =+ value.replace(/[^\d.]/g, '');
        return parseInt(number);
    });
});