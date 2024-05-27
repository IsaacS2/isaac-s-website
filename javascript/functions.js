/* Printing Resume Webpage */

function removeImages() {
    const projectImages = document.querySelectorAll(".project-item img");
    for (let image of projectImages) {
        image.style.display = "none";
    }
}

function returnImages() {
    const projectImages = document.querySelectorAll(".project-item img");
    for (let image of projectImages) {
        image.style.display = "block";
    }
}

function removeDownloadLink() {
    document.querySelector(".download-link").style.display = "none";
}

function returnDownloadLink() {
    document.querySelector(".download-link").style.display = "block";
}

function prepPrinting() {
    removeImages();
    removeDownloadLink();
}

function returnAfterPrinting() {
    returnImages();
    returnDownloadLink();
}

window.addEventListener("beforeprint", () => prepPrinting())
window.addEventListener("afterprint", () => returnAfterPrinting())
