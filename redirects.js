const redirects = {
  "Moai/Thirty Dollar Website": "https://thirtydollar.website/",
  "Zoo": "https://gdcolon.com/zoo",
  "GDWebsite": "https://gdbrowser.com/",
  "Online Icon Kit": "https://gdbrowser.com/iconkit",
  "GD Font Gen": "https://gdcolon.com/gdfont",
  "GD Comment Gen": "https://gdcolon.com/gdcomment",
  "GD Save Explorer": "https://gdcolon.com/gdsave",
  "GD Spritesheet": "https://gdcolon.com/gdsplitter",
  "Treacherous Trials": "https://gdcolon.itch.io/treacheroustrials",
  "Sea Bunnies": "https://gdcolon.com/seabunny",
  "YT": "https://youtube.com/gdcolon",
  "Twitter": "https://twitter.com/TheRealGDColon",
  "Bluesky": "https://bsky.app/profile/gdcolon.com",
  "Twitch": "https://www.twitch.tv/gdcolon",
  "itch": "https://gdcolon.itch.io/",
  "insta": "https://www.instagram.com/gdcolon",
  "tiktok": "https://www.tiktok.com/@gdcolon",
  "github": "https://github.com/GDColon"
};

function redirectTo(name) {
  if (redirects[name]) window.location.href = redirects[name];
  else alert("No redirect found for: " + name);
}
