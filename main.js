function formOnayla() {
    var mail=document.forms["myForm"]["email"].value;
    var sifre=document.forms["myForm"]["password"].value;
    if (mail==null||mail=="") 
    {
        alert("Mail Adresinizi Giriniz!");
        return false;
    }
    if (sifre==null||sifre=="") 
    {
        alert("Şifrenizi Giriniz!");
        return false;
    }
    if (mail=="b211210087@ogr.sakarya.edu.tr") {
        if (sifre=="b211210087") {
            Header("refresh=1 url=login.php");
            return true;
        }
        else{
            alert("Şifreniz yanlış!");
            return false;
        }
    }
    else{
        alert("Mailiniz yanlış!");
        return false;
    }
}

 function formOnayla_iletisim()
 {
    var ad=document.forms["iletisimForm"]["ad"].value;
    var soyad=document.forms["iletisimForm"]["soyad"].value;
    var email=document.forms["iletisimForm"]["Email"].value;
    var okul=document.forms["iletisimForm"]["okul"].value;
    var mesaj=document.forms["iletisimForm"]["mesaj"].value;
    if (ad==null||ad=="") {
        alert("Lütfen Adınızı Giriniz.");
        return false;
    }
    if (soyad==null||soyad=="") {
        alert("Lütfen Soyadınızı Giriniz.");
        return false;
    }
    if (email==null||email=="") {
        alert("Lütfen Email Adresinizi Giriniz.");
        return false;
    }
    if (okul==null||okul=="") {
        alert("Lütfen Okulunuzu Giriniz.");
        return false;
    }
    if (mesaj==null||mesaj=="") {
        alert("Lütfen Mesaj Giriniz.");
        return false;
    }
 }


 function fonksiyon() {
    $.getJSON("http://www.omdbapi.com/?t=friends&apikey=84fc2c62").then(function(response)
    {
        var resim=response.Poster;
        console.log(response)
        var baslik=response.Title;
        var yil=response.Year;
        var konu=response.Plot;
        var imdb=response.imdbRating;
        var aktor=response.Actors;
        var kategori=response.Genre;

        $('.resim1').attr('src',resim);
        document.querySelector('.dizibaslik').innerHTML+=baslik;
        document.querySelector('.diziyil').innerHTML+=yil;
        document.querySelector('.dizikonu').innerHTML+=konu;
        document.querySelector('.diziimdb').innerHTML+=imdb;
        document.querySelector('.diziaktorler').innerHTML+=aktor;
        document.querySelector('.dizikategori').innerHTML+=kategori;
    });
    
}
fonksiyon();

function fonksiyon2() {
    $.getJSON("http://www.omdbapi.com/?t=harry+potter&apikey=84fc2c62").then(function(response)
    {
        var resimm=response.Poster;
        console.log(response)
        var baslik2=response.Title;
        var yil2=response.Year;
        var konu2=response.Plot;
        var imdb2=response.imdbRating;
        var aktor2=response.Actors;
        var kategori2=response.Genre;

        $('.resim2').attr('src',resimm);
        document.querySelector('.moviebaslik').innerHTML+=baslik2;
        document.querySelector('.movieyil').innerHTML+=yil2;
        document.querySelector('.moviekonu').innerHTML+=konu2;
        document.querySelector('.movieimdb').innerHTML+=imdb2;
        document.querySelector('.movieaktorler').innerHTML+=aktor2;
        document.querySelector('.moviekategori').innerHTML+=kategori2;
    });

}fonksiyon2();

