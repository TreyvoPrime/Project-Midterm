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
        text: "You reform the French legal system. Courts, and churches have been reformed to be more civil. Your citizens are already looking upwards to you! will you visit a courthouse to see a impending courtcase, or visit a church⛪.",
        decisions: [{text: "Visit a courthouse", next: "court"},
             {text:"Visit a church", next: "church"}
        ]
    },
    court: {
        title: "Courthouse",
        image: "./images/court.jpg",
        text: "The napoleonic codes have been passesd and you're at a courthouse viewing a courtcase! The judge rules in favor of conviction for the defendent. The defendent is sentenced to death. What do you do?",
        decisions: [{text: "Pardon the convicted", next: "pardon_convicted"},
             {text:"Send them to jail", next: "church"}
        ]
    },
    pardon_convicted: {
        title: "A New friend",
        image: "./images/napoleon_friendly.jpg",
        text: "A new friend has been made! he's a cool guy should you ask him to join the military or let him go back to normal life?🪖",
        decisions: [{text: "recruit them into the military🪖", next: "soilder_recruitment"},
             {text:"Leave them to go back into normal life🧑", next: "assasination"}
        ]
    },
    assasination: {
        title: "Assasination",
        image: "./images//dark_forest.jpg",
        text: "Evil has been done! You have been assasinated by your so called friend! You have failed your people! Your legacy is now ending in a tragic manner!",

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
        text: "Your search for British ships to destroy has been deeply unsuccessful. The endless hunt across the sea has left you exhausted. In the distance, you finally spot a chain of islands. You decide to take refuge there and retire as emperor. Perhaps conquest was never meant for you. ",
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
        text: "you've always had a appetite for meatballs🤤 you couldn't resist so you dig in! ",
        decisions:  [{text: "Return to port with all supplies", next: "prussian_declaration"}]
    },
    prussian_declaration: {
        title: "Prussian Declaration of war!",
        image:"./images/prussian_declaration.jpg",
        text: "After recent victorious conflicts with the british, European powers rally around each other to defeat you. Prussia offical declares war on your empire!.💥 ",
        decisions:  [{text: "Attempt diplomacy", next: "battle_gena"},
            {text: "Participate in the battle of Gena", next: "battle_gena"}

        ]
    },
    battle_gena: {
        title: "Battle of Gena!⚔️",
        image:"./images/battle_gena_victory.jpg",
        text: "After your leadership and, a long bloody battle, you emerge victorious! The battle of Gena is a turning point in the war, and the Prussian army surrenders due to their devastating defeat!🏳️ ",
        decisions:  [{text: "Seize Prussian Shipyards and ports!", next: "prussian_ports"},

        ]
    },
    prussian_diplomacy: {
        title: "Prussian diplomatic attemtps!",
        image:"./images/prussian_declaration.jpg",
        text: "After recent victorious conflicts with the british, European powers rally around each other to defeat you. Prussia offical declares war on your empire!.💥” ",
        decisions:  [{text: "Attempt diplomacy", next: "prussian_declaration"},
            {text: "Participate in the battle of Gena", next: "battle_gena"}

        ]
    },
    prussian_ports: {
        title: "The Prussian port!",
        image:"./images/prussian_ports.jpg",
        text: "You are now at the Prussian port, the port seaboard is bueatiful you enjoy your time there. You must make a decision either to build up your fleet or to rival the Royal navy or return back to France and invest into your economy🏭. ",

        decisions:  [{text: "Head back to France and invest into Economy🏭", next: "economic_investment"},
            {text: "Build a massive navy that rivales the British🏁", next: "naval_dominance"}

        ]
    },
    naval_dominance: {
        title: "Naval Superiority!",
        image:"./images/prussian_ports.jpg",
        text: "You are now ready to set sail with your newly built impressive navy. The british has nothing on you! set sail and crush anything that stands in your way. ",

        decisions:  []
    },
}

const heading = document.getElementById("main_heading")
const message = document.getElementById("message")
const image = document.getElementById("images")
const second_image = document.getElementById("second_image")
const button1 = document.getElementById("decision_one")
const button2 = document.getElementById("decision_two")
const button3 = document.getElementById("restart_button")
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
    if(sceneName === "naval_dominance"){

        button1.style.display = "inline-block"
        button1.innerText = "Achieve Naval Supremacy⚓"
    
        button1.onclick = () => {
            window.location.href = "./Endings/naval_supremacy.html"
        }
    
        button2.style.display = "none"
    }
    if(sceneName === "assasination"){

        button1.style.display = "inline-block"
        button1.innerText = "Accept your fate, and rest in silence🩸"
    
        button1.onclick = () => {
            window.location.href = "./Endings/assasination.html"
        }
    
        button2.style.display = "none"
    }
}

loadScene("coronation")
function reset_story() {
    loadScene("coronation")
}
button3.addEventListener("click", reset_story)
