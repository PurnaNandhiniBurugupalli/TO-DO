let a=document.querySelector('#push')
a.addEventListener("click" ,function f1()
{
    if(document.querySelector('#newtask input').value.length == 0){
        alert("please enter the task!!")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                           <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        var current_task = document.querySelectorAll(".delete");
        for(var i=0; i<current_task.length; i++)
        {
            current_task[i].addEventListener("click",function f2(){
                this.parentNode.remove();
            })
        }
        }
    }
 )






