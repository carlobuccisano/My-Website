function cambiaStatoMenu(animazione, aperto) {
  const nav = document.getElementById('nav_sparisce');

  nav.classList.add(animazione),			// Play the given animation
  window.setTimeout(
    () => {
		if(aperto) {
			nav.classList.add('aperta');
		}
		else{
			nav.classList.remove('aperta');
		}
		nav.classList.remove(animazione);
    },
    400
  )
}


document.addEventListener('DOMContentLoaded', () => {
  const navbarBurger = document.querySelector('.navbar-burger');
  const nav = document.getElementById('nav_sparisce');	
  
  navbarBurger.addEventListener('click', function () {
	 navbarBurger.classList.toggle('quadrato');
	 if(nav.classList.contains('aperta')) { // It's down, close it
			cambiaStatoMenu('scrollup', false);
	 }
	 else { // It's up, open it
		 cambiaStatoMenu('scrolldown', true);
	 }
	  });
});


