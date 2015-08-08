angular.module('kp.form.utils', [])
  .directive('kpInteger', function () {
    var integerRegexp = /^\-?\d*$/;
    return {
      require: 'ngModel',
      link: function (scope, ele, attr, modelCtrl) {
        modelCtrl.$parsers.unshift(function (value) {
          modelCtrl.$setValidity('integer', integerRegexp.test(value));
        });
      }
    };
  })
  .directive('kpEndWith', function () {
    return {
      require: 'ngModel',
      link: function (scope, ele, attr, modelCtrl) {
        modelCtrl.$parsers.unshift(function (value) {
          var suffix = attr.endsWith;
          modelCtrl.$setValidity('endWith', value.indexOf(suffix, value.length - suffix.length) > -1);
        });
      }
    };
  })
;
