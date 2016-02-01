declare module "co-body" {
  declare type IncomingMessage = {
    headers: Object;
  }

  declare function exports(req: IncomingMessage, opts?: Object) : Promise<Object>
}
