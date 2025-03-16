// header toggle
document.getElementById("toggleHeader").addEventListener('click', function(){
    console.log("click");
});

// searchbar show and hide
document.getElementById("seachBarToggle").addEventListener('click', function() {
    document.querySelector(".searchbar_wrap").classList.toggle("active");
    document.querySelector(".header_search").classList.toggle("active");
});
