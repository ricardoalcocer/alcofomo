// base text template
var bubbleText = "<b>[NAME]</b> descargó <br/><b>[ITEM]</b> desde <b>[COUNTRY]</b><br/>hace [MINUTES] minutos."

// get div
var x = document.getElementById("bubble");

// start running
setInterval(function(){
  showPopUp(bubbleText,4000); // if this number is changed, the same change needs to be made on the css
},10000)


// hide popup
function hide(){
    x.className = x.className.replace("show", "");
}

// show the popup for n seconds
function showPopUp(textTPL,n){
    var theText = personalize(textTPL,getPersonName(),getItem(),getCountry(),getMinutes());
    x.innerHTML = theText;
    x.className = "show";
    setTimeout(function(){
        x.className = x.className.replace("show", "");
    }, n);
}

// personalize message
function personalize(txt,person,item,country,minutes){
    var tmp = txt.replace('[NAME]',person);
    tmp     = tmp.replace('[ITEM]',item);
    tmp     = tmp.replace('[COUNTRY]',country);
    tmp     = tmp.replace('[MINUTES]',minutes);

    return tmp;
}

// get random item
function getItem(){
    var items = [
        'Guía de Marketing para Autores'
    ]

    return items[(Math.floor((Math.random() * items.length) + 1)) - 1];
}

// get random person
function getPersonName(){
    var names = [
        'Carlos',
        'Rosa',
        'Beatriz',
        'Lugo',
        'Víctor',
        'José',
        'Amauri',
        'María',
        'Steven',
        'Jack'
    ];

    return names[(Math.floor((Math.random() * names.length) + 1)) - 1];
}

function getMinutes(){
    return (Math.floor((Math.random() * 60) + 1));
}

// get random country
function getCountry(){
    var countries = [
        'Puerto Rico',
        'España',
        'México',
        'USA',
        'Alemania',
        'República Dominicana',
        'Hermosillo',
        'Zacatecas',
        'Buenos Aires',
        'Quito'
    ];

    return countries[(Math.floor((Math.random() * countries.length) + 1)) - 1];
}
