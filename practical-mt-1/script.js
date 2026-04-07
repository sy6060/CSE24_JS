let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userinput");
let fontSize = 20; // corrected variable name

// Change heading text
document.getElementById("changeheading").addEventListener("click", function() {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

// Change background color
document.getElementById("bgcolorbtn").onclick = function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// Increase font size
document.getElementById("increasefontsize").addEventListener("click", function() {
    fontSize += 4;
    heading.style.fontSize = fontSize + "px";
    paragraph.style.fontSize = fontSize + "px";
});

// Decrease font size
document.getElementById("decreasefontsize").addEventListener("click", function() {
    fontSize -= 4;
    heading.style.fontSize = fontSize + "px";
    paragraph.style.fontSize = fontSize + "px";
});

// Toggle paragraph visibility
document.getElementById("toggleparagraph").addEventListener("click", function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset heading and paragraph to default
document.getElementById("resetbtn").addEventListener("click", function() {
    heading.innerHTML = "DOM Manipulation Experiment";
    paragraph.innerHTML = "sample paragraph";
    document.body.style.backgroundColor = "white";
    fontSize = 20; // reset to initial value
    heading.style.fontSize = fontSize + "px";
    paragraph.style.fontSize = fontSize + "px";
    paragraph.style.display = "block";
    input.value = "";
});