var myInterval = setInterval(function(){
    var currentDate = dayjs().format('MMMM Do YYYY');
    var currentTime = dayjs()
    $('#currentDay').text(currentDate + " " + currentTime.format('h:mm:ss a'))
}, 1000);

