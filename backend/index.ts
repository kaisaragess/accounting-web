import { AppDataSource } from "./data-source";
import { ExpressAA, SystemParam } from "./lib-api/expressjs-aa/ExpressAA";
import { implement_DELETE_admin_product__id } from "./lib-api/implementation/implement_DELETE_admin_product__id";
import { implement_DELETE_admin_user__id } from "./lib-api/implementation/implement_DELETE_admin_user__id";
import { implement_GET_admin_product } from "./lib-api/implementation/implement_GET_admin_product";
import { implement_GET_admin_product__id } from "./lib-api/implementation/implement_GET_admin_product__id";
import { implement_GET_admin_transaction } from "./lib-api/implementation/implement_GET_admin_transaction";
import { implement_GET_admin_transaction__id } from "./lib-api/implementation/implement_GET_admin_transaction__id";
import { implement_GET_admin_user } from "./lib-api/implementation/implement_GET_admin_user";
import { implement_GET_admin_user__id } from "./lib-api/implementation/implement_GET_admin_user__id";
import { implement_POST_admin_product } from "./lib-api/implementation/implement_POST_admin_product";
import { implement_POST_admin_transaction } from "./lib-api/implementation/implement_POST_admin_transaction";
import { implement_POST_login } from "./lib-api/implementation/implement_POST_login";
import { implement_POST_register } from "./lib-api/implementation/implement_POST_register";
import { implement_PUT_admin_product__id } from "./lib-api/implementation/implement_PUT_admin_product__id";
import { implement_PUT_admin_user__id } from "./lib-api/implementation/implement_PUT_admin_user__id";
// import { User } from "./lib-api/model/table/User";

const system_param: SystemParam = {
  port: 3001,
  async beforeStart() {
    await AppDataSource.initialize();
  },
};

new ExpressAA().init(system_param).then((engine: ExpressAA) => {
  implement_POST_register(engine),
  implement_POST_login(engine),
  implement_POST_admin_product(engine),
  implement_DELETE_admin_user__id(engine),
  implement_DELETE_admin_product__id(engine),
  implement_PUT_admin_product__id(engine),
  implement_PUT_admin_user__id(engine),
  implement_GET_admin_product__id(engine),
  implement_GET_admin_product(engine),
  implement_GET_admin_user__id(engine),
  implement_GET_admin_transaction(engine),
  implement_GET_admin_transaction__id(engine),
  implement_POST_admin_transaction(engine),
  implement_GET_admin_user(engine)
})