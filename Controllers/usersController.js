const { userModel } = require('../models');

const addUser = (body) => {

    const doc = new userModel(body);
    const query= {_id: doc._id};
    return userModel.findOneAndUpdate(query, doc,{
        upsert:true,
        new:true,// upsert is used to add new objects/records in db
    });
    // .populate('userType.item');// always returns the latest/new records
};

const updateUser = (body) => {
    const query = { _id: body._id};
    return userModel.findOneAndUpdate(query , body,{
         new: true,
    });
};
const deleteUser = (filter) => {
    return userModel.deleteOne(filter);
};

const getAllUsers = (filter) => {
    return userModel.find(filter);
}

const getUser = (filter) => {
    return userModel.findOne(filter);
}

module.exports = {
     addUser,
     updateUser,
     deleteUser,
     getAllUsers,
     getUser
}
