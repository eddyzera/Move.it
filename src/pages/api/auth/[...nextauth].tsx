import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })    
  ],
};

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);
