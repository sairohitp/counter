let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("increaseBtn")) {
            count++;
        } else if (styles.contains("decreaseBtn")) {
            count--;
        } else if (styles.contains("resetBtn")) {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        } else if (count == 0) {
            value.style.color = "black"
        } else {
            value.style.color = "red"
        }
        value.textContent = count;
    })
})