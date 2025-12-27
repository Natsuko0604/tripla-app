import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ★最低限動く仮ログイン（本来はDBを確認）
        if (
          credentials?.email === "test@example.com" &&
          credentials?.password === "password123"
        ) {
          return {
            id: "1",
            name: "Test User",
            email: "test@example.com",
          }
        }

        return null
      },
    })
  ],
})