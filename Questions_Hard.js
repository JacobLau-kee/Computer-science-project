
    NoCircles=8
PlaceCirlces(NoCircles)
function PlaceCirlces(NoCircles){
    var circleX =[]
    var circleY =[]
   
    current_Circle=1
    x=250
    y=250
    circleX[current_Circle]=x
            circleY[current_Circle]=y
    do{
        if ((current_Circle === 2)){
            x=250
            y=400
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===3)){
            x=350
            y=500
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle === 4)){
        y=150
        x=650
        circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===5)){
            y=150
x=450
circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===6)){
            y=500
            x=650
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===7)){
            y=500
            x=850
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }else if ((current_Circle===8)){
            x=850
            y=250
            circleX[current_Circle]=x
            circleY[current_Circle]=y
        }
        if (current_Circle===NoCircles){
            const canvas = document.getElementById('canvas');
        const ctx= canvas.getContext('2d')
        ctx.font = "30px Arial";
        ctx.strokeText(("Finish"), ( circleX[current_Circle]+10), (circleY[current_Circle]+10));
        ctx.beginPath();
        ctx.arc(circleX[current_Circle], circleY[current_Circle],10,0,Math.PI*2,true); 
        ctx.fillStyle= 'red'
        ctx.fill();
        current_Circle=current_Circle+1
        }else if(current_Circle===1){
            const canvas = document.getElementById('canvas');
        const ctx= canvas.getContext('2d')
            ctx.font = "30px Arial";
            ctx.strokeText(("Start"), (circleX[current_Circle]+10), (circleY[current_Circle]+10));
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
function compareHARD(){
    var points = []
        point2 = document.getElementById('Point2Distance').value
        point3=document.getElementById('Point3Distance').value
        point4=document.getElementById('Point4Distance').value
        point5=document.getElementById('Point5Distance').value
        point6=document.getElementById('Point6Distance').value
        point7=document.getElementById('Point7Distance').value
       pointEnd= document.getElementById('PointEndDistance').value
        points.push(point2)
        points.push(point3)
        points.push(point4)
        points.push(point5)
        points.push(point6)
        points.push(point7)
        points.push(pointEnd)
        console.log(points)
        return false
}