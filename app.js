const videos = [
  {
    type: "youtube",
    title: "Dark Age | The First Galactic Empire",
    url: "https://youtu.be/osh4tCd0wws?si=-xSfmwrQkKg8Q6SG",
  },
  {
    type: "youtube",
    title: "\"Liberty Dies Today\" - Star Wars Empire Little Dark Age Edit",
    url: "https://youtu.be/v2BiBVS0Byw?si=Jo8AYy2IvSjLkrPS",
  },
  {
    type: "youtube",
    title: "Star Wars: Factions (Legends) - Little Dark Age",
    url: "https://youtu.be/5VyuZO3uE-c?si=KGP08aTa8FhdLOJU",
  },
  {
    type: "youtube",
    title: "The Grand Army of the Republic | Simpsonwave 1995 Edit - Star Wars",
    url: "https://youtu.be/FkYbxI-rKpE?si=J6tIaIRX2yf813HN",
  },
  {
    type: "youtube",
    title: "The Grand Army Of The Republic",
    url: "https://youtu.be/J07-N6FwTBY?si=CdcA7ymrBxsP10Sa",
  },
  {
    type: "youtube",
    title: "The Galactic Empire | Simpsonwave 1995 Edit - Star Wars",
    url: "https://youtu.be/TF64u5DsiCY?si=6M5DEOB6pB5JTlmd",
  },
  {
    type: "youtube",
    title: "The First Galactic Empire - Simpsonwave Edit (Star Wars)",
    url: "https://youtu.be/essqdwhjB8g?si=ab8Wbyq7D8hZN-OS",
  },
  {
    type: "youtube",
    title: "THE FIRST GALACTIC EMPIRE | DARKSIDE EDIT",
    url: "https://youtu.be/jeFc7xmtbx4?si=QF1UCB9oUoOdFayL",
  },
  {
    type: "youtube",
    title: "The Death Star | After Dark edit - Star Wars",
    url: "https://youtu.be/toaP2r30O-4?si=Jnic_TjNVj8BWfJb",
  },
  {
    type: "youtube",
    title: "The Rebel Alliance | Metamorphosis edit - Star Wars",
    url: "https://youtu.be/e3QnUl-7yOE?si=OLMFsscMwoF1IMK0",
  },
  {
    type: "youtube",
    title: "The Galactic Empire - Resonance",
    url: "https://youtu.be/GJueeYJJFdw?si=BaaXN1NF6-rwACbe",
  },
  {
    type: "youtube",
    title: "Obi-Wan's final message - Burying the Dead",
    url: "https://youtu.be/lMXYxen0VMQ?si=uk1wbaWdw-U6mV9Z",
  },
  {
    type: "youtube",
    title: "Ludwig Goransson - The Mandalorian (From \"The Mandalorian\"/Official Audio)",
    url: "https://youtu.be/2YDKxcdIXBs?si=CS8LapqIGfbSC9Sz",
  },
  {
    type: "youtube",
    title: "Order 66 Extended Cut - The Definitive Edition [4K UHD]",
    url: "https://youtu.be/G2QhAynp1FY?si=TahsUUYMzn9RZ981",
  },
  {
    type: "local",
    title: "Download 0",
    url: "media/download-0.mp4",
  },
  {
    type: "local",
    title: "Download 1",
    url: "media/download-1.mp4",
  },
  {
    type: "local",
    title: "Download 2",
    url: "media/download-2.mp4",
  },
  {
    type: "local",
    title: "Download 3",
    url: "media/Download (3).mp4",
  },
  {
    type: "local",
    title: "Download 4",
    url: "media/download-4.mp4",
  },
  {
    type: "local",
    title: "Download 5",
    url: "media/download-5.mp4",
  },
  {
    type: "local",
    title: "Download 6",
    url: "media/download-6.mp4",
  },
];

const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");
const videoCount = document.getElementById("videoCount");
const emptyState = document.getElementById("emptyState");
const template = document.getElementById("videoCardTemplate");
const playerModal = document.getElementById("playerModal");
const playerBackdrop = document.getElementById("playerBackdrop");
const closePlayerButton = document.getElementById("closePlayerButton");
const playerTitle = document.getElementById("playerTitle");
const youtubePlayer = document.getElementById("youtubePlayer");
const openOnYouTubeLink = document.getElementById("openOnYouTubeLink");
const playerHelpText = document.getElementById("playerHelpText");

function getVideoId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch (error) {
    return null;
  }

  return null;
}

function getThumbnail(url) {
  const videoId = getVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "https://placehold.co/640x360/111827/F3F4F6?text=Star+Wars+Edit";
}

function getCardThumbnail(video) {
  if (video.type === "local") {
    return video.thumbnail || "https://placehold.co/640x360/111827/F3F4F6?text=Local+Video";
  }

  return getThumbnail(video.url);
}

function getCardBadge(video) {
  return video.type === "local" ? "Tarayicida ac" : "Burada oynat";
}

function getCardUrl(video) {
  return video.type === "local" ? encodeURI(video.url) : video.url;
}

function getYouTubeEmbedUrl(url) {
  const videoId = getVideoId(url);
  const origin = window.location.origin;
  const widgetReferrer = window.location.href;

  return videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&origin=${encodeURIComponent(origin)}&widget_referrer=${encodeURIComponent(widgetReferrer)}`
    : "";
}

function openPlayer(video) {
  const embedUrl = getYouTubeEmbedUrl(video.url);

  if (!embedUrl) {
    return;
  }

  playerTitle.textContent = video.title;
  youtubePlayer.src = embedUrl;
  openOnYouTubeLink.href = video.url;
  playerHelpText.textContent = "Video burada acilmazsa asagidaki butondan dogrudan YouTube'da izleyebilirsin.";
  playerModal.classList.remove("hidden");
  playerModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlayer() {
  youtubePlayer.src = "";
  openOnYouTubeLink.href = "#";
  playerModal.classList.add("hidden");
  playerModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderCards(items) {
  videoGrid.innerHTML = "";

  items.forEach((video, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".video-card");
    const link = fragment.querySelector(".video-link");
    const thumbnail = fragment.querySelector(".thumbnail");
    const title = fragment.querySelector(".video-title");
    const badge = fragment.querySelector(".play-badge");

    card.style.animationDelay = `${index * 70}ms`;
    link.href = getCardUrl(video);
    link.target = video.type === "local" ? "_self" : "_blank";
    link.dataset.videoType = video.type;
    link.dataset.videoIndex = String(index);
    thumbnail.src = getCardThumbnail(video);
    thumbnail.alt = `${video.title} kapak gorseli`;
    title.textContent = video.title;
    badge.textContent = getCardBadge(video);

    videoGrid.appendChild(fragment);
  });

  videoCount.textContent = `${items.length} video`;
  emptyState.classList.toggle("hidden", items.length > 0);
}

function filterVideos(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    renderCards(videos);
    return;
  }

  const filtered = videos.filter((video) => {
    const haystack = video.title.toLowerCase();

    return haystack.includes(normalized);
  });

  renderCards(filtered);
}

searchInput.addEventListener("input", (event) => {
  filterVideos(event.target.value);
});

videoGrid.addEventListener("click", (event) => {
  const link = event.target.closest(".video-link");

  if (!link) {
    return;
  }

  const cardTitle = link.querySelector(".video-title")?.textContent;
  const selectedVideo = videos.find((video) => video.title === cardTitle);

  if (!selectedVideo || selectedVideo.type !== "youtube") {
    return;
  }

  event.preventDefault();
  openPlayer(selectedVideo);
});

closePlayerButton.addEventListener("click", closePlayer);
playerBackdrop.addEventListener("click", closePlayer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !playerModal.classList.contains("hidden")) {
    closePlayer();
  }
});

renderCards(videos);
