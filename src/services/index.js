import {httpClient} from "./htttp-client";
import {ProductService} from "./product-service";

export const services = {
    productService: new ProductService(httpClient)

}
export const useServices = () =>{
    return services
}