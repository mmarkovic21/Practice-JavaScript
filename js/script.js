// CLOCK

function add_lead_zero (number){
    if(number<10){
        return "0" + number.toString();
    }else {
        return number.toString();
    }
}

window.setInterval(function(){
    let currentDate = new Date();

    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    document.getElementById("hours").innerHTML = add_lead_zero(hour);
    document.getElementById("minutes").innerHTML = add_lead_zero(minutes);
    document.getElementById("seconds").innerHTML = add_lead_zero(seconds);

}, 1000);

//phoneItems
let phones = 
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': 450,
        'currency': 'US$',
        'imageUrl': "https://dijaspora.shop/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-se-red-select-2020_2.jpg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': 869,
        'currency': 'EUR',
        'imageUrl': "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11/iphone-11-black.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': 519,
        'currency': 'US$',
        'imageUrl': "https://ola.tech/wp-content/uploads/apple-iphone-8-plus-sliver.jpg"
    }
};

let radioItems = document.getElementsByName("product");

for(let i=0; i<radioItems.length; i++){
    radioItems[i].onchange = function () {
        for(let j=0; j<radioItems.length; j++){ //ovim cekiramo da li je element jos uvek cekiran
            if(radioItems[j].checked){
                let selectedRadio = radioItems[j].value;
                
                document.getElementById("phone_name").innerHTML = phones[selectedRadio].name;
                document.getElementById("phone_price").innerHTML = phones[selectedRadio].currency + (phones[selectedRadio].price.toFixed(2)).toString()
                document.getElementById("phone_image").src = phones[selectedRadio].imageUrl;
            }
        }
    }
}

//stopwatch
function add_leading_zero(number){
    if(number<10){
       return "0" +number.toString();
    } else{
       return number.toString();
    }
 }

let isRunning = false,
startTime,
currentTime,
elapseTime = 0,
startInterval,
hours,
minutes,
seconds,
remainder,
formattedTime;

document.getElementById("start_stop").onclick = function(){
    if(!isRunning){
        //start the clock
        isRunning = true;
        if(elapseTime == 0){
        startTime = new Date().getTime();
    }else {
        startTime = new Date().getTime() - elapseTime;
    }
        startInterval = window.setInterval(function(){
        currentTime = new Date().getTime();
        elapseTime = currentTime - startTime;


        hours = Math.floor(elapseTime / 3600000);
        remainder = elapseTime - (hours * 3600000);

        minutes = Math.floor(remainder / 60000);
        remainder -= (minutes * 60000);

        seconds = Math.floor(remainder / 1000);
        remainder -= (seconds * 1000); //na kraju ovo ostaje u milisekundama

        formattedTime = add_leading_zero(hours) + ":" + add_leading_zero(minutes) + ":" + add_leading_zero(seconds) + ":" +add_leading_zero(remainder);

        document.getElementById("stopwatch").innerHTML = formattedTime;
        },10);
        
    } else{
        //stop the clock
        window.clearInterval(startInterval);
        isRunning = false;
    }
}

document.getElementById("reset").onclick = function(){
    startTime = new Date().getTime();
    if(!isRunning){
        elapseTime = 0;
        document.getElementById("stopwatch").innerHTML = '00:00:00 000';
    }
}
