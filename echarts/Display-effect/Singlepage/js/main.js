//引入其他的资源
require.config({
    paths:{
        "jquery":'./jquery',
        "underscore":'./underscore',
        "backbone":"./backbone",
        'router':'./router',
        "text":'./text',
    },
    shim:{
        'underscore':{
            exports:'_'
        },
        'jquery':{
            exports:'$'
        },
        'backbone':{
            deps:['underscore','jquery'],
            exports:'backbone'
        }
    }
})
//引入模块
require(['backbone','router'],function(backbone,router){
    var router=new router();
    backbone.history.start();
})
