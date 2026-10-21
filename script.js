const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const intro = document.querySelector('.intro');
const body = document.body;
function finishIntro(){intro?.classList.add('done');body.classList.remove('intro-active')}
if(!reduced&&intro){body.classList.add('intro-active');setTimeout(finishIntro,4400)}else if(intro){intro.classList.add('done')}
document.querySelector('.intro-skip')?.addEventListener('click',finishIntro);
document.addEventListener('keydown',e=>{if(e.key==='Escape')finishIntro()});
if(!reduced){const field=document.querySelector('.intro-sparks');for(let i=0;i<52;i++){const spark=document.createElement('i');spark.style.setProperty('--x',`${7+Math.random()*86}%`);spark.style.setProperty('--delay',`${.08+Math.random()*2.7}s`);spark.style.setProperty('--drift',`${-85+Math.random()*170}px`);spark.style.setProperty('--size',`${1+Math.random()*3.2}px`);spark.style.setProperty('--speed',`${1+Math.random()*.9}s`);field?.appendChild(spark)}}
const header=document.querySelector('.site-header');addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40),{passive:true});
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav?.addEventListener('click',()=>{toggle?.setAttribute('aria-expanded','false');nav.classList.remove('open')});
// Las fotografías se muestran limpias para que el producto sea el protagonista.
function decoratePhotos(){}

const reservationForm=document.querySelector('.reservation-form');
const reservationDate=document.querySelector('#reservation-date');
if(reservationDate){const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());reservationDate.min=today.toISOString().split('T')[0]}
const bindNetlifyForm=(form,{multipart=false,successMessage,submitLabel}={})=>form?.addEventListener('submit',async event=>{
  event.preventDefault();
  const submit=form.querySelector('button[type="submit"]');
  const status=form.querySelector('.form-status');
  if(!form.reportValidity())return;
  submit.disabled=true;
  submit.textContent='Enviando…';
  status.className='form-status';
  status.textContent='Estamos enviando tu solicitud.';
  try{
    const options={method:'POST'};
    if(multipart){options.body=new FormData(form)}else{options.headers={'Content-Type':'application/x-www-form-urlencoded'};options.body=new URLSearchParams(new FormData(form)).toString()}
    const response=await fetch(form.getAttribute('action')||'/',options);
    if(!response.ok)throw new Error('No se pudo enviar');
    form.reset();
    status.className='form-status is-success';
    status.textContent=successMessage||'Solicitud enviada correctamente.';
  }catch(error){
    status.className='form-status is-error';
    status.textContent='No hemos podido enviarla. Llámanos al 948 722 303 o escríbenos por WhatsApp.';
  }finally{
    submit.disabled=false;
    submit.textContent=submitLabel||'Enviar';
  }
});
bindNetlifyForm(reservationForm,{successMessage:'Solicitud enviada. Maitagarri contactará contigo para confirmar la mesa.',submitLabel:'Solicitar reserva'});
bindNetlifyForm(document.querySelector('.careers-form'),{multipart:true,successMessage:'Candidatura enviada. Guardaremos tu CV y te contactaremos si encaja con una vacante.',submitLabel:'Enviar candidatura'});
document.querySelectorAll('.experience').forEach(panel=>{['mouseenter','focusin','click'].forEach(type=>panel.addEventListener(type,()=>{document.querySelectorAll('.experience').forEach(p=>p.classList.remove('active'));panel.classList.add('active')}))});
if(!reduced && matchMedia('(pointer:fine)').matches){const hero=document.querySelector('.hero'),scene=document.querySelector('.hero-scene'),atmo=document.querySelector('.hero-atmosphere');hero?.addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);scene.style.transform=`scale(1.035) translate(${x*-.35}%,${y*-.25}%)`;atmo.style.transform=`translate(${x*.6}%,${y*.6}%)`})}
if(!reduced){addEventListener('scroll',()=>{const hero=document.querySelector('.hero'),scene=document.querySelector('.hero-scene');if(scrollY<innerHeight*1.2){const p=Math.min(1,scrollY/innerHeight);scene.style.scale=String(1+p*.045);hero.style.setProperty('--scroll',p)}},{passive:true})}

if(!reduced){
  const canvas=document.querySelector('.fire-canvas');
  const hero=document.querySelector('.hero');
  const ctx=canvas?.getContext('2d');
  if(canvas&&hero&&ctx){
    let width=0,height=0,dpr=1,raf=0,last=0,visible=true;
    const sparks=[];
    const smoke=[];
    const mobile=matchMedia('(max-width:760px)');
    const resize=()=>{const r=hero.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,1.6);width=r.width;height=r.height;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)};
    const protectedZone=(x,y)=>{const nx=(x-width*.5)/(width*(mobile.matches?.3:.28));const ny=(y-height*.48)/(height*(mobile.matches?.2:.24));return nx*nx+ny*ny<1};
    const addSpark=()=>{const side=Math.random()<.5?-1:1;const x=width*(.5+side*(.18+Math.random()*.24));sparks.push({x,y:height*(.62+Math.random()*.14),vx:side*(.05+Math.random()*.18),vy:-.45-Math.random()*.75,life:1,size:.7+Math.random()*1.7,wobble:Math.random()*6.28})};
    const addSmoke=()=>{const origin=Math.random();const x=width*(.61+origin*.22);smoke.push({x,y:height*(.57+Math.random()*.09),vx:(origin-.5)*.035,vy:-.1-Math.random()*.09,life:1,size:15+Math.random()*25})};
    const draw=(time)=>{if(!visible)return;const dt=Math.min(32,time-last||16);last=time;ctx.clearRect(0,0,width,height);
      const sparkRate=mobile.matches?.18:.34;if(Math.random()<sparkRate)addSpark();if(Math.random()<(mobile.matches?.035:.065))addSmoke();
      for(let i=smoke.length-1;i>=0;i--){const p=smoke[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt/4200;p.size+=dt*.012;if(p.life<=0){smoke.splice(i,1);continue}if(protectedZone(p.x,p.y))continue;const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size);g.addColorStop(0,`rgba(190,177,161,${p.life*.035})`);g.addColorStop(1,'rgba(130,120,110,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill()}
      for(let i=sparks.length-1;i>=0;i--){const p=sparks[i];p.wobble+=dt*.006;p.x+=(p.vx+Math.sin(p.wobble)*.07)*dt;p.y+=p.vy*dt;p.vy-=.0007*dt;p.life-=dt/1500;if(p.life<=0||p.y<height*.12){sparks.splice(i,1);continue}if(protectedZone(p.x,p.y))continue;ctx.shadowBlur=8;ctx.shadowColor='#ff6a22';ctx.fillStyle=`rgba(255,${120+Math.round(p.life*100)},70,${p.life})`;ctx.beginPath();ctx.arc(p.x,p.y,p.size*p.life,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0}
      const ember=ctx.createRadialGradient(width*.5,height*.7,0,width*.5,height*.7,width*.34);ember.addColorStop(0,`rgba(255,73,16,${.035+Math.sin(time*.002)*.012})`);ember.addColorStop(1,'rgba(255,60,10,0)');ctx.fillStyle=ember;ctx.fillRect(0,height*.45,width,height*.45);raf=requestAnimationFrame(draw)};
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){last=performance.now();cancelAnimationFrame(raf);raf=requestAnimationFrame(draw)}else cancelAnimationFrame(raf)},{threshold:.02});
    new ResizeObserver(resize).observe(hero);resize();observer.observe(hero);raf=requestAnimationFrame(draw);
  }
}
document.querySelectorAll('.review-slot blockquote').forEach((quote,index)=>{const id=`review-${index+1}`;quote.id=id;quote.classList.add('review-collapsed');const button=document.createElement('button');button.type='button';button.className='review-toggle';button.setAttribute('aria-controls',id);button.setAttribute('aria-expanded','false');button.textContent='Leer más';quote.after(button);button.addEventListener('click',()=>{const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));button.textContent=expanded?'Leer más':'Leer menos';quote.classList.toggle('review-collapsed',expanded)})});
