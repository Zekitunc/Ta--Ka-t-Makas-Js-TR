const resim1 = document.getElementById("resim1"); //bizimki
const resim2 = document.getElementById("resim2"); //cpunun sonuç
const tas = document.querySelector(".Tas");
const kagıt = document.querySelector(".kagıt");
const makas = document.querySelector(".makas");
const oyuncuekran = document.querySelector(".Oyuncu");
const Cpuekran = document.querySelector(".CPU");
const result = document.querySelector(".result");
let Cpuchoose =0;
let user;
let cpu;


 tas.addEventListener('click', function(){  //kağıt yeşil makas mavi taş kırmızı
   resim1.src = "resimler/rock.png";
   getrandomCPU();
   user =1;
   oyuncuekran.style = ("background-color: rgba(255, 0, 0, 30%);");//kırmızı
   checkWinner()
 })

 kagıt.addEventListener('click', function(){

  resim1.src = "resimler/paper.png";
  getrandomCPU();
  user = 2;
  oyuncuekran.style = ("background-color: rgba(0, 255, 0, 30%);");
  checkWinner()
 })

 makas.addEventListener('click', function(){

  resim1.src = "resimler/scissors.png";
  getrandomCPU();
  user =3;
  oyuncuekran.style = ("background-color: rgba(0, 0, 255, 30%);");
  checkWinner()
  
 })

 function getrandomCPU(){

   Cpuchoose = Math.floor((Math.random()*3)+1);
   console.log(Cpuchoose)
   if(Cpuchoose == 1) //taş
   {
    resim2.src ="resimler/rock.png";
    cpu = 1;
    Cpuekran.style = ("background-color: rgba(255, 0, 0, 30%);");
   }
   else if(Cpuchoose==2)
   {
    resim2.src ="resimler/paper.png";
    cpu = 2;
    Cpuekran.style = ("background-color: rgba(0, 255, 0, 30%);");
   }
   else
   {
    resim2.src = "resimler/scissors.png";
    cpu=3;
    Cpuekran.style = ("background-color: rgba(0, 0, 255, 30%);");
   }

 }

 function checkWinner(){  //1 taş 2 kağıt 3 makas

   if( user == cpu)
   { alert("BERABERE");
    result.textContent = "BRAVO YANİ BERABERE";
  }
   else if(user == 1 && cpu ==2){
     alert("cpu kağıt ile sardı CPU WİN");
     result.textContent = "Bilgisayar Kazandı";
   }
   else if(user == 1 && cpu ==3){
    alert("user taş ile ezdi user WİN");
    result.textContent = "Oyuncu Kazandı";
   }
   else if(user == 2 && cpu ==1){
    alert("user kağıt ile sardı user WİN");
    result.textContent = "Oyuncu Kazandı";
   }
   else if(user == 2 && cpu ==3){
    alert("cpu makas ile kesti CPU WİN");
    result.textContent = "Bilgisayar Kazandı";
   }
   else if(user == 3 && cpu ==1){
    alert("cpu taş ile kırdı CPU WİN");
    result.textContent = "Bilgisayar Kazandı";
   }
   else if(user == 3 && cpu ==2){
    alert("user makas ile kesti user WİN");
    result.textContent = "Oyuncu Kazandı";
   }
 }