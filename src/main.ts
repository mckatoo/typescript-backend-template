import env from "../env.js";
import { start } from "./server.js";

const { HOST_NAME, PORT } = env

start(HOST_NAME, PORT)
