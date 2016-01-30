/* @flow */
import coBody from "co-body";
import type { IncomingMessage } from "./flow/http-types";

/*
Currently, this simply wraps co-body without doing anything.
We do this because:
a) Isotropy projects should only depend on approved libs initially
b) We might want to change the underlying implementation later.
*/
const asyncBody = async (req: IncomingMessage) : Object => {
  return await coBody(req);
};

export default asyncBody;
