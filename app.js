var app = new Vue({
  el: '#root',
  data : {
   message : "To Do Task",
    todos: [],
    inputTask: '',
    isEditTask : false,
    editIndex : ''
    },
  methods : {
    addTask : function(){
      if(!this.isEditTask){
       this.todos.push(this.inputTask);
      }
      else {
        this.todos.splice(this.editIndex, 1, this.inputTask)
      }
      this.isEditTask = false;
      this.inputTask = '';
    },
    editTask : function(index){
      this.inputTask = this.todos[index];
      this.isEditTask = true;
      this.editIndex = index;
    },
    
    deleteTask : function(index){
      this.todos.splice(index, 1);
    }
  }
})