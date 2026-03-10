const decision_one = document.getElementById("decision_one")
const decicsion_two = document.getElementById("decision_two")
const decision_three = document.getElementById("decision_three")
const main_heading = document.getElementById("main_heading")
scene_number_decisions_one = 0;
scene_number_decisions_two = 0;

function DecisionOneChanger()  {
    const images = document.getElementById("images")
    scene_number_decisions_one = scene_number_decisions_one + 10;
    console.log(scene_number_decisions_one)
    if (scene_number_decisions_one == 10) {
        images.src = "./images/declaration_war_UK1.webp";
        sceneNumber = 10;
        main_heading.innerHTML = "Declaration of War on Great Britain"


    }
}
function DecisionTwoChanger()  {
    const images = document.getElementById("images")
    scene_number_decisions_two = scene_number_decisions_two + 5;
    console.log(scene_number_decisions_two)
    if (scene_number_decisions_two == 5) {
        images.src = "./images/napoleonic_codes.jpg";
        main_heading.innerHTML = "Napoleonic Code"

    }
}
decision_one.addEventListener("click", DecisionOneChanger)
decision_two.addEventListener("click", DecisionTwoChanger)