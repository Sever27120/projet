select sum(Pu_HT*quantite),nom_four
from commande as a join saisie as s on c.num_com=s.num_com
join produit as p on p.num_pro=s.num_pro
join fournisseur on f.ref_four=p.ref_four
group by nom_four;


select num_pro,desi_pro,quantite,date_com,nom_four
from commande as c join saisie as s on c.num_com=s.num_com
join produit as p on p.num_pro=s.num_pro
join fournisseur as f on f.ref_four=p.ref_four
where order by year(date_com);

select date_com,ref_cli,sum(Pu_HT*quantite),etat_com,nom_four
from client as clt join commande as c on clt.num_cli=c.num_cli
join saisie as s on s.num_com=c.num_com
join produit as p on p.bum_pro=s.num_pro
join fournisseur as f on p.ref_four=f.re_four;

select sum(Pu_ht*quantite),nom_type
from typeclient as tc join client as clt on tc.num_type=clt.num_type
join commande as com on clt.num_cli=com.num_cli
join saisie as s on s.num_com=com.num_com
join produit as p on s.num_pro=p.num_pro
order by nom_type;

select num_com,date_com,etat_com,num_bl,date_bl
from commande as com join livraison as liv on com.num_bl=liv.num_bl
where etat_com='cours de livraison';