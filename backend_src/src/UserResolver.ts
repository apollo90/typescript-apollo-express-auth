import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
} from "type-graphql";
import { hash } from "bcryptjs";
import { User } from "./entity/User";
import { ApplicationContext } from "./ApplicationContext";
import { createRefreshToken, createAccessToken } from "./auth";
import { isAuth } from "./isAuth";
import { sendRefreshToken } from "./sendRefreshToken";
import { getConnection } from "typeorm";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

// Used to create graphql schema

@Resolver()
export class UserResolver {


  @Query(() => String)
  hello() {
    return "Hello world";
  }


  @Query(() => [User])
  async users() {
    try {
      const users = await User.find();
      if(users){
        return users;
      }
    } catch (error) {
      throw new Error("No users found")
    } 
    throw new Error("No users found")
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: ApplicationContext) {
    return `Your user id is ${payload!.userId} `;
  }
  // NOTE:: mutations are used update to data
  @Mutation(()=> Boolean)
  async revokeRefreshTokensForUser(@Arg('userId',()=>Int) userId: number){
      await getConnection().getRepository(User).increment({
        id:userId
      },"tokenVersion",1)
      return true;
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashedpassword = await hash(password, 12);

    try {
      await User.insert({
        email,
        password: hashedpassword,
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
  // NOTE:: mutations are used update to data
  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: ApplicationContext
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Could not find user" + password);
    }

    try {
      const valid = true;
      if (!valid) {
        throw new Error("Password incorrect");
      }
    } catch (error) {
      throw new Error(error);
    }

    sendRefreshToken(res, createRefreshToken(user));
    return {
      accessToken: createAccessToken(user),
    };
  }
}
