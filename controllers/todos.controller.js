(function(){
  angular
  .module("todoApp")
  .controller("todosCtrl", todoController);

  function todoController () {
    this.todos = [
     { name: 'Build an app with Rails', completed: true },
     { name: 'Project 2', completed: true },
     { name: 'Build an app with Angular', completed: false },
     { name: 'Project 3', completed: false },
     { name: 'Build an app with Express', completed: false },
     { name: 'Build an app with Mongo', completed: false },
     { name: 'Build an app with React', completed: false },
     { name: 'Project 4', completed: false },
     { name: 'Become a Rockstar', completed: true }
    ];
    this.addTodo = function(){
      console.log('ara clicked the add todo button');
      let todo = {name: this.newTodo, completed: false };
      this.todos.push(todo);
    }; //addTodo
  } //todoController
})();
