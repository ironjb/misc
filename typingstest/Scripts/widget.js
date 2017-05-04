var MyWidget;
(function (MyWidget) {
    var helpers = (function () {
        function helpers() {
        }
        helpers.prototype.lowerify = function (val) {
            return val.toLowerCase();
        };
        return helpers;
    }());
    MyWidget.helpers = helpers;
})(MyWidget || (MyWidget = {}));
