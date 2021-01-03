import {httpClient} from "./http-client";
import {ProductService} from "./product-service";

export const services = {
    productService: new ProductService(httpClient)
}
export const userServices = () =>{
    return services
}