$(function() {
    let liCount = document.querySelectorAll(".outerContainer>.ulContainer>ul>li").length;
    $(".outerContainer>.ulContainer>ul>li:last").prependTo(".outerContainer>.ulContainer>ul")
    $(".outerContainer>.ulContainer>ul").css({
        marginLeft: -100 + "%"
    })
    $(".outerContainer>.ulContainer>ul").css({
        width: liCount * 100 + "%"
    })
    $(".outerContainer>.ulContainer>ul>li").css({
        width: 100 / liCount + "%"
    })
    flag = true;
    counter = 0;

    function moveLeft() {

        if (flag) {
            $(".outerContainer>.ulContainer>ul").css({
                left: "-100%",
                transition: "1s"
            })

            setTimeout(function() {
                $(".outerContainer>.ulContainer>ul>li:first").appendTo(".outerContainer>.ulContainer>ul")
                $(".outerContainer>.ulContainer>ul").css({
                    left: "0",
                    transition: "none"
                })
                counter++;
                if (counter > 2) {
                    counter = 0;
                }
                // console.log(counter)

                flag = true;

                if (counter == 1) {
                    $(".firstCircle>svg>circle").addClass("circle-path")
                    $(".firstCircle .textOpacity").css({
                        transform: `translate(-50%, 0)`,
                        opacity: 1

                    })
                    $(".firstCircle>.tumbContainer").css({
                        transform: `translateY(0)`,
                        opacity: 1
                    })
                    setTimeout(function() {
                        $(".secondCircle>svg>circle").addClass("circle-path");
                        $(".secondCircle .textOpacity").css({
                            transform: `translate(-50%, 0)`,
                            opacity: 1

                        })
                        $(".secondCircle>.tumbContainer").css({
                            transform: `translateY(0)`,
                            opacity: 1
                        })
                    }, 600)
                    setTimeout(function() {
                        $(".thirdCircle>svg>circle").addClass("circle-path")
                        $(".thirdCircle .textOpacity").css({
                            transform: `translate(-50%, 0)`,
                            opacity: 1

                        })
                        $(".thirdCircle>.tumbContainer").css({
                            transform: `translateY(0)`,
                            opacity: 1
                        })

                    }, 1200)
                } else {
                    $(".textOpacity").css({
                        transform: `translate(-50%, -100%)`,
                        opacity: 0

                    })
                    $(".tumbContainer").css({
                        transform: `translateY(-100%)`,
                        opacity: 0
                    })
                    $(".circleInnerContainer>svg>circle").removeClass("circle-path")
                    $(".textOpacity").css("transition-delay", "0s");
                    $(".tumbContainer").css("transition-delay", "0s");
                }

                if (counter == 2) {
                    setTimeout(function() {
                        $(".colomsInnerContainer>p").addClass("colomOpacity")

                        $(".line1").css({
                            opacity: 1
                        })
                        $(".line2").css({
                            marginTop: 45 + "px",
                            opacity: 1,
                            transitionDelay: 200 + "ms"

                        })
                        $(".line3").css({
                            marginTop: 90 + "px",
                            opacity: 1,
                            transitionDelay: 400 + "ms"


                        })
                        $(".line4").css({
                            marginTop: 135 + "px",
                            opacity: 1,
                            transitionDelay: 600 + "ms"

                        })
                        $(".line5").css({
                            marginTop: 175 + "px",
                            opacity: 1,
                            transitionDelay: 800 + "ms"

                        })
                        $(".colom1").css({
                            transitionDelay: 1 + "s",
                            height: 80 + "%"
                        })
                        $(".colom2").css({
                            transitionDelay: 1100 + "ms",
                            height: 72 + "%"
                        })
                        $(".colom3").css({
                            transitionDelay: 1200 + "ms",
                            height: 63 + "%"
                        })
                        $(".colom4").css({
                            transitionDelay: 1300 + "ms",
                            height: 67 + "%"
                        })
                        $(".colom5").css({
                            transitionDelay: 1400 + "ms",
                            height: 69 + "%"
                        })
                        $(".colomsText1").css("transition-delay", "1s")
                        $(".colomsText2").css("transition-delay", "1100ms")
                        $(".colomsText3").css("transition-delay", "1200ms")
                        $(".colomsText4").css("transition-delay", "1300ms")
                        $(".colomsText5").css("transition-delay", "1400ms")
                    }, 200)



                } else {
                    $(".coloms").css({
                        height: 0,
                        transitionDelay: 0 + "ms"
                    })
                    $(".colomsInnerContainer>p").removeClass("colomOpacity")
                    $(".lines").css({
                        transitionDelay: 0 + "ms"

                    })
                    $(".line1").css({
                        opacity: 0
                    })
                    $(".line2").css({
                        marginTop: 30 + "px",
                        opacity: 0,

                    })
                    $(".line3").css({
                        marginTop: 70 + "px",
                        opacity: 0

                    })
                    $(".line4").css({
                        marginTop: 100 + "px",
                        opacity: 0
                    })
                    $(".line5").css({
                        marginTop: 150 + "px",
                        opacity: 0
                    })
                    $(".colomsInnerContainer>p").css("transition-delay", "0ms")
                }
            }, 1000)
        }

    }

    function moveRight() {
        if (flag) {
            $(".outerContainer>.ulContainer>ul").css({
                left: "100%",
                transition: "1s"
            })
            setTimeout(function() {
                $(".outerContainer>.ulContainer>ul>li:last").prependTo(".outerContainer>.ulContainer>ul")
                $(".outerContainer>.ulContainer>ul").css({

                    left: "0",
                    transition: "none"
                })
                counter--;
                if (counter < 0) {
                    counter = 2;
                }

                flag = true;

                if (counter == 1) {
                    $(".firstCircle>svg>circle").addClass("circle-path")
                    $(".firstCircle .textOpacity").css({
                        transform: `translate(-50%, 0)`,
                        opacity: 1

                    })
                    $(".firstCircle>.tumbContainer").css({
                        transform: `translateY(0)`,
                        opacity: 1
                    })
                    setTimeout(function() {
                        $(".secondCircle>svg>circle").addClass("circle-path");
                        $(".secondCircle .textOpacity").css({
                            transform: `translate(-50%, 0)`,
                            opacity: 1,
                            // transitionDelay:600+"ms"

                        })
                        $(".secondCircle>.tumbContainer").css({
                            transform: `translateY(0)`,
                            opacity: 1,
                            // transitionDelay:600+"ms"

                        })
                    }, 600)
                    setTimeout(function() {
                        $(".thirdCircle>svg>circle").addClass("circle-path")
                        $(".thirdCircle .textOpacity").css({
                            transform: `translate(-50%, 0)`,
                            opacity: 1

                        })
                        $(".thirdCircle>.tumbContainer").css({
                            transform: `translateY(0)`,
                            opacity: 1
                        })
                    }, 1200)



                } else {
                    $(".textOpacity").css({
                        transform: `translate(-50%, -100%)`,
                        opacity: 0

                    })
                    $(".tumbContainer").css({
                        transform: `translateY(-100%)`,
                        opacity: 0
                    })
                    $(".circleInnerContainer>svg>circle").removeClass("circle-path");
                    $(".textOpacity").css("transition-delay", "0s");
                    $(".tumbContainer").css("transition-delay", "0s");
                }
                if (counter == 2) {
                    setTimeout(function() {
                        $(".colomsInnerContainer>p").addClass("colomOpacity")

                        $(".line1").css({
                            opacity: 1
                        })
                        $(".line2").css({
                            marginTop: 45 + "px",
                            opacity: 1,
                            transitionDelay: 200 + "ms"

                        })
                        $(".line3").css({
                            marginTop: 90 + "px",
                            opacity: 1,
                            transitionDelay: 400 + "ms"


                        })
                        $(".line4").css({
                            marginTop: 135 + "px",
                            opacity: 1,
                            transitionDelay: 600 + "ms"

                        })
                        $(".line5").css({
                            marginTop: 175 + "px",
                            opacity: 1,
                            transitionDelay: 800 + "ms"

                        })
                        $(".colom1").css({
                            transitionDelay: 1 + "s",
                            height: 80 + "%"
                        })
                        $(".colom2").css({
                            transitionDelay: 1100 + "ms",
                            height: 72 + "%"
                        })
                        $(".colom3").css({
                            transitionDelay: 1200 + "ms",
                            height: 63 + "%"
                        })
                        $(".colom4").css({
                            transitionDelay: 1300 + "ms",
                            height: 67 + "%"
                        })
                        $(".colom5").css({
                            transitionDelay: 1400 + "ms",
                            height: 69 + "%"
                        })
                        $(".colomsText1").css("transition-delay", "1s")
                        $(".colomsText2").css("transition-delay", "1100ms")
                        $(".colomsText3").css("transition-delay", "1200ms")
                        $(".colomsText4").css("transition-delay", "1300ms")
                        $(".colomsText5").css("transition-delay", "1400ms")
                    }, 200)



                } else {
                    $(".coloms").css({
                        height: 0,
                        transitionDelay: 0 + "ms"
                    })
                    $(".colomsInnerContainer>p").removeClass("colomOpacity")
                    $(".lines").css({
                        transitionDelay: 0 + "ms"

                    })
                    $(".line1").css({
                        opacity: 0
                    })
                    $(".line2").css({
                        marginTop: 30 + "px",
                        opacity: 0,

                    })
                    $(".line3").css({
                        marginTop: 70 + "px",
                        opacity: 0

                    })
                    $(".line4").css({
                        marginTop: 100 + "px",
                        opacity: 0
                    })
                    $(".line5").css({
                        marginTop: 150 + "px",
                        opacity: 0
                    })
                    $(".colomsInnerContainer>p").css("transition-delay", "0ms")

                }
            }, 1000)
        }
    }

    $("section.secondSlide .rightBtn").click(function() {
        moveLeft()
        flag = false;


    })
    $("section.secondSlide .leftBtn").click(function() {
        moveRight()
        flag = false;

    })

})
$(function() {
    liCount = document.querySelectorAll("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer>li").length;
    $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer").css({
        width: 33.3333 * liCount + "%"
    })
    $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer>li").css({
        width: 100 / liCount + "%"
    })
    flag2 = true;

    function moveLeft() {
        if (flag2) {
            $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer").css({
                left: -33.3333 + "%",
                transition: "1s"
            })
            setTimeout(function() {
                $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer>li:first").appendTo("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer")
                $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer").css({
                    left: 0,
                    transition: "none"
                })
                flag2 = true;
            }, 1000)
        }
    }

    function moveRight() {
        if (flag2) {
            $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer").css({
                left: 33.3333 + "%",
                transition: "1s"
            })
            setTimeout(function() {
                $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer>li:last").prependTo("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer")
                $("section.fifthSlide .awardContainer .outerSliderContainer>.ulOuterContainer>.ulInnerContainer").css({
                    left: 0,
                    transition: "none"
                })
                flag2 = true;
            }, 1000)
        }
    }
    $("section.fifthSlide .awardContainer .outerSliderContainer>.rightBtn").click(function() {
        moveLeft()
        flag2 = false;
    })
    $("section.fifthSlide .awardContainer .outerSliderContainer>.leftBtn").click(function() {
        moveRight()
        flag2 = false;
    })

})