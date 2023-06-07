import dotenv from "dotenv";

dotenv.config()

const env = (key: string) => {
  if (process.env[key] === undefined)
    console.error(`*** ${key} IS UNDEFINED. ***`)
  return `${process.env[key] ?? ''}`
}

export default {
  HOST_NAME: env('HOST_NAME'),
  PORT: +env('PORT')
}
