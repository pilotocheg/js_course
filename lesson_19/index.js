const checkAuth = new Promise((resolve, reject) => {  
    setTimeout(() => {
        let authInfo = {isAuth: true};
        if(!authInfo.isAuth) reject( null );
        resolve( {name: 'Max'} );
    }, 2000);
})
.then(user => {
    setTimeout(() => {
        console.log(user.name);
    }, 2000);
})
.catch(user => {
    console.log(user.name);
});