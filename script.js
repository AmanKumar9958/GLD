//enquiry option
function enquiry(){
    var phoneNumber = +919999302537;
    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=';
    window.open(url, '_blank');
}
function chat(){
    var phoneNumber = +918090019485;
    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=';
    window.open(url, '_blank');
}


// auto-type-text
var typed = new Typed(".auto-type",{
    strings: ["Student.", "Freelancer.", "Professional.", "Entrepreneur."],
    typeSpeed: 90,
    backSpeed:80,
    loop: true,
})

// images-slider
var indexValue = 0;
function slideShow(){
    setTimeout(slideShow, 1600);
    var x;
    const img = document.getElementsByClassName('slider-img');
    for(x=0; x< img.length; x++){
        img[x].style.display = 'none';
    }
    indexValue++;
    if(indexValue > img.length){
        indexValue = 1;
    }
    img[indexValue - 1].style.display = 'block';
}
slideShow();

// Calling option
function call(){
    var phoneNumber = +918090019485;
    var url = 'tel:' + phoneNumber;
    window.open(url, '_blank');
}


// move to top butotn
let btn = document.getElementById('scrollToTopBtn');
window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
}
btn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior: 'smooth'});
});


function placeholderChange(){
    var select = document.getElementById('title');
    var textArea = document.getElementById('form-msg');
    if(select.value === 'Question'){
        textArea.placeholder = 'Question';
    }
    else if(select.value === 'Feedback'){
        textArea.placeholder = 'Feedback';
    }
    else{
        textArea.placeholder = 'Type your Message';
    }
}


function showMenu(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideMenu(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const clickInsideSidebar = sidebar.contains(event.target);
    const clickMenuButton = event.target.matches('.fa-bars');

    if (!clickInsideSidebar && !clickMenuButton) {
        hideMenu();
    }
});