// var / let / const

//var-y uni blokayin tesaneliutyun ev blokayinic durs tesaneliutyun orinak
if(true){
    var a = 2
}
console.log(a);
2

//ev mek orinak evs erb hostingy tanum e verev
console.log(x);
var x = 5
//js-y ayspes e kardum
var x;
console.log(x)
x = 5
//ayspes undefiend e tpelu bayc i tarberutyun mnacac popoxaknaeri na tesnum e vor trvac e mer x-y bayc trvac che arjeqy

//let-y durs e ekel es6-um ev nra tarberutyun e vor orinak
//let-y uni miayn blokayin tesaneliutyun
if(true){
    let a = 2
}
console.log(a);//ReferenceError: a is not defined
//isk hostingy chi bardzracnum verev
console.log(x);
let x = 5

//const-y chi popxum ir arjeqy nuynpes uni miayn blokayin tesaneliutyun
//bayc erb menq const-um haytararum enq object/array menq chenq karox poxel hxumy/hascen bayc nersi tvyalnery karox enq poxel orinak
const y = {name: "Edo"}
y.name = "Ed" 
//ayspes kashxati vorovhetev es popoxum em tvyaly
//isk ayspes voch
name = {name: "ed777"}

//data types
//tipery linum en primitiv ev obyektayin
//parz tiper parzen ayn tipery voronq irenc mej chen nerarum ayl tiper

string = "text"
number = 2342345
boolean = true/false
null = null
undefiend = undefiend

//obyektayin
obj = {name: "sdasdf"} //object
array = [1,2]//object
regexp = /[A-Z]/g // object
function = function name(){}//object ----------------------------------->>>>>>>> typeof function, սա վերադարձնում է function
// բայց ֆւնկցիա տիպ չկա, սա օբյեկտ է














// Էդ ջան ընդհանուր ок ա, բայց նայի երբ որ ուզում ես ցույց տաս ինչ որ տիպ արա սենց
// var կամ let կամ const անուն ու արժեք։ Հիմա փոփոխական հայտարարելու տողը կթարգմանեմ որ ավելի լավ հասկանաս
// Օրինակ՝

var someVariable = 'Սա տող տիպի փոփոխական է';
// Առաջին հերթին սա ինստրուկցիա է
// var սա հանդիսանում է keyword ( բանալի բառ ), var-ը և մնացած բոլոր բանալի բառերը չի կարելի է օգտագործել որպես փոփոխականի անուն
// չէս կարող գրել let var = 10;
// someVariable սա իդենտիֆիկատոր է, իդենտիֆիկատորը չի կարող սկսել թվով և չի կարող լինել բանալի բառ
// հավասարի նշան, սա հանդիսանում է վերագրման օպերատոր, սա չի հանդիսանում մաթեմատիկական հավասարի նշան
// վերագրման օպերատորը ունի երկու պարտադիր ( օպերանդ էս բառը կարող ա լավ չհիշեմ )
// այսինքն վերագրման օպերատոր ձախ մասում պետք է լինի իդենտիֆիկատորը, իսկ աջ մասում լիտերալը
// լիտերալ 'Սա տող տիպի փոփոխական է', սա իրենից ներկայացնում է արժեք, օր. null, true, 10, '10', [], և այլն
// կետ ստորակետ, օպերատոր, սա նշանակում է ինստրուկցիայի ավարտ

// 1. instruction
// 2. keyword
// 3. identifier
// 4. assign operator
// 5. literal
// 6. ; operator


// այսինքն այս տողի մեջ 
var someVariable2 = 'Սա տող տիպի փոփոխական է';
// տեղի է ունենում վերը նշված գործողությունները


// sorax-ի վիդեոն ուղարկել եմ messenger-ով, դա անպայման նայի

// primitive
var myStr = 'some string';
var myNum = 10;
var myBool = true;
var myNull = null;
var mySym = Symbol();
var myUndef = undefined;
var myBigNum = BigInt(Number.MAX_SAFE_INTEGER);

// referance
var myArr = [];
var myObj = {};
var myFunc = function() {};
var myReg = /\d+/g;

