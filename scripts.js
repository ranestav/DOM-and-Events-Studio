// Write your JavaScript code here.

window.addEventListener("load", function(){
  let takeOff = document.getElementById('takeoff');
  takeOff.addEventListener("click", function () {
    if(window.confirm("Confirm that the shuttle is ready for takeoff.")){      
      document.getElementById('flightStatus').innerHTML = "Shuttle in flight.";
      document.getElementById('shuttleBackground').style.background = 'blue';
      document.getElementById('spaceShuttleHeight').innerHTML = 10000;
  }
  });

  let landButton = document.getElementById('landing');
  landButton.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById('flightStatus').innerHTML = "The shuttle has landed.";
    document.getElementById('shuttleBackground').style.background = 'green';
    document.getElementById('spaceShuttleHeight').innerHTML = 0;
  });

  let abortMissionButton = document.getElementById('missionAbort');
  abortMissionButton.addEventListener("click", function () {
    if(window.confirm("Confirm that you want to abort the mission.")) {
        document.getElementById('flightStatus').innerHTML = "Mission aborted.";
        document.getElementById('shuttleBackground').style.background = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    }
  });
  
  let topNum = 0;
  let leftNum = 0;

  let leftButton = document.getElementById('left');
  leftButton.addEventListener("click", function () {
    leftNum -= 10;
    document.getElementById('rocket').style.marginLeft = leftNum + 'px';
  });

  let rightButton = document.getElementById('right');
  rightButton.addEventListener("click", function () {
    leftNum += 10;
    document.getElementById('rocket').style.marginLeft = leftNum + 'px';
  });

  let upButton = document.getElementById('up');
  upButton.addEventListener("click", function () {
    topNum -= 10;
    document.getElementById('rocket').style.marginTop = topNum + 'px';
  });

  let downButton = document.getElementById('down');
  downButton.addEventListener("click", function () {
    topNum += 10;
    document.getElementById('rocket').style.marginTop = topNum + 'px';
  });

});



// Remember to pay attention to page loading!