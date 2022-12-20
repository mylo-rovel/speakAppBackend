import { prisma } from '../../server.js'
import { MessageReq } from '../../types/typeGuards/messages.requests'


export const SaveNewMessageInRoom = async (req: MessageReq) => {
    const targetRoom = await prisma.room.findUnique({ where: { roomId: 1 } })
    if (!targetRoom) throw new Error("null room");

    const auxDateObj = new Date()
    const [currentHour, currentMinute] = [auxDateObj.getHours(), auxDateObj.getMinutes()];

    const newMessage = await prisma.message.create({
        data: {
            content: req.content,
            senderId: req.senderId,
            hour: `${currentHour}:${currentMinute}`,
            positionNo: 2,
            room: {
                connect: targetRoom
            }
        }
    })
    return newMessage;
}