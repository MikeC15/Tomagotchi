class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 1;
        this.boredom = 1;
        this.sleepiness = 1;
    }
    die(clear){
       //ends game 
       clearInterval(clear);
       alert(`You let ${this.name} die! How could you, you monster!!`);
       location.reload();
       

    }
    hungrier(){
        this.hunger++;
        //display on DOM
    }
    moreBored(){
        this.boredom++;
        //display onDOM
    }
    sleepier(){
        this.sleepiness++;
        //display on DOM
    }
};
const emperor = new Tomagotchi("emperor");



//START GAME
const startAging = () => {
    // age increases
    // timer for game and increment hunger etx
    //evolve image at certain age
    const interval = setInterval(() => {
        emperor.age++;
        $(".sideText0").text(`Age: ${emperor.age}`)
    },5000);

    const intFood = setInterval(() => {
        emperor.hunger++;
        $(".sideText1").text(`Hunger: ${emperor.hunger}`)
        if(emperor.hunger === 10){
            $("#Tom").css("transform", "rotate(270deg)");
            emperor.die(intFood);
            // clearInterval(intFood);
        }
    }, 2000);
    const intGame = setInterval(() => {
        emperor.boredom++;
        $(".sideText2").text(`Boredom: ${emperor.boredom}`)
        if(emperor.boredom === 10){
            $("#Tom").css("transform", "rotate(270deg)");
            emperor.die(intGame);
            // clearInterval(intGame);
        }
    }, 3500);
    const intSleep = setInterval(() => {
        emperor.sleepiness++;
        $(".sideText3").text(`Sleepiness: ${emperor.sleepiness}`)
        if(emperor.sleepiness === 10){
            $("#Tom").css("transform", "rotate(270deg)");
            emperor.die(intSleep);
            // clearInterval(intSleep);
        }
    }, 4000);
};



//button click to name pet
const storeName = () => {
    const input = $("#userInput").val();
    emperor.name = input;
    $(".form").empty();
    $(".form").append(`<h1>${emperor.name} was born! Keep ${emperor.name} alive.</h1>`).css("margin-top", "-30px");
    $(".tom").css("display", "block");
    
    $(".tom").animate({ left: "1200" }, 5000);
    
    // $(".tom").toggle({direction: "right"}, 2000)

    // $("#Tom").toggle(function(){
    //     $("#Tom").animate({left:"1200"}, 2000)
    // }//, function(){
    // //     $("#Tom").animate({left:"1200"}, 2000)
    // // });

    startAging();
}
$("#submitButton").on("click", storeName);




//animate pet across screen
//KILL PET BUTTON USES SAME FUNCTION AS WEHN at 10 stat, ON KILL ROTATE PICTURE 90 degrees and stop animation

//ANIMATE FLAMES??



//PUTS hand on hover next to menu items
$("#feedMe").hover(
    function() {
        const add = $("<img src='img/Thand.gif'/>");
        add.css("height", "20px");
        add.attr("id", "imgHand")
        $(".feed").prepend($(add));
    }, function() {
        $('.feed').find("img").first().remove();
    }
)
$("#playGame").hover(
    function () {
        const add = $("<img src='img/Thand.gif'/>");
        add.css("height", "20px");
        add.attr("id", "imgHand")
        $(".play").prepend($(add));
    }, function () {
        $('.play').find("img").first().remove();
    }
)
$("#sleepTime").hover(
    function () {
        const add = $("<img src='img/Thand.gif'/>");
        add.css("height", "20px");
        add.attr("id", "imgHand")
        $(".sleep").prepend($(add));
    }, function () {
        $('.sleep').find("img").first().remove();
    }
)
$("#killMe").hover(
    function () {
        const add = $("<img src='img/Thand.gif'/>");
        add.css("height", "20px");
        add.attr("id", "imgHand")
        $(".kill").prepend($(add));
    }, function () {
        $('.kill').find("img").first().remove();
    }
)

//Bottom buttons click to decrease
$("#feedMe").on("click", ()=>{
    if(emperor.hunger > 0){
    emperor.hunger--;
    }
    $(".sideText1").text(`Hunger: ${emperor.hunger}`)
});

$("#playGame").on("click", () => {
    if(emperor.boredom > 0){
    emperor.boredom--;
    }
    $(".sideText2").text(`Boredom: ${emperor.boredom}`)
});

$("#sleepTime").on("click", () => {
    if(emperor.sleepiness > 0){
    emperor.sleepiness--;
    }
    $(".sideText3").text(`Sleepiness: ${emperor.sleepiness}`)
});

$("#killMe").on("click", () => {
    emperor.die();
});
