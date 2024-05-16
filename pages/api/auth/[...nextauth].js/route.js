import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type:'text'},
                password: {label:'password',type:'password'}
            }
        })
    ]
}
const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }