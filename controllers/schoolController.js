const school = require("../models/schoolSchema")

const createSchool = (req, res)=>{
const newSchool = new school({
    schoolname:req.body.schoolname,
    location:req.body.location,
    category:req.body.category,
    facilities:req.body.facilities,
    numofschool:req.body.numofschool,
    address:req.body.adders,
    contact:req.body.contact,

})
newSchool.save();
res.status(200).json(newSchool)
}
//getschool a school
const getSchools = async(req,res) => {
    const schools = await school. find();
    res.status(200).json(schools);
}




module.exports={createSchool, getSchools}
