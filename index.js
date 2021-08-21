
let open = false;
// Getting the mobile menu----

const mobile_menu = document.getElementById('mobile__menu');

// Adding click lisnter-----
document.getElementById('open').addEventListener('click', (e) => {
    open = !open;

    console.log(e.target);

    if(open) {
        mobile_menu.style.display = "flex";
    } else {
        mobile_menu.style.display = "none"
    }
})





