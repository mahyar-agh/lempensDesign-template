// flag3 = true;
for (let i = 0; i < document.querySelectorAll("section.footer .socialContainer>.social").length; i++) {
    document.querySelectorAll("section.footer .socialContainer>.social")[i].onmouseover = function() {
            let dataName = this.dataset.name;
            document.querySelector("section.footer .titleContainer>span").innerHTML = dataName;
            document.querySelector("section.footer .titleContainer>span").style.opacity = `1`
            document.querySelector("section.footer .socialContainer>.social>div").style.backgroundImage = `url("../assets/img/social/socials-links-stylesheets.png")`
            document.querySelector("section.footer .socialContainer>.social>div").style.backgroundPosition = `left bottom`
        }
        // onmouseout
    document.querySelectorAll("section.footer .socialContainer>.social")[i].onmouseout = function() {
        document.querySelector("section.footer .titleContainer>span").style.opacity = `0`
    }
}