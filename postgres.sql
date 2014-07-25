Drop Table Players;
Drop Table Teams;
Drop Table Games;

Create Table Players (
  varchar(64)   playerName,
  varchar(128)  summonerName,
  boolean       captain,
  int           elo,
  varchar(64)   primaryRole,
  varchar(64)   secondaryRole,
  varchar(64)   team references Teams(name)
);

Create Table Teams (
  varchar(120) name,
);

Create Table Games (
  varchar(128) team1 references Teams(name),
  varchar(128) team2 references Teams(name),
  Date         gameDate,
  varchar(128) winner references Teams(name)
);