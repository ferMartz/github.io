

/* Get homepage */

module.exports.index = function(req, res){
res.render('index', { title: 'Tripkii',
pageHeaderBg: 'https://s3.amazonaws.com/tripkii-bucket/static/slider/slide-11-fs.jpg',
sectionBestBg: 'images/travel-agency/generic/hero-2.jpg',
homeVideo:'https://player.vimeo.com/video/31299372?autoplay=1&loop=1',
promos: [{
product: 'Flight',
destination: 'La Paz, Bolivia',
price: '899',
modalid: '.one',
ismodal: true,
imgsrc:'https://s3.amazonaws.com/tripkii-bucket/static/la-paz-bolivia-900x900.jpg',
linkurl:'http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=LPB&outbounddate=2016-06-27&inbounddate=2016-07-02&cabinclass=Economy&adults=1&children=0&infants=0',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=LPB&outbounddate=2016-06-27&inbounddate=2016-07-02&cabinclass=Economy&adults=1&children=0&infants=0")'

},
{
product: 'Flight',
destination: 'Puerto Vallarta, Mexico',
price: '307',
modalid: '.one',
ismodal: true,
imgsrc:'https://s3.amazonaws.com/tripkii-bucket/static/puerto-vallarta-mexico-900x900.jpg',
linkurl:'http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=PVR&outbounddate=2016-06-07&inbounddate=2016-06-15&cabinclass=Economy&adults=1&children=0&infants=0',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=PVR&outbounddate=2016-06-07&inbounddate=2016-06-15&cabinclass=Economy&adults=1&children=0&infants=0")'


},
{
product: 'Flight',
destination: 'Tegucigalpa, Honduras',
price: '262',
modalid: 'one',
ismodal: true,
imgsrc:'https://s3.amazonaws.com/tripkii-bucket/static/honduras-beach.jpg',
linkurl:'http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=TGU&outbounddate=2016-07-04&inbounddate=2016-07-19&cabinclass=Economy&adults=1&children=0&infants=0',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=TGU&outbounddate=2016-07-04&inbounddate=2016-07-19&cabinclass=Economy&adults=1&children=0&infants=0")'


},
{
product: 'Flight',
destination: 'Victoria, Canada',
price: '246',
modalid: 'one',
ismodal: true,
imgsrc:'https://s3.amazonaws.com/tripkii-bucket/static/victoria-canada-900x900.jpg',
linkurl:'http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=YYJ&outbounddate=2016-07-19&inbounddate=2016-07-28&cabinclass=Economy&adults=1&children=0&infants=0',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=YYJ&outbounddate=2016-07-19&inbounddate=2016-07-28&cabinclass=Economy&adults=1&children=0&infants=0")'

},
{
	product: 'Experience',
	destination: 'Amazon Riverboat',
	price: '2699',
	modalid: '005',
	ismodal: false,
	modalinfo: [{
		id: '005',
		title: '09 Days: Lima to Lima',
		routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/amazon-r-route.jpg',
		travelstyle: 'Marine',
		styleinfo: 'Small-ship adventures on the world’s great seas, rivers, and other places only accessible by boat.',
		physical: 'Light',
		physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
		service: 'Upgraded',
		serviceinfo: 'Quality accommodations and more inclusions than on other tours such as private transport (including internal flights on some tours) and more included meals and activities.',
		triptype: 'Small Group',
		typeinfo: 'Small group experience; Max 16, avg 12.',
		includeone: '6 nts aboard the Amatista Amazon Riverboat',
		includetwo: '8 breakfasts, 6 lunches, 6 dinners.',
		includethree: 'Internal flights',
		includefour: '2 Certified Amazon Reserve naturalist guide and support staff aboard the Amatista.',
		tourlink: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/amazon-riverboat-adventure-aboard-amatista/2368/'


	}],
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/amazon-riverboat-900x900.jpg',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/amazon-riverboat-adventure-aboard-amatista/2368/',
	linktype: 'tml-link.lightbox-link(data-modal-mode , data-modal-width="800", href="#"+promo.modalid, data-content="inline")'
},
{
	product: 'Experience',
	destination: 'Sailing Croatia',
	price: '1102',
	modalid: '006',
	ismodal: false,
	modalinfo: [{
		id: '006',
		title: '08 Days: Sailing Croatia',
		routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/sailing-croatia-route.jpg',
		travelstyle: 'Marine',
		styleinfo: 'Small-ship adventures on the world’s great seas, rivers, and other places only accessible by boat.',
		physical: 'Light',
		physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
		service: 'Standard',
		serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
		triptype: 'Small Group',
		typeinfo: 'Small group experience; Max 8.',
		includeone: '4 twin/double bed cabins, 3 bathrooms, 2 showers.',
		includetwo: '0 breakfasts, 0 lunches, 0 dinners ',
		includethree: '15m (50 ft) sailing yacht.',
		includefour: 'Skipper/CEO (Chief Experience Officer) throughout.',
		tourlink: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/sailing-croatia-dubrovnik-to-split/2340/'


	}],
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/sailing-croatia.jpg',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/sailing-croatia-dubrovnik-to-split/2340/',
	linktype: 'tml-link.lightbox-link(data-modal-mode , data-modal-width="800", href="#"+promo.price, data-content="inline")'
},
{
	product: 'Experience',
	destination: 'Egypt Adventure',
	price: '1179',
	modalid: '007',
	ismodal: false,
	modalinfo: [{
		id: '007',
		title: '08 Days: Egypt Adventure',
		routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/egypt-adventure-route.jpg',
		travelstyle: 'Original',
		styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
		physical: 'Moderate light',
		physicalinfo: 'Some easy physical activities included in your trip.',
		service: 'Standard',
		serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
		triptype: 'Small Group',
		typeinfo: 'Small group experience; Max 15, avg 12.',
		includeone: 'Felucca (1 night), Hotel (4 nights), Overnight sleeper train (2 nights).',
		includetwo: '7 breakfasts, 2 lunches, 4 dinners',
		includethree: 'Camel, Felucca, Overnight sleeper train, Van.',
		includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
		tourlink: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.intrepidtravel.com/egypt/egypt-adventure-93911'


	}],
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/egypt-adventure.jpg',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.intrepidtravel.com/egypt/egypt-adventure-93911',
	linktype: 'tml-link.lightbox-link(data-modal-mode , data-modal-width="800", href="#"+promo.price, data-content="inline")'
},
{
	product: 'Experience',
	destination: 'Food Adventure - Mexico',
	price: '1452',
	modalid: '008',
	ismodal: false,
	modalinfo: [{
		id: '008',
		title: '09 Days: Food Adventure - Mexico',
		routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/mexico-culinary-route.jpg',
		travelstyle: 'Original',
		styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
		physical: 'Moderate light',
		physicalinfo: 'Some easy physical activities included in your trip.',
		service: 'Standard',
		serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
		triptype: 'Small Group',
		typeinfo: 'Small group experience; Max 12, avg 10.',
		includeone: 'Hotel (7 nights), Overnight bus (1 night)',
		includetwo: '4 breakfasts, 3 lunches, 3 dinners',
		includethree: 'Bus, Overnight bus, Plane',
		includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
		tourlink: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.intrepidtravel.com/mexico/real-food-adventure-mexico-94470'


	}],
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/mexico-culinary-tour.jpg',
	linkurl: 'https://s3.amazonaws.com/tripkii-bucket/static/mexico-culinary-tour.jpg',
	linktype: 'tml-link.lightbox-link(data-modal-mode , data-modal-width="800", href="#"+promo.price, data-content="inline")'
}],
yeah: [{
	id: '001',
	title: '12 Days: Granada to Granada',
	routeimg: 'images/travel-agency/generic/nica-route.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 12.',
	includeone: 'Hotels (9 nts), homestay (2 nts).',
	includetwo: '3 breakfasts, 0 lunches, 2 dinners.',
	includethree: 'Public bus, private van, boat, ferry.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'https://www.gadventures.com/trips/essence-of-nicaragua/2172/?aff=26414&PID=7972913'


},
{
	id: '002',
	title: '12 Days: Granada to Granada',
	routeimg: 'images/travel-agency/generic/nica-route.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 12.',
	includeone: 'Hotels (9 nts), homestay (2 nts).',
	includetwo: '3 breakfasts, 0 lunches, 2 dinners.',
	includethree: 'Public bus, private van, boat, ferry.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'https://www.gadventures.com/trips/essence-of-nicaragua/2172/?aff=26414&PID=7972913'


},
{
	id: '003',
	title: '12 Days: Granada to Granada',
	routeimg: 'images/travel-agency/generic/nica-route.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 12.',
	includeone: 'Hotels (9 nts), homestay (2 nts).',
	includetwo: '3 breakfasts, 0 lunches, 2 dinners.',
	includethree: 'Public bus, private van, boat, ferry.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'https://www.gadventures.com/trips/essence-of-nicaragua/2172/?aff=26414&PID=7972913'


},
{
	id: '004',
	title: '12 Days: Granada to Granada',
	routeimg: 'images/travel-agency/generic/nica-route.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 12.',
	includeone: 'Hotels (9 nts), homestay (2 nts).',
	includetwo: '3 breakfasts, 0 lunches, 2 dinners.',
	includethree: 'Public bus, private van, boat, ferry.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'https://www.gadventures.com/trips/essence-of-nicaragua/2172/?aff=26414&PID=7972913'


}]
 });
};

module.exports.engine = function(req, res){
res.render('flight-search', { title: 'Search' });
};

module.exports.deals = function(req, res){
res.render('flight-deals', { title: 'Deals' });
};
