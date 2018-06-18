/**
 * Created by mohitbhansali on 18/06/18.
 */
const mongoose = require("mongoose");
const User = mongoose.model("User");

class UserService {
    *saveUser(user) {
        return yield User.create(user);
    }

    *fetchUsers() {
        return yield User.find();
    }
}

module.exports = new UserService();