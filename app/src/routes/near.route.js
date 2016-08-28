var Nearcomp = require("../Near.react");
module.exports={
    path:'near',
    component:Nearcomp,
    childRoutes:[
        {path:'shopping' , component: require('../Near/Shopping.react')},
        {path:'store/:id' , component: require("../Near/Store.react") }

    ],
    indexRoute:{
        component:require("../Near/Index.react")
    }
}