import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prisma } from "@/utils/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Correo",
          type: "email",
        },
        password: {
          label: "Contraseña",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        })

        if (!user) {
          return null
        }

        const passwordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!passwordValid) {
          return null
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          plan: user.plan,
          active: user.active
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.plan = user.plan
        token.active = user.active
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as "ADMIN" | "CLIENT"
        session.user.plan = token.plan as "BASIC" | "PRO"
        session.user.active = token.active as boolean
      }

      return session
    },
  },

  pages: {
    signIn: "/login",
  },
})