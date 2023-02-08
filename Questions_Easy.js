
NoCircles=4
PlaceCirlces(NoCircles)
 
function PlaceCirlces(NoCircles){
   var circleX =[]
    var circleY =[]
    
    current_Circle=1
    
    circleX[1]=250;
    circleY[1]=250;
    circleX[2]=450;
    circleY[2]=550;
    circleX[3]=350;
    circleY[3]=150;
    circleX[4]=450;
    circleY[4]=250;
   
    do{
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
        console.log(current_Circle)
        }else if(current_Circle===1){
            const canvas = document.getElementById('canvas');
        const ctx= canvas.getContext('2d')
            ctx.font = "30px Arial";
            ctx.strokeText(("Start"), (circleX[current_Circle]+10), (circleY[current_Circle]+10));
            ctx.beginPath();
            ctx.arc(circleX[current_Circle], circleY[current_Circle],10,0,Math.PI*2,true); 
            ctx.fillStyle= 'red'
            ctx.fill();
            current_Circle+=1
            console.log(current_Circle)
        }else{
            const canvas = document.getElementById('canvas');
        const ctx= canvas.getContext('2d')
            ctx.font = "30px Arial";
            ctx.strokeText((current_Circle), (circleX[current_Circle]+10), (circleY[current_Circle]+10));
            ctx.beginPath();
            ctx.arc(circleX[current_Circle], circleY[current_Circle],10,0,Math.PI*2,true); 
            ctx.fillStyle= 'red'
            ctx.fill();
            current_Circle+=1
            console.log(current_Circle)
        }


    }while(current_Circle<= NoCircles)
   const connections= connectionsOfCircles(circleX, circleY, NoCircles)
   
   
}

function compareEASY(){
    var points = []
        point2 = document.getElementById('Point2Distance').value
        point3=document.getElementById('Point3Distance').value
       pointEnd= document.getElementById('PointEndDistance').value
        points.push(point2)
        points.push(point3)
        points.push(pointEnd)
        console.log(points)
        return false
}
   