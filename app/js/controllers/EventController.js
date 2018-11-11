"use strict";

eventsApp.controller("EventController", function EventController($scope) {
  $scope.sortorder = "name";
  
  $scope.event = {
    name: "Angular Boot Camp",
    date: "1/2/2013",
    time: "10:30 am",
    location: {
      address: "Google Headquarters",
      city: "Mountain View",
      province: "CA"
    },
    imageUrl: "./img/angularjs-logo.png",
    sessions: [
      {
        name: "Directives Masterclass introductory",
        creatorName: "Bob Smith",
        duration: "1",
        level: "Advanced",
        abstract:
          "In this session you will learn the ins and outs of directives!",
        upVoteCount: 3
      },
      {
        name: "Scopes for fun and profit",
        creatorName: "Bob Smith",
        duration: "2",
        level: "Advanced",
        abstract:
          "In this session you will learn the ins and outs of directives!",
        upVoteCount: 2
      },
      {
        name: "Well Behaved Controllers",
        creatorName: "Bob Smith",
        duration: "4",
        level: "Advanced",
        abstract:
          "In this session you will learn the ins and outs of directives!",
          upVoteCount: 35
      }
    ]
  };

  $scope.upVoteSession = function(session){
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session){
    session.upVoteCount--;
  };
});
