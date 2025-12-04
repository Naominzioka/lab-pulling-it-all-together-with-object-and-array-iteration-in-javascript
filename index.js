function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const gameObj = gameObject()
    const homePlayers = gameObj.home.players
    const awayPlayers = gameObj.away.players

    // first search home players
    for (const player in homePlayers) {
        if (player === playerName) {
            return homePlayers[player].points
        }
    }
    // search away players
    for (const player in awayPlayers) {
        if (player === playerName) {
            return awayPlayers[player].points
        }
    }

    return null // null means not found
}

//const playerName = "Jeff Adrien"
//console.log(`Points scored by ${playerName}: ${numPointsScored(playerName)}`)

function shoeSize(playerName) {
    const gameObj = gameObject()
    const homePlayers = gameObj.home.players
    const awayPlayers = gameObj.away.players

    // first search home players
    for (const player in homePlayers) {
        if (player === playerName) {
            return homePlayers[player].shoe
        }
    }
    // search away players
    for (const player in awayPlayers) {
        if (player === playerName) {
            return awayPlayers[player].shoe
        }
    }

    return null
}
//const playerName = "Jeff Adrien";
//console.log(shoeSize(playerName))

function teamColors(teamName) {
    const gameObj = gameObject();
    if (gameObj.home.teamName === teamName) {
        return gameObj.home.colors
    }

    if (gameObj.away.teamName === teamName) {
        return gameObj.away.colors
    }
    return null

}

//const teamName = "Charlotte Hornets"
//console.log(`The team playing is ${teamColors(teamName)}`)

function teamNames() {
    const gameObj = gameObject();
    const awayPlayers = gameObj.away.teamName;
    const homePlayers = gameObj.home.teamName;
    return [homePlayers, awayPlayers]
}

//console.log(teamNames());
function playerNumbers(teamName) {
    const gameObj = gameObject();
    const teamNumbers = []
    let matchingTeam
    if (gameObj.home.teamName === teamName) {
        matchingTeam = gameObj.home
    } else {
        matchingTeam = gameObj.away
    }

    const players = matchingTeam.players

    for (const player of Object.values(players)) {
        teamNumbers.push(player.number)
    }

    return teamNumbers
}

// console.log(playerNumbers('Charlotte Hornets'))
function playerStats(playerName) {
    const gameObj = gameObject();
    //we have the name of the player but we dont know which team they belong to
    //so we will check both teams
    const homePlayers = gameObj.home.players
    const awayPlayers = gameObj.away.players
    //we will first check the home team and if we find our player no need to check the away team

    for (const pName in homePlayers) {
        //check if the player's name is strictly equal to the playername we were given
        if (playerName === pName) {
            return homePlayers[playerName]
        }
    }
    //checking away team since the player is not in home team

    for (const pName in awayPlayers) {
        if (playerName === pName) {
            return awayPlayers[playerName]
        }
    }
}
//console.log(playerStats("Brendan Hayword"));

function bigShoeRebounds() {
    const gameObj = gameObject()
   let largestShoe = 0;
   let rebounds = 0;

    const homePlayers = gameObj.home.players
    const awayPlayers = gameObj.away.players

    //checking all shoe sizes first
 for (const playerName in homePlayers) {
    const playerStats = homePlayers[playerName];
    if (playerStats.shoe > largestShoe) {
        largestShoe = playerStats.shoe;
        rebounds = playerStats.rebounds;
    }
 }
 for (const playerName in awayPlayers) {
    const playerStats = awayPlayers[playerName];
    if (playerStats.shoe > largestShoe) {
        largestShoe = playerStats.shoe;
        rebounds = playerStats.rebounds;
    }
 }
return rebounds    
}
//console.log(bigShoeRebounds());

