// import { Request, Response } from 'express';
// import { prisma } from '../../utils/prisma';
// import bcrypt from 'bcrypt';

// export const checkUser = async (req: Request, res: Response) => {
//   const { username } = req.body;
//   try {
//     const userUsername = await prisma.user.findUnique({ where: { name: username }, });
//     if (userUsername) {
//       return res.send({ message: "Username already taken" });
//     }
//     return res.send({message: "Username already taken" });
//   } catch (error) {}
// };

// export const signUp = async (req: Request, res: Response) => {
//   const { username, email, password } = req.body;
//   const hashedPassword = await bcrypt.hashSync(password, 10);
//   console.log(hashedPassword, 'hashedPas');
//   try {
//     const response = await prisma.user.create({
//       data: {
//         password: hashedPassword,
//         email,
//         name: username,
//       },
//     });
//     return res.send({ success: true, message: response });
//   } catch (error) {
//     return res.send(error);
//   }
// };
