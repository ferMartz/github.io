/* Get experiences */
module.exports.list = function(req, res){
res.render('experiences-list', { title: 'Travel Experiences',
explista :[{
	imgsrc:'https://s3.amazonaws.com/tripkii-bucket/static/amazon-riverboat-760x507.jpg',
	title: 'Amazon Riverboat',
	price: '2699',
	excerpt: 'Hop aboard a riverboat and experience the Amazon in style. Led by an Amazon Reserve naturalist guide, your cruise will include daily excursions by motorized skiff designed to reveal the exotic wildlife that calls the rainforest home – with any luck you’ll spot sloths, toucans, or pink dolphins! And, with two full days for exploration in Pacaya–Samiria National Reserve, you’ll have the chance to experience the jungle up close. ',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/amazon-riverboat-adventure-aboard-amatista/2368/',
	continent: 'america'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/sailing-croatia-450x675.jpg',
	title: 'Sailing Croatia',
	price: '1102',
	excerpt: 'Whether you’re looking for relaxed afternoons lazing on the deck of a yacht or time to indulge in the nightlife, this Croatian cruise aims to please. Embark in lovely Dubrovnik and discover charming villages as you sail from island to stunning island on a small yacht.',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/sailing-croatia-dubrovnik-to-split/2340/',
	continent: 'europe'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/egypt-adventure-760x507.jpg',
	title: 'Egypt Adventure',
	price: '1179',
	excerpt: 'Travel to Egypt and follow the path of the River Nile as you revel in a taste of Egypt’s history, beauty and colour on this short but action-packed trip along the longest river in the world. Cruise the Nile on a felucca, discover the largest and most impressive pharaonic temples, chat and dine with interesting locals and live it up in this country of deserts, bazaars, monuments and good old-fashioned adventures.',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.intrepidtravel.com/egypt/egypt-adventure-93911',
	continent: 'africa'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/mexico-culinary-tour-760x507.jpg',
	title: 'Food Adventure - Mexico',
	price: '1452',
	excerpt: 'Get an authentic taste of Mexico on this luscious journey through some of the country’s most famous culinary regions. Meander through Oaxaca’s aromatic markets; take to the streets of Puebla to sample some the city’s local specialties; indulge in fresh seafood on the beach; and take to the streets of Mexico City on a taco crawl to experience a delightful culinary heritage that goes back thousands of years.',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.intrepidtravel.com/mexico/real-food-adventure-mexico-94470',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-panama-450x675.jpg',
	title: 'Best of Panama',
	price: '999',
	excerpt: 'Panama has been a destination on the cusp of the mainstream for ages, but somehow still remains a secret. More greatness for us to enjoy, we say. This eight-day trip opens the lid on the natural splendour of this overlooked gem of a country, giving travellers the chance to hike cloud forests, snorkel the Caribbean and even discover where that delicious morning cup of joe comes from at a coffee plantation.',
	linkurl: 'http://www.jdoqocy.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fbest-of-panama%2F1380%2F%3Faff%3D26414&cjsku=CPPQ2015',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-berlin-london-760x507.jpg',
	title: 'Berlin to London',
	price: '1039',
	excerpt: 'Ah, a relaxing week’s vacation in Old Europa. What could be finer? Don’t ask anyone who’s taken this trip! Our seven-day odyssey across four countries is a blur of beauty, culture, and adventure from start to finish.',
	linkurl: 'http://www.jdoqocy.com/2p98js0ys-FNPNIPHJFHGNOHGLMFHKJKPOHJMGGGG?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fberlin-to-london-shoestring%2F2511%2F%3Faff%3D26414&cjsku=EDBL2016',
	continent: 'europe'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-lost-city-760x507.jpg',
	title: 'Colombia Lost City',
	price: '679',
	excerpt: 'Explore the uncrowded ruins at leisure and marvel at what would have been here in years gone by. Say you got here first and had the Lost City all to yourself.',
	linkurl: 'http://www.tkqlhce.com/pq80wktqks7FHFAH9B798FG98DE79CBCHG9BE8888?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcolombia-lost-city-trekking%2F684%2F%3Faff%3D26414&cjsku=SMLC2015',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-ecuador-quest-450x675.jpg',
	title: 'Ecuador Quest',
	price: '699',
	excerpt: 'This eight-day trip shows off its best, rolling natural wonders (the Amazon!), stunning landscapes (the Ecuadorian highlands!), rich culture (Quito!) and active pursuits like hiking, horseback riding, and mountain-biking everywhere you look. ',
	linkurl: 'http://www.tkqlhce.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fecuador-quest%2F1966%2F%3Faff%3D26414&cjsku=SEEQ2015',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-bb-760x507.jpg',
	title: 'Beaches at Kochi',
	price: '699',
	excerpt: 'Watch the sunset through the fishing nets of Kochi, stretch out on white-sand beaches, drift through the tranquil backwaters and rise at dawn to see the sunrise. This 7-day tour offers a quick introduction to the diversity of South India.',
	linkurl: 'http://www.dpbolvw.net/1a107ox52x4KSUSNUMOKMLSTMLQRKMPOPUTMORLLLL?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fbeaches-backwaters%2F676%2F%3Faff%3D26414&cjsku=AHBB2015',
	continent: 'asia'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-pyrenees-760x507.jpg',
	title: 'Bike Hike Raft at Pyrenees',
	price: '890',
	excerpt: 'Prepare for some thrilling adventures during this action-packed week in the Pyrenees. Nestled between France and Spain, Andorra’s beautiful surrounding landscape provides thrillseekers with a setting for some serious adrenalin-fuelled fun.',
	linkurl: 'http://www.kqzyfj.com/7h104js0ys-FNPNIPHJFHIIKKIOMFHKJJOMONMIGGG?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FAAXS%2F&cjsku=AAXS',
	continent: 'europe'

},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-santorini-450-675.jpg',
	title: 'Athens To Santorini',
	price: '1360',
	excerpt: 'Embark on a tour through the Aegean Sea, taking local ferries around the Cyclades Islands. Indulge in a little island hopping and take the time to uncover remote ruins, gorgeous beaches and outstanding scenery.',
	linkurl: 'http://www.tkqlhce.com/click-7972913-12244286-1433868762000?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FZMSE%2F&cjsku=ZMSE',
	continent: 'europe'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-mvb-450x675.jpg',
	title: 'Madrid Valencia Barcelona',
	price: '930',
	excerpt: 'Feel the pulse of spirited Spain on this tour from the country’s capital to the bustling coastal city of Barcelona. Enjoy all things arty – from Madrid’s inspiring Art Walk to Barcelona’s internationally renowned galleries and museums.',
	linkurl: 'http://www.kqzyfj.com/click-7972913-12244286-1433868762000?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FZMRS%2F&cjsku=ZMRS',
	continent: 'europe'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-costa-rica-quest-760x507.jpg',
	title: 'Costa Rica Quest',
	price: '930',
	excerpt: 'This action-packed tour of Costa Rica’s highlights is perfect for the adventurer who wants to explore the region’s diversity. Get your adrenaline pumping, follow a trail to the base of a waterfall, melt away in thermal springs or relax on a beach.',
	linkurl: 'http://www.anrdoezrs.net/4877lnwtnvAIKIDKCEACBIJCBGHACFEFKJCEHBBBB?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcosta-rica-quest%2F2591%2F%3Faff%3D26414&cjsku=CRQ2016',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-mediterranean-express-450x675.jpg',
	title: 'Mediterranean Express',
	price: '1199',
	excerpt: 'Jump on this quick (and affordable) seven-day tour of some of Europe’s greatest cities. See what’s so nice about Nice, snap the expected "holding up the Leaning Tower of Pisa" shot, and then walk beneath Gaudi’s famous architecture. And hey, think of the food to be tried on a tour from Rome to Barcelona!',
	linkurl: 'http://www.dpbolvw.net/n765dlurlt8GIGBIAC8A9GHA9EF8ADCDIHACF9999?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fmediterranean-express%2F664%2F%3Faff%3D26414&cjsku=EIME2016',
	continent: 'europe'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-croatia-adventure-760x507.jpg',
	title: 'Croatia Adventure',
	price: '899',
	excerpt: 'A trip from Zagreb to Dubrovnik is not your backpackers typical European tour its way better. In one week, venture from historic Zagreb along the Adriatic Coast to stunning Dubrovnik. Along the way, youll hit the highlights did we mention the beautiful lakes of Plitvice or Hvar on the coast?',
	linkurl: 'http://www.dpbolvw.net/7j115dlurlt8GIGBIAC8A9GHA9EF8ADCDIHACF9999?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcroatia-adventure-zagreb-to-dubrovnik%2F2068%2F%3Faff%3D26414&cjsku=ECZD2015',
	continent: 'europe'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-mayan-encounter-760x507.jpg',
	title: 'Mayan Encounter',
	price: '1236',
	excerpt: 'Travel to paradise somewhere between the blazing Yucatan sun and the cool Guatemalan highlands on this Mayan Encounter. Prepare to be wowed as you relax on the white sands of Tulum, admire the underwater life in Caye Caulker, amble over the Mayan ruins in jungle-clad Tikal and gaze up at the volcanoes surrounding Antigua.',
	linkurl: 'http://www.tkqlhce.com/6j117hz74z6MUWUPWOQMOPPRRPVTMORQQVTVUTPNNN?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FQVRA%2F&cjsku=QVRA',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-inca-trail-450x675.jpg',
	title: 'Inca Trail',
	price: '1632',
	excerpt: 'Travel to Peru and retrace the steps of the Inca, Peru’s fascinating ancient civilisation. Follow Inca traditions from Lima to Cuzco, journey through the fertile heartland of the Sacred Valley, see the magnificent Ollantaytambo ruins before embarking on the ultimate adventure – trekking to Machu Picchu.',
	linkurl: 'http://www.kqzyfj.com/e5103uoxuowBJLJELDFBDEEGGEKIBDGFFKIKJIECCC?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FGGTBC%2F&cjsku=GGTBC',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/i-rio-to-iguasu-450x675.jpg',
	title: 'Best of Argentina and Brazil',
	price: '2710',
	excerpt: 'Get a taste of the rhythms of Argentina and Brazil on this southern adventure journeying from Buenos Aires to Rio de Janeiro, taking in the spectacular Iguazu Falls along the way. From tango to samba, Spanish to Portuguese, and Malbec wine to caipirinhas, these two countries are sure to have you enthralled in their passionate zest for life.',
	linkurl: 'http://www.kqzyfj.com/7i117tenkem19B94B351344664A813655A8A984222?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FGPKB%2F&cjsku=GPKB',
	continent: 'america'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-sa-discoverer-760x507.jpg',
	title: 'South Africa Discoverer',
	price: '1349',
	excerpt: 'Explore South Africa’s fascinating cultural diversity on this exciting journey through the "Rainbow Nation." Chase stunning views through Tsitsikamma National Park and track big game across Addo Elephant National Park.',
	linkurl: 'http://www.kqzyfj.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fsouth-africa-discoverer%2F1986%2F%3Faff%3D26414&cjsku=DCD2015',
	continent: 'africa'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-spain-portugal-760x507.jpg',
	title: 'Spain and Portugal',
	price: '1499',
	excerpt: 'Take an incredible ten days to experience the best travel highlights of Spain and Portugal: art, culture, food (hello tapas!), and nightlife. Leave the typical big tour bus behind and reach these unforgettable destinations by train. All aboard for some serious (and life-changing) city-hopping through Iberia.',
	linkurl: 'http://www.kqzyfj.com/cm104p-85-7NVXVQXPRNPOVWPOTUNPSRSXWPRUOOOO?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fspain-portugal-shoestring%2F1148%2F%3Faff%3D26414&cjsku=ESBM2016',
	continent: 'europe'
},
{
	imgsrc: 'images/portfolio/grid/large-margins/g-best-china-760x507.jpg',
	title: 'Best of China',
	price: '1999',
	excerpt: 'This trip blends the perfect mix of China’s major metropolises with priceless time experiencing traditional rural life. Explore hidden corners of Beijing’s Forbidden City. Cycle through remote villages and learn about Xi’an’s famed terracotta soldiers. Enjoy a sunset cruise on the gorgeous Li River.',
	linkurl: 'http://www.jdoqocy.com/ge108kjspjr6EGE9G8A687EF87CD68BABGF8AD7777?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fbest-of-china%2F2556%2F%3Faff%3D26414&cjsku=ACBNG2016',
	continent: 'asia'
}]



 });
};
