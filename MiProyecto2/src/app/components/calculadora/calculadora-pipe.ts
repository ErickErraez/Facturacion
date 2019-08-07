import { PipeTransform, Pipe } from "@angular/core";
import { Product } from '../../models/product';

@Pipe ({
    name:'tableFilter'    
})
export class TableListPipe implements PipeTransform {
transform(productList: Product[], searchTerm: string) : Product[] {
    if (!productList || !searchTerm){
        return productList;
    }   
    return productList.filter(product=> 
    product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
}
}