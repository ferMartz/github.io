var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


var ctrlMain = require('../controllers/main');
var ctrlFlights = require('../controllers/flights');
var ctrlHotels = require('../controllers/hotels')
var ctrlCompany = require('../controllers/company');
var ctrlExperiences = require('../controllers/experiences');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/engine', ctrlMain.engine);

router.get('/deals', ctrlMain.deals);
/* Experiences pages */
router.get('/experiences', ctrlExperiences.list);
/* Flights pages. */
router.get('/flight', ctrlFlights.engine);
router.get('/flight/deals', ctrlFlights.deals);
/* Hotel pages */
router.get('/hotel', ctrlHotels.engine);
router.get('/hotel/deals', ctrlHotels.deals);
/* Company pages */
router.get('/about', ctrlCompany.about);
router.get('/contact', ctrlCompany.contact);
router.get('/terms', ctrlCompany.terms);
router.post('/contact', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth:{
			user: 'fernandomvc@gmail.com',
			pass: 'Rocket7man'

		}

	});
	var mailOptions = {
		from: 'fer martz <fernandomvc@gmail.com>',
		to: 'contact@tripkii.com',
		subject: 'Website submission',
		text: 'You have a new mail with the following details...name: '+req.body.fname+' last: '+req.body.lname+' Email: '+req.body.email+ ' Message: '+req.body.message+ 'Product: '+req.body.honeypot,
		html: '<p>You got a new submission with the following details...</p><ul><li>Name: '+req.body.fname+'</li><li>Last: '+req.body.lname+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></li>Product: '+req.body.honeypot+'</li></ul>'
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error){
			console.log(error);
			res.redirect('/');
		}else
		{
			console.log('Message sent: '+info.response);
			res.redirect('/contact');
		}
	});
});

module.exports = router;
