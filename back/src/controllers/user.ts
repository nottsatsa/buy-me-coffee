import { Request, response, Response } from 'express';
import { prisma } from '../utils/prisma';
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
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

export const findUsers = async (_: never, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    return res.send({ success: true, message: response });
  } catch (error) {
    return res.send(error);
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, name } = req.body;
  try {
    const response = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        password,
      },
    });
    return res.send({ success: true, message: response });
  } catch (error) {
    return res.send(error);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.send({ success: true, message: 'user deleted', data: response });
  } catch (error) {
    return res.send(error);
  }
};
