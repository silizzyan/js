//string-y vorpes tip string(tox) e 
let str = "text text text"
//string-y karox e linel ayspisi gciknerov ev ayspisi
let text2 = 'text text text'
//terberutyun chka ev karox en irenq irar mej nerarvel
let str2 = "text 'text' text"
console.log(str);
//text 'text' text //nuynel hakarak
//ayspes chi karox linel vorovhetev parsery kardalu jamank kkarda vor gciknery bacvecin isk heto pakvecin ev mnacacy kardalu jamank error ktpi
let str3 = "text "text" text"//error
//menq unen back slash \ na mez tuyl e talis ayspes grel
let str4 = "text \"text\" text"
console.log(str4);
//text "text" text
//evs mi qani hnaravorutyun back slashov
let str5 = "erb menq 
uzenanq toxadarc
anel" 
//jsy mez error ktpi
//
let str6 = "ayspes\
chisht\
kashxati"//shat karevor e vor slashic heto prabel chlini teche kody chi ashxati
//karox enq nayev ayspes nor toxic sksel
let newLine = "back \n nshanakum \n new line"
//stringy uni methodner
//aveli shat ogtagorcvox methonder en
console.log(str.charAt(3));//veradardznum et tvyal nshvac indexov toxy
//t
console.log(str.length);//veradardznum e mer symbol-neri qanaky
//14
console.log(str.substring(3,8));//subsrtring methody mez veradardznuma vor toxic sksac minchev mer nshvac tox
//t tex
console.log(str.slice(-3),"adsf");//karelie asel vor anum e ayn ameny inch substringy bayc i tarberutyun substringi menq karox enq verjic ganq aysiqnn ayspes
//ext
console.log(str.substr(3,4));//ays funkciayov asum enq te vortexic sksac tpi ev dranic heto qani symbol tpi
//t tex
console.log(str.split(" ").join("-"));//ays methodovel bajanume qanakutyamb//isk join funkcian asum e te prabeli texy inch lini
//[text, text, text]
//[text-text-text]
console.log(str.indexOf("x"));//ays funkcian mez logum tpum e mer nshvac tari indexy (araji patahac tari)
//2
console.log(str.lastIndexOf("x"));//tpum e verjic
//12
console.log(str.replace(" ","-"))//poxum e ararjin handipac symboly mer nshvacov
//text-text text
console.log(str.toLowerCase());//sarqum e bolorin poqratar
console.log(str.toUpperCase());//sarqum e bolorin meacatar

//ECMAscript 5-ic sksac menq karox enq charAt i poxaren ogtagorcel zangvaci method ev stanal indexy
console.log(str[7]);
//x









