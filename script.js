const generateAnime = () => {
    let animeSize = ANIMETITLES.length;
    let randomAnime = Math.floor(Math.random() * animeSize);
    let randomAnimeTitle = ANIMETITLES[randomAnime];

    document.getElementById("anime-title").innerText = randomAnimeTitle.anime;
    document.getElementById("anime-img").innerHTML = '<img src="'+ randomAnimeTitle.image +'" id="image-anime" class="img-fluid" alt="Responsive image"/>';  
    document.getElementById("eng-title").innerText = randomAnimeTitle.english;
    document.getElementById("anime-year").innerText = randomAnimeTitle.year;
    document.getElementById("anime-synopsis").innerText = randomAnimeTitle.synopsis;
};


