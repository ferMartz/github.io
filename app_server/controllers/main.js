
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
imgsrc:'images/travel-agency/portfolio/grid/no-margins/angra-dos-reis-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/angra-dos-reis-900x900.jpg'
},
{
product: 'Flight', 
destination: 'Montreal, Canada',
price: '285',
imgsrc:'images/travel-agency/portfolio/grid/no-margins/calgary-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/calgary-900x900.jpg'
},
{
product: 'Flight', 
destination: 'San Pedro, Guatemala',
price: '785',
imgsrc:'images/travel-agency/portfolio/grid/no-margins/guatemala-camino-real-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/guatemala-camino-real-900x900.jpg'
},
{
product: 'Flight', 
destination: 'Madrid, Spain',
price: '725',
imgsrc:'images/travel-agency/portfolio/grid/no-margins/madrid-p-900x900.jpg',
linkurl:'images/travel-agency/portfolio/grid/no-margins/madrid-p-900x900.jpg'
},
{
	product: 'Experience',
	destination: 'Manila Beaches',
	price: '899',
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/manila-p-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/manila-p-900x900.jpg'
},
{
	product: 'Experience',
	destination: 'Peru Quest',
	price: '899',
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/peru-p-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/peru-p-900x900.jpg'
},
{
	product: 'Experience',
	destination: 'Dominican Beaches',
	price: '899',
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/sjo-barcelo-langosta-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/sjo-barcelo-langosta-900x900.jpg'
},
{
	product: 'Experience',
	destination: 'Ecuador Uncharted',
	price: '899',
	imgsrc: 'images/travel-agency/portfolio/grid/no-margins/quito-p-900x900.jpg',
	linkurl: 'images/travel-agency/portfolio/grid/no-margins/quito-p-900x900.jpg'
}] });
};

module.exports.engine = function(req, res){
res.render('flight-search', { title: 'Search' });
};

module.exports.deals = function(req, res){
res.render('flight-deals', { title: 'Deals' });
};