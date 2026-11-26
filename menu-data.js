const A=(...v)=>v;
const carta=[
['Entrantes','Ración de pimiento de asados a la leña','Sin alérgenos.','14,00 €',A()],
['Entrantes','Tomate de autor','Con queso burrata, rúcula y aceite de albahaca. Sin alérgenos.','15,00 €',A()],
['Entrantes','Ensalada de escarola Maitagarri','Con bacalao confitado, espuma de queso Idiazabal, nueces, granada y vinagreta de pacharán.','18,00 €',A('Pescado','Lácteos','Frutos de cáscara','Sulfitos')],
['Entrantes','Ensalada de queso de cabra','Con remolacha asada, nueces caramelizadas, pasas y mermelada de tomate.','18,00 €',A('Lácteos','Frutos de cáscara','Sulfitos')],
['Entrantes','Ración de jamón ibérico (100 g)','Sin alérgenos.','28,00 €',A()],
['Entrantes','Ración de chistorra de Arbizu','Alérgenos: sulfitos.','14,80 €',A('Sulfitos')],
['Entrantes','Pochas a la navarra','Sin alérgenos.','14,00 €',A()],
['Entrantes','Itsaso Garbia · Consomé de pescado','Servido con kokotxas de merluza confitadas, brunoise de verduras y unas gotas de aceite de piparra.','17,00 €',A('Pescado','Apio')],
['Entrantes','Pulpo a la parrilla','Con patatas panaderas.','26,00 €',A('Moluscos')],
['Entrantes','Vieiras del Pacífico a la plancha','', '17,00 €',A('Moluscos')],
['Entrantes','Tortilla de bacalao','', '16,00 €',A('Huevo','Pescado')],
['Entrantes','Paella de marisco','', '21,70 €',A('Crustáceos','Moluscos','Pescado','Apio')],
['Carnes','Chuletón premium','Maduración de 21 días · al peso. Sin alérgenos.','65,00 €/kg',A()],
['Carnes','Solomillo de vaca madurada a la parrilla','Con parmentier de foie.','35,00 €',A('Lácteos')],
['Carnes','Entrecot ahumado a la parrilla','Sin alérgenos.','23,50 €',A()],
['Carnes','Meloso de carrilleras','', '22,50 €',A('Gluten','Apio','Sulfitos')],
['Carnes','Estofado de toro','', '22,50 €',A('Gluten','Apio','Sulfitos')],
['Carnes','Lagarto ibérico a la parrilla','Con chimichurri.','22,00 €',A('Sulfitos')],
['Pescados','Bacalao a baja temperatura','', '21,80 €',A('Pescado')],
['Pescados','Lubina al horno','Con patatas panaderas.','21,00 €',A('Pescado')],
['Pescados','Sepia a la plancha','', '21,00 €',A('Moluscos')],
['Pescados','Tabla de mar','Gambón, cigalas, navajas, vieiras, almejas, pulpo, bogavante y buey de mar · mínimo y precio dos personas.','150,00 €',A('Crustáceos','Moluscos')],
['Postres','Tarta de chocolate','', '8,00 €',A('Gluten','Huevo','Lácteos','Soja')],
['Postres','Tarta de queso crema horneada','', '8,00 €',A('Gluten','Huevo','Lácteos')],
['Postres','Tiramisú de café','', '7,60 €',A('Gluten','Huevo','Lácteos')],
['Postres','Queso Idiazabal','Con membrillo y nueces.','7,50 €',A('Lácteos','Frutos de cáscara')],
['Postres','Goxua','', '7,70 €',A('Gluten','Huevo','Lácteos')],
['Postres','Sablé de mango y coco','', '7,00 €',A('Gluten','Huevo','Lácteos')]
];
const wines=[
['Tintos — Navarra','Villa Sada del Año','Tinto joven de Navarra, directo y fácil para acompañar platos de barra.','14,00€'],['Tintos — Navarra','Monjardín','Cabernet, Merlot y Tempranillo frutal; tinto navarro amable y equilibrado.','17,00€'],['Tintos — Navarra','Viña Perguita Crianza','Tempranillo, Cabernet Sauvignon y Merlot con paso de crianza y buen cuerpo.','18,00€'],['Tintos — Navarra','Palacio Sada Cuvée','Garnacha, Cabernet Sauvignon y Merlot; fruta madura y perfil gastronómico.','22,00€'],['Tintos — Navarra','Pago de Cirsus Crianza','Cabernet, Syrah y Merlot; crianza navarro con carácter y final especiado.','22,00€'],['Tintos — Navarra','Alconde Óptimo','Crianza de 14 meses en barrica, Cabernet y Merlot; redondo e intenso.','23,00€'],['Tintos — Navarra','Pago de Cirsus Reserva Cuvée Especial Navarra','Reserva navarro de mayor estructura, ideal para carnes y brasa.','32,00€'],['Tintos — Navarra','Viña Perguita Reserva','Tempranillo, Cabernet y Merlot; reserva con fruta, madera fina y buena persistencia.','29,00€'],
['Tintos — Ribera del Duero','Traslascuestas','Tempranillo de Ribera del Duero, fruta roja y buen paso en boca.','22,00€'],['Tintos — Ribera del Duero','Senda de los Olivos Crianza','Tempranillo crianza, más redondo y pensado para carnes.','29,00€'],['Tintos — Ribera del Duero','Tomas Postigo','Tempranillo y Malbec; vino potente, elegante y de alta expresión.','64,00€'],['Tintos — Ribera del Duero','Emilio Moro','Tempranillo clásico de Ribera, intenso, frutal y muy gastronómico.','45,00€'],['Tintos — Ribera del Duero','Pago de Carraovejas','Tempranillo, Cabernet y Merlot; uno de los tintos más reconocidos de Ribera.','75,00€'],['Tintos — Ribera del Duero','Malleolus','Tempranillo de viñas viejas, profundo, serio y con mucha concentración.','72,00€'],['Tintos — Ribera del Duero','Abadía Retuerta Selección Especial','Tempranillo, Cabernet, Syrah, Merlot y Petit Verdot; complejo y elegante.','60,00€'],
['Tintos — Rioja','Beronia Crianza','91% Tempranillo, 8% Garnacha y 1% Mazuelo; Rioja crianza clásico.','21,00€'],['Tintos — Rioja','Beronia Crianza 375 ml','Formato media botella del Rioja crianza clásico, cómodo para compartir menos.','15,00€'],['Tintos — Rioja','Piérola Rioja Crianza','Tempranillo de Rioja con crianza, fruta madura y toque de barrica.','23,00€'],['Tintos — Rioja','Piérola Rioja Crianza 500 ml','Formato 500 ml del crianza de Rioja, equilibrado para dos personas.','17,00€'],['Tintos — Rioja','Marqués de Riscal Reserva','Tempranillo y Graciano; reserva elegante, fino y con larga tradición.','38,00€'],['Tintos — Rioja','Marqués de Riscal Reserva 375 ml','Media botella del reserva de Rioja, perfecta para una comida más ligera.','19,00€'],
['Rosados','Palacio de Sada Rosado','Rosado navarro fresco, frutal y fácil para entrantes o terraza.','18,00€'],['Rosados','Mediodía Iñurrieta','Rosado expresivo de Navarra, agradable y con buena acidez.','18,00€'],['Chardonnay','Monjardín','Chardonnay de Navarra, blanco con cuerpo medio y fruta limpia.','19,00€'],['Chardonnay','Palacio de Sada','Chardonnay navarro fresco, suave y fácil de maridar con pescados.','19,00€'],['Blancos','Polvorete Godello','Godello del Bierzo, blanco aromático, sabroso y con buena textura.','23,00€'],['Blancos','Txacoli Arbela','Txakoli de Guipúzcoa, fresco, ligero y con punto atlántico.','21,00€'],['Blancos','Viña Calera Rueda','Blanco de Rueda de Marqués de Riscal, limpio y refrescante.','19,00€'],['Blancos','Sidra','Sidra de 0,7L, fresca y perfecta para acompañar el menú sidrería.','10,00€'],['Cava','Signat B. Nature','Cava joven, elegante y fresco, con burbuja limpia.','22,00€'],['Cava','Subirat B. Nature','Cava de burbuja fina y perfil afrutado.','20,00€'],['Cava','Conde Caralt Cava Brut 200 ml','Formato individual de cava brut, cómodo para brindar.','10,00€'],['Champagne','Moët & Chandon Imperial','Champagne emblemático de la bodega, con fruta viva, paladar seductor y madurez elegante.','83,00€']
];
const sidreria={
 'Platos al centro de la mesa':[
  ['Chistorra de Arbizu',''],
  ['Tortilla de bacalao',''],
  ['Ensalada tibia de queso de cabra y remolacha asada','Nueces caramelizadas, mermelada de tomate y frutos secos.']
 ],
 'Especialidad a elegir':[
  ['Chuletón extra Premium a la parrilla','Con pimiento del piquillo · 950 g aprox. para 2 personas.'],
  ['Solomillo de vaca','Salsa de pimienta o roquefort.'],
  ['Lubina al horno','Con guarnición.'],
  ['Sepia','Con patatas panaderas.']
 ],
 'Postre casero a elegir':[
  ['Tarta de queso',''],['Cuajada de la casa',''],['Tarta de chocolate',''],['Goxua','']
 ]
};
const navidad={
 'Entrantes al centro de la mesa':[
  ['Mi-cuit con frutos rojos',''],['Tomate de autor con rúcula y aceite de albahaca',''],['Arroz meloso de marisco','']
 ],
 'Principal a elegir':[
  ['Cochinillo asado a baja temperatura','Con reducción de su jugo.'],
  ['Solomillo de ternera','Con parmentier de foie.'],
  ['Atún rojo marcado a la parrilla','Envuelto en semillas de sésamo, con crema de espárragos.'],
  ['Chuletón extra Premium a la parrilla','Con pimiento del piquillo · 450 g individual o 950 g aprox. para 2 personas.']
 ],
 'Postre a elegir':[
  ['Tarta de queso','Con reducción de pistacho.'],['Sablé de mango y coco',''],['Tarta muerte por chocolate',''],['Cuajada casera','Con miel y nueces.'],['Goxua','']
 ]
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags=a=>`<div class="dish-allergens">${a.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
const renderGrouped=(rows,wine=false)=>[...new Set(rows.map(x=>x[0]))].map(cat=>`<section class="menu-group"><h3>${esc(cat)}</h3><div class="menu-items">${rows.filter(x=>x[0]===cat).map(x=>`<article class="menu-item"><div class="menu-item-head"><h4>${esc(x[1])}</h4><strong>${esc(x[3])}</strong></div><p>${esc(x[2])}</p>${tags(wine?['Sulfitos']:x[4])}</article>`).join('')}</div></section>`).join('');
const renderMenuSections=data=>Object.entries(data).map(([cat,items])=>`<section><h3>${esc(cat)}</h3>${items.map(([name,detail])=>`<article><h4>${esc(name)}</h4>${detail?`<p>${esc(detail)}</p>`:''}</article>`).join('')}</section>`).join('');
const renderEventMenu=({title,kicker,image,alt,sections,drink,conditions,pdf})=>`<div class="sidreria-hero"><img src="${image}" alt="${alt}" loading="lazy"><div><p class="kicker">${kicker}</p><h3>${title}</h3><strong>60€ <small>por persona</small></strong><p>IVA incluido</p></div></div><div class="sidreria-grid">${renderMenuSections(sections)}<section><h3>Bebida incluida</h3><p>${drink}</p></section><section class="menu-conditions"><h3>Condiciones</h3>${conditions.map(x=>`<p>${esc(x)}</p>`).join('')}<p class="allergen-note">El documento 2026 no especifica alérgenos. Consulte al equipo antes de realizar su pedido.</p><a class="menu-pdf-link" href="${pdf}" target="_blank" rel="noopener noreferrer">Consultar menú original en PDF ↗</a></section></div>`;
const renderSidreria=()=>renderEventMenu({title:'Menú Sidrería 2026',kicker:'Experiencia para compartir',image:'assets/web/product-ribs.webp',alt:'Costillar servido con patatas en Maitagarri',sections:sidreria,drink:'Una botella para cada 2 personas: vino especial Alconde de Navarra, sidra de 0,7 L o agua de 1 L.',conditions:['Mínimo para dos personas.'],pdf:'2026/2026%20Menu%20sidreria%20Premium.pdf'});
const renderNavidad=()=>renderEventMenu({title:'Menú especial Navidad 2026',kicker:'Disponible del 31/10 al 06/01',image:'assets/web/dish-meat-peppers.webp',alt:'Plato de carne servido en Maitagarri durante Navidad',sections:navidad,drink:'Agua o vino: una botella para 2 personas de Bodegas Palacio de Sada Cuvée tinto crianza, rosado o blanco.',conditions:['Se sirve del 31/10/2026 al 06/01/2027 incluido.','60€ por persona, IVA incluido.'],pdf:'2026/MEN%C3%9A%20especial%20NAVIDAD%202026.pdf'});
const renderPinchos=()=>`<div class="menu-pinchos"><div class="pinchos-title"><p class="kicker">La barra tiene su propio ritmo</p><h3>Un pincho.<br>Una pausa.<br>Otra ronda.</h3><p class="pinchos-lead">Una selección amplia y cambiante: producto reconocible, bocados calientes y propuestas para compartir.</p></div><div class="pincho-track"><figure><img src="assets/web/pincho.webp" alt="Bocadillos de jamón preparados en la barra de Maitagarri" loading="lazy" width="1600" height="1067"></figure><figure><img src="assets/web/pincho-detail.webp" alt="Pinchos de cebollita rellena presentados sobre pizarra" loading="lazy" width="1200" height="1800"></figure><figure><img src="assets/web/pincho-slate.webp" alt="Tosta con pimiento y gulas de la barra de Maitagarri" loading="lazy" width="1200" height="800"></figure><figure><img src="assets/web/pincho-side.webp" alt="Croqueta abierta mostrando su relleno" loading="lazy" width="1200" height="1800"></figure><figure><img src="assets/web/pincho-persona.webp" alt="Vasitos de pinchos fríos preparados para servir" loading="lazy" width="800" height="1200"></figure><figure><img src="assets/web/pincho-06.webp" alt="Propuesta de la Semana del Pincho de Maitagarri" loading="lazy" width="1200" height="800"></figure><figure><img src="assets/web/pincho-07.webp" alt="Tosta de jamón de la barra" loading="lazy" width="1200" height="800"></figure><figure><img src="assets/web/pincho-08.webp" alt="Tosta de jamón, huevo y pimiento" loading="lazy" width="1200" height="800"></figure><figure><img src="assets/web/pincho-09.webp" alt="Bocadillo de chistorra con pimientos" loading="lazy" width="1200" height="800"></figure><figure><img src="assets/web/pincho-10.webp" alt="Pincho de anchoa presentado en vertical" loading="lazy" width="1000" height="1500"></figure><figure><img src="assets/web/pincho-11.webp" alt="Tosta de pulpo de Maitagarri" loading="lazy" width="1200" height="800"></figure><figure><img src="assets/web/pincho-12.webp" alt="Tortilla acompañada de cerveza" loading="lazy" width="1200" height="800"></figure></div><p class="pincho-note">La barra cambia con el servicio · pregunta por la selección del día</p></div>`;
const root=document.querySelector('#menu-content');
function renderMenu(name){if(!root)return;root.innerHTML=name==='sidreria'?renderSidreria():name==='navidad'?renderNavidad():name==='pinchos'?renderPinchos():renderGrouped(name==='carta'?carta:wines,name==='vinos');document.querySelectorAll('[data-menu-tab]').forEach(b=>{const active=b.dataset.menuTab===name;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1});root.setAttribute('aria-labelledby',`tab-${name}`);window.decoratePhotos?.(root)}
const menuTabs=[...document.querySelectorAll('[data-menu-tab]')];menuTabs.forEach((b,index)=>{b.addEventListener('click',()=>renderMenu(b.dataset.menuTab));b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let next=e.key==='Home'?0:e.key==='End'?menuTabs.length-1:(index+(e.key==='ArrowRight'?1:-1)+menuTabs.length)%menuTabs.length;menuTabs[next].focus();renderMenu(menuTabs[next].dataset.menuTab)})});renderMenu('sidreria');
document.querySelectorAll('[data-open-menu]').forEach(link=>link.addEventListener('click',()=>renderMenu(link.dataset.openMenu)));
