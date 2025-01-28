var numberOfButtons = document.querySelectorAll(".drum").length;

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}

function switchCaseCheck(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(key); // This should now show the correct key
    }

}

document.addEventListener("keydown",function (event){
    

    switchCaseCheck(event.key);
    
    buttonAnimation(event.key);
})


for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML; 
        switchCaseCheck(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
    

}
