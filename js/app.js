$(document).ready(function(){
    var cats = [
        {
            'name': 'Gato 1',
            'pic': 'images/cat-1.jpg',
            'counter': 0
        },
        {
            'name': 'Gato 2',
            'pic': 'images/cat-2.jpg',
            'counter': 0
        },
        {
            'name': 'Gato 3',
            'pic': 'images/cat-3.jpg',
            'counter': 0
        },
        {
            'name': 'Gato 4',
            'pic': 'images/cat-4.jpg',
            'counter': 0
        },
        {
            'name': 'Gato 5',
            'pic': 'images/cat-5.jpg',
            'counter': 0
        }
    ];

    var catStructure = '<div class="panel panel-default"><div class="panel-body"><h2 class="cat-name">%catname%</h2> <img class="cat-picture" src="%catpicture%" alt="%catname%"/> <div class="counter">%counter%</div> </div> </div>';

    // List
    for(var cat in cats){

        var elem = document.createElement('li');
        elem.textContent = cats[cat].name;

        elem.addEventListener('click', (function(currentCat) {
            return function() {
                var withName = catStructure.replace("%catname%", currentCat.name);
                var withPic = withName.replace("%catpicture%", currentCat.pic);
                var cat = withPic.replace("%counter%", currentCat.counter);

                $(".cat").html(cat);
            };
        })(cats[cat]));

        $("#cat-list").append(elem);
    }
});