function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evens': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
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
        }, // 96
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismack Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Hayword': {
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
        }, // 85
    };
}

function numPointsScored(playerName) {
    const gameObj = gameObject();
    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;

    // first search home players
    for (const player in homePlayers) {
        if (player === playerName) {
            return homePlayers[player].points;
        }
    }
    // search away players
    for (const player in awayPlayers) {
        if (player === playerName) {
            return awayPlayers[player].points;
        }
    }

    return null; // null means not found;
}

//const playerName = "Jeff Adrien";
//console.log(`Points scored by ${playerName}: ${numPointsScored(playerName)}`);

function shoeSize(playerName) {
    const gameObj = gameObject();
    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;

    // first search home players
    for (const player in homePlayers) {
        if (player === playerName) {
            return homePlayers[player].shoe;
        }
    }
    // search away players
    for (const player in awayPlayers) {
        if (player === playerName) {
            return awayPlayers[player].shoe;
        }
    }

    return null;
}
//const playerName = "Jeff Adrien";
//console.log(shoeSize(playerName))

function teamColors(teamName) {
    const gameObj = gameObject();
    if (gameObj.home.teamName === teamName) {
        return gameObj.home.colors;
    }

    if (gameObj.away.teamName === teamName) {
        return gameObj.away.colors;
    }
    return null;

}

//const teamName = "Charlotte Hornets"
//console.log(`The team playing is ${teamColors(teamName)}`)

function teamNames() {
    const gameObj = gameObject();
    const awayPlayers = gameObj.away.teamName;
    const homePlayers = gameObj.home.teamName;
    return [homePlayers, awayPlayers];
}

//console.log(teamNames());
function playerNumbers(teamName) {
    const gameObj = gameObject();
    const teamNumbers = [];
    let matchingTeam;
    if (gameObj.home.teamName === teamName) {
        matchingTeam = gameObj.home;
    } else {
        matchingTeam = gameObj.away;
    }

    const players = matchingTeam.players;

    for (const player of Object.values(players)) {
        teamNumbers.push(player.number);
    }

    return teamNumbers;
}

// console.log(playerNumbers('Charlotte Hornets'))
function playerStats(playerName) {
    const gameObj = gameObject();
    //we have the name of the player but we dont know which team they belong to
    //so we will check both teams
    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;
    //we will first check the home team and if we find our player no need to check the away team

    for (const pName in homePlayers) {
        //check if the player's name is strictly equal to the playername we were given
        if (playerName === pName) {
            return homePlayers[playerName];
        }
    }
    //checking away team since the player is not in home team

    for (const pName in awayPlayers) {
        if (playerName === pName) {
            return awayPlayers[playerName];
        }
    }
}
//console.log(playerStats("Brendan Hayword"));

function bigShoeRebounds() {
    const gameObj = gameObject();
    let largestShoe = 0;
    let rebounds = 0;

    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;

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
    return rebounds;
}
//console.log(bigShoeRebounds());

function mostPointsScored() {
    const gameObj = gameObject();
    let mostPoints = 0;
    let topPlayer = '';
    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;
    for (const playerName in homePlayers) {
        const playerStats = homePlayers[playerName];
        if (playerStats.points > mostPoints) {
            mostPoints = playerStats.points;
            topPlayer = playerName;

        }
    }
    for (const playerName in awayPlayers) {
        const playerStats = awayPlayers[playerName];
        if (playerStats.points > mostPoints) {
            mostPoints = playerStats.points;
            topPlayer = playerName;

        }
    }
    return topPlayer;
}
//console.log(mostPointsScored());

function winningTeam() {
    const gameObj = gameObject();
    let homeTotal = 0;
    let awayTotal = 0;

    const homePlayersPoints = Object.values(gameObj.home.players);
    const awayPlayersPoints = Object.values(gameObj.away.players);
    //the for..of loop goes through each player in home players and
    //away players,gets the points add them up += then gives me the total
    //const player is just a temporary variable to hold the current
    //player's data for that single loop
    for (const player of homePlayersPoints) {
        homeTotal += player.points;
    }
    for (const player of awayPlayersPoints) {
        awayTotal += player.points;
    }
    console.log(`Home total: ${homeTotal}`);
    console.log(`Away total: ${awayTotal}`);
    const homeTeam = gameObj.home.teamName;
    const awayTeam = gameObj.away.teamName;
    if (homeTotal > awayTotal) {
        return homeTeam;
    } else if (awayTotal > homeTotal) {
        return awayTeam;
    }
    return 'It\'s a tie';
}
//console.log(winningTeam());

function playerWithLongestName() {
    const gameObj = gameObject();
    //used object.keys to get the names in an array
    const homePlayersNames = Object.keys(gameObj.home.players);
    const awayPlayersNames = Object.keys(gameObj.away.players);
    //joined both the home and way names
    const allPlayersNames = [...homePlayersNames, ...awayPlayersNames];
    let longestName = '';
    for (const name of allPlayersNames) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}
//console.log(playerWithLongestName());

function doesLongNameStealATon() {
    const gameObj = gameObject();
    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;

    let maxSteals = 0;
    let maxStealsName = '';

    for (const pName in homePlayers) {
        const steals = homePlayers[pName].steals;
        if (steals > maxSteals) {
            maxSteals = steals;
            maxStealsName = pName;
        }
    }

    for (const pName in awayPlayers) {
        const steals = awayPlayers[pName].steals;
        if (steals > maxSteals) {
            maxSteals = steals;
            maxStealsName = pName;
        }
    }

    const longestName = playerWithLongestName();
    console.log(`Max steals: ${maxSteals}`);
    console.log(`Found name with most steals: ${maxStealsName}`);
    console.log(`Found longest name: ${longestName}`);
    return longestName === maxStealsName;
}
    
console.log(doesLongNameStealATon());

module.exports = {
    numPointsScored,
    shoeSize, teamColors, teamNames, playerNumbers, playerStats, bigShoeRebounds, mostPointsScored, winningTeam, playerWithLongestName
};