// Start Header

{
    let toggle = document.querySelector("header .toggle");
    let list = document.querySelector("header .container nav ul");
    toggle.onclick = function () {
        list.classList.toggle("height");
    }
}

// End Header

// Start Choose

{
    // Article
    const myArticle = document.querySelector(".choose .container article.main-button");
    window.addEventListener("scroll",
        function () {
            const trigger = window.innerHeight / 5 * 4;
            trigger >= myArticle.getBoundingClientRect().top ? myArticle.classList.add("my-effect") : myArticle.classList.remove("my-effect");
        }
    )

    // Services
    const service = document.querySelectorAll(".choose .container .services .service");
    let func = function (value, index) { value.style.transitionDelay = `${index / 6}s` };
    service.forEach(func);
    window.onscroll = function () {
        const trigger = window.innerHeight / 5 * 4;
        service.forEach(
            value => {
                const myBox = value.getBoundingClientRect().top;
                trigger >= myBox ? value.classList.add("my-effect") : value.classList.remove("my-effect");
            }
        )
    }
}

// End Choose

// Start About

{
    const cols = document.querySelectorAll(".about .container .col");

    let move = function () {
        const myTrigger = window.innerHeight / 5 * 4;
        cols.forEach(
            value => {
                const myTop = value.getBoundingClientRect().top;
                myTrigger > myTop ? value.classList.add("my-effect") : value.classList.remove("my-effect");
            }
        )
    }
    window.addEventListener("scroll", move);
}

// End About

// Start Products

{
    const products = document.querySelectorAll(".products .container .box");
    products.forEach(
        (value, index) => {
            value.style.transitionDelay = `${index / 8}s`;
        }
    )

    let product = function () {
        const trig = window.innerHeight / 5 * 4;
        products.forEach(
            value => {
                const one = value.getBoundingClientRect().top;
                trig > one ? value.classList.add("my-effect") : value.classList.remove("my-effect");
            }
        )
    }

    window.addEventListener("scroll", product);
}

// End Products

// Start Feature

{
    const features = document.querySelectorAll(".feature .container .col");
    features.forEach(
        (value, index) => {
            value.style.transitionDelay = `${index / 3}s`;
        }
    )

    const links = document.querySelectorAll(".feature .container .col:last-of-type a");

    let myFunction = function () {
        const trigger = window.innerHeight / 5 * 4;
        features.forEach(
            value => {
                const distance = value.getBoundingClientRect().top;
                trigger > distance ? value.classList.add("my-effect") : value.classList.remove("my-effect");
            }
        )
        links.forEach(
            value => {
                const distance = value.getBoundingClientRect().top;
                trigger > distance ? value.classList.add("my-effect2") : value.classList.remove("my-effect");
            }
        )
    }

    window.addEventListener("scroll", myFunction);
}

// End Feature

// Start Price

{
    const prices = document.querySelectorAll(".price .container .prices .buy");
    prices.forEach(
        (value, index) => {
            value.style.transitionDelay = `${index / 6}s`;
        }
    );
    let myFunction = function () {
        const triggerBox = window.innerHeight / 5 * 4;
        prices.forEach(
            value => {
                const box = value.getBoundingClientRect().top;
                triggerBox > box ? value.classList.add("my-effect") : value.classList.remove("my-effect");
            }
        )
    };
    window.addEventListener("scroll", myFunction);
}

// End Price

// Start Design

{
    const design = document.querySelector(".design");
    const tracks = document.querySelectorAll(".design .container .slideing .track span");
    const sliderTrack = document.querySelector(".design .container .slideing .slider .slider-track");
    const img = document.querySelector(".design .container .slideing .box img");
    const h5 = document.querySelector(".design .container .slideing .box h5");
    const small = document.querySelector(".design .container .slideing .box small");
    const paragraph = document.querySelector(".design .container .slideing .box p");
    const track = document.querySelector(".design .container .slideing .track");
    const imageSlider = document.querySelector(".design .container .image-slider");
    tracks.forEach(
        (value, index) => {
            value.addEventListener("click", function () {
                tracks.forEach(
                    value => {
                        value.classList.remove("active");
                        this.classList.add("active");
                    }
                )
            })
        }
    );
    window.addEventListener("scroll", function () {
        const triggerBox = window.innerHeight / 5 * 4;
        const box = design.getBoundingClientRect().top;
        if (triggerBox > box) {
            img.classList.add("my-effect");
            h5.classList.add("my-effect");
            small.classList.add("my-effect");
            paragraph.classList.add("my-effect");
            track.classList.add("my-effect-track");
            imageSlider.classList.add("my-effect");
        } else {
            img.classList.remove("my-effect");
            h5.classList.remove("my-effect");
            small.classList.remove("my-effect");
            paragraph.classList.remove("my-effect");
            track.classList.remove("my-effect-track");
            imageSlider.classList.remove("my-effect");
        }
    })
}

// End Design

// Start Article

{
    let article = document.querySelector(".article");
    window.addEventListener("scroll", function () {
        const triggerBox = window.innerHeight / 5 * 4;
        const artDomRect = article.getBoundingClientRect().top;
        triggerBox > artDomRect ? article.classList.add("my-effect") : article.classList.remove("my-effect");
    })
}

// End Article

// Start Tweet

{
    let tweet = document.querySelector(".tweet");
    let tweetCols = document.querySelectorAll(".tweet .container .col");
    tweetCols.forEach(
        (value, index) => {
            value.style.transitionDelay = `${index / 8}s`;
        }
    )
    window.addEventListener("scroll", function () {
        const triggerBox = window.innerHeight / 5 * 4;
        tweetCols.forEach(
            value => {
                const colDomRect = value.getBoundingClientRect().top;
                if (triggerBox > colDomRect) {
                    value.classList.add("my-effect");
                } else {
                    value.classList.remove("my-effect");
                }
            }
        )
    })
}

// End Tweet

// Start Footer

{
    let paragraphOne = document.querySelector("footer .container p:first-of-type");
    let paragraphTwo = document.querySelector("footer .container p:last-of-type");
    let tweet = document.querySelector(".tweet");
    window.addEventListener("scroll",
        function () {
            const trigger = window.innerHeight / 5 * 4;
            const x = tweet.getBoundingClientRect().top;
            if (trigger > x) {
                paragraphOne.classList.add("my-effect");
                paragraphTwo.classList.add("my-effect");
            } else {
                paragraphOne.classList.remove("my-effect");
                paragraphTwo.classList.remove("my-effect");
            }

        })
}

// End Footer