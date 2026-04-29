// ===== URL PARAM =====
// ===== URL PARAM =====
// URL param
const params = new URLSearchParams(window.location.search);
const animeKey = params.get("anime");

// DATABASE
const animeDB = {
  mha: {
    title: "My Hero Academia",
    episodes: Array.from({ length: 13 }, (_, i) => ({
      ep: i + 1,
      title: `Episode ${i + 1}`,
      src: `videos/mha/ep${i + 1}.mp4`
    }))
  },
  aot: {
    title: "Attack on Titan",
    episodes: Array.from({ length: 10 }, (_, i) => ({
      ep: i + 1,
      title: `Episode ${i + 1}`,
      src: `videos/aot/ep${i + 1}.mp4`
    }))
  },
  demon: {
    title: "Demon Slayer",
    episodes: Array.from({ length: 11 }, (_, i) => ({
      ep: i + 1,
      title: `Episode ${i + 1}`,
      src: `videos/demon/ep${i + 1}.mp4`
    }))
  }
};

// SAFETY
const anime = animeDB[animeKey];
if (!anime) {
  console.error("Anime not found:", animeKey);
  window.location.href = "index.html";
}

// DOM
const titleEl = document.getElementById("animeTitle");
const episodeList = document.getElementById("episodeList");
const playerWrapper = document.getElementById("playerWrapper");
const video = document.getElementById("videoPlayer");

// Apply title
titleEl.textContent = anime.title;

// Create episodes
anime.episodes.forEach(ep => {
  const div = document.createElement("div");
  div.className = "episode";

  div.innerHTML = `
    <div class="ep-info">
      <strong>Episode ${ep.ep}</strong>
      <span>${ep.title}</span>
    </div>
    <button class="ep-play">▶ Play</button>
  `;

  div.querySelector(".ep-play").addEventListener("click", () => {
    document.querySelectorAll(".episode").forEach(e =>
      e.classList.remove("active")
    );

    div.classList.add("active");
    playerWrapper.classList.remove("hidden");

    video.src = ep.src;
    video.play();
  });

  episodeList.appendChild(div);
});
