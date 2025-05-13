import { Request, Response } from 'express';
import { prisma } from '../../utils/prisma';
import bcrypt, { compare, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret_key } from '../../utils/env';

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // const email = 'hud@gmail.com';
  // const password = '1234';
  // const hashedPassword = await bcrypt.hashSync(password, 10);
  // console.log(hashedPassword, 'hashedPas');
  console.log('working...');

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log('working user...', user);

    if (!user) return res.send({ message: 'user not found' });

    const isMatch = await compare(password, user.password);

    if (!isMatch) return res.send({ message: 'email or pass wrong' });

    const token = jwt.sign(user, secret_key as any, { expiresIn: 3600 });
    console.log('working token...', token);
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: 'lax',
      // domain: '.example.com', // Optional
      path: '/',
    });
    return res.send({ message: 'success', token: token });
  } catch (error) {
    return res.send(error);
  }
};
