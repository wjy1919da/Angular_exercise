var app = angular.module('todoApp', []);
app.controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [
        {text: 'Learn AngularJS', complete: false, editing: false},
        {text: 'Build an app', complete: false, editing: false}

    ];
    $scope.addTodo = function() {
        $scope.todos.push({text: $scope.newTodo, complete: false});
        $scope.newTodo = '';
    };    
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    }
    $scope.updateTodo = function(todo) {
        // todo.complete = !todo.complete;
        todo.editing = false;  // 结束编辑模式
    }
}
]);
