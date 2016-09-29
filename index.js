var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mongoose-test');

var db=mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // console.log('success!');
  var userSchema = mongoose.Schema({
      name: String,
      pwd: String,
      age: String
  });
  // var cat = mongoose.model('cat', catSchema);
  //pppp 是实际数据库中记录的名字，此时记录在内存中
  var User=mongoose.model('user',userSchema);
  //增加 
  // var peter = new user({ name: 'HelloKitty',pwd: '123456', age: '22'});
  // peter.save()//保存在数据库中
  // console.log(peter.name,peter.pwd,peter.age)

  //read 查询
  // console.log(user.find());
  // user.find().exec(function(error,users){
  //   console.log(users);
  // })

  //update 更新1
  // peter.name='kong';
  // peter.pwd='654321';
  // peter.age='12';
  // user.find().exec(function(error,users){
  //   console.log(users);
  // })

  //update 更新2
// User.findById({_id: '57ecbaaaa6fed61806610614'},function(err,user){
//   user.name='klj'
//   user.save(function(err){
//     console.log('更新了！');
//     User.find().exec(function(error,users){
//       console.log(users);
//     })
//   })
// })
// console.log('我先出来了');

//删除
User.findById({_id: '57ecbaaaa6fed61806610614'},function(err,user){
  user.remove(function(err){
    console.log('删除了！');
    User.find().exec(function(error,users){
      console.log(users);
    })
  })
})
});
