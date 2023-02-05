module.exports.profile = function(req, res){
  return res.render('profile',{
    title:'profile'
  });
}




module.exports.name = function(req, res){
  return res.end('<h1>karan khatik </h1>');
}