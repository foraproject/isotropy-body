import __polyfill from "babel-polyfill";
import request from "supertest";
import parse from "../isotropy-body";
import koa from "koa";
import should from "should";

describe('parse(req, opts)', () => {
    describe('with valid form body', () => {
        it('should parse', () => {
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
    });

    describe('with valid json', function() {
        it('should parse', function() {
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
    });
});
