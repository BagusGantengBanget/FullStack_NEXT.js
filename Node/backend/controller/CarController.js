import Car from "../models/CarModel.js";
import path from "path";

export const getCars = async(req, res)=>{
    try{
    const response = await Car.findAll();
    res.json(response);
    } catch (error){
        console.log(error.massage);

    }
}
export const getCarById = async(req, res)=>{
    try{
        const response = await Car.findOne({
            where:{
                id: req.params.id
            }
            
        });
        res.json(response);
        } catch (error){
            console.log(error.massage);
    
        }
}
export const saveCar = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Upload"});
    const name = req.body.title;
    const file= req.files.file;
    const fileSize= file.data.length;
    const ext= path.extname(file.name);
    const fileName= file.md5 + ext;
    const url = '${req.protocol}://${req.get("host")}/images/${fileName}';
    const allowedType = ['.png','jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:
    "invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg:
    "Images must be less 5 MB"});

    file.mv('./public/images/${fileName}', async(err)=>{
        if(err) return res.status(500).json({msg:
            err.message});
            try {
                await Car.create({name: name, image: fileName, url: url});
                res.status(201).json({msg: "Car Created Succesfuly"});
            }catch (error){
                console.log(error.message);

            }
    })


}
export const updateCar = (req, res)=>{

}
export const deleteCar = (req, res)=>{

}