// $(document).ready(function () {
//     var open = 0;
//     var display = false;
//     var saveInterval;
//     $(document).click(function () {
//         open++;
//         if (open < 64 || display) return;
//         //hacker effect
//         clearInterval(saveInterval);
//         display = !display;
//         //console.log(display);
//         if (!display) {
//             hackEffectCanvas.getContext("2d").clearRect(0, 0, window.screen.width, window.screen.height);
//             return;
//         }
//         const s = window.screen;
//         const w = (hackEffectCanvas.width = s.width);
//         const h = (hackEffectCanvas.height = s.height);
//         const ctx = hackEffectCanvas.getContext("2d");

//         const p = Array(Math.floor(w / 10) + 1).fill(0);

//         const random = (items) => items[Math.floor(Math.random() * items.length)];

//         const hex = "0123456789ABCDEF".split("");

//         saveInterval = setInterval(() => {
//             //ctx.fillStyle = "rgba(0,0,0,.05)";
//             ctx.fillStyle = "rgba(255,255,255,0.05)";
//             ctx.fillRect(0, 0, w, h);
//             //ctx.fillStyle = "#0f0";
//             ctx.fillStyle = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ",.5)";
//             p.map((v, i) => {
//                 ctx.fillText(random(hex), i * 10, v);
//                 p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
//             });
//         }, 1000 / 30);
//     });
// });