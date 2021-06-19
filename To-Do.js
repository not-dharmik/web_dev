var todo=[];
var ans = prompt("What would you like to do ? ");
while(ans !== "quit"){
    if (ans === "list"){
        console.log("**********");
        var i;
        i = 0;
        while(i < todo.length){
            console.log(todo[i]);
            i++;
        }
        
        console.log("**********");
    }else if (ans === "new"){
        var newTodo = prompt("Enter new todo");
        todo.push(newTodo);
    }
    ans = prompt("What would you like to do ? ");
}
alert("OK you Quit");
