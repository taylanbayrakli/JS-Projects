let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");



buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count <= 4) {
            value.style.color = "red";
        } else if (count >= 3 && count < 8) {
            value.style.color = "yellow";
        } else if (count >= 8) {
            value.style.color = "green";
        }

        if (count === 15) {
            alert("Daha fazla içmeniz zararınıza olabilir!")
            count
        }

        value.textContent = count;
    })
}) 
