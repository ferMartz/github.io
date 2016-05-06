/* Get experiences */
module.exports.list = function(req, res){
res.render('experiences-list', { title: 'Travel Experiences',
explista :[{
	imgsrc: 'images/portfolio/grid/large-margins/i-mayan-encounter-760x507.jpg',
	title: 'MAYAN ENCOUNTER',
	price: '1236',
	excerpt: 'Travel to paradise somewhere between the blazing Yucatan sun and the cool Guatemalan highlands on this Mayan Encounter. Prepare to be wowed as you relax on the white sands of Tulum, admire the underwater life in Caye Caulker, amble over the Mayan ruins in jungle-clad Tikal and gaze up at the volcanoes surrounding Antigua.',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-inca-trail-450x675.jpg',
	title: 'INCA TRAIL',
	price: '1632',
	excerpt: 'Travel to Peru and retrace the steps of the Inca, Peru’s fascinating ancient civilisation. Follow Inca traditions from Lima to Cuzco, journey through the fertile heartland of the Sacred Valley, see the magnificent Ollantaytambo ruins before embarking on the ultimate adventure – trekking to Machu Picchu.',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-bb-760x507.jpg',
	title: 'BEACHES AT KOCHI',
	price: '699',
	excerpt: 'Watch the sunset through the fishing nets of Kochi, stretch out on white-sand beaches, drift through the tranquil backwaters and rise at dawn to see the sunrise. This 7-day tour offers a quick introduction to the diversity of South India.',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-spain-portugal-760x507.jpg',
	title: 'SPAIN AND PORTUGAL',
	price: '1499',
	excerpt: 'Take an incredible ten days to experience the best travel highlights of Spain and Portugal: art, culture, food (hello tapas!), and nightlife. Leave the typical big tour bus behind and reach these unforgettable destinations by train. All aboard for some serious (and life-changing) city-hopping through Iberia.',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-mediterranean-express-450x675.jpg',
	title: 'MEDITERRANEAN EXPRESS',
	price: '1199',
	excerpt: 'Jump on this quick (and affordable) seven-day tour of some of Europe’s greatest cities. See what&apos;s so nice about Nice, snap the expected "holding up the Leaning Tower of Pisa" shot, and then walk beneath Gaudi&apos;s famous architecture. And hey, think of the food to be tried on a tour from Rome to Barcelona!',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-mvb-450x675.jpg',
	title: 'MADRID VALENCIA BERCELONA',
	price: '930',
	excerpt: 'Feel the pulse of spirited Spain on this tour from the country’s capital to the bustling coastal city of Barcelona. Enjoy all things arty – from Madrid’s inspiring Art Walk to Barcelona’s internationally renowned galleries and museums.',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-sa-discoverer-760x507.jpg',
	title: 'SOUTH AFRICA DISCOVERER',
	price: '1349',
	excerpt: 'A trip from Zagreb to Dubrovnik is not your backpackers typical European tour its way better. In one week, venture from historic Zagreb along the Adriatic Coast to stunning Dubrovnik. Along the way, youll hit the highlights did we mention the beautiful lakes of Plitvice or Hvar on the coast?',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-croatia-adventure-760x507.jpg',
	title: 'CROATIA ADVENTURE',
	price: '899',
	excerpt: 'Take an incredible ten days to experience the best travel highlights of Spain and Portugal: art, culture, food (hello tapas!), and nightlife. Leave the typical big tour bus behind and reach these unforgettable destinations by train. All aboard for some serious (and life-changing) city-hopping through Iberia.',
	linkurl: ''
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-costa-rica-quest-760x507.jpg',
	title: 'COSTA RICA QUEST',
	price: '1099',
	excerpt: 'This action-packed tour of Costa Rica’s highlights is perfect for the adventurer who wants to explore the region’s diversity. Get your adrenaline pumping, follow a trail to the base of a waterfall, melt away in thermal springs or relax on a beach.',
	linkurl: ''
}]



 });
};