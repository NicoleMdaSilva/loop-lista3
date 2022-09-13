let num = 0
let op
let age = 0
//Gender
let sex = 0

//Emotion
let emotion
let calm = 0
//Total
let femNervous = 0
let maleAggre = 0
let otherCalm = 0
let nervous40 = 0
let calm18 = 0


while(num < 3){
    num ++
    age = (parseInt(prompt('Type your age: ')));
    sex = (parseInt(prompt('What is your gender? \n\n1-Male \n2- Female \n3- Other')));
    emotion = parseInt(prompt('You are a: \n1-Calm \n2-Nervous \n3-Aggressive'));
    if(emotion == 1){
        calm++
    }
    else if(sex == 2 && emotion == 2){
        femNervous++
    }
    else if(sex == 1 && emotion == 3){
        maleAggre++
    }
    else if(sex == 3 && emotion == 1){
        otherCalm++
    }
    if(age > 40 && emotion == 2){
        nervous40++
    }
    else if(age < 18 && emotion == 1){
        calm18++
    }
}
document.write(`There's in total ${calm} calm people`);
document.write(`<br>There's in total ${femNervous} womans nervous`);
document.write(`<br>There's in total ${maleAggre} agressive mans`);
document.write(`<br>There's in total ${otherCalm} others calm`);
document.write(`<br>There's in total ${nervous40} nervous people above 40 years old`);
document.write(`<br>There's in total ${calm18} calm people less 18 years old`);

