//global variable num-image for the animate_choice2 function wich allows me to switch between choice2 image  
       var num_image=0;
       var win=2;var score1=0;var score2=0;
       var start=1; 
        // function pick()
        function pick(id)
        {
            var choice=document.getElementById(id);
            var src=choice.getAttribute("src")
            var choice1=document.getElementById("choice1");
            choice1.setAttribute("src",src);
            choice1.setAttribute("height","200px");
        }
        //function wich allows me to have the animation for the computer choice(choice2)
        function animate_choice2()
        {
            var choice2=document.getElementById("choice2");
            let src="";
            switch(num_image)
            {
                case 0:
                    src="images/icons8-hand-80 (1).png";
                    break;
                case 1:
                    src="images/icons8-hand-rock-80.png";
                    break;
                case 2:
                    src="images/icons8-hand-peace-80.png";
                    break;                                        
            }
            choice2.setAttribute("src",src);
            num_image++;
            if(num_image==3)
            num_image=0;
        }
        //function wich allow me to choose a random pick for the computer
        function computerSelection()
        {
            var out=["rock","paper","scissor"];
            let i=Math.floor(Math.random() * 3)
            num_image=0;
            clearInterval(id);
            switch(i)
            {
                case 1:
                    src="images/icons8-hand-80 (1).png";
                    break;
                case 0:
                    src="images/icons8-hand-rock-80.png";
                    break;
                case 2:
                    src="images/icons8-hand-peace-80.png";
                    break;                                        
            }
            document.getElementById("choice2").setAttribute("src",src);
            return out[i];
        }
        //get the player's choice
        function getPlayer()
        {
            var choixPlayer=document.getElementById("choice1");
            switch(choixPlayer.getAttribute("src"))
            {
                case document.querySelector("#paper").getAttribute("src"):
                    return "paper";
                case document.querySelector("#rock").getAttribute("src"):
                    return "rock";
                case document.querySelector("#scissor").getAttribute("src"):
                    return "scissor";

            }
        }
        //play a round
        function playround() 
        {
            let player=getPlayer();
            player=player.toLowerCase();
            let computer=computerSelection();
            switch(player)
            {
                case "rock":
                    if (computer==="rock") 
                    {
                        win = 2;
                        return "No wins rock against rock";
                    }
                    else if (computer ==="paper") 
                    {
                        win=0;
                        return "computer wins paper beats rock";
                    }
                    else if (computer === "scissor") 
                    {
                        win = 1;
                        return "you win rock beats scissor";
                    }
                    break;
                case "paper":
                    if (computer === "rock") {
                        win = 1;
                        return "you wins paper beats rock";
                    }
                    else if (computer === "paper") {
                        win = 2;
                        return "no wins paper against paper";
                    }
                    else if (computer === "scissor") {
                        win = 0;
                        return "computer win scissor beat paper";
                    }
                    break;
                case "scissor":
                    if (computer === "rock") {
                        win = 0;
                        return "computer wins rock beats scissor";
                    }
                    else if (computer === "paper") {
                        win = 1;
                        return "you wins scissor beat paper";
                    }
                    else if (computer === "scissor") {
                        win = 2;
                        return "no win scissor =scissor";
                    }
                   break;    
                Default:
                    win=2;
                    return "mot invalide";
            }
         
          
        }
        //init the game and take record of the score
        function game() 
       {
            let doc = document.querySelector("#winner");
            doc.innerHTML = playround();
            if(win===0) 
                score2++;
            else if(win===1) 
                score1++;
            let player = document.querySelector("#score1");
            player.innerHTML=score1;
            let computer = document.querySelector("#score2");
            computer.innerHTML=score2;

                       
            if(score1===3 || score2===3)
            {
                let doc=document.querySelector("#winner");
                if(score2===3)
                    doc.innerHTML="Computer's Score=3  computer wins"; 
                else
                    doc.innerHTML="Player's score=3 Player wins";  
                document.getElementById("jouer").style.opacity="0"; 
                return 0;
            }
            
            else
            {
               
                document.getElementById("jouer").style.opacity="0"; 
                startf();
            }
            
        }
        //setup a timer
        function startf()
        {
            var timer = document.createElement('div');
            timer.setAttribute('style', 'color: blue;font-size: 200px;position:absolute; left:45%;bottom:15%;');  
            timer.textContent =""+start;
            start++; 
            var element = document.getElementsByTagName("body")[0];
            element.appendChild(timer);
            if(start===7)
            {
                document.getElementsByTagName("body")[0].removeChild(timer);
                document.getElementById("jouer").style.opacity="1"; 
                let doc = document.querySelector("#winner");
                doc.innerHTML = "";
                id=setInterval(animate_choice2,300);
                 start=1;   
            }
            else
            {
                function recall(){document.getElementsByTagName("body")[0].removeChild(timer);startf(start);}
                setTimeout(recall,1000)
            }
        }
