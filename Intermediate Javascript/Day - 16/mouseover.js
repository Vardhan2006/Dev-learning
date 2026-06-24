let main = document.querySelector("#main");

// Mouseover

// main.addEventListener("mouseover", function() {
//     main.style.backgroundColor = "red"
// });

// Mouseout

// main.addEventListener("mouseout", function(){
//     main.style.backgroundColor = "blue";
// });

// Mousemove

window.addEventListener("mousemove", function(dets){
    main.style.top = dets.clientY + "px";
    main.style.left = dets.clientX + "px";
});


