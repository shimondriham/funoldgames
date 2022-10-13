let tempPosition1B ;
let tempPosition2B ;
const movPositionB = function (_rnd) { 
    tempPosition1B = positionB % 10  
    tempPosition2B = 0;
    if (rowPositionB % 2 != 0) {
        if (tempPosition1B + _rnd <= 9) {
            tempPosition2B = (tempPosition1B + _rnd) + (rowPositionB * 10);
        }
        else {
            rowPositionB -= 1;        
                tempPosition2B = (19-(tempPosition1B + _rnd))+(rowPositionB * 10);
        }
    } else {
        if (tempPosition1B - _rnd >= 0) {
            tempPosition2B = (tempPosition1B - _rnd) + (rowPositionB * 10);  
        }
        else {
            if(rowPositionB!=0){
                 rowPositionB -= 1;  
                  tempPosition2B = (((tempPosition1B - _rnd)*(-1))-1) + (rowPositionB * 10);
            }  
            else{
                tempPosition2B = tempPosition1B - _rnd;       
            }        
        }
    }
    if(tempPosition2B==0){
        alert("The white player won")
    }
    if(tempPosition2B<0){    
        tempPosition2B = tempPosition2B * (-1) ;
    }
    checkScalesB();
    checkSnakesB();
    document.querySelector(`#id_row`).innerHTML = "";
    positionB = tempPosition2B 
    createAllBox();
   }

const checkScalesB = () => {
 if(tempPosition2B==91){tempPosition2B=62; rowPositionB=6}
 if(tempPosition2B==96){tempPosition2B=86;rowPositionB=8}
 if(tempPosition2B==97){tempPosition2B=69;rowPositionB=6}
 if(tempPosition2B==85){tempPosition2B=75;rowPositionB=7}
 if(tempPosition2B==85){tempPosition2B=75;rowPositionB=7}
 if(tempPosition2B==77){tempPosition2B=13;rowPositionB=1}
 if(tempPosition2B==70){tempPosition2B=51;rowPositionB=5}
 if(tempPosition2B==64){tempPosition2B=53;rowPositionB=5}
 if(tempPosition2B==49){tempPosition2B=36;rowPositionB=3}
 if(tempPosition2B==29){tempPosition2B=9;rowPositionB=0}
 if(tempPosition2B==22){tempPosition2B=2;rowPositionB=0}
 if(tempPosition2B==16){tempPosition2B=6;rowPositionB=0}
}
const checkSnakesB = () => {
 if(tempPosition2B==1){tempPosition2B=20;rowPositionB=2}
 if(tempPosition2B==5){tempPosition2B=25;rowPositionB=2}
 if(tempPosition2B==8){tempPosition2B=17;rowPositionB=1}
 if(tempPosition2B==18){tempPosition2B=37;rowPositionB=3}
 if(tempPosition2B==26){tempPosition2B=47;rowPositionB=4}
 if(tempPosition2B==31){tempPosition2B=81;rowPositionB=8}
 if(tempPosition2B==33){tempPosition2B=40;rowPositionB=4}
 if(tempPosition2B==55){tempPosition2B=74;rowPositionB=7}
 if(tempPosition2B==58){tempPosition2B=89;rowPositionB=8}
 if(tempPosition2B==48){tempPosition2B=95;rowPositionB=9}
}