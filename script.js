let score = prompt("Enter your score :");
if(score>= 90 && score<=100){
    alert("Your grade is A+");

    console.log("Your grade is A+");
}
else if(score>100){
    alert("Invalid score");
}
else if(score>=80 && score<=90){
    alert("Your grade is A");
    console.log("Your grade is A");
}
else if(score>=70 && score<=80){
    alert("Your grade is B");

    console.log("Your grade is B");
}
else if(score>=60 && score<=70){
    alert("Your grade is C");

    console.log("Your grade is C");
}
else if(score<=60){
    alert("Your grade is D");

    console.log("Your grade is D");
}
