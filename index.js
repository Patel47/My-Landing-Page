const time = document.getElementById("time"),
  greet = document.getElementById("greet"),
  nm = document.getElementById("nm"),
  goal = document.getElementById("goal");

function showTime(){
    let today = new Date(),
      hours = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

    //   set Am or Pm
    const ampm = hours >= 12? 'PM':'AM';

    hours = hours % 12 || 12;

    time.innerHTML = `${hours}<span> : </span> ${addZero(min)}<span> : </span> ${addZero(sec)}<span> </span> ${ampm}`;

    setTimeout(showTime, 1000);
    
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0':'') + n;
}

//Set background and greeting
function setBgAndGreeting(){
    let time = new Date(),
      hour = time.getHours();
    
    if(hour < 12){
        //Morning
        bg = document.body.style;
        bg.backgroundImage = "url('morning.jpg')";
        bg.backgroundSize="cover";
        greet.textContent = 'Good Morning';
    }
    else if(hour < 18){
        //Afternoon
        bg = document.body.style;
        bg.backgroundImage = "url('afternoon3.jpg')";
        bg.backgroundSize="cover";
        greet.textContent = 'Good Afternoon';

       
    }
    else{
        //Evening
        bg = document.body.style;
        bg.backgroundImage = "url('night2.jpg')";
        bg.backgroundSize="cover";
        bg.color="white";
        
        greet.textContent = 'Good Evening';
    }

}

//Get Name
function getName(){
    if(localStorage.getItem("nm") === null){
        nm.textContent = '[Enter Name]';
    }
    else{
        nm.textContent = localStorage.getItem('nm');
    }

}

//Set Name
function setName(k){
    if(k.type === "keypress"){
        if(k.which == 13 || k.keyCode == 13){
            localStorage.setItem('nm', k.target.innerText);
            nm.blur();
        }
    }
    else{
        localStorage.setItem('nm', k.target.innerText);

    }
}

//Get Goal
function getGoal(){
    if(localStorage.getItem("goal") === null){
        goal.textContent = '[Enter Goal]';
    }
    else{
        goal.textContent = localStorage.getItem('goal');
    }

}

//set Goal
function setGoal(k){
    if(k.type === "keypress"){
        if(k.which == 13 || k.keyCode == 13){
            localStorage.setItem('goal', k.target.innerText);
            goal.blur();
        }
    }
    else{
        localStorage.setItem('goal', k.target.innerText);

    }
}

nm.addEventListener('keypress', setName);
nm.addEventListener('blur', setName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);

showTime();
setBgAndGreeting();
getName();
getGoal();