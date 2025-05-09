import { Request, Response } from 'express';
import { prisma } from '../../utils/prisma';
import bcrypt from 'bcrypt';

export const checkUser = (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const user = prisma.user.findUnique({ where: { name: username } });
    if (!user) {
      return res.send({ success: true, message: response });
    }
  } catch (error) {}
};

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  console.log(hashedPassword, 'hashedPas');
  try {
    const response = await prisma.user.create({
      data: {
        password: hashedPassword,
        email,
        name: username,
      },
    });
    return res.send({ success: true, message: response });
  } catch (error) {
    return res.send(error);
  }
};
