import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useByeQuery } from "../generated/graphql";

export const Bye: FC<RouteComponentProps> = () => {
    const { data, loading, error } = useByeQuery({
        fetchPolicy: "network-only"
    });

    if (loading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    if (error) {
        console.log(error)
        return <div>error</div>
    }

    if (!data) {
        return (
            <div>No data</div>
        )
    }
    console.log(data)
    return (
        <div>
            {data.bye}
        </div>
    )
}