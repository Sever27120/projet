insert into 'categorie_produit' ('num_cate','nom_cate') VALUES
(1,'jardins'),
(2,'paysagisme'),

INSERT INTO 'sous_categorie-produit' ('num_sous_cate') VALUES
(1,'fleurs'),
(2,'arbustes'),
(3,'materiel à main'),
(4,'motorisé'),

INSERT INTO 'fournisseur'('ref_four','nom_four','nom_cate') VALUES
(1,'GLADIA','constructeur'),
(2,'GLORION','importateur'),
(3,'GLORIA','constructeur'),

INSERT INTO 'Produit' ('num_pro','desi_pro','photo_pro','Pu_HT','ref_four') VALUES
(1,'tulipe','image','2.50€',2),
(2,'framboisier','image','12.50€',2),
(3,'motoculteur','image','75.90€',1),
(4,'secateur','image','3.5€'3),

INSERT INTO 'Client'('num_cli','ref_cli','nom_cli','adress_cli','CP_cli','ville_cli','tel_cli','coef_cli','num_type_cli','num_com') VALUES
(1,'ab','bricout','5 rue des blabla',27120,'pacy sur eure',0654235462,2,1,2),
(2,'ps','philippe','10 rue de la coquelette',76000,'rouen',0654264820,1,2,1),

INSERT INTO 'commerciale'('num_com','nom_com')VALUES
(1,'bernard'),
(2,'clodine'),

INSERT INTO 'type_client'('num_type_cli','nom_type-cli','taux_pena')VALUES
(1,'client particulier',2),
(2,'client professionnel',5),

INSERT INTO 'commande'('num_com','date_com','etat_com','num_bl,num_cli')VALUES
(1,02/01/2023,'saisie',1,1),
(2,03/05/2023,'en préparation',2,2),
(3,05/04/2023,'facturé',1,1),

INSERT INTO 'livraison'('num_bl','date_bl','adresse_bl','cp_bl','ville_bl') VALUES
(1,05/01/2023,'5 rue chez bernard',27200,'Vernon'),
(2,04/05/2023,'6 rue de la grande rue',76000,'Rouen'),
(3,10/04/2023,'4 rue de chez jean',30000,'Orléan'),

INSERT INTO 'Facture'('num_fact','date-fact') VALUES
(1,10/01/2023),
(2,10/05/2023),
(3,10/04/2023),

INSERT INTO 'Reglement'('num_reg','type_regl','moyen_regl')VALUES
(1,'comptant','especes'),
(2,'comptant','cartes bancaires'),
(3,'différé','chèques'),


