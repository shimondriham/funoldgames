  let whoWin=0;
checkWin = () => {
         if (box_ar[0] == box_ar[1] && box_ar[1] == box_ar[2]) { whoWin = box_ar[0] }
    else if (box_ar[3] == box_ar[4] && box_ar[4] == box_ar[5]) { whoWin = box_ar[3] }
    else if (box_ar[6] == box_ar[7] && box_ar[7] == box_ar[8]) { whoWin = box_ar[6] }
    else if (box_ar[0] == box_ar[3] && box_ar[3] == box_ar[6]) { whoWin = box_ar[6] }
    else if (box_ar[1] == box_ar[4] && box_ar[4] == box_ar[7]) { whoWin = box_ar[1] }
    else if (box_ar[2] == box_ar[5] && box_ar[5] == box_ar[8]) { whoWin = box_ar[2] }
    else if (box_ar[0] == box_ar[4] && box_ar[4] == box_ar[8]) { whoWin = box_ar[0] }
    else if (box_ar[2] == box_ar[4] && box_ar[4] == box_ar[6]) { whoWin = box_ar[2] } 
  if (whoWin == "o")  showWinO();  
 else if (whoWin == "x")    showWinX(); 
 else if (counter == 9) showGameOver();
}


