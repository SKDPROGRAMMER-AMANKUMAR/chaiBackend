import mongoose,{Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:[true, 'Username is must required'],
            lowercase:true,
            trim:true
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        password:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:[true,'Email is must required'],
            unique:true,
        },
        age:{
            type:Number,
        },
        dateOfbirth:{
            type:String,
            required:true
        }
    }   

,{timestamps:true})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
        
        this.password = bcrypt.hash(this.password,10)
        next()
    })
    
    userSchema.methods.generateAccessToken = function(){
        return jwt.sign(
            {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",userSchema)