// Initialize and add the map

function  initMap() {
    // Your Location
    const loc = { lat:22.357840, lng:91.835828};
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}
document.querySelector('body').addEventListener('click', smoothScroll)

window.addEventListener('scroll', function() {
    if(window.scrollY>150){
        document.getElementById('navbar').style.opacity = .8;
    }else{
        document.getElementById('navbar').style.opacity = 1;
    }
})

function smoothScroll(e) {
    console.log(e.target.hash)
    const link = document.querySelectorAll('li a');
    let linkClass=[];
    linkArray = Array.from(link);
    linkArray.forEach(link=>linkClass.push(link.className))
    if(linkClass.includes(e.target.className)){
        document.getElementById(e.target.className)
        .scrollIntoView({behavior: "smooth", block: "center"})
    }
     
}



