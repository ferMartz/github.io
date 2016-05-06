/* Get about */
module.exports.about = function(req, res){
res.render('about', { title: 'About' });
};

/* Get contact */
module.exports.contact = function(req, res){
res.render('contact', { title: 'Contact' });
};

/* Get terms */
module.exports.terms = function(req, res){
res.render('terms', { title: 'Terms & Conditions' });
};