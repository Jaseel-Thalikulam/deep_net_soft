import env from "dotenv";
env.config();
export const secretes = {
  port: process.env.PORT,
  mongooseUrl: process.env.MONGOOSEURL,
  clientUrl: process.env.CLIENT_URL,
};
