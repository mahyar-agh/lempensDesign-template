const elements = {
    divBg: document.querySelector(".imgContainer>div"),
    heartImgEl: document.querySelector(".heart>img")
}
setInterval(function() {
    elements.divBg.style.backgroundPosition = "0 50px,0 0";
    setTimeout(function() {
        elements.divBg.style.backgroundPosition = "0 0,0 -50px";
    }, 3000)
}, 7000)

setInterval(function() {
    setTimeout(function() {
        elements.heartImgEl.classList.remove("heartBitting")

    }, 500)
    elements.heartImgEl.classList.add("heartBitting")



}, 1000)