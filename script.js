var input=document.querySelector("#input");
var div=document.querySelector(".list")
function add(){
    var list=document.createElement("li");
    list.innerHTML=input.value+'<button onclick="del(event)" id="del">Delete</button>';
    div.append(list);
}
function del(event){
    event.target.parentElement.remove();
}