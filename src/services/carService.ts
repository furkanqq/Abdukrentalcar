import { GetAllCarResponse } from '../types/responses/Car/getAllCarResponse';
import { AddCarRequest } from "../types/requests/Car/addCarRequest";
import { UpdateCarRequest } from "../types/requests/Car/updateCarRequest";
import { AddCarResponse } from "../types/responses/Car/addCarResponse";
import { GetByIdCarResponse } from "../types/responses/Car/getByIdCarResponse";
import { UpdateCarResponse } from "../types/responses/Car/updateCarResponse";
import { BaseService } from "./baseService";

class CarService extends BaseService<
    GetAllCarResponse,
	GetByIdCarResponse,
	AddCarRequest,
	AddCarResponse,
	UpdateCarRequest,
	UpdateCarResponse>
{
    constructor(){
        super();
        this.apiUrl = "cars";
    }
}
export default new CarService();