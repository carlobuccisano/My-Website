const getStoredThemeStyle = () => localStorage.getItem('theme');

const setThemeStyle = (scelta) => {
  localStorage.setItem('theme', scelta);
  const html = document.documentElement; // This is the <html> element, of class given by html.classList
  const prevTheme = [...html.classList].find((c) => c.match(/theme--(light|dark)/)); // Try to find if it is set to either theme
  if (prevTheme) {
    html.classList.remove(prevTheme); // Remove it, if that's the case
  }
  html.classList.add(`theme--${scelta}`); // Write the correct theme into <html>'s class
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


// Initialize the theme
initTheme(getStoredThemeStyle());

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const themeSwitcher = document.getElementById('themeswitch');
    if(themeSwitcher) {
	  themeSwitcher.addEventListener('click', switchTheme, false);
	}
  },
  false,
);


