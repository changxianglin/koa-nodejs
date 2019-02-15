const userSchema = new mongoose.Schema({
    openId: {
        type: String,
        index: true,
        unique: true
    },
    create: {
        type: Date,
        default: Date.now()
    },
    lastLogin: {
        type: Date
    },
    name: {
        type: String,
        index: true
    },
    avatar: {
        type: String
    },
    userType: {
        type: Number
    }
})