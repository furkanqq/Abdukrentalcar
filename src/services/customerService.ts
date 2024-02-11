import { UpdateCustomerRequest } from '../types/requests/Customer/updateRequest';
import { AddCustomerRequest } from '../types/requests/Customer/addCustomerRequest';
import { UpdateCustomerResponse } from '../types/responses/Customer/updateCustomerResponse';
import { AddCustomerResponse } from '../types/responses/Customer/addCustomerResponse';
import { GetByIdCustomerResponse } from '../types/responses/Customer/getByIdCustomerResponse';
import { GetAllCustomerResponse } from '../types/responses/Customer/getAllCustomerResponse';
import { BaseService } from './baseService';
class CustomerService extends BaseService<
  GetAllCustomerResponse,
  GetByIdCustomerResponse,
  AddCustomerResponse,
  UpdateCustomerResponse,
  AddCustomerRequest,
  UpdateCustomerRequest
>{

    constructor(){
        super();
        this.apiUrl = "customers";
    }

}

export default new CustomerService();