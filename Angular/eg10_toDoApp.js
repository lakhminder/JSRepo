angular.module("toDoApp", [])
.controller("ToDoCtlr", ToDoCtlr);

function ToDoCtlr(){
    this.editMode = false;
    this.todos = [
        "Stuff 1",
        "Stuff 2"
      ];

    this.addNewTodo = function(){
        this.todos.push(this.newTodo); // push inserts into JS array
        this.newTodo = "";
    }  

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index,1);//splice deletes from JS array starting from <param1> and <param2: no of elements to remove>
    }
}