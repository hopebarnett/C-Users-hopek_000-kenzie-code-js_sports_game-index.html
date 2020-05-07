// TO DO 1 
// Team one shots taken needs to  increase everytime teamOneButton is clicked
let teamOneShotCountSpanElement = document.querySelector("#teamone-numshots")
let teamOneShootButton = document.querySelector("#teamone-shoot-button")
let teamOneGoalCountSpanElement = document.querySelector("#teamone-numgoals")

    teamOneShootButton.addEventListener("click", function () {
    let currentTeamOneShotCount = Number(teamOneShotCountSpanElement.innerHTML)
    let newShotCount = currentTeamOneShotCount + 1
    teamOneShotCountSpanElement.innerHTML = newShotCount

    let randomNumberVar = Math.random()

    if (randomNumberVar > 0.5) {
        let currentTeamOneGoalCount = Number(teamOneGoalCountSpanElement.innerHTML)
        let newTeamOneGoalCount = currentTeamOneGoalCount + 1
        teamOneGoalCountSpanElement.innerHTML = (newTeamOneGoalCount)

    }

})



// TO DO 2
// Team two shots taken needs to  increase everytime teamTwoButton is clicked
let teamTwoShotCountSpanElement = document.querySelector("#teamtwo-numshots")
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoGoalCountSpanElement = document.querySelector("#teamtwo-numgoals")

    teamTwoShootButton.addEventListener("click", function () {
    let currentTeamTwoShotCount = Number(teamTwoShotCountSpanElement.innerHTML)
    let newShotCount = currentTeamTwoShotCount + 1
    teamTwoShotCountSpanElement.innerHTML = newShotCount

    let randomNumberVar = Math.random()

    if (randomNumberVar > 0.5) {
        let currentTeamTwoGoalCount = Number(teamTwoGoalCountSpanElement.innerHTML)
        let newTeamTwoGoalCount = currentTeamTwoGoalCount + 1
        teamTwoGoalCountSpanElement.innerHTML = (newTeamTwoGoalCount)

    }

})



//   TODO 3:  Give shots a random chance of succeeding
// if a random number GENERATED is greater than 0.5, then increment goals by 1


//  TO DO 4: Activate the RESET button so that clicking the button resets all the 
//  shots and score counters and adds 1 to the number of resets
const resetButton = document.querySelector("#reset-button")


resetButton.addEventListener("click", function() {

teamOneShotCountSpanElement.innerHTML = 0
teamOneGoalCountSpanElement.innerHTML = 0
teamTwoShotCountSpanElement.innerHTML = 0
teamTwoGoalCountSpanElement.innerHTML = 0


    const numberOfResetsElement = document.querySelector("#num-resets")
    let currentResetCount = Number(numberOfResetsElement.innerHTML)
    let newResetCount = currentResetCount + 1
    numberOfResetsElement.innerHTML = newResetCount
      





// let currentTeamTwoShotCount = Number(teamTwoShotCountSpanElement.innerHTML)
    // let newShotCount = currentTeamTwoShotCount + 1
    // teamTwoShotCountSpanElement.innerHTML = newShotCount


})

