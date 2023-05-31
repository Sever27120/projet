 <?php
   include 'header.php';
   require 'functions.php';

   // se code n'insert pas les données dans la base de données t_d_ticket_retour

   if (session_status() == PHP_SESSION_NONE) {
      session_start();
   }


   if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
      header('Location: login.php');
      exit;
   }



   $user_id = $_SESSION['user_id'];

   // Récupération des informations de l'utilisateur connecté
   $host = "localhost"; // Nom d'hôte de la base de données
   $user = "root"; // Nom d'utilisateur de la base de données
   $password_db = ""; // Mot de passe de la base de données
   $dbname = "greengarden"; // Nom de la base de données

   //connection de l'utilisateur avec le type d'utilisateur

   try {
      $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password_db);
      // configuration pour afficher les erreurs pdo
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   } catch (PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
   }





      if ($_SERVER['REQUEST_METHOD'] === 'POST') {



    




         // récupérer les informations du formulaire
         $cde_id = $_POST['numcom'];
         $typeretour_id = $_POST['motif_retour'];


            // insérer le ticket retour dans la base de données
            $stmt = $pdo->prepare("INSERT INTO t_d_ticket_retour(
               date_ticket,
               id_statut, 
               Id_Commande,
               Id_retour,
               Id_tech_SAV
               ) VALUES (
               :datetck,
               :statutTicket,
               :commande,
               :retour,
               :technicien
               )");
            $stmt->bindValue(':datetck', date("Y-m-d H:i:s"));
            $stmt->bindValue(':statutTicket', 1);
            $stmt->bindValue(':commande', $_POST['numcom']);
            $stmt->bindValue(':retour', $_POST['motif_retour']);
            $stmt->bindValue(':technicien', $_SESSION['user_id']);
            $stmt->execute();

            $order_id = $pdo->lastInsertId();


             // rediriger vers la page d'acceuil
    header('Location: index.php');
    exit;

      }
   

   ?>

 <h1>Création de ticket de retour</h1>

 <div class="formulaire">
    <form method="post" enctype="multipart/form-data">

       <br>

       <div>
          <label for="numcom">Numéro de commande: </label>
          <select name="numcom">
             <?php
               $stmt = $conn->query("SELECT * from t_d_commande");

               if ($stmt->rowCount() > 0) {
                  while ($row = $stmt->fetch()) {
                     echo "<option value='{$row['Id_Commande']}'>"  . $row['Num_Commande'] . "</option>";
                  }
               }
               ?>
          </select>
       </div>


       <br>
       <div>
          <label for="motif_retour">Motif du retour: </label>
          <select name="motif_retour">
             <?php
               $stmt = $conn->query("SELECT * from t_d_retour");

               if ($stmt->rowCount() > 0) {
                  while ($row = $stmt->fetch()) {
                     echo "<option value ='{$row['Id_retour']}'>" . $row['type_retour'] . "</option>";
                  }
               }
               ?>
          </select>
       </div>
       <br>


       <input id="button" type="submit" value="Créer ticket">



       <footer>
          <p>Green Garden - Tous droits réservés</p>
          <div>Ce site à été réalisé par PHILIPPE Séverine</div>
       </footer>
       </body>



       <?php include 'footer.php'; ?>