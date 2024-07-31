let score = prompt("Enter your score :");
if(score>= 90 && score<=100){
    console.log("Your grade is A+");
}
else if(score>100){
    alert("Invalid score");
}
else if(score>=80 && score<=90){
    console.log("Your grade is A");
}
else if(score>=70 && score<=80){
    console.log("Your grade is B");
}
else if(score>=60 && score<=70){
    console.log("Your grade is C");
}
else if(score<=60){
    console.log("Your grade is D");
}