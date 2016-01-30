declare module "co-body" {
  declare type IncomingMessage = {
    headers: Object;
    httpVersion: string;
    method: string;
    trailers: Object;
    setTimeout: (msecs: number, callback: Function) => void;
    statusCode: number;
    url: string;
  }

  declare function exports(context: IncomingMessage) : Promise<Object>
}
