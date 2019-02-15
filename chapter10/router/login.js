const { getSession } = require('../lib/wx')
async login(code) {
    const session = await getSession()
    if(session) {
        const { openid } = session
        return login(openid)
    } else {
        throw new Error('登录失败')
    }
}