function toggleStickyHeader(index) {
    if(index) {
         let header = document.getElementById("main-header")
         header.style.position = "sticky"
         header.style.top = "0px"
         return
    }

    let header = document.getElementById("main-header")
    header.style.position = "relative"
    header.style.top = "-100px"
}

function addStickyListener() {
    window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
            toggleStickyHeader(true)
        }
        else if (event.deltaY > 0) {
            toggleStickyHeader(false)
        }
    });
}