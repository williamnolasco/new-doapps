var item_link = document.querySelectorAll('.item-link'),
	movable_bar = document.querySelector('.movable-bar');


function hoverItem(posLeft){
	return function(){
		movable_bar.style.left = ((posLeft*120) + 10) + 'px';
	};
}

for(var a=0; a<item_link.length; a++){
	item_link[a].addEventListener('mouseover', hoverItem(a));
}