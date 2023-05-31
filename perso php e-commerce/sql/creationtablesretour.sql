use greengarden;


create table t_d_retour(Id_retour int(11) not null, type_retour varchar(50)not null);


insert into t_d_retour(Id_retour,type_retour)
values (1,'NPAI'), 
(2,'Absent'), 
(3,'erreurs commande'),
(4,'pannes');

ALTER TABLE `t_d_retour` ADD PRIMARY KEY (`Id_retour`);

create table t_d_Technicien_SAV(Id_tech_SAV int(11) not null, nom_tech_SAV varchar(255) not null);

INSERT INTO `t_d_Technicien_SAV`(`Id_tech_SAV`, `nom_tech_SAV`,'Id_User') VALUES
(1, 'LILI',20),
(2, 'LULU',21);


ALTER TABLE `t_d_Technicien_SAV` ADD PRIMARY KEY (`Id_tech_SAV`);


create table t_d_Type_statut(Id_type_statut int(11) not null, Type_statut varchar(50)not null);

INSERT INTO `t_d_Type_statut`(`Id_type_statut`, `Type_statut`) VALUES
(1, 'en cours de traitement'),
(2, "en cours d'acceptation"),
(3, 'remboursement effectuer');


Alter table 't_d_Type_statut' add PRIMARY Key ('Id_type_statut');

create table t_d_Ticket_retour(Id_ticket int(11)not null,date_ticket date,id_statut int(11) not null,
Id_Commande int(11)not null,Id_retour int(11) not null,Id_tech_SAV int(11) not null);

ALTER TABLE `t_d_Ticket_retour`
  ADD PRIMARY KEY (`Id_ticket`),
  ADD FOREIGN KEY `Id_type_statut`REFERENCES t_d_Type_statut (`Id_type_statut`),
  ADD FOREIGN KEY `Id_Commande`REFERENCES t_d_commande (`Id_Commande`),
  ADD FOREIGN KEY `Id_retour`REFERENCES t_d_retour (`Id_retour`),
  ADD FOREIGN KEY `Id_tech_SAV`REFERENCES t_d_Technicien_SAV(`Id_tech_SAV`);