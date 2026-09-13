// const button = document.getElementById("flowerButton");
// const flowersContainer = document.getElementById("flowers");
// const card = document.querySelector(".card");

// const flowerTypes = [
//     "🌷",
//     "🌸",
//     "🌼",
//     "🌻",
//     "🌹"
// ];

// button.addEventListener("click", function () {

//     // Fade away the intro
//     card.classList.add("hide");

//     // Grow flowers
//     for (let i = 0; i < 18; i++) {

//         const flower = document.createElement("div");
//         flower.classList.add("flower");

//         flower.textContent =
//             flowerTypes[
//                 Math.floor(Math.random() * flowerTypes.length)
//             ];

//         flower.style.left =
//             Math.random() * 90 + 5 + "%";

//         flower.style.fontSize =
//             28 + Math.random() * 28 + "px";

//         flower.style.animationDelay =
//             (i * 0.08) + "s, " +
//             (i * 0.08 + 1) + "s";

//         flowersContainer.appendChild(flower);
//     }

//     // Add butterflies
//     setTimeout(function () {
//         createButterflies();
//     }, 800);

//     // Show surprise message
//     setTimeout(function () {

//         const surprise = document.createElement("div");

//         surprise.className = "surprise-page";

//         surprise.innerHTML = `
//             <div class="surprise-content">

//                 <div class="heart">🩵</div>

//                 <h2>SUPRISEEE :)</h2>

//                 <p>
//                     I know they're not real flowers...
//                     <br>
//                     but I still wanted to give you some, bc you deserve them !
//                 </p>

//             </div>
//         `;

//         document.querySelector(".sky").appendChild(surprise);

//         setTimeout(function () {
//             surprise.classList.add("show");
//         }, 100);

//     }, 3000);
// });

// setTimeout(function () {

//     createButterfly("15%", "35%", "7s", "0s");
//     createButterfly("75%", "40%", "8s", "1s");
//     createButterfly("45%", "30%", "9s", "2s");
//     createButterfly("85%", "50%", "7.5s", "3s");
//     createButterfly("25%", "55%", "10s", "1.5s");

// }, 800);

// function createButterflies() {

//     const sky = document.querySelector(".sky");

//     for (let i = 0; i < 5; i++) {

//         const butterfly =
//             document.createElement("div");

//         butterfly.classList.add("butterfly");

//         butterfly.textContent = "🦋";

//         butterfly.style.top =
//             (20 + Math.random() * 55) + "%";

//         butterfly.style.fontSize =
//             (22 + Math.random() * 14) + "px";

//         butterfly.style.animationDuration =
//             (8 + Math.random() * 6) + "s";

//         butterfly.style.animationDelay =
//             (Math.random() * 4) + "s";

//         sky.appendChild(butterfly);
//     }
// }
const button = document.getElementById("flowerButton");
const flowersContainer = document.getElementById("flowers");
const card = document.querySelector(".card");
const sky = document.querySelector(".sky");

const flowerTypes = [
    "🌷",
    "🌸",
    "🌼",
    "🌻",
    "🌹"
];

button.addEventListener("click", function () {

    // Hide the opening screen
    card.classList.add("hide");

    // =========================
    // FLOWERS APPEAR
    // =========================

    for (let i = 0; i < 18; i++) {

        const flower = document.createElement("div");

        flower.classList.add("flower");

        flower.textContent =
            flowerTypes[
                Math.floor(Math.random() * flowerTypes.length)
            ];

        flower.style.left =
            Math.random() * 90 + 5 + "%";

        flower.style.fontSize =
            28 + Math.random() * 28 + "px";

        flower.style.animationDelay =
            (i * 0.08) + "s, " +
            (i * 0.08 + 1) + "s";

        flowersContainer.appendChild(flower);
    }

    // =========================
    // BUTTERFLIES
    // =========================

    setTimeout(function () {

        createButterfly("7s", "0s");
        createButterfly("8s", "1.5s");
        createButterfly("9s", "3s");
        createButterfly("10s", "4.5s");
        createButterfly("8.5s", "6s");

    }, 800);

    // =========================
    // SURPRISE MESSAGE
    // =========================

    setTimeout(function () {

        const surprise = document.createElement("div");

        surprise.className = "surprise-page";

        surprise.innerHTML = `
            <div class="surprise-content">

                <div class="heart">🩵</div>

                <h2>surprise :)</h2>

                <p>
                    hopefully work went well today
                    <br>
                    <strong>these are for youu 🌷</strong>
                </p>

            </div>
        `;

        sky.appendChild(surprise);

        setTimeout(function () {
            surprise.classList.add("show");
        }, 100);

    }, 3000);
});


// =========================
// CREATE BUTTERFLY
// =========================

function createButterfly(duration, delay) {

    const butterfly = document.createElement("div");

    butterfly.classList.add("butterfly");

    butterfly.textContent = "🦋";

    butterfly.style.animationDuration = duration;
    butterfly.style.animationDelay = delay;

    sky.appendChild(butterfly);
}