var btns = document.querySelectorAll(".list-item");
btns.forEach(button => {
    button.addEventListener("click", function() {
        btns.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active")
    })
})
