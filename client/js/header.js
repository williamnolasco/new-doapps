var item_link = document.querySelectorAll('.item-link'),
	movable_bar = document.querySelector('.movable-bar');


function hoverItem(posLeft){
	return function(){
		movable_bar.style.opacity = '1';
		movable_bar.style.left = ((posLeft*120) + 10) + 'px';
	};
}

function hoverItem_desactivado(posLeft){
	return function(){
		movable_bar.style.opacity = '0';
	};
}


for(var a=0; a<item_link.length; a++){
	item_link[a].addEventListener('mouseover', hoverItem(a));
}
for(var a=0; a<item_link.length; a++){
	item_link[a].addEventListener('mouseout', hoverItem_desactivado(a));
}

movable_bar.style.opacity = '0';