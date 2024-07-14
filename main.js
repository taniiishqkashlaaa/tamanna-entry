function generateLeftPetals() {
    for (let i = 0; i < 30; i++) {
        let posY = Math.floor(Math.random() * 90)
        let posX = Math.floor(Math.random() * 25 + 5)
        let rot = Math.floor(Math.random() * 359)
        const image = document.createElement("img")
        image.src = "./assets/petal.png"
        image.classList.add("petal", "hide");
        image.style.top = `${posY}%`
        image.style.left = `${posX}%`
        image.style.rotate = `${rot}deg`
        document.querySelector(".left-petals").appendChild(image)
    }
}

function generateRightPetals() {
    for (let i = 0; i < 30; i++) {
        let posY = Math.floor(Math.random() * 90)
        let posX = Math.floor(Math.random() * 25 + 5)
        let rot = Math.floor(Math.random() * 359)
        const image = document.createElement("img")
        image.src = "./assets/petal.png"
        image.classList.add("petal", "hide");
        image.style.top = `${posY}%`
        image.style.right = `${posX}%`
        image.style.rotate = `${rot}deg`
        document.querySelector(".left-petals").appendChild(image)
    }
}



generateRightPetals();
generateLeftPetals();



var tl = gsap.timeline()

tl.from(".first-page p", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power4.out",
})

tl.from(".first-page img", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "power4.out",
    delay: -.9,

})

tl.to(".first-page img", {
    y: 10,
    repeat: -1,
    duration: .7,
    ease: "easeOut",
})



tl.from(".left", {
    opacity: 0,
    x: -700,

    rotate: 360,
    ease: "power4.out",
    delay: 0.5,
    scrollTrigger: {
        trigger: ".left",
        scroller: "body",

        start: "top 60%",
        end: "top 20%",
        scrub: 2,

        // toggleActions: "restart none none reverse",
    }
}, "garland")

tl.from(".right", {
    opacity: 0,
    x: 700,

    rotate: 360,
    ease: "power4.out",
    delay: 0.5,
    scrollTrigger: {
        trigger: ".right",
        scroller: "body",

        start: "top 60%",
        end: "top 20%",
        scrub: 2,
        // toggleActions: "restart none none reverse",
    }
}, "garland")

tl.from(".close", {
    y: 100,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".right",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        // toggleActions: "restart none none reverse",
        scrub: true,
    }

}, "garland")

var closedDoor = document.querySelector(".close")
var openedDoor = document.querySelector(".open")
var tamannaPhoto = document.querySelector(".tamanna-photo")
var petals = document.querySelectorAll(".petal")
var entry = document.querySelector(".entry")

closedDoor.addEventListener("click", async function () {
    closedDoor.classList.add("hide")
    openedDoor.classList.remove("hide")



    var audio = document.querySelector(".door-open-sound")
    var text = document.querySelector(".secondpage-text")

    audio.play()
    text.classList.add("hide")

    await gsap.to(".open", {
        scale: 7,
        duration: 2,
        delay: 1,
        opacity: 0,
    })

    openedDoor.classList.add("hide")
    tamannaPhoto.classList.remove("hide")


    entry.play()
    await gsap.from(".tamanna-photo", {
        opacity: 0,
        scale: 0.5,
        duration: 2,

    })
    petals.forEach(petal => {
        petal.classList.remove("hide");
    });

    await gsap.from(".petal", {
        y: -300,
        scale: 0.5,
        rotate: 360,
        duration: 5,
    })

    gsap.to(".petal", {
        rotate: 360,
        repeat: -1,
        ease: "linear",
        duration: 7,
    })
})
