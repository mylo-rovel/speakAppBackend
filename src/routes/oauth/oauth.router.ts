import express, {Router} from "express";

export const oauthRouter: Router = express.Router();

oauthRouter.get("/");
oauthRouter.get("/callback");
oauthRouter.get("/logout");
