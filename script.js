let minSlider = document.querySelector("#minSlider");
let maxSlider = document.querySelector("#maxSlider");
let progress = document.querySelector(".progress");
let minBox = document.querySelector("#r1");
let maxBox = document.querySelector("#r2");
function updateProgress(){

    let min = minSlider.value;
    let max = maxSlider.value;

    progress.style.left = (min / minSlider.max) * 100 + "%";

    progress.style.right =
        100 - (max / maxSlider.max) * 100 + "%";
    document.querySelector("#r1").value =min;
    document.querySelector("#r2").value =max;

}
minBox.addEventListener("input", () => {

    let value = parseInt(minBox.value);

    if(value < 0){
        value = 0;
    }

    if(value >= parseInt(maxSlider.value)){
        value = parseInt(maxSlider.value) - 1;
    }

    minSlider.value = value;

    updateProgress();
});
maxBox.addEventListener("input", () => {

    let value = parseInt(maxBox.value);

    if(value > 10000){
        value = 10000;
    }

    if(value <= parseInt(minSlider.value)){
        value = parseInt(minSlider.value) + 1;
    }

    maxSlider.value = value;

    updateProgress();
});
minSlider.addEventListener("input", () => {

    if(parseInt(minSlider.value) >= parseInt(maxSlider.value)){

        minSlider.value = maxSlider.value - 1;
    }

    updateProgress();
});
maxSlider.addEventListener("input", () => {

    if(parseInt(maxSlider.value) <= parseInt(minSlider.value)){

        maxSlider.value = parseInt(minSlider.value) + 1;
    }

    updateProgress();
});
minSlider.addEventListener("input", updateProgress);
maxSlider.addEventListener("input", updateProgress);

updateProgress();