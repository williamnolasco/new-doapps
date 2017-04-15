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


//Menu Responsive

var list_items = document.querySelector('.list-items'),
	open_menu_mobile = document.querySelector('.open-menu-mobile'),
	link_logo = document.querySelector('.link-logo'),
	contador = 0;

open_menu_mobile.addEventListener('click', function(){
	if( contador === 0 ){
		list_items.classList.add('active');
		open_menu_mobile.classList.add('active');
		link_logo.classList.add('active');
		contador = 1;
	}else if( contador === 1 ){
		list_items.classList.remove('active');
		open_menu_mobile.classList.remove('active');
		link_logo.classList.remove('active');
		contador = 0;
	}
});