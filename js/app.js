$(document).ready(function(){
    var counterCatOne = 0, counterCatTwo = 0;

    $("section#game div.cat:nth-child(1)").click(function(){
        counterCatOne++;
        $("section#game div.cat:nth-child(1) div.counter").html(counterCatOne);
    });

    $("section#game div.cat:nth-child(2)").click(function(){
        counterCatTwo++;
        $("section#game div.cat:nth-child(2) div.counter").html(counterCatTwo);
    });
});