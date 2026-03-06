// alert("hello");
const TaskBox =document.getElementById('task-input');
const listContainer =document.getElementById('list-container');

function AddTask (){
    if(TaskBox.value ===''){
        alert("You must Write Something!");
    }else{
        let li =document.createElement("li");
        li.innerHTML=TaskBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild (span);
    }
    TaskBox.value= "";
    savedata();

}
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
     savedata();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
     savedata();
}
},false);
 function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
 }
 function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

 }
 showTask();
