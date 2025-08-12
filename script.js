const opening = document.getElementById('opening');
const cakeContainer = document.getElementById('cakeContainer');
const flame = document.getElementById('flame');
const letter = document.getElementById('letter');
const clickHint = document.getElementById('clickHint');
const envelope = document.getElementById('envelope');
const music = document.getElementById('bg-music');

const message = `Hai, Zha. Selamat bertambah usia!!

Empat tahun aku mengenal kamu, dan aku belajar banyak darimu, juga dari kita.  
Seperti yang sudah kamu sampaikan, kamu akan lebih serius menjalani hidup sejak dimulainya usia ini. Dari segala doa yang subjektif, aku merangkumnya dalam satu harapan: apa pun yang terjadi dan akan terjadi di hidupmu, kuharap energiku, terlepas aku ada atau tidak di sampingmu saat itu, bisa sedikit membantumu melanjutkan hidup.  

Aku wanita miskin. Tidak punya apa-apa selain kecerdasan dan kecantikan. Aku tidak punya mesin waktu atau pintu teleportasi, sehingga aku hanya bisa berada di sini, di tempatku, melakukan yang kubisa untuk setidaknya memberi sedikit warna di hidupmu.  

Aku suka warna biru sedikit keunguan. Kamu tahu? Ada yang mengatakan warna biru itu kondisional—jika seseorang melihatnya dalam keadaan senang, ia menenangkan; jika melihatnya saat sedih, ia menjadi pigmen yang pas mengimbangi isi hati. Begitu pula harapku: menjadi diriku yang seperti itu, hadir sebentar di hidupmu.  

Aku tidak bisa berlama-lama, karena sebentar lagi mungkin aku akan melanjutkan hidup tanpa mendengar kabarmu, mungkin berhari-hari. Maaf aku harus menyampaikan ini sekarang. Kurasa ini momen yang tepat agar apa yang kusampaikan akan lebih diingat.  

Tolong, jangan lupakan aku. Jangan pula membiarkan energiku menghambat langkahmu. Aku sangat sayang sama Zhafir.  

Terima kasih hingga kapanpun untuk segala hal yang sudah kamu bagi bersamaku, maaf karena sejauh ini aku masih menjadi ivana dengan 2 tangan kecil yang tidak bisa berbuat banyak ini.

Jiwamu tua, ambisimu masih membara. Itu sesuatu yang langka dan berharga, tidak semua orang dititipkan kekuatan semacam itu.  
Kudoakan takdirmu dilembutkan di usia ini dan seterusnya.  

Salam dari temanmu yang paaaling cerewet,  
Ivana <3`;

let stage = 0;

document.body.addEventListener('click', () => {
  if (stage === 0) {
    // step 1: buka kue
    opening.style.display = 'none';
    cakeContainer.classList.remove('hidden');
    music.currentTime = 0;
    music.volume = 0.5;
    music.play();
    stage++;
  } else if (stage === 1) {
    // step 2: tiup lilin
    flame.style.display = 'none';
    clickHint.innerText = 'klik buat buka hadiah dari aku';
    stage++;
  } else if (stage === 2) {
    // step 3: munculin amplop
    cakeContainer.classList.add('hidden');
    envelope.classList.remove('hidden');
    stage++;
  }
});

function openEnvelope() {
  envelope.classList.add('hidden');
  letter.innerHTML = '';
  letter.style.display = 'block';
  typeWriter(letter, message, 0);
}

function typeWriter(element, text, i) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 30);
  }
}
