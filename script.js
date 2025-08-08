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
    letter.innerHTML = '';
    letter.style.display = 'block';

    // Start music from beginning
    music.currentTime = 0;
    music.volume = 0.5;
    music.play();

    typeWriter(letter, message, 0);
  } else {
    flame.style.display = 'block';
    letter.style.display = 'none';
    music.pause();
  }
}

function typeWriter(element, text, i) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 30);
  }
}
