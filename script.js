/* ============ CONFIG: MY NAME ============ */
const MY_NAME = "Mennatallah Abouelenin";

/* ============ SECTION CONTENT ============ */
const sections = [
  {
    id:'aboutme', title:'Character Sheet',
    html:`<h2>The Traveler's Log</h2>
    <p>A recently graduated Computer Engineer who enjoys figuring out how things work and finding better ways to build them. I've worked across mobile, full-stack, AI, and game development, blending thoughtful engineering with creative design. I like getting to the root of a problem, learning along the way, and paying attention to the little details that make an experience feel right.</p>`
  },
  {
    id:'quests', title:'Board of Quests',
    html:`<h2>Board of Quests</h2>
    <h3>Completed Quests</h3>
    <p><em>Sproutly</em> \u2014 a senior project mobile app. <a href="https://kaganrehber.github.io/CS491-Sproutly-webpage/" target="_blank" rel="noopener">Check its website</a></p>
    <p class="subtleItalic">(Check my CV to see more of my projects.)</p>
    <h3>Quests In Progress</h3>
    <p><em>Little Hollow</em> \u2014 a Unity project currently in development.</p>`
  },
  {
    id:'skills', title:'Tome of Skills',
    html:`<h2>Tome of Skills</h2><p>A record of arts mastered on the road so far.</p>
    <h3>Programming Languages</h3>
    <p>C++, Java, Dart, Python, JavaScript, TypeScript, HTML/CSS, C, C#, SQL, Swift, SystemVerilog, R, Kotlin, PHP</p>
    <h3>Tools</h3>
    <p>Visual Studio, Android Studio, RStudio, Xcode, Git, Jira, Google Colab, Gradio, Figma, Rive, Adobe Illustrator, Adobe Photoshop, Microsoft Office</p>
    <h3>Frameworks &amp; Libraries</h3>
    <p>Flutter, React, React Native, Django, FastAPI, PyTorch, Unity, Node.js, LibGDX</p>
    <h3>Soft Skills</h3>
    <p>Teamwork, Public speaking, Problem-solving, Communication, Critical thinking, Creativity</p>`
  },
  {
    id:'medals', title:'Hall of Medals',
    html:`<h2>Hall of Medals</h2><p>Certificates and honors earned.</p>
    <div class="certRow">
      <img src="assets/certificate-gamejam.jpg" alt="Game Jam Participation Certificate">
      <p class="subtleItalic certCaption">Game Jam — Participation</p>
    </div>
    <div class="certRow">
      <img src="assets/certificate-bookworm.jpg" alt="CS Fair Bookworm Award Certificate">
      <p class="subtleItalic certCaption">CS Fair — Bookworm Award</p>
    </div>`
  },
  {
    id:'treasury', title:'The Treasury',
    html:`<h2>The Treasury</h2><p>Where to find me and my work.</p>
    <p><a href="assets/mennatallah-abouelenin-cv.pdf" download>Download my CV</a></p>
    <p><a href="https://www.linkedin.com/in/mennatallah-abouelenin/" target="_blank" rel="noopener">LinkedIn</a></p>
    <p><a href="https://github.com/Mennatallah123" target="_blank" rel="noopener">GitHub</a></p>
    <p><a href="mailto:menna.ay.99@gmail.com">menna.ay.99@gmail.com</a></p>`
  },
  {
    id:'coursework', title:'Scrolls of Study',
    html:`<h2>Scrolls of Study</h2><p>Relevant coursework from my studies.</p>
    <p>Software Verification &amp; Validation, Engineering Project Management, Machine Learning, Data Science, Bioinformatics, Graphic Design</p>`
  },
  {
    id:'languages', title:'Tongues of the Realm',
    html:`<h2>Tongues of the Realm</h2><p>Languages spoken along my travels.</p>
    <div class="langRow"><span class="langName">English:</span> Native Proficiency</div>
    <div class="langRow"><span class="langName">Arabic:</span> Native Proficiency</div>
    <div class="langRow"><span class="langName">French:</span> Intermediate Proficiency</div>
    <div class="langRow"><span class="langName">Turkish:</span> Limited Working Proficiency</div>`
  },
  {
    id:'attic', title:'The Attic',
    html:`<h2>The Attic</h2><p>Interests and hobbies beyond the desk.</p>
    <p>Game development, Animation, Creative Writing, Tutoring, Knitting</p>`
  }
];

/* The Scrolls (poem) is not on the shelf — it's the prize for winning the hidden mini-game */
const secretScroll = {
  id:'scrolls', title:'The Scrolls',
  html:`<div class="poemHead"><img class="poemQuill" src="assets/quill.svg" alt=""><h2>The Scrolls</h2><p>Writings from quieter moments.</p></div>
  <h3>A Fictional Character</h3>
  <p class="subtleItalic" style="margin-top:-0.4rem;">By Mennatallah Abouelenin</p>
  <p>I wish I were a character in a book or a great movie,<br>
  A protagonist in a 600-page novel, living boldly and freely.<br>
  One who dwells in a quaint house on a lush, green field,<br>
  When lonely, chats with the flowers, the whispering wind, and the rustling leaves.</p>
  <p>One who stumbles upon a magical kingdom tucked in a closet,<br>
  Or bravely befriends fantastical creatures in an enchanted forest.<br>
  One who discovers a healing garden, fragrant with blooms,<br>
  Or embarks on a quest to find a treasure island, where adventure looms.</p>
  <p>One who receives a letter from a whimsical school of magic,<br>
  Or falls down a rabbit hole to meet a rabbit, utterly dramatic.<br>
  One who bends the elements with a flick of a hand,<br>
  Or forges a sword while a loyal dragon takes its stand.</p>
  <p>One whose journey captivates readers, watching me grow,<br>
  Discovering who I am and where my dreams might flow.<br>
  Setting high goals and chasing visions bright,<br>
  Only to achieve them as the stars align at night.</p>
  <p>I wish I were a character in a book or a great movie so bad,<br>
  One with a happy ending, leaving readers wishing it could last.<br>
  One who lingers in writers' thoughts, vivid and surreal,<br>
  A muse for poets, making them believe it\u2019s all miraculously real.</p>`
};

/* ============ INTRO ANIMATION ============ */
const introName = document.getElementById('introName');
introName.textContent = MY_NAME;
requestAnimationFrame(()=> setTimeout(()=> introName.classList.add('reveal'), 100));

setTimeout(()=>{
  document.getElementById('intro').classList.add('hide');
  document.getElementById('hero').classList.add('show');
}, 2200);

/* ============ HERO NAME (letter hover) ============ */
const heroName = document.getElementById('heroName');
MY_NAME.split('').forEach(ch=>{
  const span = document.createElement('span');
  span.textContent = ch === ' ' ? '\u00A0' : ch;
  heroName.appendChild(span);
});

/* ============ SCROLL HINT CLICK ============ */
document.getElementById('scrollHint').addEventListener('click', ()=>{
  document.getElementById('library').scrollIntoView({behavior:'smooth'});
});

/* ============ SCROLL REVEAL FOR LIBRARY ============ */
const library = document.getElementById('library');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) library.classList.add('reveal'); });
}, {threshold:0.2});
io.observe(library);

/* ============ FAIRY DUST CURSOR TRAIL ============ */
const fc = document.getElementById('fairyCanvas');
const fctx = fc.getContext('2d');
function resizeFairy(){ fc.width = window.innerWidth; fc.height = window.innerHeight; }
resizeFairy();
window.addEventListener('resize', resizeFairy);

let particles = [];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('mousemove', (e)=>{
  if(reducedMotion) return;
  for(let i=0;i<2;i++){
    particles.push({
      x:e.clientX + (Math.random()-0.5)*6,
      y:e.clientY + (Math.random()-0.5)*6,
      vy:-0.4 - Math.random()*0.6,
      vx:(Math.random()-0.5)*0.6,
      life:1,
      size:1.5 + Math.random()*2,
      hue: [45, 38, 51][Math.floor(Math.random()*3)]
    });
  }
});

function fairyLoop(){
  fctx.clearRect(0,0,fc.width,fc.height);
  particles.forEach(p=>{
    p.x += p.vx; p.y += p.vy; p.life -= 0.018;
    fctx.globalAlpha = Math.max(p.life,0);
    fctx.fillStyle = `hsl(${p.hue}, 70%, 65%)`;
    fctx.beginPath();
    fctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    fctx.fill();
  });
  particles = particles.filter(p=>p.life>0);
  fctx.globalAlpha = 1;
  requestAnimationFrame(fairyLoop);
}
fairyLoop();

/* ============ BOOKSHELF RENDER ============ */
const shelfRow1 = document.getElementById('shelfRow1');
const shelfRow2 = document.getElementById('shelfRow2');
const visited = new Set();
const totalSections = sections.length;

const splitPoint = Math.ceil(sections.length / 2);
document.getElementById('starTotal').textContent = totalSections;
sections.forEach((sec, i)=>{
  const b = document.createElement('button');
  b.className = 'book';
  b.textContent = sec.title;
  b.addEventListener('click', ()=> openBook(sec));
  (i < splitPoint ? shelfRow1 : shelfRow2).appendChild(b);
});

// secret locked book, appended last on row 1
const secretBook = document.createElement('button');
secretBook.className = 'book locked special';
secretBook.innerHTML = `<img class="lockIcon" src="assets/lock.svg" alt="Locked">`;
secretBook.title = 'Read every other book to unlock this one';
secretBook.addEventListener('click', ()=>{
  if(secretBook.classList.contains('unlocked')){
    openGame();
  } else {
    secretBook.animate(
      [{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],
      {duration:300}
    );
  }
});
shelfRow1.appendChild(secretBook);

// Scrolls book — locked on the shelf from the start, unlocks after winning the mini-game
const scrollsBook = document.createElement('button');
scrollsBook.className = 'book locked special';
scrollsBook.innerHTML = `<img class="lockIcon" src="assets/lock.svg" alt="Locked">`;
scrollsBook.title = 'Win the hidden game to unlock this one';
scrollsBook.addEventListener('click', ()=>{
  if(scrollsBook.classList.contains('unlocked')){
    openBook(secretScroll, false);
  } else {
    scrollsBook.animate(
      [{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],
      {duration:300}
    );
  }
});
shelfRow2.appendChild(scrollsBook);

function updateStars(){
  document.getElementById('starCount').textContent = visited.size;
  if(visited.size >= totalSections){
    secretBook.classList.remove('locked');
    secretBook.classList.add('unlocked');
    secretBook.innerHTML = 'The Vault';
  }
}

/* ============ MODAL ============ */
const modalOverlay = document.getElementById('modalOverlay');
const bookContent = document.getElementById('bookContent');
let currentModalSection = null;
let scrollJustWon = false;

function openBook(sec, countsForStars = true){
  bookContent.innerHTML = sec.html;
  modalOverlay.classList.add('open');
  currentModalSection = sec;
  if(countsForStars){
    visited.add(sec.id);
    updateStars();
  }
}
function closeModalFn(){
  modalOverlay.classList.remove('open');
  if(currentModalSection === secretScroll && scrollJustWon){
    scrollsBook.classList.remove('locked');
    scrollsBook.classList.add('unlocked');
    scrollsBook.innerHTML = 'The Scrolls';
    scrollJustWon = false;
  }
  currentModalSection = null;
}
document.getElementById('closeModal').addEventListener('click', closeModalFn);
modalOverlay.addEventListener('click', (e)=>{ if(e.target===modalOverlay) closeModalFn(); });

/* ============ MINIGAME: MEMORY VAULT ============ */
const gameOverlay = document.getElementById('gameOverlay');
const gameIntro = document.getElementById('gameIntro');
const introTitle = document.getElementById('introTitle');
const introSub = document.getElementById('introSub');
const gamePlay = document.getElementById('gamePlay');
const treasureReveal = document.getElementById('treasureReveal');
const playBtn = document.getElementById('playBtn');
const cardGrid = document.getElementById('cardGrid');
const gameMsg = document.getElementById('gameMsg');
const moveCounter = document.getElementById('moveCounter');
const readScrollBtn = document.getElementById('readScrollBtn');
const scrollPopup = document.getElementById('scrollPopup');
const treasureHint = document.getElementById('treasureHint');
const treasureMoves = document.getElementById('treasureMoves');

/* my own svgs */
const CARD_ICONS = {
  quill: `<img src="assets/quill.svg" alt="Quill and inkwell">`,
  dragon: `<img src="assets/dragon.svg" alt="Dragon">`,
  sword: `<img src="assets/sword.svg" alt="Sword and shield">`,
  castle: `<img src="assets/castle.svg" alt="Castle">`
};
const CARD_KEYS = Object.keys(CARD_ICONS);

/* The seal shown on every face-down tile */
const CARD_SEAL = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="32" cy="32" r="2.6" fill="currentColor"/>
  <path d="M32 14 L35 28 L32 32 L29 28 Z" fill="currentColor"/>
  <path d="M32 50 L35 36 L32 32 L29 36 Z" fill="currentColor"/>
  <path d="M14 32 L28 29 L32 32 L28 35 Z" fill="currentColor"/>
  <path d="M50 32 L36 29 L32 32 L36 35 Z" fill="currentColor"/>
</svg>`;

let cards = [];
let firstPick = null, secondPick = null, lockBoard = false;
let matchedCount = 0, moveCount = 0, gameWon = false;
let mismatchTimer = null;
let scrollClaimed = false; // stays true for the rest of the visit, once the scroll has been opened

/* ---------- screen switching ---------- */
function showScreen(screen){
  [gameIntro, gamePlay, treasureReveal].forEach(el => el.classList.toggle('show', el === screen));
}

function openGame(){
  introTitle.textContent = scrollClaimed
    ? 'The vault remembers you.'
    : 'A treasure lies protected by a memory lock.';
  introSub.textContent = scrollClaimed
    ? 'Play again any time \u2014 the scrolls are already yours to reread.'
    : "Match every pair to break the seal and claim what's inside.";

  resetGame();
  gameOverlay.classList.add('open');
  gameOverlay.setAttribute('aria-hidden', 'false');
  showScreen(gameIntro);
}

function closeGame(){
  if(mismatchTimer){ clearTimeout(mismatchTimer); mismatchTimer = null; }
  gameOverlay.classList.remove('open');
  gameOverlay.setAttribute('aria-hidden', 'true');
  firstPick = null; secondPick = null; lockBoard = false;
}
document.getElementById('closeGame').addEventListener('click', closeGame);
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && gameOverlay.classList.contains('open')) closeGame();
});

playBtn.addEventListener('click', ()=>{
  showScreen(gamePlay);
  const firstCard = cardGrid.querySelector('.card');
  if(firstCard) firstCard.focus();
});

/* ---------- deck setup ---------- */
function resetGame(){
  if(mismatchTimer){ clearTimeout(mismatchTimer); mismatchTimer = null; }

  const deck = [...CARD_KEYS, ...CARD_KEYS]
    .map(key => ({key}))
    .sort(()=> Math.random() - 0.5);

  matchedCount = 0;
  moveCount = 0;
  firstPick = null; secondPick = null; lockBoard = false;
  gameWon = false;

  gameMsg.textContent = 'Flip the tiles and find every matching pair.';
  moveCounter.textContent = 'Moves: 0';

  cardGrid.innerHTML = '';
  cards = deck.map((d, i)=>{
    const btn = document.createElement('button');
    btn.className = 'card';
    btn.type = 'button';
    btn.dataset.key = d.key;
    btn.dataset.index = i;
    btn.setAttribute('aria-label', 'Hidden memory tile');
    btn.innerHTML = `
      <div class="cardInner">
        <div class="cardFace cardFront">${CARD_SEAL}</div>
        <div class="cardFace cardBack">${CARD_ICONS[d.key]}</div>
      </div>`;
    btn.addEventListener('click', ()=> flipCard(btn));
    cardGrid.appendChild(btn);
    return btn;
  });
}

/* ---------- gameplay ---------- */
function flipCard(card){
  if(lockBoard || gameWon || card.classList.contains('flipped') || card.classList.contains('matched')) return;

  card.classList.add('flipped');
  card.setAttribute('aria-label', `Memory tile: ${card.dataset.key}`);

  if(!firstPick){
    firstPick = card;
    return;
  }

  secondPick = card;
  lockBoard = true;
  moveCount++;
  moveCounter.textContent = `Moves: ${moveCount}`;

  if(firstPick.dataset.key === secondPick.dataset.key){
    firstPick.classList.add('matched','popMatch');
    secondPick.classList.add('matched','popMatch');
    spawnMiniSparkle(firstPick);
    spawnMiniSparkle(secondPick);
    const a = firstPick, b = secondPick;
    setTimeout(()=>{ a.classList.remove('popMatch'); b.classList.remove('popMatch'); }, 400);
    matchedCount++;
    resetPicks();
    if(matchedCount === CARD_KEYS.length) winGame();
  } else {
    const a = firstPick, b = secondPick;
    a.classList.add('shake');
    b.classList.add('shake');
    mismatchTimer = setTimeout(()=>{
      a.classList.remove('flipped','shake');
      b.classList.remove('flipped','shake');
      a.setAttribute('aria-label', 'Hidden memory tile');
      b.setAttribute('aria-label', 'Hidden memory tile');
      mismatchTimer = null;
      resetPicks();
    }, 700);
  }
}
function resetPicks(){
  firstPick = null; secondPick = null; lockBoard = false;
}

function winGame(){
  gameWon = true;
  lockBoard = true;
  gameMsg.textContent = `Well matched! Solved in ${moveCount} moves.`;
  treasureMoves.textContent = `Solved in ${moveCount} move${moveCount === 1 ? '' : 's'}`;
  spawnConfetti();

  setTimeout(()=>{
    if(scrollClaimed){
      // already opened before: skip the chest theatrics, just offer the plain button
      treasureHint.textContent = 'The scrolls are already yours \u2014 read them again whenever you like.';
      scrollPopup.style.display = 'none';
      document.getElementById('chestWrap').style.display = 'none';
    } else {
      treasureHint.textContent = 'Click the scroll to read it';
      scrollPopup.style.display = '';
      document.getElementById('chestWrap').style.display = '';
    }
    showScreen(treasureReveal);
    readScrollBtn.focus();
  }, 650);
}

function claimScroll(){
  scrollJustWon = true;
  scrollClaimed = true;
  closeGame();
  openBook(secretScroll, false);
}
readScrollBtn.addEventListener('click', claimScroll);
scrollPopup.addEventListener('click', claimScroll);

/* ---------- effects ---------- */
function spawnMiniSparkle(cardEl){
  const rect = cardEl.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  const colors = ['#C98A3E','#B8935A','#EDE0C8'];
  for(let i=0;i<8;i++){
    const bit = document.createElement('div');
    bit.className = 'confettiBit';
    bit.style.left = cx + 'px';
    bit.style.top = cy + 'px';
    bit.style.background = colors[Math.floor(Math.random()*colors.length)];
    bit.style.width = '5px'; bit.style.height = '5px';
    const angle = Math.random()*Math.PI*2;
    const dist = 30 + Math.random()*30;
    bit.style.setProperty('--dx', (Math.cos(angle)*dist)+'px');
    bit.style.setProperty('--dy', (Math.sin(angle)*dist)+'px');
    bit.style.animation = 'sparklePop 0.6s ease forwards';
    document.body.appendChild(bit);
    setTimeout(()=> bit.remove(), 650);
  }
}

function spawnConfetti(){
  const colors = ['#C98A3E','#7A2E2E','#2F4B3C','#EDE0C8','#B8935A'];
  for(let i=0;i<80;i++){
    const bit = document.createElement('div');
    bit.className = 'confettiBit';
    bit.style.left = Math.random()*100 + 'vw';
    bit.style.background = colors[Math.floor(Math.random()*colors.length)];
    bit.style.animationDuration = (2 + Math.random()*1.5) + 's';
    bit.style.opacity = 0.6 + Math.random()*0.4;
    document.body.appendChild(bit);
    setTimeout(()=> bit.remove(), 3600);
  }
}
