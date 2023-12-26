const mongoose = require("mongoose");
const DetailsByIDService= async (Request,DataModel) => {
    
    try{

        let DetailsID=Request.params.id;
        let UserEmail=Request.headers['email'];

        const ObjectId = mongoose.Types.ObjectId;
        /*let QueryObject={};
        QueryObject['_id']=ObjectId(DetailsID);
        QueryObject['UserEmail']=UserEmail;*/

        let DetailsQueryObject = {_id: ObjectId(DetailsID)};


        let data = await DataModel.aggregate([
            {$match: DetailsQueryObject}
        ])
        return {status: "success", data: data[0]}
    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
module.exports=DetailsByIDService