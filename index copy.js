let homeCount = 0
let guestCount = 0

let homeScore = document.getElementById("home-count")
let guestScore = document.getElementById("guest-count")

function plus1Home() {
    homeCount += 1
    homeScore.textContent = homeCount
    
}

function plus2Home() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function plus3Home() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function plus1Guest() {
    guestCount += 1
    guestScore.textContent = guestCount

    
}
function plus2Guest() {
    guestCount += 2
    guestScore.textContent = guestCount
    
}
function plus3Guest() {
    guestCount += 3
    guestScore.textContent = guestCount
    
}