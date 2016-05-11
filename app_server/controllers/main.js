
/* Get homepage */
module.exports.index = function(req, res){
res.render('index', { title: 'Tripkii',
pageHeaderBg: 'images/travel-agency/slider/slide-9-fs.jpg',
sectionBestBg: 'images/travel-agency/generic/hero-2.jpg',
homeVideo:'https://player.vimeo.com/video/31299372?autoplay=1&loop=1',
promos: [{
product: 'Flight',
destination: 'Rio, Brazil',
price: '685',
modalid: '.one',
ismodal: true,
imgsrc:'images/travel-agency/portfolio/grid/no-margins/angra-dos-reis-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/angra-dos-reis-900x900.jpg',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=SJO&outbounddate=2016-05-16&inbounddate=2016-05-31&cabinclass=Economy&adults=1&children=0&infants=0")'

},
{
product: 'Flight',
destination: 'Montreal, Canada',
price: '285',
modalid: '.one',
ismodal: true,
imgsrc:'images/travel-agency/portfolio/grid/no-margins/calgary-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/calgary-900x900.jpg',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=SJO&outbounddate=2016-05-16&inbounddate=2016-05-31&cabinclass=Economy&adults=1&children=0&infants=0")'


},
{
product: 'Flight',
destination: 'San Pedro, Guatemala',
price: '785',
modalid: 'one',
ismodal: true,
imgsrc:'images/travel-agency/portfolio/grid/no-margins/guatemala-camino-real-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/guatemala-camino-real-900x900.jpg',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=SJO&outbounddate=2016-05-16&inbounddate=2016-05-31&cabinclass=Economy&adults=1&children=0&infants=0")'


},
{
product: 'Flight',
destination: 'Madrid, Spain',
price: '725',
modalid: 'one',
ismodal: true,
imgsrc:'images/travel-agency/portfolio/grid/no-margins/madrid-p-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/madrid-p-900x900.jpg',
linktype: '.overlay-link(href="http://search.ss.tripkii.com/en-GB/flights#/result?originplace=HOUA&destinationplace=SJO&outbounddate=2016-05-16&inbounddate=2016-05-31&cabinclass=Economy&adults=1&children=0&infants=0")'

},
{
	product: 'Experience',
	destination: 'Manila Beaches',
	price: '899',
	modalid: '005',
	ismodal: false,
	modalinfo: [{
		id: '005',
		title: '05 Days: Granada to Granada',
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


	}],
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/manila-p-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/manila-p-900x900.jpg',
	linktype: 'tml-link.lightbox-link(data-modal-mode , data-modal-width="800", href="#"+promo.modalid, data-content="inline")'
},
{
	product: 'Experience',
	destination: 'Peru Quest',
	price: '899',
	modalid: '006',
	ismodal: false,
	modalinfo: [{
		id: '006',
		title: '06 Days: Granada to Granada',
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


	}],
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/peru-p-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/peru-p-900x900.jpg',
	linktype: 'tml-link.lightbox-link(data-modal-mode , data-modal-width="800", href="#"+promo.price, data-content="inline")'
},
{
	product: 'Experience',
	destination: 'Dominican Beaches',
	price: '899',
	modalid: '007',
	ismodal: false,
	modalinfo: [{
		id: '007',
		title: '07 Days: Granada to Granada',
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


	}],
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/sjo-barcelo-langosta-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/sjo-barcelo-langosta-900x900.jpg',
	linktype: 'tml-link.lightbox-link(data-modal-mode , data-modal-width="800", href="#"+promo.price, data-content="inline")'
},
{
	product: 'Experience',
	destination: 'Ecuador Uncharted',
	price: '899',
	modalid: '008',
	ismodal: false,
	modalinfo: [{
		id: '008',
		title: '08 Days: Granada to Granada',
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


	}],
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/quito-p-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/quito-p-900x900.jpg',
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
