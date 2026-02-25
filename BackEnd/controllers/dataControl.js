import userDataModel from '../models/userDataModel.js';
import bcrypt from 'bcrypt'


export const createData = async (req, res) => {

  try {
        const {UserName, email,Password} = req.body;
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(Password, saltRound)

        const addData = await userDataModel.create({UserName , email, Password : hashPassword})
        res.status(200).json({msg:"Data Added Successfully",addData})
    } 
    catch (error) {
    console.log( `Error : ${error} `);
     res.status(404).json({msg:"Soemthing error",error})
    }
};



