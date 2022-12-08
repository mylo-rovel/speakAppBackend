import { MessageReq } from '../../types/typeGuards/messages.requests'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const SaveNewMessageInRoom = async (req: MessageReq) => {
    // const targetRoom = await prisma.room.findUnique({
    //     where: { 
    //         roomId: req.roomId 
    //     }
    // })
    // console.log(targetRoom);
    prisma.$connect()
    return await prisma.user.create({
        data: {
            favPokemon: req.content,
            age: (Math.floor(Math.random()*20)+40)
        }
    })
    .then((value) => value)
    .catch((reason) => console.log("\n\nRAZON\n", reason))
}