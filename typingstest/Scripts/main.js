var MyMod;
(function (MyMod) {
    $('#demo').html('test2');
    var x = { foo: 'foofoo', bar: 4 };
    window.console && console.log('demo set', x);
    var helper = (function () {
        function helper() {
            this.message = 'init message';
        }
        helper.prototype.changeMessage = function () {
            this.message = 'new message';
        };
        return helper;
    }());
    MyMod.helper = helper;
    var inMod = new helper();
    window.console && console.log('msg', inMod.message);
    inMod.changeMessage();
    window.console && console.log('msg chng', inMod.message);
})(MyMod || (MyMod = {}));
