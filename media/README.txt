Bu klasore kendi video dosyalarini koyabilirsin.

Ornek:
- media/duel-edit.mp4
- media/order66.mp4
- media/duel-edit-poster.jpg

Sonra app.js icindeki videos listesine su sekilde ekle:

{
  type: "local",
  title: "Duel Edit",
  url: "media/duel-edit.mp4",
  thumbnail: "media/duel-edit-poster.jpg",
}

Not:
- Arkadaslarinin da gorebilmesi icin bu dosyalari GitHub repo'na yuklemen gerekir.
- Sadece kendi bilgisayarinda duran dosyalar baskalarina acik olmaz.
