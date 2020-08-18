import React, { FC, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation } from "../generated/graphql";
import {setAccessToken } from "../accessToken";

export const Login: FC<RouteComponentProps> = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login] = useLoginMutation();
    return (
        <form onSubmit={async e => {
            e.preventDefault()
            const response = await login({
                variables: {
                    email,
                    password
                }
            });
            history.push("/")

            if(response && response.data !== undefined){
               setAccessToken(response.data.login.accessToken);
            }
            
            console.log(response)
        }}>
            <div>
                <input value={email} placeholder="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div>
                <input value={password} type="password" placeholder="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </div>

            <button type="submit">Login</button>
        </form>

    )
}