$(function () {
    $('.date-picker').datepicker({
        rtl: App.isRTL(),
        autoclose: true,
        language: 'zh-CN'
    });
});