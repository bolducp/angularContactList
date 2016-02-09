"use strict";

// , "ui.bootstrap"
var app = angular.module("contactList", ["ngStorage", "ui.bootstrap"]);

app.controller("mainCtrl", function($scope, $localStorage, $filter){
  console.log("hello from mainCtrl!");

  $scope.contacts = $localStorage.contacts;

  $scope.addContact = function(){
    $localStorage.contacts.push($scope.newContact);
    $scope.newContact = {};
  }

  $scope.deleteContact = function(contact){
  var index = $scope.contacts.indexOf(contact);
  $scope.contacts.splice(index, 1);
  $localStorage.contacts = $scope.contacts;
};

  var orderBy = $filter('orderBy');
  $scope.order = function(predicate) {
    $scope.predicate = predicate;
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.contacts = orderBy($scope.contacts, predicate, $scope.reverse);
  };
   $scope.order('lastName', false);
});
