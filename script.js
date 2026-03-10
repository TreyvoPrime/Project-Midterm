const scenes = {
    coronation: {
        title: "Napoleon's Coronation",
        image: "./images/coronation_scene.jpg",
        text: "You have just been crowned Emperor of France. The ceremony has ended, but the weight of the crown is already clear. The first decision of your reign is yours to make. What will be your first command?",
        decisions: [
            { text: "Declare war on Great Britain", next: "declaration_war_GB1" },
            { text: "Pass the Napoleonic Code", next: "napoleonic_code" }
        ]
    },
    declaration_war_GB1: {
        title: "Declaration of War on Great Britain",
        image: "./images/declaration_war_UK1.webp",
        text: "War with Britain begins. The British Empire controls the seas, while France dominates the continent. Prime Minister William Pitt has rallied Britain and its allies to resist your growing power. Will you attempt to recruit more soldiers to strengthen your army, or strike at it now and not later?",
        decisions: [
            { text: "Head to recruit soldiers", next: "soilder_recruitment" },
            { text: "Strike Britain now", next: "strike_britain_now" }
        ]
    },
    napoleonic_code: {
        title: "Napoleonic Code",
        image: "./images/napoleonic_codes.jpg",
        text: "You reform the French legal system.",
        decisions: []
    },
    soilder_recruitment: {
        title: "Soilder Recruitment",
        image: "./images/soilder_recruitment.jpg",
        text: "You have raised a fierce and powerful army, trained and loyal to your command. The banners of your empire fly high above thousands of soldiers ready for battle. You now need to head to the general school and appoint a capable general to lead your army with you.",
        decisions: [
            { text: "Recruit your mighty generals", next: "general_school" }
        ]
    },
    general_school: {
        title: "General School",
        image:"./images/louis_nicolas.webp",
        secondImage: "./images/michel_ney.jpg",
        text: "Two seasoned generals stand ready at the academy, eager for battle. Which one will you choose to lead with you on your adventure?",
        decisions:  [
            { text: "Louis Nicolas(left)", next: "dockyards" },
            { text: "Michel Ney(right)", next: "dockyards" }
        ]
    },
    dockyards: {
        title: "The Dockyards",
        image:"./images/dockyards.png",
        text: "You are now at the dockyards, admiring your country's beautiful coast. You must now venture to the central docks and appoint an admiral",
        decisions:  [
            { text: "Lets roll!", next: "central_dockyards_admirals" },
        ]
    },
    central_dockyards_admirals: {
        title: "Central dockyards Admiral Appointment",
        image:"./images/Julien_Cosmao.png",
        secondImage: "./images/pierre_martin.png",
        text: "Two great admirals stand ready at the central dockyards, eager to command the fleet. Which one will you choose to lead with you on your adventure?",
        decisions:  [
            { text: "Julien Cosmaos(left)", next: "fleet_command" },
            { text: "Pierre Martin(right)", next: "fleet_command" }
        ]
    },
    fleet_command: {
        title: "Preperations to set sail!",
        image:"./images/french_ship.jpg",
        text: "You board your ship alongside your newly appointed naval commander. The fleet waits in the harbor as you prepare to set out on a maritime adventure against Britain. What is your next move? ",
        decisions:  [
            { text: "Patrol the open seas🚢", next: "open_seas" },
            { text: "Convoy raid british ships📦", next: "convoy_raid" }
        ]
    },
    open_seas: {
        title: "Napoloeon in the Open Seas!",
        image:"./images/open_seas.webp",
        text: "You have spent weaks patrolling the seas for British ships, yet none have appeared on the horizon. The long, fruitless hunt has left you tired and weary. ",
        decisions:  [
            { text: "Keep sailing onwards!🚢", next: "faroe_islands" },
        ]
    },  
    faroe_islands: {
        title: "The Faroe Islands",
        image:"./images/faroe_islands.webp",
        text: "Your search for British ships to destroy has been deeply unsuccessful. The endless hunt across the sea has left you exhausted. In the distance, you finally spot a chain of islands. You decide to take refuge there and retire as emperor. Perhaps conquest was never meant for you.” ",
        decisions:  [ ] 
    },
    convoy_raid: {
        title: "Convoy Raid!",
        image:"./images/convoy_raid.jpg",
        text: "you successfully board and raid a British convoy, capturing countless supplies that could greatly aid the war effort. Yet your craving for meatballs threatens to cut into the valuable spoils of the raid. What is your move?” ",
        decisions:  [{text: "Return to port with all supplies", next: "prussian_declaration"},
            {text: "Eat the meatballs", next: "meatball_scene"}]
    },
    meatball_scene: {
        title: "Meatballs!",
        image:"./images/meatball_scene.jpg",
        text: "you've always had a appetite for meatballs🤤 you couldn't resist so you dig in!” ",
        decisions:  [{text: "Return to port with all supplies", next: "prussian_declaration"},
            {text: "Eat the meatballs", next: "meatball_scene"}]
    },
}

const heading = document.getElementById("main_heading")
const message = document.getElementById("message")
const image = document.getElementById("images")
const second_image = document.getElementById("second_image")
const button1 = document.getElementById("decision_one")
const button2 = document.getElementById("decision_two")

let button1Next = null
let button2Next = null

button1.addEventListener("click", () => {
    if(button1Next) loadScene(button1Next)
})
button2.addEventListener("click", () => {
    if(button2Next) loadScene(button2Next)
})

function loadScene(sceneName){
    const scene = scenes[sceneName]

    heading.innerText = scene.title
    message.innerText = scene.text
    image.src = scene.image

    if(scene.secondImage){
        second_image.src = scene.secondImage
        second_image.style.display = "inline-block"

        image.style.height = "250px"
        image.style.width = "auto"
        second_image.style.height = "250px"
        second_image.style.width = "auto"
    } else {
        second_image.style.display = "none"

        image.style.height = "350px"
        image.style.width = "575px"
    }

    if(scene.decisions && scene.decisions[0]){
        button1.innerText = scene.decisions[0].text
        button1.style.display = "inline-block"
        button1Next = scene.decisions[0].next
    } else {
        button1.style.display = "none"
        button1Next = null
    }

    if(scene.decisions && scene.decisions[1]){
        button2.innerText = scene.decisions[1].text
        button2.style.display = "inline-block"
        button2Next = scene.decisions[1].next
    } else {
        button2.style.display = "none"
        button2Next = null
    }
    if(sceneName === "faroe_islands"){

        button1.style.display = "inline-block"
        button1.innerText = "Enter Paradise ☀️"
    
        button1.onclick = () => {
            window.location.href = "./Endings/paradise.html"
        }
    
        button2.style.display = "none"
    }
}
loadScene("coronation")
