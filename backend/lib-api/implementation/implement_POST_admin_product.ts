import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { POST_admin_product_Req } from '../expressjs-aa/api/POST_admin_product';
import { AdminProductPayload } from '../ts-schema/AdminProductPayload'
import { Product } from '../model/table/Product';
import { verifyToken } from "../../fn/verifyToken";

export function implement_POST_admin_product(engine: ExpressAA) {
  engine.implement({
    endpoint: 'POST /admin/product',
    async fn(param: POST_admin_product_Req): Promise<Product> {
      // menampilkan data product keseluruhan

      const { authorization: authorization } = param.headers;
      const token = verifyToken(authorization);
      if (!token) {
        throw new Error("Unauthorized");
      }

      const { category, description, name, imgurl, price, quantity} = param.body.data;

      if (!category || !description || !name || !imgurl || !price || !quantity) {
        throw new Error("category, description, name, imgurl, price, quantity are required");
      }

      if (typeof price !== 'number' || price <= 0) {
        throw new Error("price must be a positive number");
      }

      if (typeof quantity !== 'number' || quantity < 0) {
        throw new Error("quantity must be a non-negative number");
      }

      if (name.length < 3) {
        throw new Error("name must be at least 3 characters long");
      }

      if (description.length < 10) {
        throw new Error("description must be at least 10 characters long");
      }

      if (category.length < 3) {
        throw new Error("category must be at least 3 characters long");
      }

      if (imgurl.length < 10) {
        throw new Error("imgurl must be at least 10 characters long");
      }

      // create new product
      const newProduct = new Product();
      newProduct.category = category;
      newProduct.description = description;
      newProduct.name = name;
      newProduct.imgurl = imgurl;
      newProduct.price = price;
      newProduct.quantity = quantity;
      
      await newProduct.save();

      return newProduct;
 
    }
  });
}
