$(document).ready(function(){

var myInterval = setInterval(function(){
    var currentDate = dayjs().format('dddd MMMM D YYYY');
    var currentTime = dayjs()
    $('#currentDay').text(currentDate + " " + currentTime.format('h:mm:ss a'))
}, 1000);

var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var meridian = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
for (var i = 0; i < hours.length; i++) {
    var blockContainer = $(`
    <div id="hour-${hours[i]}" class="row time-block">
    <div class="col-md-1 hour">
        ${meridian[i]}
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
    } else if (hourBlock === currentHour) {
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