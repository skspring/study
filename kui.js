let prevBtn = document.getElementById("lbtn"),
    nextBtn = document.getElementById("rbtn"),
    currentImage = document.getElementById("pic"),
    numberLabel = document.getElementById("labnum"),
    normalBtn = document.getElementById("normal"),
    loopBtn = document.getElementById("loop"),
    images = document.querySelectorAll("#pbox #pic img"),
    numOfImage = 5,
    index = 0,
    isLoop = false;

function updateImage() {
    for (var k = 0; k < numOfImage; k++) {
        images[k].style.display = "none";
    }
    images[index].style.display = "block";
    numberLabel.innerHTML = (index + 1) + "/" + numOfImage;
}

function updateBtn() {
    normalBtn.style.background = isLoop ? "#ccc" : "red";
    loopBtn.style.background = isLoop ? "red" : "#ccc";
}

normalBtn.onclick = function () {
    isLoop = false;
    updateBtn();
};

loopBtn.onclick = function () {
    isLoop = true;
    updateBtn();
};

nextBtn.onclick = function () {
    index = index + 1;
    index = isLoop ? index % numOfImage : Math.min(numOfImage - 1, index);
    updateImage();
};

prevBtn.onclick = function () {
    index = index - 1;
    index = isLoop ? (index + numOfImage) % numOfImage : Math.max(0, index);
    updateImage();
};