import { Request } from "express-serve-static-core";

export type RequestBody<T> = Request<{},{},T>