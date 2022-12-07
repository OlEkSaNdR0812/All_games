let offset = 0;
const sliderLine = document.querySelector('.slider-line');

$('.slider-next').on('click', function(){
    offset = offset + 455;
    if (offset > 455*3) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

$('.slider-prev').on('click', function () {
    offset = offset - 455;
    if (offset < 0) {
        offset = 455*3;
    }
    sliderLine.style.left = -offset + 'px';
});
$('#first_link').on('click', function(event) {
	window.open('https://oleksandr0812.github.io/magic_ball/');
});
$('#sekond_link').on('click', function(event) {
	window.open('https://oleksandr0812.github.io/game_lab8/');
});
$('#third_link').on('click', function(event) {
	window.open('https://oleksandr0812.github.io/21-score/');
});
$('#fourth_link').on('click', function(event) {
	window.open('https://oleksandr0812.github.io/One-armed-bandit/');
});