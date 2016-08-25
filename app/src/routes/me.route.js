module.exports = {
    path:'me' ,
    //component:require("../Me.react")

    getComponent(nextState , cb) {
        require.ensure([] , (require) =>{
            cb(null , require('../Me.react'));
        })
    }
    /*
    getChildRoutes(partialNextState , cb){
        require.ensure([] , (require)=> {
            cb(null , [
                require('./routes/Announcements'),
                require('./routes/Assignments'),
                require('./routes/Grades')
            ])
        })
    }
    */
};


