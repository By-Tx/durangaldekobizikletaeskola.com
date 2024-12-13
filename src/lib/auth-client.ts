import { createAuthClient } from "better-auth/react"


export const authClient = createAuthClient({
    baseURL:  process.env.NODE_ENV == 'development' ? "http://localhost:4224" :"https://durango.txuli.com",

})
