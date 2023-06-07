import env from "src/env.js";
import { start } from "src/server.js";

const { HOST_NAME, PORT } = env

start(HOST_NAME, PORT)
