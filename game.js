var gamePattern = [];

var buttonColor = ["red","blue","green","yellow"];

var userClickedPattern = []; 

var level = 0;
var started = false;

$("body").on("keypress",function(event){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        }
});

$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

    });


    function checkAnswer (currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    
            
            if (userClickedPattern.length === gamePattern.length){
    
                
                setTimeout(function () {
                  nextSequence();
                }, 1000);
            }
              }
              else {
    
                playSound("wrong");
                
                $("body").addClass("game-over");
    
                setTimeout (function () {
                    $("body").removeClass("game-over");
            
                },200);
    
                $("#level-title").text("Game Over, Press Any Key to Restart");
    
    
                startOver();
    
                
              }
        
        
    }
    

function nextSequence() {

    userClickedPattern = [];

    level++;

    $("level-title").text("level "+level);

    var randomNumber = Math.floor(Math.random()*4);

   var randomChosenColour = buttonColor[randomNumber];

   gamePattern.push(randomChosenColour);


   $("#"+nextSequence()).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColour);


  
};

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
   audio.play();
};

function animatePress(currentColour) {

   
    $("#"+currentColour).addClass("pressed");
    
    setTimeout (function () {
        $("#"+currentColour).removeClass("pressed");

    },100);
};


function startOver(){
    level = 0;
    gamePattern = [];
    pressed = false;
  }