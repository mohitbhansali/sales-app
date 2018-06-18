let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let passportLocalMongoose = require('passport-local-mongoose');

// Create a User Group Schema
let UserGroupSchema = mongoose.Schema({
    name:String,
    status:Boolean
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});
mongoose.model('UserGroup', UserGroupSchema);

// Create a User Schema
let UserSchema = mongoose.Schema({
    email:String,
    username:String,
    verification_token:String,
    reset_token:String,
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});
UserSchema.plugin(passportLocalMongoose, {usernameField:"email"});
UserSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.salt;
    delete obj.hash;
    delete obj.verification_token;
    return obj;
};
mongoose.model('User', UserSchema);