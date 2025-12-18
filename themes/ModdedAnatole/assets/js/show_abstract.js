function ToggleAbstract() {
	const divo = document.getElementById("abstract-1");
	const bottone = document.getElementById("abstract_button_1");
	if(divo.classList.contains('hidden')) {
		bottone.setAttribute("title", "Hide abstract");
	}
	else {
		bottone.setAttribute("title", "Show abstract");
	}
	divo.classList.toggle('hidden');
};
	


document.addEventListener('DOMContentLoaded', function () {
	    const bottone = document.getElementById("abstract_button_1");
		if(bottone) { bottone.addEventListener('click', ToggleAbstract); }
		});
