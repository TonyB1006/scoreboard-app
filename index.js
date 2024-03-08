let homeScoreEl = document.getElementById("home-points-total");
let guestScoreEl = document.getElementById("guest-points-total");
homeScore = 00;
guestScore = 00;
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function add1PointHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function add2PointHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function add3PointHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function sub1PointHome() {
    homeScore -= 1;
    homeScoreEl.textContent = homeScore;
}

function resetPointHome() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
}

function add1PointGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function add2PointGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function add3PointGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function sub1PointGuest() {
    guestScore -= 1;
    guestScoreEl.textContent = guestScore;
}

function resetPointGuest() {
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}

