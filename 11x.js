
let todoArray = JSON.parse(localStorage.getItem('todoArray'))||[];
displayTodo();
function addTodo(){
    console.log(typeof todoArray)
    let todoname = document.querySelector(".todoname").value;
    let tododate = document.querySelector(".tododate").value;
    todoArray.push({
        todoname,
        tododate
    });
    document.querySelector(".todoname").value='';
    document.querySelector(".tododate").value='';
    displayTodo();
}
function displayTodo(){
 let resultTodo = '';
 localStorage.setItem('todoArray',JSON.stringify(todoArray));
 todoArray=JSON.parse(localStorage.getItem('todoArray'));
 for(let i=0;i<todoArray.length;i++)
 {
    let arrayValue = todoArray[i];
    const {todoname,tododate} = arrayValue;
    let result = `
    <div> ${todoname}</div>
    <div> ${tododate}</div>
        <button onclick="
        todoArray.splice(${i},1);
        displayTodo();
        ">
         Delete    
        </button>
        `;
        resultTodo+=result;
 }
 document.querySelector('.todoelement').innerHTML=resultTodo;

}
