<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iletişim</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="iletisim.css">
    <script src="bootstrap.js"></script>
    <script src="main.js"></script>
</head>
<body>
    <nav class="navbar navbar-expand-lg nav-bg">
        <div class="container">
          <a class="navbar-brand text-white" href="anasayfa.html">MERVE ŞENTÜRK</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link active" aria-current="page" href="anasayfa.html">Hakkımda</a>
                <span class="ayrac">|</span>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="ozgecmisim.html">Özgeçmişim</a>
                <span class="ayrac">|</span>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="sehrim.html">Şehrim</a>
                <span class="ayrac">|</span>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="mirasimiz.html">Mirasımız</a>
                <span class="ayrac">|</span>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="ilgiAlan.html">İlgi Alanlarım</a>
                <span class="ayrac">|</span>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="login.html">Login</a>
                <span class="ayrac">|</span>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="iletisim.html">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
     <section>
    <div class="container arkaplan">
        <h2 class="text-center">İLETİŞİM FORMUNUZ GÖNDERİLDİ</h2>
        <hr>
        <div class="row">
        <div class="col-md-6">
        <?php 
        echo "Adınız: ".$_POST["ad"]."<br>";
        echo "Soyadınız: ".$_POST["soyad"]."<br>";
        echo "Email Adresiniz: ".$_POST["Email"]."<br>";
        echo "Okulunuz: ".$_POST["okul"]."<br>";
        echo "Mesajınız: ".$_POST["mesaj"]."<br>";
        ?>
        </div>
        </div>

    </div>
    <footer>MERVE ŞENTÜRK|2022</footer>

    </section>



    
</body>
</html>