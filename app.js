const weapons = {
    air: {
        name: "Air",
        icon: 'fas fa-wind air align-middle',
        sound: "WHOOSH!",
        action: "BLOWS AWAY",
        win: ["fire", "lightning", "water", "paper", "cat"]
    },
    water: {
        name: "Water",
        icon: 'fas fa-tint water align-middle',
        sound: "SPLASH!",
        action: "SOAKS",
        win: ["fire", "bomb", "paper", "scissors", "cat"]
    },
    rock: {
        name: "Rock",
        icon: 'fas fa-gem rock align-middle',
        sound: "CRASH!",
        action: "SMASHES",
        win: ["air", "fire", "lightning", "water", "scissors"]
    },
    paper: {
        name: "Paper",
        icon: 'fas fa-scroll paper align-middle',
        sound: "FLAP!",
        action: "COVERS",
        win: ["lightning", "rock", "cat", "human", "roach"]
    },
    scissors: {
        name: "Scissors",
        icon: 'fas fa-cut scissors align-middle',
        sound: "SHING!",
        action: "SLICES",
        win: ["air", "bomb", "paper", "human", "roach"]
    },
    roach: {
        name: "Roach",
        icon: 'fas fa-bug roach align-middle',
        sound: "EEEK!",
        action: "OUTLIVES",
        win: ["air", "rock", "water", "bomb", "human"]
    },
    bomb: {
        name: "Bomb",
        icon: 'fas fa-bomb bomb align-middle',
        sound: "BOOM!",
        action: "BLOWS UP",
        win: ["air", "rock", "paper", "cat", "human"]
    },
    human: {
        name: "Human",
        icon: 'fas fa-user-tie human align-middle',
        sound: "MUAHAHA!",
        action: "MASTERS",
        win: ["air", "fire", "lightning", "rock", "water"]
    },
    fire: {
        name: "Fire",
        icon: 'fas fa-fire-alt fire align-middle',
        sound: "CRACKLE!",
        action: "INCINERATES",
        win: ["bomb", "paper", "scissors", "cat", "roach"]
    },
    lightning: {
        name: "Lightning",
        icon: 'fas fa-bolt lightning align-middle',
        sound: "ZAP!",
        action: "VAPORIZES",
        win: ["fire", "water", "bomb", "scissors", "roach"]
    },
    cat: {
        name: "Cat",
        icon: 'fas fa-cat cat align-middle',
        sound: "MEOW!",
        action: "OUTSMARTS",
        win: ["lightning", "rock", "scissors", "human", "roach"]
    },
}
const weaponsArr = Object.keys(weapons)
let player = {}
let computer = {}

let playerStatus = ""
let computerStatus = ""
let fightText = ""
let fightColor = ""
let fightSound = ""
let arrow = ""

function chooseWeapon(type) {
    let random = Math.floor(Math.random() * weaponsArr.length)
    let id = weaponsArr[random]
    player = weapons[type]
    computer = weapons[id]
    superFight()
}

function superFight() {
    document.getElementById("arena").classList.remove("hidden")
    document.getElementById("welcome").classList.add("hidden")
    if (player.name == computer.name) {
        playerStatus = "draw"
        computerStatus = "draw"
        arrow = "fas fa-equals text-light"
        fightColor = "text-light"
        fightText = "It's a <strong>draw</strong>!"
        fightSound = ""
    } else if (player.win.includes(`${computer.name.toLowerCase()}`)) {
        playerStatus = "win"
        computerStatus = "lose"
        arrow = "fas fa-arrow-right text-success"
        fightColor = "text-success"
        fightSound = `${player.sound}`
        fightText = `<strong>${player.name}<strong> ${player.action} <strong>${computer.name}</strong>!`
    } else if (computer.win.includes(`${player.name.toLowerCase()}`)) {
        playerStatus = "lose"
        computerStatus = "win"
        arrow = "fas fa-arrow-left text-danger"
        fightColor = "text-danger"
        fightSound = `${computer.sound}`
        fightText = `<strong>${computer.name}<strong> ${computer.action} <strong>${player.name}</strong>!`
    }
    draw()
}

function draw() {
    let arenaElement = document.getElementById("arena")
    let template = `
            <div id="arena">
            <div class="row justify-content-center text-center">
                <div class="col-8 card bg-dark text-warning mb-5">
                    <p class= "title pt-3 mb-0"> <strong>${fightSound}</strong> </p>
                    <p id="fight" class="title mt-0 ${fightColor}">${fightText}</p>
                </div>
            </div>
            <div class="row justify-content-center text-center pt-3">
                <div class="col-3">
                    <button class="${playerStatus} big-button" onclick="chooseWeapon('${player.name.toLowerCase()}')">
                        <p><i class="${player.icon}"></i></p>
                    </button>
                </div>
                <div class="col-2">
                    <p><i class="${arrow} aligh-middle big-title py-3" onclick="location.reload()"></i></p>
                </div>
                <div class="col-3">
                    <button class="${computerStatus} big-button" onclick="chooseWeapon('${computer.name.toLowerCase()}')">
                        <p><i class="${computer.icon}"></i></p>
                    </button>
                </div>
            </div>
        `
    arenaElement.innerHTML = template
}