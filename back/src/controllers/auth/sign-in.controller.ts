import { Request, Response } from 'express';
import { prisma } from '../../utils/prisma';
import bcrypt, { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret_key } from '../../utils/env';

export const signIn = async (req: Request, res: Response) => {
  //   const { email, password } = req.body;
  const email = 'hud@gmail.com';
  const password = '1234';
  const hashedPassword = await bcrypt.hashSync(password, 10);
  console.log(hashedPassword, 'hashedPas');
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) return res.send({ message: 'user not found' });

    const isMatch = compareSync(password, user.password);
    if (!isMatch) return res.send({ message: 'email or pass wrong' });

    const token = jwt.sign(user, secret_key as any, { expiresIn: 3600 });

    return res.cookie('token', token, {
      maxAge: 60 * 1000 * 10,
      secure: false, //deploydoh uedee true bolgono
    });
  } catch (error) {
    return res.send(error);
  }
};
