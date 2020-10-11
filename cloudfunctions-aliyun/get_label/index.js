'use strict';
const db = uniCloud.database() //获取数据库引用

exports.main = async (event, context) => {
	let label = await db.collection('label').get()  //获取具体的表名里面的数据
	
	//返回数据给客户端
	return {
        code:200,
        msg:'数据请求成功',
        data:label.data
    }
};
