import { INewUser } from '../../types/typeGuards/users.requests';
import { prisma } from '../../server.js'

export const getUserId = async () => {
}

export const createNewUser = async (reqData: INewUser) => {
    const newUser = await prisma.user.create({
        data: {
            username: reqData.username,            
            user: {
                create: {
                    loginemail: reqData.useremail,
                }
            }
        }
    })
    return newUser;
}