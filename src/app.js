//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
  var arr=[managerName,managerAge,currentTeam,trophiesWon]
  return arr;
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

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation)
{
  if (formation.length===0)
  {
    return null;
  }
  var obj={
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return obj;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
  var arr=[];
  var x=0;
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["debut"]===year)
    {
      arr[x]=players[i];
      x=x+1;
    }
  }
  return arr;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  var arr=[];
  var x=0;
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["position"]===position)
    {
      arr[x]=players[i];
      x=x+1;
    }
  }
  return arr;
}


//Progression 5 - Filter players that have won ______ award

function filterByAward(award)
{
  var arr=[];
  var x=0;
  for(let i=0;i<players.length;i++)
  {
    for(let j=0;j<players[i]["awards"].length;j++)
    if(players[i]["awards"][j]["name"]===award)
    {
      arr[x]=players[i];
      x=x+1;
    }
  }
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award,times)
{
  var arr=[];
  var x=0;
  for(let i=0;i<players.length;i++)
  {
    var c=0;
    for(let j=0;j<players[i]["awards"].length;j++)
    {
      if(players[i]["awards"][j]["name"]===award)
      {
        c=c+1;
      }
    }
    if(c===times)
    {
      arr[x]=players[i];
      x=x+1;
    }
  }
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(award, country)
{
  var arr=[];
  var x=0;
  for(let i=0;i<players.length;i++)
  {
    var c=0;
    for(let j=0;j<players[i]["awards"].length;j++)
    {
      if(players[i]["awards"][j]["name"]===award)
      {
        c=c+1;
      }
    }
    if(c!=0 && players[i]["country"]===country)
    {
      arr[x]=players[i];
      x=x+1;
    }
  }
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____


function filterByNoOfAwardsxTeamxAge(times, team, age)
{
  var arr=[];
  var x=0;
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["awards"].length>=times && players[i]["team"]===team && players[i]["age"]<age)
    {
      arr[x]=players[i];
      x=x+1;
    }
  }
  return arr;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge()
{
  var arr=[];
  for(let i=0;i<players.length;i++)
  {
    arr[i]=players[i];
  }
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr.length-i-1;j++)
    {
      if(arr[j]["age"]<arr[j+1]["age"])
      {
      let tmp=arr[i];
      arr[i]=arr[j];
      arr[j]=tmp;
      }
    }
  }
  return arr;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards()
{
  var arr=[];
  for(let i=0;i<players.length;i++)
  {
    arr[i]=players[i];
  }
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr.length-i-1;j++)
    {
      if(arr[j]["awards"].length<arr[j+1]["awards"].length)
      {
      let tmp=arr[i];
      arr[i]=arr[j];
      arr[j]=tmp;
      }
    }
  }
  return arr;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names


function SortByNamexAwardxTimes(awardName, noOfTimes, country)
{
  let arr=[]
  for(let i=0;i<players.length;i++)
  {
    if(player[i]["country"]===country)
    {
      let c=0;
      for(let j=0;j<players[i]["awards"].length;j++)
      {
        if(player[i]["awards"]["name"]===awardName)
        {
          c=c+1;
        }
      }
      if(c===noOfTimes)
      {
        arr[i]=players[i];
      }
    }
  }

    arr.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  return arr;
}


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age)
{
  let arr=[]
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["age"]>age)
    {
      arr[i]=players[i];
    }
  }
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr[i]["awards"].length;j++)
    {
      for(let k=0;k<arr[i]["awards"].length-j-1;j++)
      {
        if(arr[i]["awards"][k]["year"]>arr[i]["awards"][k+1]["year"])
        {
          let tmp=arr[i]["awards"][j];
          arr[i]["awards"][k]=arr[i]["awards"][j];
          arr[i]["awards"][j]=tmp;
        }
      }
    }
  }
  return arr;
}