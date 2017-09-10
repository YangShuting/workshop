
var koa = require('koa');

var app = module.exports = koa();


// - `/` - `hello world`
// - `/404` - `page not found`
// - `/500` - `internal server error`.

app.use(function* (next) {
    if(this.request.path !== '/'){
        yield next
    }
    else{
        this.response.body = 'hello world'
    }
});

app.use(function* (next) {
    if(this.request.path === '/404'){
        this.response.body = 'page not found'
    }
    else{
        yield next
    }
});

app.use(function* (next) {
    if(this.request.path === '/500'){
        this.response.body = 'internal server error'
    }
    else{
        yield next
    }
});
