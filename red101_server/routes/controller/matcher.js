/**
 * Created by admin on 2017/11/5.
 */
var redis = require('redis'),
    RDS_PORT = 6379,        //端口号
    RDS_HOST = '13.114.183.83',    //服务器IP
    RDS_OPTS = {},            //设置项
    client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

client.on('ready',function(res){
    console.log('ready');
    client.set('user:1000', 'wxch', redis.print);
    client.expire('user:1000', 20);
    client.get("user:1000", redis.print);
    client.ttl('user:1000', redis.print);
}).on('error',function(res){
    console.log(res);
});