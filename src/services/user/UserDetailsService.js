const UserDetailsService= async (Request,DataModel) => {
    try {
        let data = await DataModel.aggregate([{$match: {email:Request.headers['email']}}])
        return  {status: "success", data: data[0]}
    } catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=UserDetailsService