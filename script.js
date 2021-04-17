const menu = document.getElementById('menu');
const menuItems = document.getElementById('menuItems');
const navItems = document.getElementById('navList');

menu.onclick = function(){
    navItems.classList.toggle('show');
    menuItems.classList.toggle('close');
}

navItems.onclick = function(){
    navItems.classList.remove('show');
    menuItems.classList.remove('close');
}




const counter = document.querySelectorAll('.counter');
const speed = 2000;

counter.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        
        if(count < target){
            counter.innerText = Math.ceil( count + inc) ;
            setTimeout(updateCount, 5);
        }
        else{
            count.innerText = target;
        }
    }

    updateCount();
});