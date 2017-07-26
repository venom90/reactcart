
(function (global, undef) {

    // Define our constructor
    "use strict";
    var bonavita = global.Bonavita = global.Bonavita||{};

    bonavita.getImagePath = function(path,x,y) {
        var fullPath = "";
        var env = Bonavita.env;
        var protocol = window.location.protocol+'//';

        if(env == 'PROD') {
            protocol += 'i1'+'.';
            protocol += Bonavita.domainName ;
        }
        else if(env == 'STG') {
            protocol += 'stgi1'+'.';
            protocol += Bonavita.domainName ;
        }
        else{
            protocol +=  Bonavita.bucketName + '.s3.amazonaws.com';
        }

        if(x === undefined && path){
            if(path.charAt(0) != '/'){
                path = '/'+path;
            }
            var fullPath = protocol + path;
        }
        else if(path){
            if(path.charAt(0) != '/'){
                path = '/'+path;
            }
            var pathArr = path.split('.')
            var fileExt = pathArr[pathArr.length-1];
            var fileName = path.substring(0,(path.length-fileExt.length-1));

            fileName = fileName+'-' + x + 'X' +y;
            var fullPath = protocol+fileName+'.'+fileExt;
        }
        return fullPath
    }

    bonavita.validateEmail = function (email){
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }

    bonavita.validatePhoneNumber= function(phone) {
        var phoneNo = /^\d{10}$/;
        if(phone.match(phoneNo))
            return true;
        else
            return false;
    }


}(window));




$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
