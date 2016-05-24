/* Get experiences */
module.exports.list = function(req, res){
res.render('experiences-list', { title: 'Travel Experiences',
explista :[{
	imgsrc:'https://s3.amazonaws.com/tripkii-bucket/static/amazon-riverboat-760x507.jpg',

	price: '2699',
	excerpt: 'Hop aboard a riverboat and experience the Amazon in style. Led by an Amazon Reserve naturalist guide, your cruise will include daily excursions by motorized skiff designed to reveal the exotic wildlife that calls the rainforest home – with any luck you’ll spot sloths, toucans, or pink dolphins! And, with two full days for exploration in Pacaya–Samiria National Reserve, you’ll have the chance to experience the jungle up close. ',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/amazon-riverboat-adventure-aboard-amatista/2368/',
	continent: 'america',
	id: '001',
	title: '09 Days: Amazon Riverboat',
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
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/sailing-croatia-450x675.jpg',

	price: '1102',
	excerpt: 'Whether you’re looking for relaxed afternoons lazing on the deck of a yacht or time to indulge in the nightlife, this Croatian cruise aims to please. Embark in lovely Dubrovnik and discover charming villages as you sail from island to stunning island on a small yacht.',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.gadventures.com/trips/sailing-croatia-dubrovnik-to-split/2340/',
	continent: 'europe',
	id: '002',
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

},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/egypt-adventure-760x507.jpg',

	price: '1179',
	excerpt: 'Travel to Egypt and follow the path of the River Nile as you revel in a taste of Egypt’s history, beauty and colour on this short but action-packed trip along the longest river in the world. Cruise the Nile on a felucca, discover the largest and most impressive pharaonic temples, chat and dine with interesting locals and live it up in this country of deserts, bazaars, monuments and good old-fashioned adventures.',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.intrepidtravel.com/egypt/egypt-adventure-93911',
	continent: 'africa',
	id: '003',
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

},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/mexico-culinary-tour-760x507.jpg',

	price: '1452',
	excerpt: 'Get an authentic taste of Mexico on this luscious journey through some of the country’s most famous culinary regions. Meander through Oaxaca’s aromatic markets; take to the streets of Puebla to sample some the city’s local specialties; indulge in fresh seafood on the beach; and take to the streets of Mexico City on a taco crawl to experience a delightful culinary heritage that goes back thousands of years.',
	linkurl: 'http://www.anrdoezrs.net/links/7972913/type/dlg/https://www.intrepidtravel.com/mexico/real-food-adventure-mexico-94470',
	continent: 'america',
	id: '004',
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

},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-panama-450x675.jpg',

	price: '999',
	excerpt: 'Panama has been a destination on the cusp of the mainstream for ages, but somehow still remains a secret. More greatness for us to enjoy, we say. This eight-day trip opens the lid on the natural splendour of this overlooked gem of a country, giving travellers the chance to hike cloud forests, snorkel the Caribbean and even discover where that delicious morning cup of joe comes from at a coffee plantation.',
	linkurl: 'http://www.jdoqocy.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fbest-of-panama%2F1380%2F%3Faff%3D26414&cjsku=CPPQ2015',
	continent: 'america',
	id: '005',
	title: '8 days: Best of Panama',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/best-of-panama-route-402x243.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 12',
	includeone: 'Hotels (7 nts)',
	includetwo: '0 breakfasts, 0 lunches, 0 dinners',
	includethree: 'Plane, local bus, boat, walking',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.jdoqocy.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fbest-of-panama%2F1380%2F%3Faff%3D26414&cjsku=CPPQ2015'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-berlin-london-760x507.jpg',

	price: '1039',
	excerpt: 'Ah, a relaxing week’s vacation in Old Europa. What could be finer? Don’t ask anyone who’s taken this trip! Our seven-day odyssey across four countries is a blur of beauty, culture, and adventure from start to finish.',
	linkurl: 'http://www.jdoqocy.com/2p98js0ys-FNPNIPHJFHGNOHGLMFHKJKPOHJMGGGG?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fberlin-to-london-shoestring%2F2511%2F%3Faff%3D26414&cjsku=EDBL2016',
	continent: 'europe',
	id: '006',
	title: '7 days: Berlin to London',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/berlin-to-london-route-402x243.jpg',
	travelstyle: 'Yolo',
	styleinfo: 'Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Basic',
	serviceinfo: 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 10.',
	includeone: 'Simple hotels/hostels (6 nts, multi-share).',
	includetwo: '5 breakfasts, 0 lunches, 0 dinners.',
	includethree: 'Train, bus, metro, ferry, walking.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.jdoqocy.com/2p98js0ys-FNPNIPHJFHGNOHGLMFHKJKPOHJMGGGG?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fberlin-to-london-shoestring%2F2511%2F%3Faff%3D26414&cjsku=EDBL2016'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-lost-city-760x507.jpg',

	price: '679',
	excerpt: 'Explore the uncrowded ruins at leisure and marvel at what would have been here in years gone by. Say you got here first and had the Lost City all to yourself.',
	linkurl: 'http://www.tkqlhce.com/pq80wktqks7FHFAH9B798FG98DE79CBCHG9BE8888?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcolombia-lost-city-trekking%2F684%2F%3Faff%3D26414&cjsku=SMLC2015',
	continent: 'america',
	id: '007',
	title: '7 days: Colombia Lost City',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/colombia-lost-city-route-402x300.jpg',
	travelstyle: 'Active',
	styleinfo: 'Hiking, trekking, biking, rafting, and kayaking adventures all over the world, made for outdoor types.',
	physical: 'Demanding',
	physicalinfo: 'Some high-altitude hikes or more strenuous activities, but accessible to most healthy travellers.',
	service: 'Basic',
	serviceinfo: 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 10.',
	includeone: 'Hotels (2 nts), camping (4 nts in hammocks or rustic bunks).',
	includetwo: '5 breakfasts, 5 lunches, 4 dinners ',
	includethree: '4x4, walking.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.tkqlhce.com/pq80wktqks7FHFAH9B798FG98DE79CBCHG9BE8888?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcolombia-lost-city-trekking%2F684%2F%3Faff%3D26414&cjsku=SMLC2015'

},

{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-ecuador-quest-450x675.jpg',

	price: '699',
	excerpt: 'This eight-day trip shows off its best, rolling natural wonders (the Amazon!), stunning landscapes (the Ecuadorian highlands!), rich culture (Quito!) and active pursuits like hiking, horseback riding, and mountain-biking everywhere you look. ',
	linkurl: 'http://www.tkqlhce.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fecuador-quest%2F1966%2F%3Faff%3D26414&cjsku=SEEQ2015',
	continent: 'america',
	id: '008' ,
	title: '8 days: Ecuador Quest',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/ecuador-quest-route-402x243.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 12.',
	includeone: 'Hotels (5 nts), simple village cabañas/homestay (2 nts, multi-share).',
	includetwo: '3 breakfasts, 2 lunches, 2 dinners ',
	includethree: 'Private van, public bus, walking',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.tkqlhce.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fecuador-quest%2F1966%2F%3Faff%3D26414&cjsku=SEEQ2015'

},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/i-pyrenees-760x507.jpg',

	price: '890',
	excerpt: 'Prepare for some thrilling adventures during this action-packed week in the Pyrenees. Nestled between France and Spain, Andorra’s beautiful surrounding landscape provides thrillseekers with a setting for some serious adrenalin-fuelled fun.',
	linkurl: 'http://www.kqzyfj.com/7h104js0ys-FNPNIPHJFHIIKKIOMFHKJJOMONMIGGG?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FAAXS%2F&cjsku=AAXS',
	continent: 'europe',
	id: '009',
	title: '8 days: Bike Hike Raft at Pyrenees',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/pyrinees-route-402x243.jpg',
	travelstyle: 'Original',
	styleinfo: 'The trips we built our reputation on! They’re the perfect choice for those after a great mix of included activities and free time to explore a destination on their own.',
	physical: 'Demanding',
	physicalinfo: 'Be prepared for some serious physical activity. The fitter you are, the more you’ll enjoy it, as most activities will be challenging.',
	service: 'Original',
	serviceinfo: 'Original trips use well-located, comfortable tourist-class hotels and include some meals.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16 ',
	includeone: 'Chalet (7 nights)',
	includetwo: '7 breakfasts, 6 dinners',
	includethree: 'Private Bus',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.kqzyfj.com/7h104js0ys-FNPNIPHJFHIIKKIOMFHKJJOMONMIGGG?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FAAXS%2F&cjsku=AAXS'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/i-santorini-450-675.jpg',

	price: '1360',
	excerpt: 'Embark on a tour through the Aegean Sea, taking local ferries around the Cyclades Islands. Indulge in a little island hopping and take the time to uncover remote ruins, gorgeous beaches and outstanding scenery.',
	linkurl: 'http://www.tkqlhce.com/click-7972913-12244286-1433868762000?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FZMSE%2F&cjsku=ZMSE',
	continent: 'europe',
	id: '010',
	title: '8 days: Athens To Santorini',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/athens-santorini-route-402x243.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 12 ',
	includeone: 'Hotel (7 nights)',
	includetwo: '5 breakfasts, 1 dinner',
	includethree: 'Ferry, Public bus, Taxi, Metro',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.tkqlhce.com/click-7972913-12244286-1433868762000?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FZMSE%2F&cjsku=ZMS'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-costa-rica-quest-760x507.jpg',

	price: '1099',
	excerpt: 'This action-packed tour of Costa Rica’s highlights is perfect for the adventurer who wants to explore the region’s diversity. Get your adrenaline pumping, follow a trail to the base of a waterfall, melt away in thermal springs or relax on a beach.',
	linkurl: 'http://www.anrdoezrs.net/4877lnwtnvAIKIDKCEACBIJCBGHACFEFKJCEHBBBB?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcosta-rica-quest%2F2591%2F%3Faff%3D26414&cjsku=CRQ2016',
	continent: 'america',
	id: '011',
	title: '9 days: Costa Rica Quest',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/costa-rica-quest-route-402x243.jpg',
	travelstyle: 'Classic',
	styleinfo: 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Standard',
	serviceinfo: 'Comfortable tourist-class accommodations with character; mix of public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16 ',
	includeone: 'Hotels (8 nts).',
	includetwo: '0 breakfasts, 1 lunch, 0 dinners ',
	includethree: 'Private van, boat.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.anrdoezrs.net/4877lnwtnvAIKIDKCEACBIJCBGHACFEFKJCEHBBBB?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcosta-rica-quest%2F2591%2F%3Faff%3D26414&cjsku=CRQ2016'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/i-mvb-450x675.jpg',

	price: '1085',
	excerpt: 'Feel the pulse of spirited Spain on this tour from the country’s capital to the bustling coastal city of Barcelona. Enjoy all things arty – from Madrid’s inspiring Art Walk to Barcelona’s internationally renowned galleries and museums.',
	linkurl: 'http://www.kqzyfj.com/click-7972913-12244286-1433868762000?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FZMRS%2F&cjsku=ZMRS',
	continent: 'europe',
	id: '012',
	title: '8 days: Madrid Valencia Barcelona',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/madrid-barcelona-route-402x243.jpg',
	travelstyle: 'Basix',
	styleinfo: 'Basix trips keep things simple to give you amazing experiences at a great price. ',
	physical: 'Light',
	physicalinfo: 'Some easy physical activities included in your trip. No physical preparation is required to make the most of the journey.',
	service: 'Basix',
	serviceinfo: 'We use simple, clean and centrally located accommodation, use public transport where we can and include plenty of free time so you can do the things that suit your budget and interests.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16 ',
	includeone: 'Hotel (1 night), Hostel (6 nights).',
	includetwo: '2 breakfasts',
	includethree: 'Metro, Public bus, Train',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.kqzyfj.com/click-7972913-12244286-1433868762000?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FZMRS%2F&cjsku=ZMRS'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-croatia-adventure-760x507.jpg',

	price: '899',
	excerpt: 'A trip from Zagreb to Dubrovnik is not your backpackers typical European tour its way better. In one week, venture from historic Zagreb along the Adriatic Coast to stunning Dubrovnik. Along the way, youll hit the highlights did we mention the beautiful lakes of Plitvice or Hvar on the coast?',
	linkurl: 'http://www.dpbolvw.net/7j115dlurlt8GIGBIAC8A9GHA9EF8ADCDIHACF9999?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcroatia-adventure-zagreb-to-dubrovnik%2F2068%2F%3Faff%3D26414&cjsku=ECZD2015',
	continent: 'europe',
	id: '013',
	title: '7 days: Croatia Adventure',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/croatia-adventure-route-402x300.jpg',
	travelstyle: 'Yolo',
	styleinfo: 'Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Basic',
	serviceinfo: 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 10.',
	includeone: 'Hotels/hostels (6 nts, multi-share).',
	includetwo: '2 breakfasts, 0 lunches, 0 dinners ',
	includethree: 'Train, bus, metro, ferry, walking.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.dpbolvw.net/7j115dlurlt8GIGBIAC8A9GHA9EF8ADCDIHACF9999?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fcroatia-adventure-zagreb-to-dubrovnik%2F2068%2F%3Faff%3D26414&cjsku=ECZD2015'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-mediterranean-express-450x675.jpg',

	price: '1199',
	excerpt: 'Jump on this quick (and affordable) seven-day tour of some of Europe’s greatest cities. See what’s so nice about Nice, snap the expected "holding up the Leaning Tower of Pisa" shot, and then walk beneath Gaudi’s famous architecture. And hey, think of the food to be tried on a tour from Rome to Barcelona!',
	linkurl: 'http://www.dpbolvw.net/n765dlurlt8GIGBIAC8A9GHA9EF8ADCDIHACF9999?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fmediterranean-express%2F664%2F%3Faff%3D26414&cjsku=EIME20165',
	continent: 'europe',
	id: '014',
	title: '7 days: Mediterranean Express',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/mediterranean-express-route-402x243.jpg',
	travelstyle: 'Yolo',
	styleinfo: 'Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Basic',
	serviceinfo: 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 10.',
	includeone: 'Hostels (6 nts, multi-share).',
	includetwo: '5 breakfasts, 0 lunches, 0 dinners',
	includethree: 'Train, bus, plane, walking.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.dpbolvw.net/n765dlurlt8GIGBIAC8A9GHA9EF8ADCDIHACF9999?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fmediterranean-express%2F664%2F%3Faff%3D26414&cjsku=EIME2016'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/i-mayan-encounter-760x507.jpg',

	price: '1236',
	excerpt: 'Travel to paradise somewhere between the blazing Yucatan sun and the cool Guatemalan highlands on this Mayan Encounter. Prepare to be wowed as you relax on the white sands of Tulum, admire the underwater life in Caye Caulker, amble over the Mayan ruins in jungle-clad Tikal and gaze up at the volcanoes surrounding Antigua.',
	linkurl: 'http://www.tkqlhce.com/6j117hz74z6MUWUPWOQMOPPRRPVTMORQQVTVUTPNNN?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FQVRA%2F&cjsku=QVRA',
	continent: 'america',
	id: '015',
	title: '17 days: Mayan Encounter',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/mayan-encounter-route-402x243.jpg',
	travelstyle: 'Basix',
	styleinfo: 'Basix trips keep things simple to give you amazing experiences at a great price. ',
	physical: 'Light',
	physicalinfo: 'Some easy physical activities included in your trip. No physical preparation is required to make the most of the journey.',
	service: 'Basix',
	serviceinfo: 'We use simple, clean and centrally located accommodation, use public transport where we can and include plenty of free time so you can do the things that suit your budget and interests.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16 ',
	includeone: 'Hotel (14 nights), Camping (with facilities) (1 night), Homestay (1 night)',
	includetwo: '1 breakfast, 1 dinner',
	includethree: 'Private minibus, Local bus, Ferry',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.tkqlhce.com/6j117hz74z6MUWUPWOQMOPPRRPVTMORQQVTVUTPNNN?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FQVRA%2F&cjsku=QVRA'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-sa-discoverer-760x507.jpg',

	price: '1349',
	excerpt: 'Jump on this quick (and affordable) seven-day tour of some of Europe’s greatest cities. See what’s so nice about Nice, snap the expected "holding up the Leaning Tower of Pisa" shot, and then walk beneath Gaudi’s famous architecture. And hey, think of the food to be tried on a tour from Rome to Barcelona!',
	linkurl: 'http://www.kqzyfj.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fsouth-africa-discoverer%2F1986%2F%3Faff%3D26414&cjsku=DCD2015',
	continent: 'africa',
	id: '016',
	title: '10 days: South Africa Discoverer',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/south-africa-route-402x243.jpg',
	travelstyle: 'Yolo',
	styleinfo: 'Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Camping',
	serviceinfo: 'Camping most nights with some hotel stays to start and throughout; affordable public and private transport.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 14, avg 12.',
	includeone: 'Participation camping (7 nts), hostels (2 nts, multi-share).',
	includetwo: '9 breakfasts, 8 lunches, 8 dinners',
	includethree: '15-seat touring vehicle',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.kqzyfj.com/click-7972913-10781056-1434981360000?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fsouth-africa-discoverer%2F1986%2F%3Faff%3D26414&cjsku=DCD2015'
},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/i-inca-trail-450x675.jpg',

	price: '1763',
	excerpt: 'Travel to Peru and retrace the steps of the Inca, Peru’s fascinating ancient civilisation. Follow Inca traditions from Lima to Cuzco, journey through the fertile heartland of the Sacred Valley, see the magnificent Ollantaytambo ruins before embarking on the ultimate adventure – trekking to Machu Picchu.',
	linkurl: 'http://www.kqzyfj.com/e5103uoxuowBJLJELDFBDEEGGEKIBDGFFKIKJIECCC?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FGGTBC%2F&cjsku=GGTBC',
	continent: 'america',
	id: '017',
	title: '08 Days: Inca Trail',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/inca-trail-route-402x243.jpg',
	travelstyle: 'Original',
	styleinfo: 'The trips we built our reputation on! They’re the perfect choice for those after a great mix of included activities and free time to explore a destination on their own.',
	physical: 'Demanding',
	physicalinfo: 'Be prepared for some serious physical activity. The fitter you are, the more you’ll enjoy it, as most activities will be challenging.',
	service: 'Original',
	serviceinfo: 'Original trips use well-located, comfortable tourist-class hotels and include some meals.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 15, avg 12.',
	includeone: 'Camping (with basic facilities) (3 nights), Hotel (4 nights)',
	includetwo: '7 breakfasts, 5 lunches, 4 dinners',
	includethree: 'Plane, Private minibus, Train.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.kqzyfj.com/e5103uoxuowBJLJELDFBDEEGGEKIBDGFFKIKJIECCC?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FGGTBC%2F&cjsku=GGTBC'

},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-best-china-760x507.jpg',

	price: '2499',
	excerpt: 'This trip blends the perfect mix of China’s major metropolises with priceless time experiencing traditional rural life. Explore hidden corners of Beijing’s Forbidden City. Cycle through remote villages and learn about Xi’an’s famed terracotta soldiers. Enjoy a sunset cruise on the gorgeous Li River.',
	linkurl: 'http://www.jdoqocy.com/ge108kjspjr6EGE9G8A687EF87CD68BABGF8AD7777?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fbest-of-china%2F2556%2F%3Faff%3D26414&cjsku=ACBNG2016',
	continent: 'asia',
	id: '018',
	title: '12 Days: Best of China',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/best-china-route-402x290.jpg',
	travelstyle: 'National Geographic Journeys',
	styleinfo: 'Greater exploration, insider access, and the freedom to roam – all without sacrificing comfort.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Upgraded',
	serviceinfo: 'Quality accommodations and more inclusions such as private transport (including internal flights on some tours) and more included meals and activities.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 15, avg 12.',
	includeone: 'Hotels (10 nts), soft-sleeper train (1 nt).',
	includetwo: '11 breakfasts, 1 lunch, 3 dinners',
	includethree: 'Private bus, plane, boat, train.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.jdoqocy.com/ge108kjspjr6EGE9G8A687EF87CD68BABGF8AD7777?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fbest-of-china%2F2556%2F%3Faff%3D26414&cjsku=ACBNG2016'

},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/i-rio-to-iguasu-450x675.jpg',

	price: '2368',
	excerpt: 'Get a taste of the rhythms of Argentina and Brazil on this southern adventure journeying from Buenos Aires to Rio de Janeiro, taking in the spectacular Iguazu Falls along the way. From tango to samba, Spanish to Portuguese, and Malbec wine to caipirinhas, these two countries are sure to have you enthralled in their passionate zest for life.',
	linkurl: 'http://www.dpbolvw.net/i5116lnwtnvAIKIDKCEACDDFFDJHACFEEJHJIHDBBB?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FGPKB%2F&cjsku=GPKB',
	continent: 'america',
	id: '019',
	title: '8 Days: Best of Argentina and Brazil',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/argentina-brazil-route-402x243.jpg',
	travelstyle: 'Comfort',
	styleinfo: 'We’ve smoothed away some of adventure travel’s rougher edges to craft a style of travel that has an added degree of, well... comfort.',
	physical: 'Easy',
	physicalinfo: 'These trips are a relaxing break. You don’t have to worry about doing anything physically demanding unless you want to.',
	service: 'Comfort',
	serviceinfo: 'Enjoy a more relaxed pace of travel, comfortable accommodation, more included activities and many meals along the way.',
  physical: 'Easy',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 15, avg 12.',
	includeone: 'Hotel (6 nights)',
	includetwo: '6 breakfasts, 1 lunch, 1 dinner',
	includethree: 'Plane, Private minibus.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.dpbolvw.net/i5116lnwtnvAIKIDKCEACDDFFDJHACFEEJHJIHDBBB?url=http%3A%2F%2Fwww.intrepidtravel.com%2Ftrips%2FGPKB%2F&cjsku=GPKB'

},
{
	imgsrc: 'https://s3.amazonaws.com/tripkii-bucket/static/g-spain-portugal-760x507.jpg',

	price: '1499',
	excerpt: 'Take an incredible ten days to experience the best travel highlights of Spain and Portugal: art, culture, food (hello tapas!), and nightlife. Leave the typical big tour bus behind and reach these unforgettable destinations by train. All aboard for some serious (and life-changing) city-hopping through Iberia.',
	linkurl: 'http://www.kqzyfj.com/cm104p-85-7NVXVQXPRNPOVWPOTUNPSRSXWPRUOOOO?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fspain-portugal-shoestring%2F1148%2F%3Faff%3D26414&cjsku=ESBM2016',
	continent: 'europe',
	id: '020',
	title: '10 days: Spain and Portugal',
	routeimg: 'https://s3.amazonaws.com/tripkii-bucket/static/routes/spain-portugal-route-402x243.jpg',
	travelstyle: 'Yolo',
	styleinfo: 'Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers.',
	physical: 'Light',
	physicalinfo: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.',
	service: 'Basic',
	serviceinfo: 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.',
	triptype: 'Small Group',
	typeinfo: 'Small group experience; Max 16, avg 14.',
	includeone: 'Hostels (7 nts, multi-share), overnight bus (1 nt), overnight train (1 nt).',
	includetwo: '0 breakfasts, 0 lunches, 0 dinners',
	includethree: 'Train, bus, walking.',
	includefour: 'Chief Experience Officer (CEO) throughout, local guides. ',
	tourlink: 'http://www.kqzyfj.com/cm104p-85-7NVXVQXPRNPOVWPOTUNPSRSXWPRUOOOO?url=http%3A%2F%2Fwww.gadventures.com%2Ftrips%2Fspain-portugal-shoestring%2F1148%2F%3Faff%3D26414&cjsku=ESBM2016'
}


]



 });
};
