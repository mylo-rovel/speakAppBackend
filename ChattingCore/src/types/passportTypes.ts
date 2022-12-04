//* This is used in web/app.ts:
//? passport.serializeUser(serializeUserFn);
export type serializeUserFnType = (user: Express.User, done: (err: any, id?: unknown) => void) => void

//* This is used in web/app.ts:
//? passport.deserializeUser(deserializeUserFn);
export type deserializeUserFnType = (id: unknown, done: (err: any, user?: false | Express.User | null | undefined) => void) => void