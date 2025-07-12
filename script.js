const redirects = {
  "Moai": "https://thirtydollar.website/",
  "Zoo": "https://gdcolon.com/zoo",
  "GDBrowser": "https://gdbrowser.com/",
  "Online Icon Kit": "https://gdbrowser.com/iconkit",
  "GD Font Gen": "https://gdcolon.com/gdfont",
  "GD Comment Gen": "https://gdcolon.com/gdcomment",
  "GD Save Explorer": "https://gdcolon.com/gdsave",
  "GD Spritesheet": "https://gdcolon.com/gdsplitter",
  "Treacherous Trials": "https://gdcolon.itch.io/treacheroustrials",
  "Sea Bunnies": "https://gdcolon.com/seabunny"
};

function redirectTo(name) {
  if (redirects[name]) {
    window.location.href = redirects[name];
  } else {
    alert("No redirect found for: " + name);
  }
}
