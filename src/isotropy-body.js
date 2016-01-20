/* @flow */
import type { KoaContextType } from "./flow/koa-types.js";
import coBody from "co-body";

/*
Currently, this simply wraps co-body without doing anything.
We do this because:
a) Isotropy projects should only depend on approved libs initially
b) We might want to change the underlying implementation later.
*/

const asyncBody = async (ctx: KoaContextType) : Object => {
  return await coBody(ctx);
};

export default asyncBody;
