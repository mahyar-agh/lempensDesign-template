const items = {
    html: document.querySelector("html"),
    imgItems: document.querySelectorAll(".franceContainer>img"),
    cloudShape: document.querySelectorAll(".cloud"),
    parisImg: document.querySelector(".parisImg"),
    hasRotate: document.querySelectorAll(".hasRotate3d"),
    firstBoxEl: document.querySelector(".box1"),
    box3dInner: document.querySelector(".box3dInnerContainer"),
    scaleBox: document.querySelector(".scaleBox"),
    secondSlide: document.querySelector("section.secondSlide"),
    thirdSlide: document.querySelector("section.thirdSlide")
}
const { html, imgItems, cloudShape, parisImg, hasRotate, firstBoxEl, box3dInner, scaleBox, secondSlide, thirdSlide } = items;
window.onscroll = function() {

    if (html.scrollTop > 0) {
        for (let i = 0; i < hasRotate.length; i++) {
            hasRotate[i].classList.add("rotate3d")

        }
        for (let i = 0; i < cloudShape.length; i++) {
            cloudShape[i].classList.add("translatez")
        }
        parisImg.classList.add("parisRotate3d");
    } else {
        for (let i = 0; i < imgItems.length; i++) {
            imgItems[i].classList.remove("rotate3d")
        }
        for (let i = 0; i < cloudShape.length; i++) {

            cloudShape[i].classList.remove("translatez")
        }
        parisImg.classList.remove("parisRotate3d");

    }

    // box3d(1)
    offsetTopNum = document.querySelector(".imgContainer").offsetTop + document.querySelector(".titleContainer").offsetTop;


    if (html.scrollTop >= offsetTopNum && html.scrollTop <= secondSlide.offsetTop) {

        let currentNum = html.scrollTop - offsetTopNum,
            box3dNum = (currentNum / (secondSlide.offsetTop - offsetTopNum)) * 100
        box3dInner.style.transform = `rotateX(${box3dNum}deg)`;
        firstBoxEl.style.backgroundColor = `rgb(${225-box3dNum},${223-box3dNum},${222-box3dNum})`
    } else if (html.scrollTop <= offsetTopNum) {
        box3dInner.style.transform = `rotateX(-30deg)`;
        firstBoxEl.style.backgroundColor = `rgb(225, 223, 222)`
    }
    // box3d(2)
    box3d2currentNum = (document.querySelector("section.luxembourgSlide>.textContainer").offsetTop + document.querySelector("section.luxembourgSlide").offsetTop) - 100;

    if (html.scrollTop >= box3d2currentNum && html.scrollTop <= this.document.querySelector("section.fifthSlide").offsetTop) {
        currentNum = html.scrollTop - box3d2currentNum;

        box3dNum = (currentNum / (this.document.querySelector("section.luxembourgSlide>.luxembourgContainer").offsetHeight + this.document.querySelector("section.luxembourgSlide>.textContainer").offsetHeight + 100)) * 100;
        this.document.querySelector("section.fifthSlide .box3dInnerContainer").style.transform = `rotateX(${box3dNum}deg)`;
        this.document.querySelector("section.fifthSlide .box3dInnerContainer>.box1").style.backgroundColor = `rgb(${225-box3dNum},${223-box3dNum},${222-box3dNum})`
    } else if (html.scrollTop <= box3d2currentNum) {
        this.document.querySelector("section.fifthSlide .box3dInnerContainer").style.transform = `rotateX(-30deg)`;
        this.document.querySelector("section.fifthSlide .box3dInnerContainer>.box1").style.backgroundColor = `rgb(225, 223, 222)`
    }
    // box3d(3)
    let sixthSlide = document.querySelector("section.sixthSlide");
    if (html.scrollTop > sixthSlide.offsetTop + 150 && html.scrollTop < sixthSlide.offsetTop + sixthSlide.offsetHeight) {
        currentNum = html.scrollTop - (sixthSlide.offsetTop + 150);
        box3dNum = (currentNum / (sixthSlide.offsetHeight - 150)) * 100
            // box3dRotateNum = box3dNum * 90;
        this.document.querySelector("section.contactUs .box3dInnerContainer").style.transform = `rotateX(${box3dNum}deg)`
        this.document.querySelector("section.contactUs .box3dInnerContainer>.box1").style.backgroundColor = `rgb(${225-box3dNum},${223-box3dNum},${222-box3dNum})`
    } else if (html.scrollTop <= sixthSlide.offsetTop + 150) {
        this.document.querySelector("section.contactUs .box3dInnerContainer").style.transform = `rotateX(0)`;
        this.document.querySelector("section.contactUs .box3dInnerContainer>.box1").style.backgroundColor = `rgb(225, 223, 222)`
    }
    // scaleBox
    if (html.scrollTop >= 500 && html.scrollTop && html.scrollTop < 950) {
        scaleBox.style.transform = `scale(1)`

    } else {
        scaleBox.style.transform = `scale(0)`

    }
    // third Slide BackgoundColor
    if (html.scrollTop > (document.querySelector(".franceContainer").offsetTop - 50) && html.scrollTop < (thirdSlide.offsetTop) - 300) {
        resetBgColorNum = html.scrollTop - (document.querySelector(".franceContainer").offsetTop - 50)
        currentNum = (resetBgColorNum / (secondSlide.offsetHeight - 199))

        thirdSlide.style.backgroundColor = `rgb(${123-(currentNum*10)}, ${123-(currentNum*55)}, ${123-currentNum*24})`
    } else if (html.scrollTop >= (thirdSlide.offsetTop) - 300) {
        thirdSlide.style.backgroundColor = `rgb(113,68,99)`
    }

    // metro
    if (html.scrollTop > document.querySelector(".boxFrance3d").offsetTop + 50 + secondSlide.offsetTop && html.scrollTop < thirdSlide.offsetTop) {

        boxFrance3dNum = (document.querySelector(".boxFrance3d").offsetTop + 50) + (secondSlide.offsetTop)
        resetScrollNum = html.scrollTop - boxFrance3dNum;
        currentNum = (resetScrollNum / (secondSlide.offsetHeight - 101))

        metroNum = currentNum * 200;
        this.document.querySelector(".metroContainer").style.transform = `translateX(${-110+metroNum}%)`;
    } else if (html.scrollTop <= (document.querySelector(".boxFrance3d").offsetTop + 50) + (secondSlide.offsetTop)) {
        this.document.querySelector(".metroContainer").style.transform = `translateX(-110%)`


    }
    // luxembourg
    if (html.scrollTop >= thirdSlide.offsetTop + thirdSlide.offsetHeight) {
        for (let i = 0; i < this.document.querySelectorAll(".luxembourgContainer>img").length; i++) {
            document.querySelectorAll(".luxembourgContainer>img")[i].style.opacity = 1
        }

        document.querySelector(".luxembourgContainer>.treeImg").style.transform = `rotateX(0deg)`
        document.querySelector(".luxembourgContainer>.bridgeImg").style.transform = `translateX(-50%) rotateX(0deg)`
        document.querySelector(".luxembourgContainer>.egliseImg").style.transform = `translateX(-30%) rotateX(0deg)`
        document.querySelector(".luxembourgContainer>div").style.transform = `translate(-30%,-40%)`
        document.querySelector(".luxembourgContainer>div").style.opacity = 1
        this.document.querySelector(".luxembourgContainer>.bigCloudImg").style.transform = `translateZ(0)`
        this.document.querySelector(".luxembourgContainer>.mediumeCloudImg").style.transform = `translateZ(0)`
        this.document.querySelector(".luxembourgContainer>.smallCloudImg").style.transform = `translateX(-100%) translateZ(0)`
    }
    // raylightes
    let fifthSlide = this.document.querySelector("section.fifthSlide");
    if (html.scrollTop >= (fifthSlide.offsetTop + 600) && html.scrollTop <= (fifthSlide.offsetTop + fifthSlide.offsetHeight)) {
        currentNum = html.scrollTop - (fifthSlide.offsetTop + 600);
        rayLightesNum = (currentNum / (fifthSlide.offsetHeight - 600))
        rayLightesRotateNum = rayLightesNum * 200;
        this.document.querySelector(".fifthSlide .rayLightsContainer").style.transform = `rotate(${rayLightesRotateNum}deg)`



    }
    // belgique
    if (html.scrollTop >= this.document.querySelector("section.sixthSlide").offsetTop) {
        for (let i = 0; i < this.document.querySelectorAll("section.sixthSlide img").length; i++) {
            this.document.querySelectorAll("section.sixthSlide img")[i].style.transform = `rotateX(0)`;
            this.document.querySelectorAll("section.sixthSlide img")[i].style.opacity = `1`;
        }
        for (let i = 0; i < this.document.querySelectorAll("section.sixthSlide .cloudImg").length; i++) {
            this.document.querySelectorAll("section.sixthSlide .cloudImg")[i].style.transform = `translateZ(0)`
            this.document.querySelectorAll("section.sixthSlide .cloudImg")[i].style.opacity = `1`

        }
        this.document.querySelector("section.sixthSlide .Carousel").style.transform = `translateX(-50%) rotateX(0)`
        this.document.querySelector("section.sixthSlide .belgiqueText").style.transform = `translateX(0) rotateX(0)`
        this.document.querySelector("section.sixthSlide .belgiqueText").style.opacity = `1`

    }


}