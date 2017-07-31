$(function () {
    var form = $('#form');
    form.validate({
        errorElement: 'span', //default input error message container
        errorClass: 'help-block help-block-error font-red', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: "",  // validate all fields including form hidden input
        messages: {
            type: {
                required: jQuery.validator.format("请填一个商品类别！")
            }
        },
        rules: {
            type: {
                required: true
            }
        }
    });

    var viewModel = function () {
        this.type = ko.observable("");
        // 提交表单
        this.submitForm = function (formElement) {
            if (form.valid()) {
                App.blockUI({   // 提交表单提示
                    animate: true
                });
                $.post('', {
                    type: this.type(),
                }, function () {
                    App.unblockUI();
                });
            }
        };
    };
    ko.applyBindings(new viewModel());
});