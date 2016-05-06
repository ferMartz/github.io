/* Get flight engine */
module.exports.engine = function(req, res){
res.render('index', { title: 'Hotel Search' });
};

/* Get flight engine */
module.exports.deals = function(req, res){
res.render('index', { title: 'Hotel Deals' });
};