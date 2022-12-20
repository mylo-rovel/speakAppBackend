import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const SaveNewMessageInRoom = async () => {
    // const targetRoom = await prisma.room.findUnique({
    //     where: { 
    //         roomId: req.roomId 
    //     }
    // })
    // console.log(targetRoom);
    // prisma.$connect()
    return await prisma.user.create({
        data: {
        }
    })
    // .then((value) => value)
    // .catch((reason) => console.log("\n\nRAZON\n", reason))
}