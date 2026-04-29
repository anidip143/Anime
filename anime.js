// ================= URL PARAM =================
const params = new URLSearchParams(window.location.search);
const animeKey = params.get("anime");

// ================= DATABASE =================
const animeDB = {

  // ================= JUJUTSU KAISEN =================
  jjk: {
    title: "Jujutsu Kaisen Season 2",
    desc: "Hidden Inventory & Shibuya Incident arcs.",
    banner: "https://images6.alphacoders.com/134/1345576.jpeg",
    trailer: "mp4/jujutsu.mp4",
    episodes: [
      { ep: 1, title: "Hidden Inventory – Part 1", src: "videos/jjk/ep1.mp4" },
      { ep: 2, title: "Hidden Inventory – Part 2", src: "videos/jjk/ep2.mp4" },
      { ep: 3, title: "Gojo vs Toji", src: "videos/jjk/ep3.mp4" },
      { ep: 4, title: "The Shibuya Incident Begins", src: "videos/jjk/ep4.mp4" },
      { ep: 5, title: "Seance", src: "videos/jjk/ep5.mp4" },
      { ep: 6, title: "The Strongest", src: "videos/jjk/ep6.mp4" },
      { ep: 7, title: "Nonstandard", src: "videos/jjk/ep7.mp4" },
      { ep: 8, title: "Shibuya Showdown", src: "videos/jjk/ep8.mp4" },
      { ep: 9, title: "Pandemonium", src: "videos/jjk/ep9.mp4" },
      { ep: 10, title: "Chaos", src: "videos/jjk/ep10.mp4" },
      { ep: 11, title: "The Moonlight", src: "videos/jjk/ep11.mp4" },
      { ep: 12, title: "The End", src: "videos/jjk/ep12.mp4" }
    ]
  },

  // ================= ATTACK ON TITAN =================
  aot: {
    title: "Attack on Titan – Final Season",
    desc: "The epic conclusion to humanity’s war against the Titans.",
    banner: "https://wallpapercat.com/w/full/1/9/9/210982-3840x2160-desktop-4k-attack-on-titan-the-final-season-background-photo.jpg",
    trailer: "mp4/aot.mp4",
    episodes: [
      { ep: 1, title: "The Final Season", src: "videos/aot/ep1.mp4" },
      { ep: 2, title: "Midnight Train", src: "videos/aot/ep2.mp4" },
      { ep: 3, title: "The Door of Hope", src: "videos/aot/ep3.mp4" },
      { ep: 4, title: "From One Hand to Another", src: "videos/aot/ep4.mp4" },
      { ep: 5, title: "Declaration of War", src: "videos/aot/ep5.mp4" },
      { ep: 6, title: "The War Hammer Titan", src: "videos/aot/ep6.mp4" },
      { ep: 7, title: "Assault", src: "videos/aot/ep7.mp4" },
      { ep: 8, title: "Assassin’s Bullet", src: "videos/aot/ep8.mp4" },
      { ep: 9, title: "Brave Volunteers", src: "videos/aot/ep9.mp4" },
      { ep: 10, title: "A Sound Argument", src: "videos/aot/ep10.mp4" },
      { ep: 11, title: "Counterfeit", src: "videos/aot/ep11.mp4" },
      { ep: 12, title: "Guides", src: "videos/aot/ep12.mp4" }
    ]
  },

  // ================= DEMON SLAYER =================
  demon: {
    title: "Demon Slayer – Entertainment District Arc",
    desc: "Tanjiro and Tengen Uzui battle Upper Rank demons.",
    banner: "https://4kwallpapers.com/images/wallpapers/demon-slayer-3840x2160-23615.jpg",
    trailer: "mp4/demonslayer.mp4",
    episodes: [
      { ep: 1, title: "Sound Hashira Tengen Uzui", src: "videos/demon/ep1.mp4" },
      { ep: 2, title: "Infiltrating the District", src: "videos/demon/ep2.mp4" },
      { ep: 3, title: "What Are You?", src: "videos/demon/ep3.mp4" },
      { ep: 4, title: "Tonight", src: "videos/demon/ep4.mp4" },
      { ep: 5, title: "Flashy Battle", src: "videos/demon/ep5.mp4" },
      { ep: 6, title: "Layered Memories", src: "videos/demon/ep6.mp4" },
      { ep: 7, title: "Transformation", src: "videos/demon/ep7.mp4" },
      { ep: 8, title: "Gathering", src: "videos/demon/ep8.mp4" },
      { ep: 9, title: "Upper Rank Defeated", src: "videos/demon/ep9.mp4" },
      { ep: 10, title: "Never Give Up", src: "videos/demon/ep10.mp4" },
      { ep: 11, title: "No Matter How Many Lives", src: "videos/demon/ep11.mp4" }
    ]
  },

  // ================= SAKAMOTO DAYS =================
  sakamoto: {
    title: "Sakamoto Days",
    desc: "A retired hitman protects his peaceful family life.",
    banner: "https://images.alphacoders.com/139/thumb-1920-1398459.png",
    trailer: "mp4/sakamoto.mp4",
    episodes: [
      { ep: 1, title: "The Retired Hitman", src: "videos/sakamoto/ep1.mp4" },
      { ep: 2, title: "Assassins Arrive", src: "videos/sakamoto/ep2.mp4" },
      { ep: 3, title: "Protect the Family", src: "videos/sakamoto/ep3.mp4" },
      { ep: 4, title: "Old Enemies", src: "videos/sakamoto/ep4.mp4" },
      { ep: 5, title: "Convenience Store Battle", src: "videos/sakamoto/ep5.mp4" },
      { ep: 6, title: "The Order Appears", src: "videos/sakamoto/ep6.mp4" }
    ]
  },

  // ================= DANDADAN =================
  dandadan: {
    title: "Dandadan Season 2",
    desc: "Aliens, curses, and paranormal chaos.",
    banner: "https://images7.alphacoders.com/139/thumb-1920-1397056.jpg",
    trailer: "mp4/dandadan.mp4",
    episodes: [
      { ep: 1, title: "The Cursed House", src: "videos/dandadan/ep1.mp4" },
      { ep: 2, title: "Evil Eye Appears", src: "videos/dandadan/ep2.mp4" },
      { ep: 3, title: "Psychic Awakening", src: "videos/dandadan/ep3.mp4" },
      { ep: 4, title: "Alien Encounter", src: "videos/dandadan/ep4.mp4" },
      { ep: 5, title: "Tunnel Battle", src: "videos/dandadan/ep5.mp4" },
      { ep: 6, title: "Final Exorcism", src: "videos/dandadan/ep6.mp4" }
    ]
  },

  // ================= DEATH NOTE =================
  deathnote: {
    title: "Death Note",
    desc: "A battle of intellect between Light Yagami and L.",
    banner: "https://images-cdn.ubuy.co.in/634e820b55e63b7bd829de96-poster-stop-online-death-note.jpg",
    trailer: "mp4/deathnote.mp4",
    episodes: [
      { ep: 1, title: "Rebirth", src: "videos/deathnote/ep1.mp4" },
      { ep: 2, title: "Confrontation", src: "videos/deathnote/ep2.mp4" },
      { ep: 3, title: "Dealings", src: "videos/deathnote/ep3.mp4" },
      { ep: 4, title: "Pursuit", src: "videos/deathnote/ep4.mp4" },
      { ep: 5, title: "Tactics", src: "videos/deathnote/ep5.mp4" },
      { ep: 6, title: "Unraveling", src: "videos/deathnote/ep6.mp4" },
      { ep: 7, title: "Overcast", src: "videos/deathnote/ep7.mp4" },
      { ep: 8, title: "Glare", src: "videos/deathnote/ep8.mp4" },
      { ep: 9, title: "Encounter", src: "videos/deathnote/ep9.mp4" },
      { ep: 10, title: "Doubt", src: "videos/deathnote/ep10.mp4" },
      { ep: 11, title: "Assault", src: "videos/deathnote/ep11.mp4" },
      { ep: 12, title: "Love", src: "videos/deathnote/ep12.mp4" }
    ]
  }
};

// ================= SAFETY CHECK =================
const anime = animeDB[animeKey];
if (!anime) {
  alert("Anime not found");
  throw new Error("Invalid anime key");
}

// ================= DOM =================
const titleEl = document.getElementById("animeTitle");
const descEl = document.getElementById("animeDesc");
const bannerEl = document.querySelector(".anime-banner");
const bgVideo = document.getElementById("bgVideo");
const bgSource = bgVideo.querySelector("source");
const mainVideo = document.getElementById("episodeVideo");
const episodeList = document.getElementById("episodeList");

// ================= APPLY DATA =================
titleEl.textContent = anime.title;
descEl.textContent = anime.desc;

bannerEl.style.backgroundImage =
  `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.3)), url('${anime.banner}')`;

// Background video
bgSource.src = anime.trailer;
bgVideo.muted = true;
bgVideo.loop = true;
bgVideo.autoplay = true;
bgVideo.playsInline = true;
bgVideo.load();
bgVideo.play().catch(() => {});

// Main video player (trailer first)
mainVideo.src = anime.trailer;
mainVideo.autoplay = true;
mainVideo.controls = true;
mainVideo.playsInline = true;
mainVideo.muted = false;
mainVideo.load();

// Episodes
episodeList.innerHTML = "";
anime.episodes.forEach((ep, index) => {
  const div = document.createElement("div");
  div.className = "episode";
  div.innerHTML = `<strong>Episode ${ep.ep}</strong><p>${ep.title}</p>`;

  div.onclick = () => {
    document.querySelectorAll(".episode").forEach(e => e.classList.remove("active"));
    div.classList.add("active");
    mainVideo.src = ep.src;
    mainVideo.play();
  };

  episodeList.appendChild(div);
  if (index === 0) div.classList.add("active");
});
