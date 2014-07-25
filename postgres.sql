Drop Table Players;
Drop Table Teams;
Drop Table Games;

Create Table Players (
  playerName    varchar(64) primary key not null,
  summonerName  varchar(128),
  captain       boolean,
  elo           int,
  primaryRole   varchar(64),
  secondaryRole varchar(64),
  team          varchar(64) references Teams(name)
);

Create Table Teams (
  name varchar(120) primary key not null,
);

Create Table Games (
  int          id primary key not null,
  varchar(128) team1 references Teams(name),
  varchar(128) team2 references Teams(name),
  Date         gameDate,
  varchar(128) winner references Teams(name)
);