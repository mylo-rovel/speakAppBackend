export interface MessageReq {
    content:    string
    senderId:   number;
    roomId:     number;
}

export const isCorrectMessageReq = (toTestObj: unknown): toTestObj is MessageReq => {
    const typedToTestObj = toTestObj as MessageReq;
    const testProp1 = typeof(typedToTestObj.content)  === "string";
    const testProp2 = typeof(typedToTestObj.senderId) === "number";
    const testProp3 = typeof(typedToTestObj.roomId)   === "number";
    return (testProp1 && testProp2 && testProp3);
}