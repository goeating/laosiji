$(function () {
    var form = $('#form');
    form.validate({
        errorElement: 'span', //default input error message container
        errorClass: 'help-block help-block-error font-red', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: "",  // validate all fields including form hidden input
        messages: {
            username: {
                required: jQuery.validator.format("必填")
            }
        },
        rules: {
            name: {
                required: true
            }
        }
    });

    var viewModel = function () {
        this.name = ko.observable("");
        this.image = ko.observable("");
        this.type = ko.observable("");
        this.introduce = ko.observable("");
        this.originalPrice = ko.observable("");
        this.presentPrice = ko.observable("");
        this.release = ko.observable(true);
        // 提交表单
        this.submitForm = function (formElement) {
            if (form.valid()) {
                App.blockUI({   // 提交表单提示
                    animate: true
                });
                $.post('', {
                    name: this.name(),
                    type: this.type(),
                    introduce: this.introduce(),
                    originalPrice: this.originalPrice(),
                    presentPrice: this.presentPrice(),
                    release: this.release()
                }, function () {
                    App.unblockUI();
                });
            }
        };
        // 上传图片
        this.submitFile = function () {
            App.blockUI({   // 提交表单提示
                animate: true
            });
            $.post('', {
                image: this.image()
            }, function () {
                App.unblockUI();
            });
        };
    };
    ko.applyBindings(new viewModel());
});