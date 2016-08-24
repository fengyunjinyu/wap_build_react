const rootRoute ={
    component:'div',
    childRoutes: [
        {
            path:'/',
            component:App,
            childRoutes:[
                require('./routes/me.route'),
                require('./routes/friends.route'),
                require('./routes/near.route')
            ]
        }
    ]
}