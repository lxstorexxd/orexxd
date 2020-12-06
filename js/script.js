function getTimer( count ){
    var timer = new Object();
    timer.seconds = count % 60;
    count = (count - timer.seconds) / 60;
    timer.minutes = count % 60;
    count = (count - timer.minutes) / 60;
    timer.hours = count % 24;
    timer.days = (count - timer.hours) / 24;
    return timer;
}

function showTimer( timer ){
    $('#timer').text(
        timer.days.toString() +
        ':' +
        (timer.hours < 10 ? '0' : '') +
        timer.hours.toString() +
        ':' +
        (timer.minutes < 10 ? '0' : '') +
        timer.minutes.toString() +
        ':' +
        (timer.seconds < 10 ? '0' : '') +
        timer.seconds.toString()
    );
}

$(document).ready( function(){
	var now =     new Date();
    var newyear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    var counter = newyear.getTime() - now.getTime();
    var timeout = counter % 1000;
    counter = (counter - timeout) / 1000;
    showTimer(getTimer(counter + 1));
    setTimeout(function(){
        showTimer(getTimer(counter));
        var intervalID = setInterval(function(){
            counter--;
            if( counter > 0 ){
                showTimer(getTimer(counter));
            }else{
                clearInterval(intervalID);
                $('#timer').text('Happy New Year!');
            }
        }, 1000);
    }, timeout);
    
});