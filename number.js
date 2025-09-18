// number որպես տիպ, իրա մեթոդները ու ինչ կարաս անես.



//numbery tvayin tip e nra amena cacr tivy js-um -2(53)-astichan ev amenabardzry 2(53)-astichan
let n = new Number(2345.0)
//sa mer constructorne vory veradardznum e object
console.log(typeof n);
//kan mi qani methodner
console.log(n.toFixed(2))//sa mez veradardznum e te mer storaketic heto qani 0 lini
console.log(n.toExponential(2))
//2.35e+3
//unenq ayspisi operatorner
let i = 5
console.log(++i);//(++)-y bardzracnum e mer arjeqin 1 ov
//6
console.log(i++)//nuynel aystex
console.log(--i);
console.log(i--);
//4
//ays operatornenernel mez lav canoten matematikayic
console.log(i - 4);//1
console.log(i + 4);//9
console.log(i * 4);//20
console.log(i / 4);//1.25
console.log(i % 4);//sa mez veradardznum e mnacordy// 1

console.log(i = 3)//sa veragrumne
console.log(i == "3");//sa karelie e asel vor mer havasarn e bayc na xist chi stugum ev chi hamematum irenc tipery
//true
console.log(i === "3")//number != string
//false
console.log(i === 3);
//true

//unenq nayev ayspisi operatorner
console.log(i += 15)
//ays erkusnel veradardznum en nuyn arjeqy bayc mer verevini dzevov aveli karch e ev harmar
console.log(i === i + 15)
console.log(i -= 15)
console.log(i *= 15)
console.log(i /= 15)
console.log(i %= 15)

//sranq mez veradardznum en boolean tipi arjeqner
console.log(i > 6)//false
console.log(i < 7)//true
console.log(i >= 7)//false
console.log(i <= 7)//true



//numbery uni math methodner vori shnoriv mer tvayin arjeqnery aveli ckun ev harmar enq karoxanum dardznel
console.log(Math.pow(2,3));//mez veradarcnum mer skzbum nshvac arjeqy bardzracra mer hajord nshvac arjeqy orinak(xorhanard)
//8
console.log(Math.sqrt(144))//armat e hanum
//12
console.log(Math.max(2,5,1234,134612345,123));//veradardznum e mer njvac arjeqneri mijic tvov amena bardzrin
//134612345
console.log(Math.min(3,56,1,7,54));///veradardznum e mer njvac arjeqneri mijic tvov amena poqrin
//1
console.log(Math.PI);//sranq kareli e asel mer hastatunernen mecatar en grvum vorovhetev mer constanterin(hastatunerin) sovor enq mecatarov grel
console.log(Math.E);
//Math uni aveli shat methodner


