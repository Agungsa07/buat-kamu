fungsi fungsimau2(){
       fungsi=0;tes();
}
jumlahKlik = 0;
fungsi fungsibaru(btn){
  var tombol = document.getElementById("" + btn);
  var tombolParent = tombol.parentNode;
  
  var tombolPosisiX = Math.floor(Math.random() * 50) + 1; // Posisi X acak antara 1 dan 50
  var tombolPosisiY = Math.floor(Math.random() * 75) + 1; // Posisi Y acak antara 1 dan 50
  var rotasiAcak = Math.floor(Math.random() * 360); // Rotasi acak antara 0 dan 359

  // mengatur posisi baru tombol
  tombol.style.position = "relatif";
  tombol.style.left = tombolPosisiX + "px";
  tombol.style.top = tombolPosisiY + "px";
  tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
  tombolParent.appendChild(tombol);

  /* Menambahkan teks kecil
  var teksKecil = document.createElement("span");
  teksKecil.innerHTML = "Harus boleh ya! 😝";
  teksKecil.style.fontSize = "12px";
  teksKecil.style.position = "diperbaiki";
  teksKecil.style.bottom = "18vh";
  teksKecil.style.left = "50%";
  teksKecil.style.transform = "translateX(-50%)";
  teksKecil.style.color = "putih";
  teksKecil.style.zIndex = "999";
  tombol.appendChild(teksKecil);
  */
  jumlahKlik++;
}
teksjudulakhir = judulakhir.innerHTML; judulakhir.innerHTML="";
tekskalimatakhir = kalimatakhir.innerHTML; kalimatakhir.innerHTML="";
tekspalingakhir = palingakhir.innerHTML; palingakhir.innerHTML="";

  fungsi fungsimau(){
       fungsi=0;tes();
       setTimeout(mulaitextsec,2500);
}
fungsi async fungsigamau(){
  	menunggu swalst.fire({judul: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
   }
  fungsi async fungsigamau2(){
       menunggu swalst.fire({judul: '' + kataditolak2.innerHTML, timer: 2000, imageUrl: '' + stikerditolak2.src,});
}
  fungsi mulaitextseco(){textsec2.style="opacity:0";setTimeout(lanjtextseco,400)}
  function lanjtextseco(){textsec2.style="display:none";textsec2b.style="opacity:1";setTimeout(muncultombol,700);}
  
  function mulaitextsec(){stikerdouble.style="opacity:0;transform:scale(0)";setTimeout(gantifotodouble,400);textsec3.style="opacity:0";setTimeout(lanjtextsec,400)}
  fungsi lanjtextsec(){textsec3.style="display:none";textsec3b.style="opacity:1";setTimeout(smn,700);}
  function gantifotodouble(){stikerdouble.src=stikerdouble2.src;stikerdouble.style="";}

  /*var range = document.querySelector("input");
  var rangeval = dokumen.querySelector(".inivalue");
  rangeval.textContent = rentang.nilai + "%";
  range.oninput = function(){rangeval.textContent = this.value + "%";persen=rangeval.textContent;pesanwhatsapp = pesanWA + persen + "!";}
  */

var tanggal = Tanggal baru();
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember "];
var jam = tanggal.getHours();
var menit = tanggal.getMinutes();

// Tambahkan awalan nol jika jam atau menit kurang dari 10
if (jam < 10) {jam = "0" + jam;}
if (menit < 10) {menit = "0" + menit;}

var hari = hari[tanggal.getDay()];
var dateNum = tanggal.getDate();
var bulan = bulan[tanggal.getMonth()];
var tahun = tanggal.getFullYear();

console.log(jam + "." + menit + " WIB - " + hari + ", " + tanggalNum + " " + bulan + " " + tahun);

var elemen = document.querySelector("body");var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = hari + ", " + tanggalNum + " " + bulan + " " + tahun;
watermark.style = "warna:putih;opacity:.5;ukuran font:10px;posisi:tetap;bawah:25px;kiri:25px;z-index:150";
elemen.appendChild(tanda air);

////////////////////////////////////////////////////

initeksnimasi = teksnimasi.innerHTML;teksnimasi.innerHTML="";
fungsi katateksnimasi(){
  	new TypeIt("#teksnimasi", {
      string: ["" + initeksnimasi], startDelay: 50, kecepatan: 55, kursor: true,
      setelah Selesai: fungsi(){
      	teksnimasi.innerHTML = initeksnimasi;
        stikerdua.style="opacity:0;transform:scale(0)";setTimeout(gantifotodua,400);
        //setTimeout(smn,200);
        setTimeout(muncultombol2,500);
      },}).pergi();
}
function gantifotodua(){stikerdua.src=stikerdua2.src;stikerdua.style="";}

fungsi=0;fungsiklik=0;skrg=1;
fungsi tes(){
  if(fungsi==0){
    bermainaud();
    initom.style="opacity:0;bawah:0;";
    window.scrollBy({atas: tinggi,perilaku: 'halus'});
    fungsi = 1;
    skrg++;
    //if(skrg<=2){setTimeout(smn,700);}
    //if(skrg==2){setTimeout(muncultombol,1200);}
    if(skrg==2){fungsi=0;setTimeout(mulaitextseco,2500);}
    if(skrg==3){fungsi=0;setTimeout(mulaitextsec,2800);}
    if(skrg==4){setTimeout(katateksnimasi,700);}
    jika(skrg==5){}
    if(skrg>=6){initom.style="opacity:0;bottom:0;";}
  }
}
  fungsi smn(){fungsi=0;initom.style="";}
  initom.style="opacity:0;bottom:0;transisi:tidak ada";

  function muncultombol(){fungtom=1;Tombol.style="opacity:1;transform:scale(1)";}
  function muncultombol2(){Tombol2.style="opacity:1;transform:scale(1)";}
  
fungsi aksiakhir() {
  if(fungsiklik==0){
    fungsiklik=1;
    setTimeout(katajudul,100)
  }
}

fungsi katajudul(){
  	new TypeIt("#judulakhir", {
      string: ["" + teksjudulakhir], startDelay: 50, kecepatan: 50, kursor: true,
      setelah Selesai: fungsi(){
      	judulakhir.innerHTML = teksjudulakhir;
          setTimeout(katakata,400);
      },}).pergi();
}
fungsi katakata(){
	  new TypeIt("#kalimatakhir", {
      string: ["" + tekskalimatakhir], startDelay: 50, kecepatan: 48, kursor: true,
      setelah Selesai: fungsi(){
      	kalimatakhir.innerHTML = tekskalimatakhir;
          //judulakhir.style="opacity:0;transform:scale(0);";
          setTimeout(teksmuncul,20);
          setInterval(berjatuhan,200);
          setTimeout(kataakhir,700);
      },}).pergi();
}
fungsi teksmuncul(){
  //teksjudulakhir2 = "Aku Cinta Kamu ✨";
	//judulakhir.innerHTML=teksjudulakhir2;
	//judulakhir.style="font-family:var(--gaya-font3);ukuran font:27px";
	//setTimeout(jjteksnim,300);
	stikerakhir.style="opacity:0;transform:scale(0)";
	setTimeout(gantifotoakhir,400);
}
function jjteksnim(){judulakhir.style.animation="rto .8s alternatif tak terbatas";}
function gantifotoakhir(){stikerakhir.src=stikerakhir2.src;stikerakhir.style="";}
fungsi kataakhir(){
	  new TypeIt("#palingakhir", {
      string: ["" + tekspalingakhir], startDelay: 50, kecepatan: 50, kursor: true,
      setelah Selesai: fungsi(){
      	palingakhir.innerHTML = tekspalingakhir;
          setTimeout(muncultombol3,500);
      },}).pergi();
}
function muncultombol3(){fungtom2=1;TombolWA.style="opacity:1;transform:scale(1)";}
function menuju(){if(fungtom2==1){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}}

tinggi = iniakhir.offsetHeight;
function menetapkantinggi(){tinggi = iniakhir.offsetHeight;}
setInterval(tentukantinggi,200);
console.log(tinggi);

fungsiAud=0;fungsi playaud(){if(fungsiAud==0){fungsiAud=1;audio.play();}}
fungsi keatas(){window.scrollTo(0, 0);}

//window.addEventListener("memuat", (peristiwa) => {
fungsi mulaiyuk(){
    jendela.scrollTo(0, 0);
    setTimeout(keatas,500);
    
    var overlay = dokumen.querySelector(".overlay");
    overlay.style.display = "tidak ada";
    initom.gaya="";
    first_stiker.style="opacity:1;transisi:semua kemudahan";
    ScrollReveal({ setel ulang: benar });
    ScrollReveal().reveal(".show-once", { reset: false});
    ScrollReveal().reveal(".title", {durasi: 2500,asal: "atas",jarak: "50px", easing: "cubic-bezier(0.5, 0, 0, 1)", putar: { x: 20, z: -10 }});
    ScrollReveal().reveal(".fade-in", {delay: 200, durasi: 2400,move: 0});
    ScrollReveal().reveal(".scaleUp", {durasi: 2500, skala: 0,85});
    ScrollReveal().reveal(".flip", {delay: 200, durasi: 2000, putar: { x: 20, z: 20}});
    ScrollReveal().reveal(".slide-right", {durasi: 1000,asal: "kiri",jarak: "300px",easing: "ease-in-out"});
    ScrollReveal().reveal(".slide-up", {durasi: 1500, asal: "bawah", jarak: "100px", pelonggaran: "cubic-bezier(.37,.01,.74,1)", opasitas: 0, skala: 0,5});
    
    document.addEventListener('scroll', function(e) {
        biarkan documentHeight = document.body.scrollHeight;
        biarkan currentScroll = window.scrollY + window.innerHeight;
        biarkan pengubah = 200;
        if(Gulir Saat Ini + pengubah > tinggi dokumen) {
            console.log('Sudah sampai bawah!');
            initom.style="opacity:0;bawah:0";
            setTimeout(aksiakhir,10);
        } kalau tidak {
            //initom.gaya="";
        }
    })
//})
}
setTimeout(mulaiyuk,3000);
