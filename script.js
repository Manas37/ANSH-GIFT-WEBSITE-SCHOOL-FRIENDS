
function go() {
    var validRolls = [20, 15, 13, 19, 3, 35, 34, 31, 42];
    var roll = Number(prompt("Enter the roll number to find the student"));

    if (isNaN(roll)) {
        alert("Please write the roll number as a number, not text.");
        return;
    } 

    if (!validRolls.includes(roll)) {
        alert("Roll number is not in this group.");
        return;
    }

    var infoHTML = '';

    switch(roll) {
        case 20:
            infoHTML = "Name : Manas Kumar Mishra<br>Age:11<br>Favourite subject: Computer<br>Skills: CODING , ART";
            break;
        case 15:
            infoHTML = "Name : Atharva kashyap<br>Age:12<br>Favourite subject: Mathematics<br>Skills: Maths problem solving";
            break;
        case 13:
            infoHTML = "Name : Apeksha keshri<br>Age:10<br>Favourite subject:NOT REVEALED<br>Skills: TOPS IN EVERY BATCH";
            break;
        case 19:
            infoHTML = "Name : Lakshya Saini<br>Age:11<br>Favourite subject: English<br>Skills: THERE IS NO SKILLS";
            break;
        case 3:
            infoHTML = "Name : Aditi kumari<br>Age: NOT REVEALED<br>Favourite subject: DON'T KNOW<br>Skills: SINGING,ART";
            break;
        case 35:
            infoHTML = "Name : Ansh singh<br>Age:11<br>Favourite subject: not knowing<br>Skills: Roasting";
            break;
        case 34:
            infoHTML = "Name : Aarush <br>Age:11<br>Favourite subject: DON'T KNOW<br>Skills: TALKING ABOUT GODZILLA";
            break;
        case 31:
            infoHTML = "Name : Shaswat srivastava<br>Age:11<br>Favourite subject: DON'T KNOW<br>Skills: ART&CRAFT";
            break;
        case 42:
            infoHTML = "Name : Aryan srivastava<br>Age:11<br>Favourite subject: COMPUTER<br>Skills: MACHINE LEARNING";
            break;
    }

    var studentInfo = document.getElementById('studentInfo');
    studentInfo.style.opacity = 0;
    studentInfo.innerHTML = `<h2>Student Information</h2><p>${infoHTML}</p>`;
    setTimeout(function() { studentInfo.style.opacity = 1; }, 10);
}