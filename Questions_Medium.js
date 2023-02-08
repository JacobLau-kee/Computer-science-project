



    NoCircles=6
PlaceCirlces(NoCircles)

function PlaceCirlces(NoCircles){
    var circleX =[]
    var circleY =[]
    console.log("HELLO")
    current_Circle=1
    x=250
    y=250
    circleX[current_Circle]=x
            circleY[current_Circle]=y
    do{
        if ((current_Circle === 2)){
            x=750 
            y=350
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===3)){
            x=350
            y=150
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle === 4)){
        y=350
        x=25
        circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===5)){
            y=50
x=350
circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===6)){
            y=250
            x=650
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }
        if (current_Circle===NoCircles){
            
            const canvas = document.getElementById('canvas');
            const ctx= canvas.getContext('2d')
        ctx.font = "30px Arial";
        ctx.strokeText(("Finish"), (circleX[current_Circle]+10), (circleY[current_Circle]+10));
        ctx.beginPath();
        ctx.arc(circleX[current_Circle], circleY[current_Circle],10,0,Math.PI*2,true); 
        ctx.fillStyle= 'red'
        ctx.fill();
        current_Circle=current_Circle+1
        }else if(current_Circle===1){
            
            const canvas = document.getElementById('canvas');
            const ctx= canvas.getContext('2d');
            ctx.font = "30px Arial";
            ctx.strokeText(("Start"), (x+10), (y+10));
            ctx.beginPath();
            ctx.arc(circleX[current_Circle], circleY[current_Circle],10,0,Math.PI*2,true); 
            ctx.fillStyle= 'red'
            ctx.fill();
            current_Circle=current_Circle+1
        }else{
            
            const canvas = document.getElementById('canvas');
            const ctx= canvas.getContext('2d')
            ctx.font = "30px Arial";
            ctx.strokeText((current_Circle), (circleX[current_Circle]+10), (circleY[current_Circle]+10));
            ctx.beginPath();
            ctx.arc(circleX[current_Circle], circleY[current_Circle],10,0,Math.PI*2,true); 
            ctx.fillStyle= 'red'
            ctx.fill();
            current_Circle=current_Circle+1
        }


    }while(current_Circle<= NoCircles)
    const connections= connectionsOfCircles(circleX, circleY, NoCircles)
}
function compareMEDIUM(){
    var points = []
        point2 = document.getElementById('Point2Distance').value
        point3=document.getElementById('Point3Distance').value
        point4=document.getElementById('Point4Distance').value
        point5=document.getElementById('Point5Distance').value
       pointEnd= document.getElementById('PointEndDistance').value
        points.push(point2)
        points.push(point3)
        points.push(point4)
        points.push(point5)
        points.push(pointEnd)
        console.log(points)
        return false
}