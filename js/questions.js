var domande = [
	/*0*/	"0",
	/*1*/	"1",
	/*2*/	["How many <b>people</b> speak English as a first or a second language?", 
				"300 million", 
				"500 million", 
				"800 million",   //giusto
			],  
	/*3*/	["Which saints do the three crosses of the Union Jack represent?", 
				"Saint Patrick, Saint George, Saint Andrew",  //giusto
				"Saint Patrick, Saint John, Saint Andrew",
				"Saint Peter, Saint George, Saint David",
			],
	/*4*/	["Which animal can you see in the Welsh flag?",
				"The Welsh dragon",  //giusto
				"The Welsh snake",
				"The Welsh lion",
			],
	/*5*/	["What is Queen Elizabeth's surname?",
				"Tudor",
				"Middelton",
				"Windsor", //giusto
			],
	/*6*/	["Where does the word ''sandwich'' come from?",
				"From the name of a small town in England",
				"From Lord Sandwich, a British nobleman", //giusta
				"From the name of an island",
			],
	/*7*/	["Who consecrated the ''Cucumber Sandwich'' as the symbol of the British upper class?",
				"George Orwell",
				"James Joyce",
				"Oscar Wilde",  //giusta
			],
	/*8*/	["Where can you see the ''Koh-i-noor'', one of the biggest diamonds in the world?",
				"Capetown",
				"Amsterdam",
				"London",  //giusta
			],
	/*9*/	["What does ''Koh-i-noor'' mean?",
				"Mountain of the moon",
				"Mountain of the sun",
				"Mountain of light",  //giusta
			],
	/*10*/	["Where is ''Hamlet'', Shakespeare's famous tragedy, set?",
				"In Scotland",
				"In Denmark",  //giusta
				"In Ireland",
			],
	/*11*/	["Which cake is mentioned in ''A Christmas Carol'', the famous novel by Charles Dickens?",
				"Cheese cake",
				"Apple Pie",
				"Christmas Pudding",  //giusta
			],
	/*12*/	["Who wrote ''The Strange Case of Dr. Jekyll and Mr. Hyde''?",
				"Ernest Hemingway",
				"William Shakespeare",
				"Robert Louis Stevenson",  //giusta
			],
	/*13*/	["Who is Frankenstein? The protagonist of Mary Shelley's famous novel?",
				"A doctor who created a monster",  //giusta
				"A monster created by a doctor",
				"A vampire",
			],
	/*14*/	["What is the main ingredient of Porrige?",
				"Mushrooms",
				"Oats",   //giusta
				"Cheese",
			],
	/*15*/	["Who wants some more Porrige (Gruel) in a famous novel by Charles Dickens?",
				"Oliver Twist",  //giusta
				"Sissy Jupe",
				"David Copperfield",
			],
	/*16*/	["What is the London Eye?",
				"A telescope",
				"A panoramic wheel",  //giusta 
				"A roller coaster",
			],
	/*17*/	["How high is The Shard (Renzo Piano's skyscraper)?",
				"The Shard is 310m high",  //giusta
				"The Shard is 410m high",
				"The Shard is 200m high",
			],
	/*18*/	["Which world event took place in London in 2012?",
				"The Hunger Games",
				"The Olympic games",  //giusta 
				"The FIFAWorld cup",
			],
	/*19*/	["How many stripes are there in the US flag?",
				"13 vertical stripes",
				"15 horizontal stripes",
				"13 horizontal stripes",  //giusta
			],
	/*20*/	["What do the stripes in the US flag represent?",
				"The most important American presidents",
				"The original thirteen colonies",  //giusta
				"The current American states",
			],
	/*21*/	["How many stars are there in the US flag?",
				"64",
				"50",  //giusta
				"51",
			],
	/*22*/	["What do the stars in US flag represent?",
				"The number of states in the USA",   //giusta
				"The number of monuments in the USA",
				"The number of natural parks in the USA",
			],
	/*23*/	["Where was Barack Obama born?",
				"He was born in Capetown, South Africa",
				"He was born in New York",  
				"He was born in Honolulu, Hawaii",   //giusta
			],
	/*24*/	["What is the name of the capital city of the USA?",
				"Miami",
				"Washington DC",  //giusta
				"New York",
			],
	/*25*/	["What is the capital city of New York State?",
				"Albany",  //giusta
				"Buffalo",
				"New York City",
			],
	/*26*/	["What is the capital city of California?",
				"San Francisco",
				"Los Angeles",
				"Sacramento",  //giusta
			],
	/*27*/	["Where does the word ''Hot Dog come from?",
				"From a Pony, a small horse",
				"From the Dachsumund, a small long dog",  //giusta
				"From a young goose",
			],
	/*28*/	["What is the origin of Ketchup?",
				"A French sauce made from tomatoes",
				"A spicy Spanish sauce made from peppers",
				"A Malasyan sauce made from fish",  //giusta
			],
	/*29*/	["Where does the word ''bikini'' come from?",
				"From the name of Bikini atoll",  //giusta
				"From an old bicycle",
				"From the name of a famous actress",
			],
	/*30*/	["Which leaf can you see in the Canadian flag?",
				"A clover leaf",
				"An oak leaf",
				"A maple leaf",  //giusta
			],
	/*31*/	["What was the coldest temperature in Canada in the winter 2014?",
				"- 50 degrees C",  //giusta
				"- 78 degrees C",
				"- 30 degrees C",
			],
	/*32*/	["What are the names of two very popular Canadian singers?",
				"Lady Gaga; Micheal Buble'",
				"Celine Dion; Avril Lavigne",  //giusta
				"Justin Bieber; Robbie Williams",
			],
	/*33*/	["What can you see in the flags of Australia and New Zealand?",
				"The Union Jack",  //giusta
				"The Welsh flag",
				"The American flag",
			],
	/*34*/	["What do the stars in the flags of Australia and New Zealand represent?",
				"The isles around the two countries",
				"The stars in the Milky Way",
				"The constellation of the Southern Cross", //giusta
			],
	/*35*/	["Why is Australia known as ''Land Down Under''?",
				"Because of its strange geographical form",
				"Because it is under the Equator",  //giusta
				"Because it is under the sea level",
			],
	/*36*/	["What are koalas fond of?",
				"Lotus flowers",
				"Bamboo",
				"Eucalyptus",  //giusta
			],
	/*37*/	["What is the New Zealand national rugby team?",
				"The All Blacks",  //giusta
				"The All Reds",
				"The Chiefs",
			],
	/*38*/	["What is the New Zealand national bird?",
				"The albatross",
				"The kea",
				"The kiwi", //giusta
			],
	/*39*/	["What is ''HUHU GRUB'', the Traditional Maori food?",
				"Roasted snails",
				"Tails of pigs",
				"Larvae of beetles", //giusta
			],
	/*40*/	["Where does the word ''Spam'' come from?",
				"From a brand of canned chopped meat",  //giusta
				"From a brand of sneakers",
				"From a brand of computers",
			],
];