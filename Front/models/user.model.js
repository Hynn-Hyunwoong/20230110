//create model type 1
// class type

//create model type 2
// function type 

// create model type 1 below.

//step1. export to function
//Define = definition , It's create Model.
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users',{
        userid:{
            type:DataTypes.STRING(30),
            allowNull : false,
            unique : true,
        },
        userpw: {
            type:DataTypes.STRING(64),
            allowNull : false,
        },
        username: {
            type:DataTypes.STRING(30),
            allowNull : false
        },
        gender: {
            type:DataTypes.STRING(4),
            allowNull: false,
            defaultValue: '남자'
        },
    },{
        freezeTableName : true,
        // timestamp : false
    }) //create Model 

    //define list 
    //1. define of Object_Name
    //2. INSERT INTO Field in Table
    //3. Option of Table (example: encoding (ex.utf8...), )
};

