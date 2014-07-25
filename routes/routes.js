var pg = require('pg');

var DATABASE_URL = process.env.DATABASE_URL || "postgres:://postgres:123@localhost:5432/upsl";

var getTeams = function(req, res) {
  pg.connect(DATABASE_URL, function(err, client) {
    if (err) {
      console.log('Error connecting to database' + err);
    }
    else {
      var query = 'SELECT * FROM Teams';
      client.query(query, function(err, result) {
        if (err) {
          console.log("Error running specified query" + err);
          res.send(400);
        }
        else {
          res.send(result.rows);
        }
        client.end();
      })
    }
  })
}

var getPlayersByTeam = function(req, res) {
  pg.connect(DATABASE_URL, function(err, client) {
    if (err) {
      console.log('Error connecting to database' + err);
    }
    else {
      var query = 'SELECT * FROM Players ' +
                  'WHERE Players.team=' +
                  "'" + req.body.team + "';"; 
      client.query(query, function(err, result) {
        if (err) {
          console.log("Error running specified query" + err);
          res.send(400);
        }
        else {
          res.send(result.rows);
        }
        client.end();
      })
    }
  })
}