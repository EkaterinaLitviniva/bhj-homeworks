const cliker = document.getElementById("clicker__counter");

const image = document.getElementById("cookie");

image.onclick = () => {

    cliker.textContent = Number(cliker.textContent) + 1;

    if (Number(cliker.textContent) % 2 == 0) {
        image.width = '200';
    } else {
        image.width = '250';
    }
};