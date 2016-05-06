/* Get flight engine */
module.exports.engine = function(req, res){
res.render('index', { title: 'Flights Search' });
};

/* Get flight engine */
module.exports.deals = function(req, res){
res.render('flight-deals', { title: 'Flights Deal' });
};