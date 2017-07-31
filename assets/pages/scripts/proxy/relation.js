$(function () {
    $("#tree").jstree({
        "core" : {
            "themes" : {
                "responsive": false
            },
            // so that create works
            "check_callback" : true,
            'data' : {
                'url' : function (node) {
                    return 'relation.json';
                },
                'data' : function (node) {
                    console.log(node);
                    return { 'parent' : node.id };
                }
            }
        },
        "types" : {
            "default" : {
                "icon" : "fa fa-user icon-state-success icon-lg"
            },
            "child" : {
                "icon" : "fa fa-user icon-state-warning icon-lg"
            },
            "grandson": {
                "icon" : "fa fa-user icon-state-danger icon-lg"
            }
        },
        "plugins" : ["types" ]
    });
});