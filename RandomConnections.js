function connectionsOfCircles(circleX, circleY, NoCircles) {
  // Create an array to store the connections for each circle
  var connections = [];
  
  
  
  for (let i = 1; i <= NoCircles; i++) {
    // Initialize an array to store the connections for this circle
    connections[i] = [];

    // Generate a random number of connections for this circle, for this the max number of connections is 1 less than the number of circle
    var numConnections = Math.min(NoCircles - 1, Math.floor(Math.random() * NoCircles));
  
      numConnections = Math.max(1, numConnections);
    

    // For each connection
    for (let j = 0; j < numConnections; j++) {
      // Generate a random circle to connect to
      var connectionExists = false;
      var targetCircle = Math.max(1, Math.floor(Math.random() * NoCircles+1));
      while (targetCircle === i) {
        targetCircle = Math.max(1, Math.floor(Math.random() * NoCircles+1));
        // The circle must be within the bounds, between 1 and the max number of circles. Also must be a whole number
      }
      for (let m = 1; m < connections.length; m++) {
        for (let n = 0; n < connections[m].length; n++) {
          if (
            connections[m][n].startCircle === i &&
            connections[m][n].targetCircle === targetCircle 
          ) {
            connectionExists = true;
            break;
            // This means that multiple identical connections with differnet weights cant be added to the graph.
          }
        }
      }
      while (connectionExists) {
        var targetCircle = Math.max(1, Math.floor(Math.random() * NoCircles));
        for (let m = 1; m < connections.length; m++) {
          for (let n = 0; n < connections[m].length; n++) {
            if (
              connections[m][n].startCircle === i &&
              connections[m][n].targetCircle === i
            ) {
              connectionExists = true;
              break;
            } else {
              connectionExists = false;
            }
          }
        }
      }
     
 var distance = Math.max(1, Math.floor(Math.random() * 10));
 //Creates a random distance between 1 and 10 for the connections to be, this limit is put in place to prevent extremley high integers from entering the graph making it redundent
    var startCircle = i;
    // Add the connection and distance to the connections array
    connections[i][j] = { startCircle, targetCircle, distance }
    
    
    
    console.log(i)
console.log("COnnections " +connections[i][j].startCircle +" to " + connections[i][j].targetCircle + " with length "+ connections[i][j].distance)

    }
   
    
    
  }
  console.log(connections)

Length=(circleX.length-1)
var count1arr=[]
var count2arr=[]
var backup=[]
var z=0

for(let a=1; a<=NoCircles; a++){
 
connections[a].push({ startCircle: targetCircle, targetCircle: startCircle, distance: distance });
connections[a].push({ startCircle: targetCircle, targetCircle: startCircle, distance: distance });
  
}
for (let a=1; a<=NoCircles;a++){
  for (let b=0; b<=NoCircles;b++){
    for (let c=1; c<=NoCircles;c++){
      for (let d=0;d<=NoCircles;d++){
  try{
   if (connections[a][b].targetCircle===connections[c][d].startCircle && connections[a][b].startCircle===connections[c][d].targetCircle){
if(connections[c][d].distance!= null){
connections[a][b].distance=connections[c][d].distance
connections[c][(connections[c].length+1)].targetCircle=connections[a][b].startCircle
connections[c][(connections[c].length+1)].startCircle=connections[a][b].targetCircle
connections[c][(connections[c].length+1)].distance=connections[a][b].distance

console.log("changed distance from point " +connections[a][b].startCircle +" to point " +connections[a][b].targetCircle+ " with length " + connections[a][b].distance)
}else{
  connections[c][(connections[c].length+1)].targetCircle=connections[a][b].startCircle
  connections[c][(connections[c].length+1)].startCircle=connections[a][b].targetCircle
  connections[c][(connections[c].length+1)].distance=connections[a][b].distance
  // This makes sure that if a connection is going 1 way, a connection is also added the opposite way to make it an undirected graph
}
  } 

}
catch{

}
  
      }
    }
  }

}
console.log(connections)

console.log(connections)
        for (let a=1; a<connections.length; a++){
            for (let k=0; k<connections[a].length; k++){
            const canvas = document.getElementById('canvas');
         const ctx= canvas.getContext('2d')
        
         count1arr[z]=connections[a][k].startCircle
         count2arr[z]=connections[a][k].targetCircle
         backup[z]=connections[a][k].distance
         ctx.strokeStyle = "#000000"
         ctx.beginPath();
         
       
         ctx.moveTo(circleX[connections[a][k].startCircle],circleY[connections[a][k].startCircle]);
         ctx.lineTo(circleX[connections[a][k].targetCircle],circleY[connections[a][k].targetCircle])
         ctx.stroke();
         console.log("start ",connections[a][k].startCircle," end ",connections[a][k].targetCircle, " length ",connections[a][k].distance)
         z=z+1 
        
         if (circleX[connections[a][k].startCircle]<circleX[connections[a][k].targetCircle]){
          if (circleY[connections[a][k].startCircle]<circleY[connections[a][k].targetCircle]){
              
            ctx.strokeStyle = "#ff0000"
              ctx.strokeText( connections[a][k].distance,(parseInt(circleX[connections[a][k].startCircle])+(Math.sqrt(squared(parseInt(circleX[connections[a][k].startCircle]-circleX[connections[a][k].targetCircle])/2)))),(parseInt(circleY[connections[a][k].startCircle])+(Math.sqrt(squared(parseInt(circleY[connections[a][k].startCircle]-circleY[connections[a][k].targetCircle])/2)))))
            
          }else{
            ctx.strokeStyle = "#ff0000"
              ctx.strokeText( connections[a][k].distance,(parseInt(circleX[connections[a][k].startCircle])+(Math.sqrt(squared(parseInt(circleX[connections[a][k].startCircle]-circleX[connections[a][k].targetCircle])/2)))),(parseInt(circleY[connections[a][k].startCircle])-(Math.sqrt(squared(parseInt(circleY[connections[a][k].startCircle]-circleY[connections[a][k].targetCircle])/2)))))
              
          }
      }else{
          if (circleY[connections[a][k].startCircle]<circleY[connections[a][k].targetCircle]){
            ctx.strokeStyle = "#ff0000"
              ctx.strokeText( connections[a][k].distance,(parseInt(circleX[connections[a][k].startCircle])-(Math.sqrt(squared(parseInt(circleX[connections[a][k].startCircle]-circleX[connections[a][k].targetCircle])/2)))),(parseInt(circleY[connections[a][k].startCircle])+(Math.sqrt(squared(parseInt(circleY[connections[a][k].startCircle]-circleY[connections[a][k].targetCircle])/2)))))
              
          }else{
            ctx.strokeStyle = "#ff0000"
              ctx.strokeText( connections[a][k].distance,(parseInt(circleX[connections[a][k].startCircle])-(Math.sqrt(squared(parseInt(circleX[connections[a][k].startCircle]-circleX[connections[a][k].targetCircle])/2)))),(parseInt(circleY[connections[a][k].startCircle])-(Math.sqrt(squared(parseInt(circleY[connections[a][k].startCircle]-circleY[connections[a][k].targetCircle])/2)))))
              
             
          }
        }
           }
        }
       // draws out the random graph
        console.log(connections)
        for (let a=1; a<connections.length; a++){
          for (let k=0; k<connections[a].length; k++){
            dijkstras(Length,connections[a].length,backup,count1arr,count2arr)
            
          }
        }
   
      }
     
      function squared(number) { return number*number } 
      