const restaurants = [
 ['Mosquito Supper Club','Garden District','Cajun storytelling through a family-style tasting experience.','https://www.mosquitosupperclub.com/','assets/restaurants/mosquito-supper-club.jpg'],
 ['Compère Lapin','Warehouse District','Bold Caribbean-Creole cooking from Chef Nina Compton.','https://comperelapin.com/','assets/restaurants/compere-lapin.jpg'],
 ['St. Germain','Bywater','Intimate tasting-menu energy for the food-obsessed friend group.','https://www.saintgermainnola.com/','assets/restaurants/st-germain.jpg'],
 ["Restaurant R'evolution",'French Quarter','Polished New Orleans fine dining when the group wants to dress up.','https://revolutionnola.com/','assets/restaurants/restaurant-revolution.jpg'],
 ['MaMou','French Quarter','Romantic, stylish and very New Orleans without feeling old-fashioned.','https://www.mamounola.com/','assets/restaurants/mamou.jpg'],
 ["Irene's",'French Quarter','Classic Italian-Creole comfort and an old-school Quarter mood.','https://www.irenesnola.com/','assets/restaurants/irenes.jpg'],
 ['Jack Rose','Lower Garden District','Big personality, celebratory interiors and a fun dinner scene.','https://www.jackroserestaurant.com/','assets/restaurants/jack-rose.jpg'],
 ["Emeril's",'Warehouse District','A tasting-menu splurge for a true destination dinner.','https://emerilsrestaurants.com/emerils-new-orleans/','assets/restaurants/emerils.jpg'],
 ["Nagomi by Chef Kaz",'New Orleans','Sushi for the group that wants something precise and intimate.','https://www.instagram.com/nagominola/','assets/restaurants/nagomi.jpg'],
 ['Doris Metropolitan','French Quarter','A strong steakhouse pick with a modern room and serious meat.','https://dorismetropolitan.com/new-orleans/','assets/restaurants/doris-metropolitan.jpg'],
 ['Verti Marte','French Quarter','Late-night legend—order the All That Jazz when good judgment has clocked out.','https://www.vertimarte.com/','assets/restaurants/verti-marte.jpg'],
 ['The Crustacean Club','French Quarter','A playful Gulf-seafood club built around oysters, Champagne, caviar and a chef’s tasting menu.','https://www.thecrustaceanclub.com/','assets/restaurants/crustacean-club.jpg'],
 ["Brennan's",'French Quarter','The pink-palace classic for celebratory brunch, Creole tradition and courtyard bubbles.','https://www.brennansneworleans.com/','assets/restaurants/brennans.jpg'],
 ["Commander’s Palace",'Garden District','Grand-dame New Orleans dining with legendary service, jazz brunch and a celebratory sense of occasion.','https://www.commanderspalace.com/','assets/restaurants/commanders-palace.jpg'],
 ['August','Central Business District','An elegant contemporary Creole destination in a historic French-Creole building—ideal for a polished special-occasion dinner.','https://www.restaurantaugust.com/','assets/restaurants/august.jpg'],
 ['Acamaya','Bywater','A stylish mariscos destination bringing together New Orleans, Mexico City and the Gulf—bold, current and made for sharing.','https://www.acamayanola.com/','assets/restaurants/acamaya.jpg'],
 ['Dakar NOLA','Uptown','A deeply memorable Senegalese tasting-menu experience connecting the flavors of Senegal and South Louisiana.','https://www.dakarnola.com/','assets/restaurants/dakar-nola.jpg'],
 ['Saint John','Central Business District','Elevated Haute Creole cooking that turns classic New Orleans flavors into a lively, celebratory dinner.','https://saintjohnneworleans.com/','assets/restaurants/saint-john.jpg']
];
const brunch = [
 ['Bearcat','Uptown / CBD','Creative brunch with both indulgent and lighter options.','https://www.bearcatcafe.com/'],
 ["Brennan's",'French Quarter','The classic pink-palace brunch moment.','https://www.brennansneworleans.com/'],
 ["Commander’s Palace",'Garden District','Jazz brunch, grand New Orleans service, and iconic atmosphere.','https://www.commanderspalace.com/'],
 ["Commander’s 25¢ martini lunch",'Garden District','A weekday institution worth building an afternoon around.','https://www.commanderspalace.com/']
];
const drinks = [
 ['Sazerac House','https://www.sazerachouse.com/visit/'],
 ['Jewel of the South','https://www.jewelnola.com/'],
 ['Bar Tonique','http://www.bartonique.com/'],
 ["Lafitte’s Blacksmith Shop",'https://www.lafittesblacksmithshop.com/Location.html'],
 ['The Columns','https://thecolumns.com/'],
 ['The Chloe','https://thechloenola.com/'],
 ['The Country Club','https://thecountryclubneworleans.com/'],
 ['Hot Tin','https://hottinbar.com/'],
 ['Jolie','https://jolie-nola.com/']
];
const experiences = [
 ['Frenchmen Street','Live Music','Walk between clubs and let the night choose the soundtrack.','https://www.neworleans.com/plan/streets/frenchmen-street/'],
 ["Tipitina’s",'Live Music','An essential New Orleans venue when the calendar lines up.','https://tipitinas.com/'],
 ['Streetcar ride','Classic NOLA','Ride the St. Charles line for architecture and a slower look at the city.','https://www.norta.com/ride-with-us/how-to-ride/streetcars'],
 ['Magazine Street','Shop + Wander','Boutiques, antiques, cafés and a long, pretty daytime stroll.','https://magazinestreet.com/'],
 ['French Quarter architecture walk','Wander','Balconies, courtyards, galleries and history between cocktails.','https://www.neworleans.com/things-to-do/architecture/'],
 ['Beignets + coffee','Required','Because powdered sugar on black clothes builds character.','https://shop.cafedumonde.com/']
];
function renderCards(id,data){document.getElementById(id).innerHTML=data.map(([name,tag,desc,url])=>`<a class="card" href="${url}" target="_blank" rel="noopener" aria-label="Visit ${name} website"><div><h3>${name}</h3><p>${desc}</p></div><div class="tag">${tag}</div></a>`).join('')}
function renderRestaurantPaintings(id,data){
  document.getElementById(id).innerHTML=data.map(([name,tag,desc,url,image])=>`<a class="restaurant-painting" href="${url}" target="_blank" rel="noopener" aria-label="Visit ${name} website">
    <div class="painting-frame"><img src="${image}" alt="Original pop-art painting inspired by ${name}" loading="lazy"></div>
    <div class="painting-caption"><h3>${name}</h3><p>${desc}</p><span>${tag}</span></div>
  </a>`).join('');
}
renderRestaurantPaintings('restaurantCards',restaurants);renderCards('brunchCards',brunch);renderCards('experienceCards',experiences);
const tower=document.getElementById('drinkTower');if(tower){tower.innerHTML=drinks.map(([name,url])=>`<a class="coupe" href="${url}" target="_blank" rel="noopener" aria-label="Visit ${name} website"><span>${name}</span><i class="base"></i></a>`).join('');}

document.querySelectorAll('[data-flicker]').forEach(line=>{const chars=[...line.textContent];line.textContent='';chars.forEach(c=>{const s=document.createElement('span');s.className='marquee-letter';s.innerHTML=c===' '?'&nbsp;':c;line.appendChild(s)})});
const letters=[...document.querySelectorAll('.marquee-letter')];
setInterval(()=>{letters.forEach(l=>l.classList.remove('dim'));const count=Math.random()<.28?Math.ceil(Math.random()*4):1;for(let i=0;i<count;i++){const l=letters[Math.floor(Math.random()*letters.length)];if(l)l.classList.add('dim')}} ,180);

// v12 mobile navigation: accessible, touch-friendly iPhone menu
const mobileHeader=document.querySelector('.site-header');
const mobileToggle=document.querySelector('.menu-toggle');
const mobileNav=mobileHeader?.querySelector('nav');
if(mobileHeader&&mobileToggle&&mobileNav){
  mobileToggle.setAttribute('aria-expanded','false');
  mobileToggle.setAttribute('aria-controls','primary-navigation');
  mobileNav.id='primary-navigation';
  const closeMobileMenu=()=>{mobileHeader.classList.remove('menu-open');mobileToggle.setAttribute('aria-expanded','false');mobileToggle.textContent='☰';};
  mobileToggle.addEventListener('click',()=>{
    const open=!mobileHeader.classList.contains('menu-open');
    mobileHeader.classList.toggle('menu-open',open);
    mobileToggle.setAttribute('aria-expanded',String(open));
    mobileToggle.textContent=open?'×':'☰';
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMobileMenu));
  document.addEventListener('click',e=>{if(mobileHeader.classList.contains('menu-open')&&!mobileHeader.contains(e.target))closeMobileMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileMenu();});
  window.addEventListener('resize',()=>{if(window.innerWidth>700)closeMobileMenu();});
}
