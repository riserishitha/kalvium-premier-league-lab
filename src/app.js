let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon)
 {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon]
  return Manager;

}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Trial 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){

  if(formation.length==0)
  {
  return null;
  }
  var play =
  {
    defender:formation[0],
    midfield: formation[1],
    forward: formation[2]
}
  return play;
}
// Dont edit the following code
try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}


function filterByDebut(yearofDebut) {
  var infro = players.filter(player => player.debut == yearofDebut);
  return infro;
}
function filterByPosition(playersPosition) {
  var infro = players.filter(player => player.position == playersPosition);
  return infro;
}
function filterByAward(nameofAward) {
  let emptyArr = [];
  for (let inti = 0; inti < players.length; inti++) {
    for (let jag = 0; jag < players[inti].awards.length; jag++) {
      if (players[inti].awards[jag].name === nameofAward) {
        emptyArr.push(players[inti]);
      }}}
  return emptyArr;
}
function filterByAwardxTimes(nameofAward, noOfTimes) {
  let arr = [];
  let count = 0,m=0;
  let jag;
  for (let inti = 0; inti < players.length; inti++)
    {
      for (jag = 0; jag < players[inti].awards.length; jag++) {
        if (players[inti].awards[jag].name == nameofAward)
         {
            count++;       
        }}
    if (count == noOfTimes)
    {
      arr.push(players[inti]);
    }
    count = 0;
  }
  return arr;
}
function filterByAwardxCountry(nameofAward, countrytheyBelongs) {
  var awardsinfro = filterByAward(nameofAward);
  var infro = awardsinfro.filter(player => player.country == countrytheyBelongs);
  return infro;
}
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var infro = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return infro;
}
function SortByAge() {
  for (let inti = 0; inti < players.length; inti++) {
    for (let jag = inti + 1; jag < players.length; jag++) {
      if (players[inti].age < players[jag].age) {
        let temp = players[inti];
        players[inti] = players[jag];
        players[jag] = temp;
      }}}}
function FilterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let filteredPlayers = [];
  for (let inti = 0; inti < players.length; inti++) {
    if (players[inti].team == team) {
      filteredPlayers[count++] = players[inti];
    }}
  for (let inti = 0; inti < filteredPlayers.length; inti++) {
    for (let jag = inti + 1; jag < filteredPlayers.length; jag++) {
      if (filteredPlayers[inti].awards.length < filteredPlayers[jag].awards.length) {
        let temp = filteredPlayers[inti];
        filteredPlayers[inti] = filteredPlayers[jag];
        filteredPlayers[jag] = temp;
      }}}
  return filteredPlayers;
}
function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  }
  else if (a.name < b.name) { value = -1; }
  else { value = 0; }
}
function SortByNamexAwardxTimes(nameofAward, noOfTimes, country) {
  var infroOne = filterByAwardxTimes(nameofAward, noOfTimes);
  var infroTwo = infroOne.filter(player => player.country == country);
  return infroTwo.sort(compare);
}
function SortByNamexOlderThan(age) {
  var infro = players.filter(player => player.age > age);
  return infro;
}

