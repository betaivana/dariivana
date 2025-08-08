const opening = document.getElementById('opening');
const cakeContainer = document.getElementById('cakeContainer');
const flame = document.getElementById('flame');
const letter = document.getElementById('letter');
const clickHint = document.getElementById('clickHint');
const envelope = document.getElementById('envelope');
const music = document.getElementById('bg-music');

const message = `Dear you,

I’ve always wondered what kind of person could make me feel so...

...annoyed and addicted at the same time.

Turns out, it’s you.

Happy 30th.
You’re still my favorite distraction.

– always, someone you can’t read completely.`;

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
