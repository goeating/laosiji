$(function () {
    var form = $('#form');
    var error = $('.alert-danger', form);
    form.validate({
        errorElement: 'span', //default input error message container
        errorClass: 'help-block help-block-error font-red', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: "",  // validate all fields including form hidden input
        messages: {
            username: {
                required: jQuery.validator.format("用户名不能为空")
            },
            password: {
                required: jQuery.validator.format("密码不能为空")
            }
        },
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        }
    });

    var viewModel = function () {
        this.username = ko.observable("");
        this.password = ko.observable("");
        this.submitForm = function (formElement) {
            if (form.valid()) {
                error.hide();   // 隐藏错误提示
                App.blockUI({   // 提交表单提示
                    animate: true
                });
                console.log(this.username());
                $.post('', {
                    username: this.username(),
                    password: this.password()
                }, function () {
                    App.unblockUI();
                });
            }
        };
    };
    ko.applyBindings(new viewModel());
});