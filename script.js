// ==== PRELOADER ====
window.addEventListener('load', function() {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hidden');
  }, 1500);
});

// ==== MOBILE MENU ====
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!menuToggle || !nav) return;
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
}

// ==== CAROUSEL ====
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
  const slides = document.getElementsByClassName("carousel-item");
  const dots = document.getElementsByClassName("dot");
  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  [...slides].forEach(s => s.classList.remove('active'));
  [...dots].forEach(d => d.classList.remove('active'));

  slides[slideIndex - 1].classList.add('active');
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');
}

function nextSlide() { showSlides(++slideIndex); }
function prevSlide() { showSlides(--slideIndex); }

function currentSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n;
  showSlides(slideIndex);
  startAutoSlide();
}

function startAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

showSlides(slideIndex);
startAutoSlide();

const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => { clearInterval(slideInterval); prevSlide(); startAutoSlide(); });
  nextBtn.addEventListener("click", () => { clearInterval(slideInterval); nextSlide(); startAutoSlide(); });
}

// ==== KEYBOARD NAV ====
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") prevBtn?.click();
  if (e.key === "ArrowRight") nextBtn?.click();
});

// ==== BACK TO TOP ====
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (!backToTopBtn) return;
  backToTopBtn.style.display = (window.pageYOffset > 300) ? 'block' : 'none';
});
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ==== SCROLL ANIMATION ====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// ==== SEARCH ====
const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-bar i');
function performSearch() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) alert(`Searching for: ${searchTerm}`);
}
searchIcon?.addEventListener('click', performSearch);
searchInput?.addEventListener('keypress', e => e.key === 'Enter' && performSearch());

// ==== CONTACT FORM ====
const contactForm = document.querySelector('.contact-form form');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

// ==== PARALLAX ====
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) hero.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
});

// ==== CARD INTERACTIONS ====
document.querySelectorAll('.anime-card').forEach(card =>
  card.addEventListener('click', () => alert(`Opening ${card.querySelector('h3')?.textContent}`))
);
document.querySelectorAll('.genre-card').forEach(card =>
  card.addEventListener('click', () => alert(`Showing ${card.querySelector('h3')?.textContent} anime`))
);
document.querySelectorAll('.new-release-card .watch-now-btn').forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();

    // Attempt to derive an anime key from the card title, fallback to id/data attributes if present
    const card = btn.closest('.new-release-card');
    let key = '';
    if (card) {
      // Prefer data-anime attribute if the markup provides it
      if (card.dataset && card.dataset.anime) key = card.dataset.anime;
      else {
        const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
        if (title.includes('jujutsu') || title.includes('jjk')) key = 'jjk';
        else if (title.includes('attack') || title.includes('titan') || title.includes('aot')) key = 'aot';
        else if (title.includes('demon')) key = 'demon';
        else if (title.includes('sakamoto')) key = 'sakamoto';
        else if (title.includes('dandadan')) key = 'dandadan';
        else if (title.includes('death')) key = 'deathnote';
      }
    }

    if (!key) {
      // graceful fallback: open overlay player if present
      alert(`Starting playback of ${card?.querySelector('h3')?.textContent || 'selected anime'}`);
      return;
    }

    // Navigate to the trailer page with the anime key
    window.location.href = `trailer.html?anime=${encodeURIComponent(key)}`;
  })
);

// ==== BACKGROUND GIFS ====
const gifs = [
  "https://i.pinimg.com/originals/64/94/51/6494513b774a9c077fd22c8d89294c37.gif",
  "https://media4.giphy.com/media/fAe5ZoqgP8MZG7VWON/giphy.gif",
  "https://giffiles.alphacoders.com/222/222658.gif",
  "https://giffiles.alphacoders.com/223/223321.gif",
  "https://i.redd.it/03pzqsvvjosd1.gif"
];
let current = 0;
function changeBackground() {
  document.body.style.setProperty("--bg-image", `url(${gifs[current]})`);
  current = (current + 1) % gifs.length;
}
changeBackground();
setInterval(changeBackground, 5000);

// ==== HEADER SCROLL BEHAVIOR ====
window.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector('.scroll-container');
  if (!scrollContainer) return;
  const header = document.querySelector('header');
  let scrollTimer, lastScroll = 0;

  scrollContainer.addEventListener('scroll', () => {
    scrollContainer.classList.add('scroll-active');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => scrollContainer.classList.remove('scroll-active'), 1000);

    const currentScroll = scrollContainer.scrollTop;
    header.classList.toggle('header-hidden', currentScroll > lastScroll && currentScroll > 50);
    lastScroll = currentScroll;
  });
});

// ==== AUTH MODALS ====
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

let currentUser = null;

loginBtn?.addEventListener('click', () => loginModal.style.display = 'flex');
signupBtn?.addEventListener('click', () => signupModal.style.display = 'flex');


document.getElementById('loginSubmit')?.addEventListener('click', () => {
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value.trim();
  if (u && p) {
    currentUser = u;
    loginModal.style.display = 'none';
    loginBtn.style.display = signupBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    alert(`Welcome back, ${u}!`);
  } else alert('Enter username and password');
});

document.getElementById('signupSubmit')?.addEventListener('click', () => {
  const u = document.getElementById('signupUser').value.trim();
  const p = document.getElementById('signupPass').value.trim();
  if (u && p) {
    currentUser = u;
    signupModal.style.display = 'none';
    loginBtn.style.display = signupBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    alert(`Account created! Welcome, ${u}`);
  } else alert('Enter username and password');
});

logoutBtn?.addEventListener('click', () => {
  currentUser = null;
  logoutBtn.style.display = 'none';
  loginBtn.style.display = signupBtn.style.display = 'inline-block';
  alert('Logged out successfully!');
});

function openJJKDetails() {
  document.getElementById("jjk-details").style.display = "flex";
}
function openAOTDetails() {
  document.getElementById("aot-details").style.display = "flex";
}
function openDemonSlayerDetails() {
  document.getElementById("demon-details").style.display = "flex";
}
function openSakamotoDetails() {
  document.getElementById("sakamoto-details").style.display = "flex";
}
function openDandadanDetails() {
  document.getElementById("dandadan-details").style.display = "flex";
}
function openDeathNoteDetails() {
  document.getElementById("deathnote-details").style.display = "flex";
}



// ================= MODAL CLOSE (FINAL FIX) =================
// ===== UNIVERSAL MODAL CLOSE (FIXED & SAFE) =====
document.addEventListener('click', function (e) {

  // Close when ❌ is clicked
  if (e.target.classList.contains('close')) {
    const modal = e.target.closest('.modal');
    if (modal) modal.style.display = 'none';
  }

  // Close when clicking outside modal-content
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }

});
// ===== HOME PAGE TRAILER PLAYER (ALL ANIME) =====

const animeData = {
  jjk: {
    title: "Jujutsu Kaisen Season 2",
    trailer: "https://res.cloudinary.com/dfl2cxofj/video/upload/v1768228878/jujutsu_ghs7ey.mp4"
  },
  aot: {
    title: "Attack on Titan Final Season",
    trailer: "https://res.cloudinary.com/dfl2cxofj/video/upload/v1768228892/aot_i0c2pe.mp4"
  },
  demon: {
    title: "Demon Slayer: Entertainment District",
    trailer: "https://res.cloudinary.com/dfl2cxofj/video/upload/v1768228915/demonslayer_rczuy6.mp4"
  },
  sakamoto: {
    title: "Sakamoto Days Part 2",
    trailer: "https://res.cloudinary.com/dfl2cxofj/video/upload/v1768228907/sakamoto_qfgvzi.mp4"
  },
  dandadan: {
    title: "Dandadan Season 2",
    trailer: "https://res.cloudinary.com/dfl2cxofj/video/upload/v1768228904/dandadan_qxdm2b.mp4"
  },
  deathnote: {
    title: "Death Note",
    trailer: "mp4/deathnote.mp4"
  }
};

function openPlayer(key) {
  document.querySelector('header')?.classList.remove('header-hidden');

  const overlay = document.getElementById("playerOverlay");
  const video = document.getElementById("trailerVideo");
  const title = document.getElementById("playerTitle");
  const muteBtn = document.getElementById("muteBtn");

  const data = animeData[key];
  if (!data) return console.warn('No trailer data for', key);

  title.textContent = data.title || '';

  // Reset video
  video.pause();
  video.src = data.trailer;
 video.muted = true; // required for autoplay
video.volume = 0.8;
video.setAttribute('playsinline', '');
video.load();

overlay.style.display = "block";
document.body.classList.add('player-open');

video.play().catch(err => {
  console.warn("Autoplay blocked:", err);
});


  // Initial icon
  muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';

  // Toggle mute / unmute
  muteBtn.onclick = (e) => {
    e.stopPropagation(); // prevent overlay click
    video.muted = !video.muted;

    muteBtn.innerHTML = video.muted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
  };

  // First user interaction enables sound
  overlay.addEventListener(
    "click",
    () => {
      video.muted = false;
      muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    },
    { once: true }
  );
}

function closePlayer() {
  document.querySelector('header')?.classList.remove('header-hidden');

  const overlay = document.getElementById("playerOverlay");
  const video = document.getElementById("trailerVideo");

  video.pause();
  video.src = "";
  overlay.style.display = "none";
  document.body.classList.remove('player-open');
}

// Close player overlay when user navigates via header or opens auth modals
;(function enableHeaderNavigationClose() {
  const selectors = 'header .nav a, header .logo, .auth-buttons button, .menu-toggle';
  document.querySelectorAll(selectors).forEach(el => {
    el.addEventListener('click', (e) => {
      const overlay = document.getElementById('playerOverlay');
      const video = document.getElementById('trailerVideo');
      if (overlay && getComputedStyle(overlay).display !== 'none') {
        // pause and close the overlay immediately
        try { if (video) video.pause(); } catch (err) {}
        try { closePlayer(); } catch (e) { /* ignore */ }
      }

      // If mobile nav is open, close it so navigation is instant
      const nav = document.querySelector('.nav');
      const menuToggle = document.querySelector('.menu-toggle');
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
      }

      // If the element is an anchor linking to a section, smooth-scroll the scroll-container
      if (el.tagName.toLowerCase() === 'a' && el.getAttribute('href')?.startsWith('#')) {
        const targetId = el.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        const scrollContainer = document.querySelector('.scroll-container');
        if (target && scrollContainer) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + scrollContainer.scrollTop - 80; // offset for header
          scrollContainer.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
})();
