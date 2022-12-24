const{
    usersController,
    adminsController,
    clientsController
}= require('../controllers');

const signup = async (body) => {
    //apply validation

if (!body.userName){
    return Promise.reject({error: "username is requried"});
}
if (!body.password){
    return Promise.reject({error: "password is requried"});
}
if (!body.userType){
    return Promise.reject({error: "usertype is requried"});
}

// if (!body.data){// data represents publicbinfo of the user 
//     return Promise.reject({error:"data is requeied"});
// }
try {
      let result = null;
     const usersType = body.userType;
    switch(usersType){
        case 'admin':
            //apply admin fileds validation here
            result = await adminsController.addAdmin(body.data);
            break;
        case 'client':
            result = await clientsController.addClient(body.data);
                break;
        default:
            return Promise.reject({error: "usertype is invalid"})
    }
    const userJson = {
        userName : body.userName,
        password : body.password,// make this password encrypted
          userType:{
            kind: usersType,
            item: result._id
          }
    };
    const user = await usersController.addUser(userJson)
        return user;
} catch(ex){
     return Promise.reject({error: ex});
}
}

module.exports={
    signup
}