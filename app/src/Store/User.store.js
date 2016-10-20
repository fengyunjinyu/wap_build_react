var User_store = {

};

var host = "http://localhost/wap_build_react/data";
var Userstore = {
    Login: function(data_o , callback){
        return $.post(
            host+"/user/login.json" ,
            data_o,
            function(data){
                console.log(data);
                callback(data);

            },
            'json'
        )
    },
    Register:function(data){



    },
    getMsg: function(data_o){
        $.get(
            host+"/user/msg",
            data_o,
            function(data){

            },
            "json"
        )

    }
};

module.exports = Userstore;
