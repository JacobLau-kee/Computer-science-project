function dijkstras(Length,connect,backup,count1arr,count2arr){
    var matrixs =[]
    // code for graph/adj matrix
   class Graph{
    constructor(size)
    {
        this.size=size;
        this.matrix=[];
        matrixs=[];
        for(let i=0;i<size;i++){
            this.matrix.push([]);
            matrixs.push([]);
            for(let j=0;j<size;j++){
                this.matrix[i][j]=0;
                matrixs[i][j]=0;
                //sets up an empty adj matrix
            }
        }
    }
    addVertex(){
       this.size++;
       this.matrix.push([]);
       matrixs.push([]);
       for(let i=0;i<this.size;i++){
        this.matrix[i][this.size-1]=0
        this.matrix[this.size-1][i]=0;
        matrixs[i][this.size-1]=0
       matrixs[this.size-1][i]=0;
       //Adds a vertex to the adj matrix
       }
    }
    addEdge(v1,v2,weight)
{
   if(v1===v2){
   
   }else{
    matrixs[v1][v2]=weight
    this.matrix[v1][v2]=weight;
    matrixs[v2][v1]=weight
    this.matrix[v2][v1]=weight;
    // adds a weighted edge to the adj matrix joining 2 points together
    
   }
}
    printMatrix(){
        for(let i=0;i<(this.size);i++){
            let row= '';
            for(let j=0;j<(this.size);j++){
                row += `${this.matrix[i][j]}`;
                //this can output the matrix into the console if required
            }
            
           
        }
    }
   }
   
   var graph= new Graph(Length);
   // assignment variable to create a new graph object with length being assinged to the number of vertexes
   x=1
   do{
    xstring=x.toString()
graph.addVertex(xstring);
x=x+1
// xstring  contains the start points, while connectionsstring contains the connections with the end points, weight contains the weight of each connection
   }while(x<=Length)
  
   
   x=1
   y=1
   z=0
   b=0
  do{
  do{
       xstring=count1arr[b]
     connectionsstring=count2arr[b]
     Weight=backup[z]
      graph.addEdge(xstring,connectionsstring,Weight);
      //string adds edges to the created graph by feeding in the data, array is fed into a string to add to the adj matrix
    y=y+1
   z=z+1
    b=b+1
  }while(y<=connect[x])
   x=x+1
   y=1
}while(x<=Length)
graph.printMatrix();
for(let i=1;i<matrixs.length;i++){
    for(let j=1; j<matrixs.length;j++){
        matrixs[(i-1)][(j-1)]=matrixs[i][j]
    }
}
matrixs.length=Length;

for(let i=0;i<(matrixs.length);i++){
    let row= '';
    for(let j=0;j<(matrixs.length);j++){
        row += `${matrixs[i][j]}`;
    }
    console.log(row)

}
algorithm(matrixs,0)


}
function algorithm(graph, start) {
  var distances = [];
  for (var i = 0; i < graph.length; i++)
    distances[i] = Number.MAX_VALUE;
  distances[start] = 0;
 
  var visited = [];
  while (true) {
    var Shortest = Number.MAX_VALUE;
    var shortidx = -1;
    for (var i = 0; i < graph.length; i++) {
      if (distances[i] < Shortest && visited.indexOf(i) === -1) {
        Shortest = distances[i];
        shortidx = i;
      }
    }
    if (shortidx === -1 || visited.length === graph.length) break;
    visited.push(shortidx);
    for (var i = 0; i < graph.length; i++) {
      if (graph[shortidx][i] > 0) {
        var newDistance = distances[shortidx] + graph[shortidx][i];
        if (newDistance < distances[i]) {
          distances[i] = newDistance;
        }
      }
    }
  }
  console.log("Distances: " + distances);
  console.log("Visited: " + visited);
  
}

