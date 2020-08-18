import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("HIDDEN_COOKIE", token, {
    httpOnly: true,
  });
};
