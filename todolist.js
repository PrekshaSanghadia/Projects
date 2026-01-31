let btn = document.querySelector("button");
let undoneul = document.querySelector(".undone");
let inp = document.querySelector("input");
let doneul = document.querySelector(".done");

btn.addEventListener("click", function(event){
   let item = document.createElement("li");
   item.innerText = inp.value;
   
   let delbtn = document.createElement("button");
   delbtn.style.backgroundColor = "red";
   delbtn.innerText = "delete";
  
   item.appendChild(delbtn);
   undoneul.appendChild(item);
   inp.value = "";
});

undoneul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        let doneitem = document.createElement("li");
        doneitem.innerText = listitem.innerText;
        doneul.appendChild(doneitem);
        listitem.remove();       
    }
});

