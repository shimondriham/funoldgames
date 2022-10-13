let tempPosition1A ;
let tempPosition2A ;
const movPositionA = function (_rnd) { 
    tempPosition1A = positionA % 10  
    tempPosition2A = 0;
    if (rowPositionA % 2 != 0) {
        if (tempPosition1A + _rnd <= 9) {
            tempPosition2A = (tempPosition1A + _rnd) + (rowPositionA * 10);
        }
        else {
            rowPositionA -= 1;        
                tempPosition2A = (19-(tempPosition1A + _rnd))+(rowPositionA * 10);
        }
    } else {
        if (tempPosition1A - _rnd >= 0) {
            tempPosition2A = (tempPosition1A - _rnd) + (rowPositionA * 10);  
        }
        else {
            if(rowPositionA!=0){
                 rowPositionA -= 1;  
                  tempPosition2A = (((tempPosition1A - _rnd)*(-1))-1) + (rowPositionA * 10);
            }  
            else{
                tempPosition2A = tempPosition1A - _rnd;       
            }        
        }
    }
    if(tempPosition2A==0){
        alert("The purple player won")
    }
    if(tempPosition2A<0){    
        tempPosition2A = tempPosition2A * (-1) ;
    }
    checkScalesA();
    checkSnakesA();
    document.querySelector(`#id_row`).innerHTML = "";
    positionA = tempPosition2A 
    createAllBox();
}

const checkScalesA = () => {
 if(tempPosition2A==91){tempPosition2A=62; rowPositionA=6}
 if(tempPosition2A==96){tempPosition2A=86;rowPositionA=8}
 if(tempPosition2A==97){tempPosition2A=69;rowPositionA=6}
 if(tempPosition2A==85){tempPosition2A=75;rowPositionA=7}
 if(tempPosition2A==85){tempPosition2A=75;rowPositionA=7}
 if(tempPosition2A==77){tempPosition2A=13;rowPositionA=1}
 if(tempPosition2A==70){tempPosition2A=51;rowPositionA=5}
 if(tempPosition2A==64){tempPosition2A=53;rowPositionA=5}
 if(tempPosition2A==49){tempPosition2A=36;rowPositionA=3}
 if(tempPosition2A==29){tempPosition2A=9;rowPositionA=0}
 if(tempPosition2A==22){tempPosition2A=2;rowPositionA=0}
 if(tempPosition2A==16){tempPosition2A=6;rowPositionA=0}
}
const checkSnakesA = () => {
 if(tempPosition2A==1){tempPosition2A=20;rowPositionA=2}
 if(tempPosition2A==5){tempPosition2A=25;rowPositionA=2}
 if(tempPosition2A==8){tempPosition2A=17;rowPositionA=1}
 if(tempPosition2A==18){tempPosition2A=37;rowPositionA=3}
 if(tempPosition2A==26){tempPosition2A=47;rowPositionA=4}
 if(tempPosition2A==31){tempPosition2A=81;rowPositionA=8}
 if(tempPosition2A==33){tempPosition2A=40;rowPositionA=4}
 if(tempPosition2A==55){tempPosition2A=74;rowPositionA=7}
 if(tempPosition2A==58){tempPosition2A=89;rowPositionA=8}
 if(tempPosition2A==48){tempPosition2A=95;rowPositionA=9}
}