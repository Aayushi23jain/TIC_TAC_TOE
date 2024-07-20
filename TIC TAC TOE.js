let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#reset");
let ng=document.querySelector("#newgame");
let message=document.querySelector(".msg");
let msg=document.querySelector("#mssg");
let turnO=true;
const winp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO=== true){
            box.innerText="O";
            turnO=false;
        }
       
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const checkwinner=()=>{
    for(pattern of winp){
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showwinner(pos1);
                disable();
                
            }
        }  
    }
   
}
const draw=()=>{
    msg.innerText="Match Is Draw";
    message.classList.remove("hide");
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations! Winner Is ${winner}`;
    message.classList.remove("hide");
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const reset=()=>{
    turnO=true;
    enable();
    message.classList.add("hide");
}
ng.addEventListener("click",reset);
res.addEventListener("click",reset);