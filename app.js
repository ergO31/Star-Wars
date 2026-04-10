const videos = [
  {
    title: "Dark Age | The First Galactic Empire",
    url: "https://youtu.be/osh4tCd0wws?si=-xSfmwrQkKg8Q6SG",
  },
  {
    title: "\"Liberty Dies Today\" - Star Wars Empire Little Dark Age Edit",
    url: "https://youtu.be/v2BiBVS0Byw?si=Jo8AYy2IvSjLkrPS",
  },
  {
    title: "Star Wars: Factions (Legends) - Little Dark Age",
    url: "https://youtu.be/5VyuZO3uE-c?si=KGP08aTa8FhdLOJU",
  },
  {
    title: "The Grand Army of the Republic | Simpsonwave 1995 Edit - Star Wars",
    url: "https://youtu.be/FkYbxI-rKpE?si=J6tIaIRX2yf813HN",
  },
  {
    title: "The Grand Army Of The Republic",
    url: "https://youtu.be/J07-N6FwTBY?si=CdcA7ymrBxsP10Sa",
  },
  {
    title: "The Galactic Empire | Simpsonwave 1995 Edit - Star Wars",
    url: "https://youtu.be/TF64u5DsiCY?si=6M5DEOB6pB5JTlmd",
  },
  {
    title: "The First Galactic Empire - Simpsonwave Edit (Star Wars)",
    url: "https://youtu.be/essqdwhjB8g?si=ab8Wbyq7D8hZN-OS",
  },
  {
    title: "THE FIRST GALACTIC EMPIRE | DARKSIDE EDIT",
    url: "https://youtu.be/jeFc7xmtbx4?si=QF1UCB9oUoOdFayL",
  },
  {
    title: "The Death Star | After Dark edit - Star Wars",
    url: "https://youtu.be/toaP2r30O-4?si=Jnic_TjNVj8BWfJb",
  },
  {
    title: "The Rebel Alliance | Metamorphosis edit - Star Wars",
    url: "https://youtu.be/e3QnUl-7yOE?si=OLMFsscMwoF1IMK0",
  },
  {
    title: "The Galactic Empire - Resonance",
    url: "https://youtu.be/GJueeYJJFdw?si=BaaXN1NF6-rwACbe",
  },
  {
    title: "Obi-Wan's final message - Burying the Dead",
    url: "https://youtu.be/lMXYxen0VMQ?si=uk1wbaWdw-U6mV9Z",
  },
  {
    title: "Ludwig Goransson - The Mandalorian (From \"The Mandalorian\"/Official Audio)",
    url: "https://youtu.be/2YDKxcdIXBs?si=CS8LapqIGfbSC9Sz",
  },
  {
    title: "Order 66 Extended Cut - The Definitive Edition [4K UHD]",
    url: "https://youtu.be/G2QhAynp1FY?si=TahsUUYMzn9RZ981",
  },
];

const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");
const videoCount = document.getElementById("videoCount");
const emptyState = document.getElementById("emptyState");
const template = document.getElementById("videoCardTemplate");

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

function renderCards(items) {
  videoGrid.innerHTML = "";

  items.forEach((video, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".video-card");
    const link = fragment.querySelector(".video-link");
    const thumbnail = fragment.querySelector(".thumbnail");
    const title = fragment.querySelector(".video-title");

    card.style.animationDelay = `${index * 70}ms`;
    link.href = video.url;
    thumbnail.src = getThumbnail(video.url);
    thumbnail.alt = `${video.title} kapak gorseli`;
    title.textContent = video.title;

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

renderCards(videos);
