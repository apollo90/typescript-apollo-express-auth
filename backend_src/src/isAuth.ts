import { MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";
import { ApplicationContext } from "./ApplicationContext";
import { verify } from "jsonwebtoken";


// Headers -> authorization : bearer {TOKEN}
export const isAuth: MiddlewareFn<ApplicationContext> = ({context},next) =>{
    const authorization = context.req.headers['authorization']
    
    if(!authorization){
        throw new Error("Not authorized")
    }
    try {
      const token = authorization.split(" ")[1];
      const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      context.payload =  payload as any;
    } catch (error) {
      console.log(error);
      throw new Error("Not authorized")
    }
    return next();
}