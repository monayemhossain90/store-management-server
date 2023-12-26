const  mongoose=require('mongoose');
const OTPSchema=mongoose.Schema(
    {

    email:{
        type:String
    },
    otp:{
        type:String
    },
    status:{
        type:Number,
        default:0
    },
  },
    { timestamps: true, versionKey:false},
);
const OTPSModel=mongoose.model('otps',OTPSchema);
module.exports=OTPSModel

