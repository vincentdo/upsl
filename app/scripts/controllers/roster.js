'use strict';

angular.module('upslApp')
  .controller('RosterController', function ($scope) {
    $scope.teams = 
    [
      {
        name : "Jiji's Kittens",
        members : [
          {
            PlayerName:"Dawen Shen",
            SummonerName:"Randomguyyy",
            ELO:1535,
            PrimaryRole:"ADC",
            SecondaryRole:"Support",
            Price:"CAPTAIN"
          },
          {
            PlayerName:"Michael Chung",
            SummonerName:"Dr HaE",
            ELO:2480,
            PrimaryRole:"ADC",
            SecondaryRole:"Support",
            Price:"$63"
          },
          {
            PlayerName:"Neil Iyer",
            SummonerName:"moneyhungry767",
            ELO:1780,
            PrimaryRole:"Jungle",
            SecondaryRole:"Support",
            Price:"$15"
          },
          {
            PlayerName:"Vincent Do",
            SummonerName:"RFBlader",
            ELO:1858,
            PrimaryRole:"ADC",
            SecondaryRole:"Mid",
            Price:"$52"
          },
          {
            PlayerName:"Jeffrey Bandeen",
            SummonerName:"TaiXian",
            ELO:1520,
            PrimaryRole:"Top",
            SecondaryRole:"Jungle",
            Price:"$8"
          },
          {
            PlayerName:"c h",
            SummonerName:"studyingpolitics",
            ELO:1470,
            PrimaryRole:"Mid",
            SecondaryRole:"ADC",
            Price:"$3"
          }
        ]
      },

      {
        name : "E.F.C",
        members : [
          {
            PlayerName:"Christopher Wang",
            SummonerName:"Atihn4e",
            ELO:2235,
            PrimaryRole:"Jungle",
            SecondaryRole:"Mid",
            Price:"$67"
          },
          {
            PlayerName:"Spencer",
            SummonerName:"Nicholas1024",
            ELO:1885,
            PrimaryRole:"Support",
            SecondaryRole:"Mid",
            Price:"CAPTAIN"
          },
          {
            PlayerName:"Hamidhasan Ahmed",
            SummonerName:"BetaRayBill",
            ELO:1859,
            PrimaryRole:"Top",
            SecondaryRole:"Mid",
            Price:"$26"
          },
          {
            PlayerName:"Edward Garcia",
            SummonerName:"Melon Mochi",
            ELO:1620,
            PrimaryRole:"Support",
            SecondaryRole:"Mid",
            Price:"$16"
          },
          {
            PlayerName:"John Lu",
            SummonerName:"JJbrosandjl",
            ELO:1667,
            PrimaryRole:"ADC",
            SecondaryRole:"Mid",
            Price:"$24"
          },
          {
            PlayerName:"Xiaomao Ding",
            SummonerName:"xnieamo",
            ELO:1520,
            PrimaryRole:"ADC",
            SecondaryRole:"Support",
            Price:"$4"
          },
          {
            PlayerName:"Christopher Akatsuka",
            SummonerName:"randymaws",
            ELO:1430,
            PrimaryRole:"Mid",
            SecondaryRole:"Not Reported",
            Price:"$2"
          },
          {
            PlayerName:"Changhee Han",
            SummonerName:"Nowinino",
            ELO:1290,
            PrimaryRole:"Jungle",
            SecondaryRole:"ADC",
            Price:"$4"
          },
        ]
      },

      {
        name : "Ostensible",
        members : [
          {
            PlayerName:"(Jason) Jing Zhou",
            SummonerName:"jasonzust",
            ELO:2208,
            PrimaryRole:"Jungle",
            SecondaryRole:"Top",
            Price:"$77"
          },
          {
            PlayerName:"Edward",
            SummonerName:"Diabeetus III",
            ELO:1850,
            PrimaryRole:"Support",
            SecondaryRole:"Jungle",
            Price:"CAPTAIN"
          },
          {
            PlayerName:"Kevin Wang",
            SummonerName:"kabosi",
            ELO:1651,
            PrimaryRole:"Jungle",
            SecondaryRole:"Support",
            Price:"$30"
          },
          {
            PlayerName:"Justin Wang",
            SummonerName:"Youmoo",
            ELO:1529,
            PrimaryRole:"Mid",
            SecondaryRole:"Top",
            Price:"$9"
          },
          {
            PlayerName:"Ray Liu",
            SummonerName:"rliu45",
            ELO:1374,
            PrimaryRole:"ADC",
            SecondaryRole:"Mid",
            Price:"$13"
          },
          {
            PlayerName:"Gregory Chen",
            SummonerName:"Top Lane BuIIy",
            ELO:1315,
            PrimaryRole:"Top",
            SecondaryRole:"Support",
            Price:"$5"
          }
        ]
      },

      {
        name : "CLG Hype Train Jr",
        members : [
          {
            PlayerName:"Collin Cousar",
            SummonerName:"hard163",
            ELO:1862,
            PrimaryRole:"ADC",
            SecondaryRole:"Mid",
            Price:"$42"
          },
          {
            PlayerName:"Yu Wang",
            SummonerName:"Evangelion Jr",
            ELO:1955,
            PrimaryRole:"ADC",
            SecondaryRole:"Jungle",
            Price:"CAPTAIN"
          },
          {
            PlayerName:"Jeffrey Shih",
            SummonerName:"Leopold V",
            ELO:2030,
            PrimaryRole:"Jungle",
            SecondaryRole:"Top",
            Price:"$69"
          },
          {
            PlayerName:"Kejia Wang",
            SummonerName:"Aloice",
            ELO:1673,
            PrimaryRole:"Support",
            SecondaryRole:"Not Reported",
            Price:"$6"
          },
          {
            PlayerName:"Deep Kapur",
            SummonerName:"depp",
            ELO:1469,
            PrimaryRole:"Jungle",
            SecondaryRole:"Top",
            Price:"$18"
          },
          {
            PlayerName:"Jerrell Walker",
            SummonerName:"kalmitrix",
            ELO:1360,
            PrimaryRole:"Mid",
            SecondaryRole:"Not Reported",
            Price:"$3"
          },
          {
            PlayerName:"Renee Sima",
            SummonerName:"ShimmeringIce",
            ELO:1080,
            PrimaryRole:"Support",
            SecondaryRole:"Top",
            Price:"$1"
          }
        ]
      },

      {
        name : "PANDAMANIACS",
        members : [
          {
            PlayerName:"Neil Brett Zhang",
            SummonerName:"hugenoodlebrain",
            ELO:2141,
            PrimaryRole:"Jungle",
            SecondaryRole:"Karthus",
            Price:"$21"
          },
          {
            PlayerName:"Sean Noh",
            SummonerName:"The Last Panda",
            ELO:1875,
            PrimaryRole:"Support",
            SecondaryRole:"Jungle",
            Price:"$40"
          },
          {
            PlayerName:"Mahir",
            SummonerName:"TRN Snickers",
            ELO:1852,
            PrimaryRole:"Mid",
            SecondaryRole:"Top",
            Price:"CAPTAIN"
          },
          {
            PlayerName:"Tony Mei",
            SummonerName:"WeRoam",
            ELO:1550,
            PrimaryRole:"Mid",
            SecondaryRole:"Not Reported",
            Price:"$25"
          },
          {
            PlayerName:"Alex Yoo",
            SummonerName:"KaizenWinzor",
            ELO:1500,
            PrimaryRole:"Support",
            SecondaryRole:"ADC",
            Price:"$17"
          },
          {
            PlayerName:"Dan Zhou",
            SummonerName:"ssbmzhouster",
            ELO:1099,
            PrimaryRole:"ADC",
            SecondaryRole:"Support",
            Price:"$8"
          }
        ]
      },

      {
        name : "CLG HYPE TRAIN",
        members : [
          {
            PlayerName:"Benjamin Jiang",
            SummonerName:"Evangelion",
            ELO:2438,
            PrimaryRole:"Mid",
            SecondaryRole:"Top",
            Price:"CAPTAIN"
          },
          {
            PlayerName:"Lenny Wei",
            SummonerName:"Pennguin",
            ELO:1864,
            PrimaryRole:"Support",
            SecondaryRole:"Top",
            Price:"$35"
          },
          {
            PlayerName:"Chang won Lee",
            SummonerName:"changwonleet",
            ELO:1744,
            PrimaryRole:"Support",
            SecondaryRole:"Mid",
            Price:"$24"
          },
          {
            PlayerName:"Anthony Hsieh",
            SummonerName:"Misder",
            ELO:1570,
            PrimaryRole:"Jungle",
            SecondaryRole:"Mid",
            Price:"$20"
          },
          {
            PlayerName:"Carpus Tin",
            SummonerName:"carpustin",
            ELO:1507,
            PrimaryRole:"ADC",
            SecondaryRole:"Not Reported",
            Price:"$20"
          },
          {
            PlayerName:"Johnathan Wilson",
            SummonerName:"johnjaysmith",
            ELO:1000,
            PrimaryRole:"Mid",
            SecondaryRole:"Not Reported",
            Price:"$1"
          }      
        ]
      } 
    ];
  });
