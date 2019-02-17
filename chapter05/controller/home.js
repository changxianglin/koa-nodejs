const HomeService = require('../service/home');
module.exports = {
    index: async (ctx, next) => {
       await ctx.render('home/index', {title: 'iKcamp 欢迎您'})
    },
    home: async (ctx, next) => {
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        ctx.response.body = '<h1>HOME page</h1>';
    },
    homeParams: async (ctx, next) => {
        console.log(ctx.params);
        ctx.response.body = '<h1>HOME page /:id/:name</h1>';
    },
    login: async (ctx, next) => {
        let params = ctx.request.body
        let name = params.name
        let password = params.password
        let res = await HomeService.login(name, password)
        if(res.status === '-1') {
            await ctx.render('home/login', res.data)
        } else {
            ctx.state.title = '个人中心'
            await ctx.render('home/success', res.data)
        }
    },
    register: async (ctx, next) => {
        let {name,password} = ctx.request.body;
        let data = await HomeService.register(name, password);
        ctx.response.body = data;

    }
}