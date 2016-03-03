/* @flow */
import coBody from "co-body";
import type { IncomingMessage } from "isotropy-interfaces/node/http";

/*
Currently, this simply wraps co-body without doing anything.
We do this because:
a) Isotropy projects should only depend on approved libs initially
b) We might want to change the underlying implementation later.
*/
async function asyncBody(req: IncomingMessage, opts?: Object) : Object {
  return await coBody(req, opts);
};

export default asyncBody;
