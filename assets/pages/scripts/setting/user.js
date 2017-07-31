$(function () {
    var grid = new Datatable();
    grid.init({
        src: $("#table"),
        onSuccess: function (grid, response) {
            // grid:        grid object
            // response:    json object of server side ajax response
            // execute some code after table records loaded
        },
        onError: function (grid) {
            // execute some code on network or other general error
        },
        onDataLoad: function (grid) {
            // execute some code on ajax data load
        },
        loadingMessage: 'Loading...',
        dataTable: {
            "dom": "<'row no-margin'<'col-md-8 col-sm-12'l><'col-md-12 col-sm-12'<'table-group-actions pull-right'>>r>t<'row no-margin'<'col-md-8 col-sm-12'i><'col-md-4 col-sm-12 text-right'p>>",
            "pagingType": "bootstrap_full_number",
            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.
            "searching": false,// 是否允许Datatables开启本地搜索
            "orderCellsTop": false,// 控制表头(colspan rowspan 表头)的哪一个单元格可以应用于该列的排序响应
            "deferRender": true,// 控制Datatables的延迟渲染，可以提高初始化的速度
            "lengthChange": false,// 是否允许用户改变表格每页显示的记录数
            "pageLength": 10, // 	改变初始化页长度（每页多少条数据）
            "ajax": {
                "url": "./user.json" // ajax source
            },
            "order": [
                [1, 'asc']
            ],// 表格在初始化的时候的排序
            "columnDefs": [
                {
                    "orderable": false,
                    "targets": [1, 2, 3, 4, 5]
                },
                {
                    "targets": 2,
                    "render": function (data, type, full, meta) {
                        return data === true ? '<span class="label label-sm label-success"> 是 </span>' : '<span class="label label-sm label-default"> 否 </span>';
                    }
                },
                {
                    "targets": [3, 4],
                    "data": null,
                    "render": function (data, type, full, meta) {
                        return moment(data).format('YYYY-MM-DD HH:mm:ss');
                    }
                },
                {
                    "targets": 5,
                    "data": null,
                    "render": function (data, type, full, meta) {
                        return '<a class="btn btn-sm green btn-outline" href="./user-editor.html"> 更新 </a><a class="btn btn-sm red btn-outline delete" href="./role-editor.html"> 删除 </a>';
                    }
                }
            ],
            "columns": [
                {"data": "name"},
                {"data": "role"},
                {"data": "activation"},
                {"data": "loginTime"},
                {"data": "creationTime"}
            ]
        }
    });

    //删除
    grid.getTableWrapper().on('click', '.delete', function (e) {
        e.preventDefault();
//            if (confirm("确定要删除吗 ?") == false) {
//                return;
//            }
        swal({
                title: "确定要删除吗 ?",
                type: "warning",
                allowOutsideClick: false,
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                cancelButtonClass: "btn-default",
                closeOnConfirm: false,
                closeOnCancel: false,
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            },
            function (isConfirm) {
                if (isConfirm) {
                    swal({
                        title: "删除成功",
                        type: "success",
                        confirmButtonClass: "btn-success",
                        confirmButtonText: "确定"
                    }, function (confirm) {
                        if (confirm) {
                            console.log('111');
                        }
                    });

                } else {
                    swal({
                        title: "删除取消",
                        type: "error",
                        confirmButtonClass: "btn-info",
                        confirmButtonText: "确定"
                    });
                }
            });
    });
//        grid.setAjaxParam("customActionType", "group_action");
//        grid.getDataTable().ajax.reload();
//        grid.clearAjaxParams();
});