let gt = document.getElementById.bind(document),
    btnGame,
    result;

function random(){
    let ran = Math.floor(Math.random() *(9999 - 1000 +1 )) + 1000;
    return ran;
}


 document.getElementById("btn-game").onclick = 
    function startGame(){
        let rand = String(random());
        let elNumber = gt("number").value,
            x = 0,
            y = 0   ;
        

        // console.log(elNumber);
        // console.log(rand);

        
        for (let i = 0; i < rand.length; i++) {
            if (rand[i] === elNumber[i]) {
              x += 1;
              console.log('bull' + x)
            }
            for (let j = 0; j < elNumber.length; j++) {
                if (rand[i] === elNumber[j]) {
                  y += 1;
                //   console.log(y);
                //   console.log(rand[i] + elNumber[j]);
                  console.log('cow' + y);
                  break;
                }
              }
            }
}