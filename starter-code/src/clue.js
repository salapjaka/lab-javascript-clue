
var mrGreen = {
firstName: "Jacob",
lastName: "Green",
color: "green",
description: "He has a lot of connections",
age:   45,
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur",
}
var drOrchid = {
firstName: "Doctor",
lastName: "Orchid",
color: "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: 26,
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist",
}

var profPlum = {
firstName: "Victor",
lastName: "Plum",
color: "purple",
description: "Billionare video game designer",
age: 22,
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer",
}

var missScarlet = {
firstName: "Kasandra",
lastName:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor",
}

var mrsPeacock = {
firstName:   "Eleanor",
lastName:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
}
var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
}

var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);


var rope = {
  name: "rope",
  weight: "10",
}
var knife = {
  name: "knife",
  weight: "8",
}

var candlestick = {
  name: "candlestick",
  weight: 30,
} 

var dumbbell = {
  name: "dumbbell",
  weight: 30,
}    
var poison = {
  name: "poison",
  weight: 2,
}
var axe = {
  name: "axe",
  weight: 15,
}
var bat = {
  name: "bat",
  weight: 13,
}
var trophy = {
  name: "trophy",
  weight: 25,
}
var pistol = {
  name: "pistol",
  weight: 20,
}
var rope = {
  name: "rope",
  weight: 10,
}

var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol, rope);

var diningRoom = {
name: "Dining Room",
}
var conservatory = {
  name: "Conservatory",
}
var kitchen = {
name: "Kitchen",
}
var study = {
name: "Study",
}
var library = {
name: "Library",
}
var billiardRoom = {
name: "Billiard Room",
}
var lounge = {
name: "Lounge",
}
var ballroom = {
name: "Ballroom",
}
var name = {
name: "Hall",
}
var spa = {
name: "Spa",
}
var livingRoom = {
name: "Living Room",
}
var observatory = {
name: "Observatory",
}
var theater = {
name: "Theater",
}
var guestHouse = {
name: "Guest House",
}
var patio = {
name: "Patio",
}

var roomsArray = [];
roomsArray.push(diningRoom, conservatory, 
  kitchen, study, library, billiardRoom, lounge, 
  ballroom, name, spa, livingRoom, observatory, 
  theater, guestHouse, patio);
// Characters Collection

function randomSelector(randomSelector) {
    return randomSelector[Math.floor(Math.random() * randomSelector.length)];
}
console.log (randomSelector(charactersArray));




function pickMistery () {
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray))
  misteryEnvelope.push(randomSelector(weaponsArray))
  misteryEnvelope.push(randomSelector(roomsArray))
  return misteryEnvelope;
  
}
console.log(pickMistery())

function revealMistery(misteryEnvelope){
pickMistery();

console.log(misteryEnvelope)

return misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!"
}
// Rooms' Collection


// Weapons Collection


// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

