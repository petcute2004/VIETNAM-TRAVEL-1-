console.log("ok")

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        console.log(this.window.scrollY)
        if (this.window.scrollY > 159.1999969482422) {
            this.document.getElementById('menu-w').classList.remove("menu-100");
            this.document.getElementById('menu-w').classList.add("sticky-menu");
        } else if (this.window.scrollY > 100) {
            this.document.getElementById('menu-w').classList.add("menu-100");

        } else {
            this.document.getElementById('menu-w').classList.remove('sticky-menu');
            this.document.getElementById('menu-w').classList.remove("menu-100");

        }
    })
})
