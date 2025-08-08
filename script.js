const flame = document.getElementById('flame');
const letter = document.getElementById('letter');
const music = document.getElementById('bg-music');

const message = `Dear you,

I’ve always wondered what kind of person could make me feel so...

...annoyed and addicted at the same time.

Turns out, it’s you.

Happy 30th.
You’re still my favorite distraction.

– always, someone you can’t read completely.`;

let letterVisible = false;

function toggleCandle() {
  letterVisible = !letterVisible;
  
  if (letterVisible) {
    flame.style.display = 'none';
    fadeOutMusic();
    letter.innerHTML = ''; // reset isi surat
    letter.style.display = 'block';
    typeWriter(letter, message, 0);
  } else {
    flame.style.display = 'block';
    letter.style.display = 'none';
    music.volume = 0.5; // balikin volume musik
  }
}

function fadeOutMusic() {
  const fade = setInterval(() => {
    if (music.volume > 0.05) {
      music.volume -= 0.05;
    } else {
      music.volume = 0;
      clearInterval(fade);
    }
  }, 200);
}

function typeWriter(element, text, i) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 30);
  }
}
