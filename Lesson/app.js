// /////////////////////////////--(if else bolon prompt garaas utga)--///////////////
// var birthDate = prompt(" tanii torson on hed we ?");

// if (birthDate !== null) {
//   var currentYear = new Date().getFullYear();

//   var age = currentYear - birthDate;

//   alert("sain baina uu \n\n\n tanii nas bol :" + age);

//   if (age > 18) {
//     console.log(" ta nasand hvrsen baina");
//   } else if (age > 15) {
//     console.log("ta ahlah angiin suragch bainashdee")
//   } else if (age > 6) {
//     console.log("ta dund yumuu baga angiin suragch bainashdee")
//   } else {
//     console.log(" uuchlaarai harij kaashaa uu surguulid oroogvi jaahan hvvhed bainashdee ji");
//   }
// } else {
//     alert("hoooe bisda mine too oruul geed baigaa yum bishvv!!!")
// }
// /////////////////////////////--( END DUUSAW)--///////////////////////////////////
//
//
//
// /////////////////////////////--( boolean logic and or)-- //

// var dun = prompt("Tanii dun hed we");
// var hahuulMongo = prompt("Heden togrognii hahuul mongo ogoh we?");
// var hamaatan = prompt("Ta manai hamaatan monvv");
// var Taalagddag = prompt("Nadad taalagddag hamaatan monvv ?");

// if(
//     dun > 95 ||
//     hahuulMongo > 500000 ||
//     (hamaatan == true && Taalagddag == true)
// ) {
//     alert("Ta A avlaa")
// } else {
//     alert("Uuchlaarai ta A awch chadahgvi")
// }
// /////////////////////////////--( END DUUSAW)--////////////////////////////////////
//
//
//
// /////////////////////////////--( gurvalsan operator )--///////////////////////////
// var name = 'Saranceceg';
// var age = 18;

// var who = age >= 18 ? 'tom hvn' : 'hvvhed';
// console.log(who)
//  ////ene gurwalsan operatoriin bichigleliig ooroor bichwel ingej bichne// 
//  if(age >= 18 ){
//     var who = 'tom hvn';
//  } else {
//     var who = 'hvvhed'
//  } console.log(who)
// /////////////////////////////--( END DUUSAW)--////////////////////////////////////
//
//
//
// /////////////////////////////--(switch operator(name&job)--//////////////////////
// var name = "naraa";
// var job = "programmist";

// if(job === "bagsh"){
//     console.log( name + " bol hvvhdvvded hicheel zaadag. ")
// } else if(job === "zuraach"){
//     console.log(name + " bol goe zurag zurdag");
// } else if(job === "programmist"){
//     console.log(name +" bol web program zohiogch")
// } else{
//     console.log(name + " bol oor yamar neg ajil hiideg yum baina. bvv med")}
//  //////////////////--( deer baigaa code iig odoo ene door switch operatoroor bichnee )-- ////////////////////

// switch(job){
// case "bagsh" : console.log( name + " bol hvvhdvvded hicheel zaadag" ); break;
// case "zuraach" : console.log( name + " bol goe zurag zurdag"); break;
// case "programmist" : console.log( name + " bol web program zohiogch yum"); break;
// default: console.log(name + " bol oor yamar neg ajil hiideg yum baina bvv med");
// }
//                    ////////  --( switch operator(dvn&surlaga) )-- //////////    
//                    var avgDun = 95;
//                    if( avgDun >= 90){
//                     console.log(name + " bol onts surlagatan");
//                    } else if(avgDun < 90 && avgDun >= 80 ) {
//                     console.log( name + " bol sain surlagatan")
//                    } else if( avgDun < 80 && avgDun >= 70) {
//                     console.log( name + " bol dund surlagatan");
//                    } else {
//                     console.log( name + " bol muu surlagatan")
//                    }

// switch(true){
// case avgDun >= 90 : console.log(name + " bol onts surlagatan"); break;
// case avgDun < 90 && avgDun >= 80 : console.log( name + " bol sain surlagatan");break;
// case avgDun < 80 && avgDun >= 70 : console.log( name + " bol dund surlagatan");
// break;
// default : console.log( name + " bol muu surlagatan");
// }
////////////////////////////////--( END DUUSAW)--//////////////////////////////////



// /////////////////////////////--(function)--//////////////////////////////////
///////// function medeelel(name, job, avgDun) {
////////   console.log("this is function");
////////   console.log("function ashiglaj bid davhardsan vildliig hyalbarchildag")
//////// }
// function medeelel(name, job, avgDun) {
  
// switch (job) {
// case "teacher" : console.log(name + " is teacher"); 
// console.log(name + " teaches lesson to kids");break;
// case "artist" : console.log(name + " is artist")
// console.log(name + " draws pictures");break;
// case "developer" : console.log(name + " is web developer");
// console.log(name + " develops web sites");break;
// default: console.log(name + " i do not know wheter he or she works or not");
// }
// switch (true){
//   case avgDun >= 90: console.log(name + " Grade is A");break;
//   case avgDun < 90 && avgDun >= 80: console.log(name +" grade is B");break;
//   case avgDun < 80 && avgDun >= 70: console.log(name +" grade is C");break;
//   default: console.log(name + " grade is F")
// }}
// medeelel('dorj', 'developer', 95);
// medeelel('sodoo', 'teacher', 85);
// medeelel('nandia', 'artist', 75);
// medeelel('saikhnaa', 'arkhichin', 50);
////////////////////////////////--( END DUUSAW)--//////////////////////////////////



///////////////////////--(function statement&&expression)--////////////////////////
//// Toonii moduliig heldeg function
//// |-15| = 15, |23| = 23


// ////expression bichiglel
// var module = function(too){
// var mod;
// if( too < 0) mod = -too;
// else mod = too;
// return mod;
// };

// ////statement bichiglel
// function mod(too){
//     console.log("Statement function ajillaa..." + number);
// };

// var addModules = function(x, y, z) {
//     var niilber = module(x) + module(y) + module(z);
//     return niilber;
// };

// var sum = addModules(-1, -2, -3) + addModules(-100, 200, -300);
// console.log(sum);

////////////////////////////////--( END DUUSAW)--//////////////////////////////////



//////////////////////////////--( Object-n function )--/////////////////////////////
//// object zarlana
// var h1 = {
//     name : "Balchindorj",
//     job: "Developer",
//     hobbi: "Read a book",
//     address: {
//         location: "SBD, 9horoo, 296-31",
//         city: "Ulaanbaatar",
//         country: "Mongol"
//     }
// }

// var h2 = {
//     name : "Nandinerdene",
//     job : "Doctor",
//     hobbi : "facebook",
//     address: {
//         location: "SBD, 9horoo, 296-31",
//         city: "Ulaanbaatar",
//         country: "Mongol"
//     }
// }

// console.log(h1.job + " mergejiltei " + h1.name + "-in hobbi ni " + h1.hobbi +" ym")
// console.log(h2.job + " mergejiltei " + h2.name + "-in hobbi ni " + h2.hobbi +" ym")

// var c1 = {
//     name : "Javascript heliig ehnees ni duustal!",
//     lessonCount: 116,
//     totalMin: 904,
//     author: h1,
//     price: 199000,
//     discount: 26900,

//     information: function() {
//         console.log('\n\n' + this.author.address.location + "-d amidardag " + this.name + "-iin 2019ond gargasan " + this.name + " surgalt ni " + this.price + " togrogiin vnetei bolowch yag odoogoor " +this.discount + " bolj hyamdarsan baina!")
//     },
//     computerHour: function(){
//         return Math.round(this.totalMin/60)
//     },

//     computerMin: function(){
//         return this.totalMin % 60;
//     }
// };

// var c2 = {
//     name : "HTML, CSS ehnees ni duustal!",
//     lessonCount: 128,
//     totalMin: 1217,
//     author: h2 ,
//     price: 146000,
//     discount: 26900,

//     information: function() {
//         console.log('\n\n' + this.author.address.location + "-d amidardag " + this.name + "-iin 2019ond gargasan "
//         + this.name + " surgalt ni " + this.price + " togrogiin vnetei bolowch yag odoogoor " +this.discount + " bolj hyamdarsan baina!")
//     },
//     computerHour: function(){
//         return Math.round(this.totalMin/60)
//     },

//     computerMin: function(){
//         return this.totalMin % 60;
//     }
// };
// // c1.information();
// // c2.information();
// console.log(c2.name + " surgalt ni " + c2.computerHour() + " tsag " + c2.computerMin() + " min videotoi " );
// console.log(c1.name + " surgalt ni " + c1.computerHour() + " tsag " + c1.computerMin() + " min videotoi " );
// console.log(c1.computerHour() + c2.computerHour() + " tsag " + (c1.computerMin() + c2.computerMin()) + " minut " )
///////////c2.name gej handhaas gadna c2.[name] gej handaj bolno
////////////////////////////////--( END DUUSAW)--//////////////////////////////////



/////////////////////////--(massive-pop, push, shift, unshift, length функцүүд)--///////////////////////
// var helnuud = [" Javascript ", "php", "c#", "python",];
// helnuud[1] = "Golang";
// helnuud[4] = "c++"; ////mas index 0-s eheldeg uchir 3index baisan ch 4 deh elementig ingej nemsen
// helnuud[helnuud.length] = "assembler"; ////massive.length-g ashiglan hamgiin svvlees ahin neg hel nemsen
// console.log(helnuud[3]);
// console.log(helnuud.length + " shirheg hel baina");
// helnuud.unshift("perl"); ////urd tald ni element nemne
// helnuud.shift();         ////urd talaas ni element ustgadag ustgahdaa butsaadag
// helnuud.push("Django")   ////araas ni element nemeh
// console.log(helnuud);
// console.log(helnuud[helnuud.length-1]) ////hamgiin svvliin elementiig songoj hewleh arga
// console.log(helnuud.pop()); ////hamgin svvliin element shuud hewleh arga amar arga
// console.log(helnuud.indexOf('python')) ////elementiig olj indexiig ni hewlene
////////////////////////////////--( END DUUSAW)--//////////////////////////////////



/////////////////////////--([massive=array])-slice,splice,function,graphic)--/////////////////////////
// var m = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
// 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// //// m.splice(0, 3) ////2too oruulna ehnii too teddvgeer indexees hoish 2 dah too teden shirheg ustgahig helne
// //// console.log(m)
// var x = m.slice(0, 4); ////2too oruulna ehniihn teddeh indexiig awna 2 dah ni teddeh element hvrtel gehdee ene vildel ni indexvvdiig ustgahgvi bogood zowhon awj haruulah bolno
// console.log(x)


// var course = {
//     name : "Javascript heliig ehnees ni duustal",
//     price: 199000,
//     lessons: [ {
//         name : "Энэ сургалтаар бид юу сурч эзэмших вэ!",
//         length: '11:18'
//     },
//     {
//         name : "Javascript хэл үүссэн түүх, хөгжлийн явц, броузерийн дайн, Ecmascript стандарт",
//         length : '32:08'
//     },
// ]
// }
// console.log(course.name + " surgaltiin vne " + course.price + " togrogiin vnetei baina");
////////////////////////////////--( END DUUSAW)--//////////////////////////////////



////////////////////////////////////////////--(for-dawtalt)--//////////////////////////////////////////
// for(var i = 0; i <= 10; i ++){
// console.log(i);
// var s = 0;
// for (var j = 1; j <= i; j++ ){
//     s = s + j;
// }
// console.log("s " + i + " hvrtelh toonuudiin niilber : " +s )
// }
//////////////////////////////////////////--( END DUUSAW)--//////////////////////////////////////////



///////////////////////////////////////--(while, do while dawtalt)--/////////////////////////////////////
//// 2 torliin dawtalt baigaa 1 ni hezee duusah ni todorhoi dawtalt
//// 1 ni hezee duusah ni todorhoigvi dawtalt
//// while dawtalt ni ene nohtsol vnen bol dawt gesen utgatai dawtaad l baina
////doorh code 1000 hvrtel dawtaad l baina
// var i = 1;
// while ( i <= 1000){
//     console.log(i);
//     i = i + 1;
// }

// var command = " " ;

// while (command !== "quit" ){
//     command = prompt(" enter your command ");
//     alert("Sunialaa")
// }
// console.log("Za bayartai")

// var command = " ";
// do {
//     command = prompt(" tsaashaa suniahuu ");
//     alert(" Sunialaa... ");
// } while (command !== "odoo bolno");
// console.log("Za bayrtai!");

//////////////////////////////////////////--( END DUUSAW)--//////////////////////////////////////////



/////////////////////////--(dawtalt-n break, continue operatoruudaar udirdah)--///////////////////////
// var too = [12, 13, 17, 90, 21, 65, 32, 14];

// for (var i = 0; i < too.length; i++){
//     if ( too[i] % 7 !== 0 ) continue;
//     console.log(too[i]);
// }

// var too = [12, 13, 17, 90, 21, 65, 32, 14];

// for (var i = 0; i < too.length; i++){
//     if ( too[i] % 7 !== 0 ) continue;
//     console.log(too[i] + " ene too 7-d huwaagdana.");
//     var huvaasanToo = too[i] / 7;
//     console.log(too[i] + " toog 7-d huwaahad " + huvaasanToo + " garna ");
//     console.log(" kvadrat ni : " + huvaasanToo **2 )
//     break
// }

//////////////////////////////////////////--( END DUUSAW)--//////////////////////////////////////////



/////////////////////////--(Zaalt utga olgolt bolon damjuulalt)--///////////////////////
//// primitive vs Object
// var a = 12;    // a ===> 12 gej vvrend hadgalah ildel
// var b = a;     // b ===> 12 gej vvrend hadgalah ildel
// a = 13;        // a ===> 13 gej vvrend hadgalahad b-n utga oorchlgdq
// console.log("a = : " + a )
// console.log("b = : " + b )

// //// reference{ bol utgaa 1 vvrend hamt hadgaldag
// var p1 = {
//     name : 'notebook',
//     price: '300$'
// };
// var p2 = p1;
// p2.price = '100$';
// console.log(" p1 = : " + p1.name + ', ' + p1.price);
// console.log(" p2 = : " + p2.name + ', ' + p2.price);
//// reference iin ehnii jishee end duusaw }

// var name = ' notebook ';
// var price = 1200000;

// info(name, price);

// console.log(name + ' product price is : ' + price);

// function info(name, price) {
//     console.log(name + ' nertei bvteegdehvvn ' + price + ' vnetei baisnaa ' + (price - 100000) + ' bolj hyamdarlaa')
// }


// var product = {
//     name : 'shoe',
//     price : ' 15000 '
// }
// infoNew(product);
// console.log(product.name + ' bvteegdehvvnii vne : ' + product.price );

// function infoNew(p){
//     console.log(p.name + ' nertei bvteegdehvvn ' + p.price + ' vnetei baisnaa ');
//     p.price = p.price - 11000;
//     console.log(p.price + ' vnetei bolj hyamdarlaa')
// }
//// primitive bolon object gesen 2 ogogdliin torol baina primitive ogodliin torol ni utga damjuulahdaa ooriin utgiin huulbariig ilgeedeg uchraas huulbardeer oorchlolt hiihed vndsen utga oorchlogddoggvi bol object buyu objectiin utguudiig oorchlohod vndsen utga ni dawhar oorchlogddog uchiraas anhaarah ni zvitei object ni massive ch baij bno
//////////////////////////////////////////--( END DUUSAW)--//////////////////////////////////////////



/////////////////////////--( Хувьсагчийн төрлийг шалгах, typeof)--///////////////////////
var x = '123';
var y = 123;

var  b = true;
var  c = {};

c.location = 'ub';
c.coordinate = 123321;

console.log(c)

var d = [];

d.push(234);

console.log(d)