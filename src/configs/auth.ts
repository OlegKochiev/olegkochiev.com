import type {AuthOptions} from 'next-auth';
import CredetialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../utils/db/mongodb-connect';
import Users from '../models/users';

export const authConfig: AuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    CredetialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: 'email', type: 'text', required: true},
        password: {label: 'password', type: 'password', required: true},
      },
      async authorize(credentials, req) {
        await dbConnect();
        const user = await Users.findOne({email: credentials?.email}).select('+password');
        if (!user) throw new Error('No user with a matching email was found.');
        const isValidPassword = await user.comparePassword(credentials?.password);
        if (!isValidPassword) throw new Error('Your password is invalid');
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
        };
      }
      return token;
    },
    // session: async ({session, token, user}) => {
    //   console.log(session);
    //   console.log(token);

    //   if (token) {
    //     session.user = token.user;
    //   }
    //   return session;
    // },
  },
  pages: {
    signIn: '/signin',
  },
};
