angular.module('simple.angular.recaptcha')
.service('recaptchaService', function(){
  'use strict';
  var service = this;
  var captcha = {};
  
  service.setCaptcha = function( _captcha ) {
      captcha = _captcha;
  }
  
  service.hide = function(){
    captcha.setVisible(false)
  };
  
  service.show = function(){
    captcha.setVisible(true)
  };
  
  service.update = function(){
    captcha.setVisible(true);
    captcha.reset();
  }
  
  service.toggle = function() {
    if(captcha.isVisible()){
      service.hide();
    } else {
      service.update();
    }
  }
  
  service.reset = function(){
    captcha.reset();
  };
});
