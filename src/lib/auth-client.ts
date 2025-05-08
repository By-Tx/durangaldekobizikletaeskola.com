import { createAuthClient } from "better-auth/react"
import { adminClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    baseURL:  process.env.NODE_ENV == 'development' ? "http://localhost:4230" :"https://durangaldekobizikletaeskola.com",
    plugins: [
        adminClient()
    ]
})
