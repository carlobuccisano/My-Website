const getStoredThemeStyle = () => localStorage.getItem('theme');

const setThemeStyle = (scelta) => {
  localStorage.setItem('theme', scelta);
  const html = document.documentElement; // This is the <html> element, of class given by html.classList
  const prevTheme = [...html.classList].find((c) => c.match(/theme--(light|dark)/)); // Try to find if it is set to either theme
  if (prevTheme) {
    html.classList.remove(prevTheme); // Remove it, if that's the case
  }
  html.classList.add(`theme--${scelta}`); // Write the correct theme into <html>'s class
  const sole = document.getElementById("sole");
  const luna = document.getElementById("luna");
  // Change theme switch icon 
  switch (scelta) {
	  case 'light':
		 // Show the moon
	     if(luna) luna.style.display = "block";
		 if(sole) sole.style.display = "none";
		 break;
	  default:
		 // Show the sun
   		 if(luna) luna.style.display = "none";
	     if(sole) sole.style.display = "block";
		 break;
  }
};

const setDarkTheme = () => {
  setThemeStyle('dark');
};
const setLightTheme = () => {
  setThemeStyle('light');
};

const switchTheme = () => {
  const currThemeStyle = getStoredThemeStyle();
  switch (currThemeStyle) {
    case 'light':
      setDarkTheme();
      break;
    case 'dark':
      setLightTheme();
      break;
    default:
      setLightTheme();
      break;
  }
};




const initTheme = e => {
	if(e != null) {
		setThemeStyle(e);
	} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  		setDarkTheme();
	} else {
  		setLightTheme();
	}
};

document.addEventListener(
  'DOMContentLoaded',
  () => {
	initTheme(getStoredThemeStyle());
    const themeSwitcher = document.getElementById('themeswitch');
    themeSwitcher.addEventListener('click', switchTheme, false);
  },
  false,
);

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => (e.matches ? setDarkTheme() : setLightTheme()), false);

// Initialize the theme
initTheme(getStoredThemeStyle());
