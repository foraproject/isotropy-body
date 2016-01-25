import __polyfill from "babel-polyfill";
import request from "supertest";
import parse from "../isotropy-body";
import koa from "koa";
import should from "should";

describe('parse(req, opts)', () => {

  it('should parse form', () => {
    return new Promise((resolve, reject) => {
      const app = new koa();

      app.use(async (ctx) => {
        const body = await parse(ctx);
        body.foo.bar.should.equal('baz');
        ctx.body = "Hello world";
        resolve();
      });

      request(app.listen())
      .post('/')
      .type('form')
      .send({ foo: { bar: 'baz' }})
      .end(()=>{});
    });
  });

  it('should parse json', function() {
    return new Promise((resolve, reject) => {
      const app = new koa();

      app.use(async (ctx) => {
        const body = await parse(ctx);
        body.should.eql({ foo: 'bar' });
        resolve();
      });

      request(app.listen())
      .post('/')
      .send({ foo: 'bar' })
      .end(()=>{});
    });
  });

  it('should parse text', function() {
    return new Promise((resolve, reject) => {
      const app = new koa();

      app.use(async (ctx) => {
        const body = await parse(ctx);
        body.should.eql('hello world');
        resolve();
      });

      request(app.listen())
      .post('/')
      .set('content-type', 'text/plain')
      .send('hello world')
      .end(()=>{});
    });
  });

});
