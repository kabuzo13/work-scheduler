$(document).ready(function(){

var myInterval = setInterval(function(){
    var currentDate = dayjs().format('dddd MMMM Do YYYY');
    var currentTime = dayjs()
    $('#currentDay').text(currentDate + " " + currentTime.format('h:mm:ss a'))
}, 1000);

// var timeBlockEl9 = $('div');
// var timeBlockEl10 = $('div');
// var timeBlockEl11 = $('div');
// var timeBlockEl12 = $('div');
// var timeBlockEl13 = $('div');
// var timeBlockEl14 = $('div');
// var timeBlockEl15 = $('div');
// var timeBlockEl16 = $('div');
// var timeBlockEl17 = $('div');

// $('#container').append(timeBlockEl9);
// $('#container').append(timeBlockEl10);
// $('#container').append(timeBlockEl11);
// $('#container').append(timeBlockEl12);
// $('#container').append(timeBlockEl13);
// $('#container').append(timeBlockEl14);
// $('#container').append(timeBlockEl15);
// $('#container').append(timeBlockEl16);
// $('#container').append(timeBlockEl17);

// timeBlockEl9.addClass('time-block row hour past present future');
// timeBlockEl9.text('9am');

// timeBlockEl10.addClass('time-block row hour past present future');
// timeBlockEl10.text('10am');

// timeBlockEl11.addClass('time-block row hour past present future');
// timeBlockEl11.text('11am');

// timeBlockEl12.addClass('time-block row hour past present future');
// timeBlockEl12.text('12pm');

// timeBlockEl13.addClass('time-block row hour past present future');
// timeBlockEl13.text('1pm');

// timeBlockEl14.addClass('time-block row hour past present future');
// timeBlockEl14.text('2pm');

// timeBlockEl15.addClass('time-block row hour past present future');
// timeBlockEl15.text('3pm');

// timeBlockEl16.addClass('time-block row hour past present future');
// timeBlockEl16.text('4pm');

// timeBlockEl17.addClass('time-block row hour past present future');
// timeBlockEl17.text('5pm');

var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var meridien = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
for (var i = 0; i < hours.length; i++) {
    var blockContainer = $(`
    <div id="hour-${hours[i]}" class="row time-block">
    <div class="col-md-1 hour">
        ${meridien[i]}
    </div>
    <textarea class="col-md-10 description">
</textarea>
    <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
</div>
    `);

    $(".container").append(blockContainer);
}

function colorChange() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr("id").split("-")[1]);
    if (hourBlock < currentHour) {
        $(this).addClass('past')
    } else if ( hourBlock === currentHour) {
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    };
})
};
colorChange();
$('.saveBtn').on('click', function() {
    var text = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id')
    localStorage.setItem(time, text)
})
for (var i = 9; i <= 17; i++) {
    $(`#hour-${[i]} .description`).val(localStorage.getItem(`hour-${[i]}`))
}
});