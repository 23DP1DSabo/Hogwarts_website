async function getCatFact() {
    console.log("Cat button works.")
    try {
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        document.getElementById("fact-p").innerText = data.fact;
    } catch (error) {
        console.error("Error: ", error);
        document.getElementById("fact-p").innerText = "No fact for ya.";
    }
}


window.onload = function() {
        window.location.hash = "#Hero";
};


async function getHouse() {
    console.log("House button works.")
    try {
        let variable = ((Math.random() * 4))
        console.log(variable)
        if (variable <= 1) {
            document.getElementById("house").innerText = "Gryffindor!";
          } else if (variable > 1 && variable <= 2) {
            document.getElementById("house").innerText = "Slytherin!";
          } else if (variable > 2 && variable <=3) {
            document.getElementById("house").innerText = "Ravenclaw!";
          } else {
            document.getElementById("house").innerText = "Hufflepuff!";
          }
    } catch (error) {
        console.error("Error: ", error);
        document.getElementById("house").innerText = "Go study somewhere else.";
    }
}


document.getElementById("hat").addEventListener("click", function() {
    let originalSrc = this.src;
    let newSrc = "src/images/hat-back-removebg-preview.png";
    this.src = newSrc;
    setTimeout(() => {
      this.src = originalSrc;
    }, 400);
});