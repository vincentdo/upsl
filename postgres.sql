Drop Table Players;
Drop Table Teams;
Drop Table Games;

Create Table Players (
  varchar(64) playerName,
  varchar(128) summonerName,
  boolean captain,
  int elo,
  varchar(64) primaryRole,
  varchar(64) secondaryRole,
  varchar(64) team primary
);

Create Table Teams (

);