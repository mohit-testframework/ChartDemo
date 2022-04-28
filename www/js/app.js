// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'chart.js'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })

  .controller("ExampleController", function ($scope) {



    $scope.LineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.LineSeries = ['Series A', 'Series B'];
    $scope.LineData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.LineDatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.LineOptions = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };


    $scope.Barlabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.Barseries = ['Series A', 'Series B'];
    $scope.Bardata = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];


    $scope.doughnutLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.doughnutData = [300, 500, 100]

    $scope.radarLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
    $scope.radarData = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];

    $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.pieData = [300, 500, 100];

    $scope.polarAreaLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.polarAreaData = [300, 500, 100, 40, 120];

    $scope.HorizontalBarLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.HorizontalBarSeries = ['Series A', 'Series B'];
    $scope.HorizontalBarData = [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]];

    $scope.BubbleSeries = ['Series A', 'Series B'];
    $scope.BubbleData = [
      [{
        x: 40,
        y: 10,
        r: 20
      }],
      [{
        x: 10,
        y: 40,
        r: 50
      }]
    ];

    $scope.DynamicLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.DynamicData = [300, 500, 100, 40, 120];
    $scope.DynamicType = 'polarArea';
    $scope.toggle = function () {
      $scope.DynamicType = $scope.DynamicType === 'polarArea' ?
        'pie' : 'polarArea';
    };


    $scope.MixedTypeColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    $scope.MixedTypeLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.MixedTypeData = [
      [65, -59, 80, 81, -56, 55, -40],
      [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.MixedTypeDatasetOverride = [
      {
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];


  });