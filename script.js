document.querySelector('.cross').style.display = "none";

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sideBar').classList.toggle('sideBarGo');

    if (document.querySelector('.sideBar').classList.contains('sideBarGo')) {
        document.querySelector('.cross').style.display = "none";
        document.querySelector('.ham').style.display = "inline";
    }
    else {
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline";
        }, 300);
        document.querySelector('.ham').style.display = "none";
    }
})