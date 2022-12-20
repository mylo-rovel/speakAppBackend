export interface INewUser {
    username:       string;
    useremail:      string;
    genPassword?:    string;
}

export const isValidNewUser = (toTestObj: unknown): toTestObj is INewUser => {
    const typedToTestObj = toTestObj as INewUser;
    const testProp1 = typeof(typedToTestObj.username)  === "string";
    const testProp2 = typeof(typedToTestObj.useremail) === "string";
    // const testProp3 = typeof(typedToTestObj.genPassword)   === "number";
    if (testProp1 && testProp2) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const matchesArr = typedToTestObj.useremail.match(regex);
        if (matchesArr === null) return false;
        return true;                
    }
    return false;
}