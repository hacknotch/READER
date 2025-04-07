const book = document.getElementById('book');
const flipSound = document.getElementById('flipSound');

const pages = [
  { title: 'Page 1', text: 'Welcome to your animated book!' },
  { title: 'Page 2', text: 'Flip through to see more pages.' },
  { title: 'Page 3', text: 'This is a dynamically generated book.' },
  { title: 'Page 4', text: 'You can add as many pages as you like!' },
  { title: 'Page 5', text: 'Thanks for reading!' },
  { title: 'The End', text: '— Made with ❤️ using HTML/CSS/JS' },
];

let currentPage = 0;

// Create pages dynamically
for (let i = 0; i < pages.length; i += 2) {
  const pageDiv = document.createElement('div');
  pageDiv.className = 'page';

  const front = document.createElement('div');
  front.className = 'front';
  front.innerHTML = `
    <div class="content">
      <h2>${pages[i]?.title || ''}</h2>
      <p>${pages[i]?.text || ''}</p>
    </div>
  `;

  const back = document.createElement('div');
  back.className = 'back';
  back.innerHTML = `
    <div class="content">
      <h2>${pages[i + 1]?.title || ''}</h2>
      <p>${pages[i + 1]?.text || ''}</p>
    </div>
  `;

  pageDiv.appendChild(front);
  pageDiv.appendChild(back);
  book.appendChild(pageDiv);
}

const allPages = document.querySelectorAll('.page');

function nextPage() {
  if (currentPage < allPages.length) {
    allPages[currentPage].classList.add('flipped');
    currentPage++;
    playSound();
  }
}

function prevPage() {
  if (currentPage > 0) {    
    currentPage--;
    allPages[currentPage].classList.remove('flipped');
    playSound();
  }
}

function playSound() {
  if (flipSound) {
    flipSound.currentTime = 0;
    flipSound.play();
  }
}
