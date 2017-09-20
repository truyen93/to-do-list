var app = angular.module('todoList', []);

app.controller('todoListController', function todoListController($scope) {
    $scope.listTodo = [];

    $scope.addTodo = function(){
        if ($scope.creatingTodo) {
            $scope.listTodo.push({value: $scope.creatingTodo, checked: false});
            $scope.creatingTodo = ""
        }
    }

    $scope.selectAll = function (){
        $scope.listTodo.forEach(function(todo) {
            todo.checked = true;
        })
    }
    
    $scope.deleteTodo = function () {
        $scope.listTodo.reduceRight(function(acc, item, index, object) {
            if (item.checked === true) {
                object.splice(index, 1);
            }
        }, []);
    }
});
