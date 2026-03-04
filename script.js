function showWelcome() {
    alert("Welcome to my site!")
}





function handleSubmit(e) {
    e.preventDefault();

    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;

    var safeFName = fName.replace(/ /g, "+");
    var safeLName = lName.replace(/ /g, "+");

    window.location.href = "userStart.html?fname=" + safeFName + "&lname=" + safeLName;

    return false;
}




function showUserWelcome() {
    var params = new URLSearchParams(window.location.search);
    var fName = params.get("fname");
    var lName = params.get("lname");

    if (fName && lName) {
        var welcomeEl = document.getElementById("welcome");
        if (welcomeEl) {
            welcomeEl.textContent = "Welcome " + fName + " " + lName + "!";
        }
    } else {
        var welcomeEl = document.getElementById("welcome");
        if (welcomeEl) {
            welcomeEl.textContent = "Welcome Guest";
        }
    }
}




var toggleBtn = document.getElementById("themeToggle");
var body = document.body;
var form = document.getElementById("info");
var isDark = false;

toggleBtn.onclick = function () {
    if (!isDark) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        form.style.backgroundColor = "#333";
        var radioBoxes = document.querySelectorAll(".radio-box");
        radioBoxes.forEach(function (box) {
            box.style.color = "black";
        });

        toggleBtn.textContent = "Dark";
        toggleBtn.style.left = "66px";
        toggleBtn.style.backgroundColor = "#006400";
        isDark = true;
    } else {
        body.style.backgroundColor = "";
        body.style.color = "";
        form.style.backgroundColor = "";

        var radioBoxes = document.querySelectorAll(".radio-box");
        radioBoxes.forEach(function (box) {
            box.style.color = "black";
        });

        toggleBtn.textContent = "Light";
        toggleBtn.style.left = "4px";
        toggleBtn.style.backgroundColor = "#228B22";
        isDark = false;
    }
};







function calculate(operation) {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var a = parseFloat(n1);
    var b = parseFloat(n2);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerHTML = "Result: Please enter valid numbers";
        return;
    }

    var res;

    if (operation === "sum") {
        res = a + b;
    } else if (operation === "subtract") {
        res = a - b;
    } else if (operation === "multiply") {
        res = a * b;
    } else if (operation === "divide") {
        if (b === 0) {
            document.getElementById("result").innerHTML = "Result: Cannot divide by zero";
            return;
        }
        res = a / b;
    }

    document.getElementById("result").innerHTML = "Result: " + res;
}
