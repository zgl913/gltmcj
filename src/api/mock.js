import Mock from 'mockjs'
Mock.mock('http://datainfo.hzqnkj.com/uni/UniData/meun', /post|get/i, ()=>{
    // // /post|get/i 匹配post和get模式 也可以用'post'或'get'
    // // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    // 'list|1-10': [{
    //     // 属性 id 是一个自增数，起始值为 1，每次增 1
    //     'id|+1': 1,
    //     // 随机数字1-100
    //     'number|1-100': 100,
    //     // 返回city数组，每次里面有三个
    //     'city|3': {
    //         '310000': '上海市',
    //         '320000': '江苏省',
    //         '330000': '浙江省',
    //         '340000': '安徽省'
    //     }
    // }]
    return {
        name: 'admin',
        password: 'qnkj234',
        token: 'qwer',
        success: true,
        zhujichang:true,
        data: 1,
        msg: '成功'
    }
})
Mock.mock('http://datainfo.hzqnkj.com/uni/UniData/bardata', /post|get/i, ()=>{
    // // /post|get/i 匹配post和get模式 也可以用'post'或'get'
    // // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    // 'list|1-10': [{
    //     // 属性 id 是一个自增数，起始值为 1，每次增 1
    //     'id|+1': 1,
    //     // 随机数字1-100
    //     'number|1-100': 100,
    //     // 返回city数组，每次里面有三个
    //     'city|3': {
    //         '310000': '上海市',
    //         '320000': '江苏省',
    //         '330000': '浙江省',
    //         '340000': '安徽省'
    //     }
    // }]
    return {
        xdata:[
            {
                type: '冀蒙区',
                sales: 38,
            },
            {
                type: '西南区',
                sales: 52,
            },
            {
                type: '晋陕区',
                sales: 61,
            },
            {
                type: '华南区',
                sales: 50,
            },
            {
                type: '华东区',
                sales: 48,
            },
            {
                type: '苏沪区',
                sales: 38,
            },
            {
                type: '河南区',
                sales: 38,
            },
            {
                type: '东北区',
                sales: 38,
            },
            {
                type: '西北区',
                sales: 45,
            },
            {
                type: '河南区1',
                sales: 80,
            },
        ]
    }
})