import express from "express";
import {
    getCars,
    getCarById,
    saveCar,
    updateCar,
    deleteCar
} from "../controller/CarController.js";

const router = express.Router();

router.get('/cars', getCars);
router.get('/car/:id', getCarById);
router.post('/car', saveCar);
router.patch('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

export default router;