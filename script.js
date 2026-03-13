//story lore including the title, image, text, and decisions used for each scene
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
            { text: "Recruit soldiers", next: "soilder_recruitment" },
            { text: "Strike Britain now", next: "strike_britain_now" }
        ]
    },
    napoleonic_code: {
        title: "Napoleonic Code",
        image: "./images/napoleonic_codes.jpg",
        text: "You reform the French legal system. Courts, and churches have been reformed to be more civil. Your citizens are already looking upwards to you! will you visit a courthouse to see a impending courtcase, or visit a church⛪",
        decisions: [{text: "Visit a courthouse", next: "court"},
             {text:"Visit a church", next: "church"}
        ]
    },
    court: {
        title: "Courthouse",
        image: "./images/court.jpg",
        text: "The napoleonic codes have been passed and you're at a courthouse viewing a courtcase! The judge rules in favor of conviction for the defendent. The defendent is sentenced to death. What do you do?",
        decisions: [{text: "Pardon the convicted", next: "pardon_convicted"},
             {text:"Send them to jail", next: "assasination"}
        ]
    },
    church: {
        title: "Church!",
        image: "./images/church.png",
        text: "The Napoleonic Code has been passed; however, angry Frenchmen are after you. You are at the church they knew you would come here. You must try to run and escape!",
        decisions: [{text: "Try to escape the country", next: "assasination"}]
    },
    pardon_convicted: {
        title: "A New friend",
        image: "./images/napoleon_friendly.jpg",
        text: "A new friend has been made! he's a cool guy should you ask him to join the military or let him go back to normal life?🪖",
        decisions: [{text: "recruit into the military🪖", next: "soilder_recruitment"},
             {text:"Leave them to go back into normal life🧑", next: "assasination"}
        ]
    },
    assasination: {
        title: "Assasination",
        image: "./images//dark_forest.jpg",
        text: "Evil has been done! You have been assasinated by a deranged frenchmen! You have failed your people! Your legacy is now ending in a tragic manner!",

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
        text: "you successfully board and raid a British convoy, capturing countless supplies that could greatly aid the war effort. Yet your craving for meatballs threatens to cut into the valuable spoils of the raid. What is your move? ",
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
        decisions:  [{text: "Attempt diplomacy", next: "prussian_diplomacy"},
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
        image:"./images/meeting_napoleon.webp",
        text: "You try diplomatic attempts with with the king of Prussia Frederick William III. Diplomatic attempts are successful and he has agreed to let his army fight along side you!🤝 ",
        decisions:  [{text: "Continue East...", next: "eastern_europe"}]
    },
    eastern_europe: {
        title: "War with Russia!",
        image:"./images/eastern_europe.jpg",
        text: "You are now at the steps of eastern Europe. Plotting a Invasion against Russia, what command shall you rally your troops around! to achieve victory in the conflict ",
        decisions:  [{text: "Take on a scorch Earth war tactic🔥", next: "scorched_earth"}, {text: "Rally up logistics📦", next: "logistics_rallied"}]

    },
    logistics_rallied: {
        title: "Logistics",
        image:"./images/logistics_rallied.jpg",
        text: "Logistics have been fully mobilized and organized for the campaign. You are prepared for war with Russia⚔️ ",
        decisions:  [{text: "March easterwards!➡️", next: "russian_invasion"}]
    },
    scorched_earth: {
        title: "Scorched Earth",
        image:"./images/logistics_rallied.jpg",
        text: "You invade Russia using a scorched earth tactic, burning everything your army crosses. However, your supplies are dwindling. Will your army be able to survive another fight?",
        decisions:  [{text: "Continue the invasion⏩", next: "russian_invasion_scorched"}]
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
    economic_investment: {
        title: "Economic Investment!",
        image:"./images/farm_lands.jpg",
        text: "The French people deserve economic investment after their hard work over the years; however, the military is in need of supplies and weaponry.",

        decisions:  [{text: "Shift manufactory to arms production🏭", next: "arms_production_increase"},
            {text: "go to farms and support your farmers🏁", next: "good_leader"}]
    },
    good_leader: {
        title: "Farmers delight...",
        image:"./images/farm_lands.jpg",
        text: "You hear cheers as farmers run alongside your horse-draw carriage, grateful that you put them first. Well done you are proving to be a strong leader after all",

        decisions:  []
        
    },
    arms_production_increase: {
        title: "Arms Industries!",
        image:"./images/soilders_armed.jpg",
        text: "You now posses the arms and Soilders shall recieve them. At the barrracks, you oversee the distribution of weapons preppering for conflict that now seems inevitable. ",

        decisions:  [{text: "Take military action against Russia⚔️", next: "russian_invasion"}]
        
    },
    russian_invasion: {
        title: "Invasion of Russia",
        image:"./images/russian_invasion.jpg",
        text: "Your empire stands at the top of the world. Countries have been conquered, factions destroyed. All rally behind you. Is your army ready to commence an invasion so vast the world has never seen before? The bear of the continent shall be slaughtered. ",
        decisions:  [{text: "Invade Russia⚔️", next: "battle_bordeno_victory"}]
        
    },
    russian_invasion_scorched: {
        title: "Invasion of Russia",
        image:"./images/russian_invasion.jpg",
        text: "Your empire stands at the top of the world. Countries have been conquered, factions destroyed. All rally behind you. Is your army ready to commence an invasion so vast the world has never seen before? The bear of the continent shall be slaughtered. ",

        decisions:  [{text: "Invade Russia⚔️", next: "battle_bordeno"}]
        
    },
    battle_bordeno: {
        title: "Battle of Bordino",
        image:"./images/battle_boreno.jpg",
        text: "The Battle of Borodino begins. Gunfire erupts on every side as the clash unfolds. Your army, weakened by dwindling supplies, begins to falter. You have lost this battle. There is no choice left but to order a retreat back to France.",

        decisions:  [{text: "Retreat, Retreat, Retreat🏃", next: "battle_bordino_retreat"}]
        
    },
    battle_bordino_retreat: {
        title: "French Homeland",
        image:"./images/battle_boreno_retreat.webp",
        text: "The british and her allies are  coming, your army is utterly humilated and weakend. A final stand must be made at the battle of waterloo! prove that your empire still has spark in it, and defeat the coalition!",

        decisions:  [{text: "Make a stand at Waterloo💨", next: "battle_waterloo"}]
        
    },
    battle_waterloo: {
        title: "Battle of Waterloo",
        image:"./images/battle_waterloo.jpg",
        text: "The Battle of Waterloo has began. Your men are being defeated by the thousands. You look to your right and left, soilders of your once mighty army continues to drop. In the end you are defeated by the coaltion.",

        decisions:  []
        
    },
    strike_britain_now: {
        title: "Immediate Invasion",
        image: "./images/british_victory.jpg",
        text: "War with Britain has begun. The British Empire commands the seas, while you enter the conflict unprepared. In a brutal battle, your army is crushed and forced into a humiliating defeat. The time has come to surrender and lay down your arms. The British Empire now stands ready to claim dominance over the world.",
        decisions: []
    },
    battle_bordeno_victory: {
        title: "Battle of Bordeno",
        image:"./images/battle_boreno_victory.jpg",
        text: "The Battle of Borodino begins. Gunfire erupts on every side as the clash unfolds. Your army, strengthened by your careful planning and fully prepared logistics, holds the advantage. The Russians, running low on supplies, are utterly defeated. You emerge victorious.",

        decisions:  [{text: "Let the Russians surrender🏃", next: "russian_surrender"}, 
            {text: "Scorch Moscow into flames 🔥", next: "burning_moscow"}
        ]
    },
    burning_moscow: {
        title: "Burning Moscow",
        image:"./images/burning_m_2.jpg",
        text: "Moscow shall be wiped off the face of the Earth. The Russians will never rise again. The world will be yours, as you have proven victorious!",

        decisions:  []
    },
    russian_surrender: {
        title: "Russians Surrender",
        image:"./images/russian_surrender.jpg",
        text: "The Russiasns have surrendered, after the battle. What will you do with them?",

        decisions:  [{text: "Recruit into your army🪖", next: "recruit_russians"}, 
            {text: "Leave them be🪑", next: "leave_russians_be"}]
    },
    recruit_russians: {
        title: "Russian Friendship",
        image:"./images/russian_invasion.jpg",
        text: "The Russians will fight alongside you in the final battle at Waterloo. Head to Waterloo now✨",

        decisions:  [{text: "March to Waterloo⚔️", next: "waterloo_battle"}]
    },
    leave_russians_be: {
        title: "Russians Accept",
        image:"./images/winter_land.jpg",
        text: "You have chosen to leave the Russians in their home country. They are forever grateful for your kindness. You must now head to Waterloo for a final battle.",

        decisions:  [{text: "March to Waterloo⚔️", next: "waterloo_battle"}]
    },
    waterloo_battle: {
        title: "Waterloo",
        image:"./images/waterloo_preperation.jpg",
        text: "The time has come at Waterloo. The battle is fierce, but you have proven yourself a true leader. Command your troops with precision, and secure victory on the battlefield.",

        decisions:  [{text: "Im Ready🌟", next: "battle"}]
    },
    battle: {
        title: "The Final Volley",
        image: "./images/waterloo_final.jpg",
        text: "Your army stands in formation. The enemy approaches. Command your line with precision.",
        decisions: []
    },
    napoleon_victory: {
        title: "Victory at Waterloo",
        image:"./images/napoleon_victory_1.webp",
        text: "The coalition forces have been defeated and sent running. You have secured victory at Waterloo. The world is yours to command. Your legacy is secured, and you will go down in history as one of the greats.",

        decisions:  []
    },
    battle_waterloo_incorrect_command: {
        title: "Battle of Waterloo",
        image:"./images/battle_waterloo.jpg",
        text: "The Battle of Waterloo has began. Your men are being defeated by the thousands. You look to your right and left, soilders of your once mighty army continues to drop. You have issued the wrong command❌ in the wrong order. In the end you are defeated by the coaltion.",

        decisions:  []
        
    },
}

const heading = document.getElementById("main_heading") //main heading
const message = document.getElementById("message") // text being displayed
const image = document.getElementById("images") //images being displayed for scenes
const second_image = document.getElementById("second_image") // second image if required
const button1 = document.getElementById("decision_one") //button for decision one
const button2 = document.getElementById("decision_two") //button for decision two
const button3 = document.getElementById("restart_button") //restart button for restarting story 
const battleControls = document.getElementById("battle_controls") //battle controls 

const makeReady = document.getElementById("make_ready")
const makePresent = document.getElementById("make_present")
const fireButton = document.getElementById("fire")

let battleStep = 0
let button1Next = null
let button2Next = null

button1.addEventListener("click", () => {
    if(button1Next) loadScene(button1Next)
})
button2.addEventListener("click", () => {
    if(button2Next) loadScene(button2Next)
})

//loop through and play musket sound so it sounds like a musket being volley fired
function playMusketSound(){
    for(let i = 0; i < 3; i++){

        setTimeout(() => {

            const musket = new Audio("/Project-Midterm/Audio/musket_fire.mp3")
            musket.play()

        }, i * 200)

    }

}
// Format title capitalizes each tite so that it looks nicely
function formatTitle(title){

    const words = title.split(" ")

    for(let i = 0; i < words.length; i++){

        words[i] = words[i][0].toUpperCase() + words[i].slice(1)

    }

    return words.join(" ")

}
// Load scene function used for loading each scene from the scenes array
function loadScene(sceneName){

    try {

        const scene = scenes[sceneName]

        if(!scene){
            throw new Error("Scene not found: " + sceneName)
        }
    // apply format title function to scene titiles
        heading.innerText = formatTitle(scene.title)
        message.innerText = scene.text
        image.src = scene.image
    //change image size based off if there is a second iiamge
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
    // Redircects player to ending scenes 
        if (sceneName === "faroe_islands") {
            button1.style.display = "inline-block"
            button1.innerText = "Enter Paradise ☀️"

            button1.onclick = () => {
                window.location.href = "./Endings/paradise.html"
            }

            button2.style.display = "none"
        }

        if (sceneName === "naval_dominance") {
            button1.style.display = "inline-block"
            button1.innerText = "Achieve Naval Supremacy⚓"

            button1.onclick = () => {
                window.location.href = "./Endings/naval_supremacy.html"
            }

            button2.style.display = "none"
        }

        if (sceneName === "assasination") {
            button1.style.display = "inline-block"
            button1.innerText = "Accept your fate, and rest in silence🩸"

            button1.onclick = () => {
                window.location.href = "./Endings/assasination.html"
            }

            button2.style.display = "none"
        }

        if (sceneName === "good_leader") {
            button1.style.display = "inline-block"
            button1.innerText = "Enter the gilded age of the French Empire!💰"

            button1.onclick = () => {
                window.location.href = "./Endings/goodLeader.html"
            }

            button2.style.display = "none"
        }

        if (sceneName === "battle_waterloo"){
            button1.style.display = "inline-block"
            button1.innerText = "There's nothing we can do😔"
            const nothing_we_can_do = new Audio("./Audio/nothing_we_can_do.mp3")
            nothing_we_can_do.play()
            button1.onclick = () => {
                window.location.href = "./Endings/realEnding.html"
            }

            button2.style.display = "none"
        }

        if (sceneName === "strike_britain_now") {
            button1.style.display = "inline-block"
            button1.innerText = "Accept defeat😔"

            button1.onclick = () => {
                window.location.href = "./Endings/defeat.html"
            }

            button2.style.display = "none"
        }

        if (sceneName === "burning_moscow") {
            button1.style.display = "inline-block"
            button1.innerText = "Burn it to the ground🔥"

            button1.onclick = () => {
                window.location.href = "./Endings/burning_m.html"
            }

            button2.style.display = "none"
        }

        if(sceneName === "battle"){
            battleControls.style.display = "block"

            button1.style.display = "none"
            button2.style.display = "none"

            battleStep = 0
        } else {
            battleControls.style.display = "none"
        }

        if (sceneName === "battle_waterloo_incorrect_command"){
            button1.style.display = "inline-block"
            button1.innerText = "There's nothing we can do😔"
            button1.onclick = () => {
                window.location.href = "./Endings/realEnding.html"
            }

            button2.style.display = "none"
        }

        if (sceneName === "napoleon_victory"){
            button1.style.display = "inline-block"
            button1.innerText = "Rule the world🌍"

            button1.onclick = () => {
                window.location.href = "./Endings/VictoryEnding.html"
            }

            button2.style.display = "none"
        }

    } catch(error) {
        // Catch if a scene has not been loaded 
        console.error("Scene loading error:", error)

        heading.innerText = "Error"
        message.innerText = "Scene could not be loaded."
        image.src = ""

    }
}
// loose battle function if user clicks combat buttons in incorrect order
function loseBattle(){
    message.innerText = "Your commands were disorganized. The line collapses and the coalition has overwhelmed you."
    loadScene("battle_waterloo_incorrect_command")
}
makeReady.addEventListener("click", () => {

    if (battleStep === 0) {
        battleStep = 1
        message.innerText = "Your soldiers raise their muskets..."
    } else {
        loseBattle()
    }

})
//present button used to present weaponry during final battle
makePresent.addEventListener("click", () => {

    if (battleStep === 1) {
        battleStep = 2
        message.innerText = "Your army takes aim at the enemy line..."
    } else {
        loseBattle()
    }

})
// fire buton used to fire during final battle
fireButton.addEventListener("click", () => {

    if (battleStep === 2) {
        playMusketSound()
        message.innerText = "A volley erupts across the battlefield!"
        loadScene("napoleon_victory")
    } else {
        loseBattle()
    }

})
//start the page on the coronation scene
loadScene("coronation")
//function used to reset the strory
function reset_story() {
    loadScene("coronation")
}
//event listener for the button that resets story
button3.addEventListener("click", reset_story)
