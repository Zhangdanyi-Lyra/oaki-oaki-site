(() => {
  const chapterLinks=[...document.querySelectorAll('.ha-sidebar .ha-nav-row[data-section-target]')]
    .map(button=>({button,hash:button.dataset.sectionTarget,section:document.querySelector(button.dataset.sectionTarget)}))
    .filter(item=>item.section);
  const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const setActiveChapter=(hash)=>{
    chapterLinks.forEach(({button,hash:buttonHash})=>{
      const active=buttonHash===hash;
      button.classList.toggle('is-active',active);
      if(active)button.setAttribute('aria-current','location');
      else button.removeAttribute('aria-current');
    });
  };
  const goToChapter=({hash,section})=>{
    setActiveChapter(hash);
    if(location.hash!==hash)history.pushState(null,'',hash);
    section.scrollIntoView({behavior:reduceMotion.matches?'instant':'smooth',block:'start'});
  };
  chapterLinks.forEach(item=>item.button.addEventListener('click',()=>goToChapter(item)));
  const chapterSearch=document.querySelector('.ha-sidebar__search input');
  if(chapterSearch){
    chapterSearch.setAttribute('aria-label','Search chapters');
    chapterSearch.placeholder='';
    chapterSearch.addEventListener('keydown',event=>{
      if(event.key!=='Enter')return;
      const query=chapterSearch.value.trim().toLowerCase();
      const match=chapterLinks.find(({button})=>button.textContent.trim().toLowerCase().includes(query));
      if(query&&match){event.preventDefault();goToChapter(match);chapterSearch.blur();}
    });
  }
  let chapterFrame=0;
  const syncActiveChapter=()=>{
    chapterFrame=0;
    const marker=innerHeight*.38;
    let current=chapterLinks[0];
    chapterLinks.forEach(item=>{if(item.section.getBoundingClientRect().top<=marker)current=item;});
    if(current)setActiveChapter(current.hash);
  };
  const scheduleChapterSync=()=>{if(!chapterFrame)chapterFrame=requestAnimationFrame(syncActiveChapter)};
  addEventListener('scroll',scheduleChapterSync,{passive:true});
  addEventListener('resize',scheduleChapterSync,{passive:true});
  addEventListener('popstate',()=>{
    const item=chapterLinks.find(({hash})=>hash===location.hash);
    if(item)item.section.scrollIntoView({behavior:'auto',block:'start'});
    scheduleChapterSync();
  });
  const initialChapter=chapterLinks.find(({hash})=>hash===location.hash);
  if(initialChapter&&initialChapter.hash!=='#hero'){
    requestAnimationFrame(()=>requestAnimationFrame(()=>initialChapter.section.scrollIntoView({behavior:'auto',block:'start'})));
  }
  scheduleChapterSync();
  const section=document.querySelector('.oaki-exhibition');
  if(!section)return;
  const viewport=section.querySelector('.oaki-carousel-viewport');
  const track=section.querySelector('.oaki-carousel-track');
  const slides=[...section.querySelectorAll('.oaki-ex-slide')];
  const openingVideo=section.querySelector('.oaki-ex-video');
  const dots=section.querySelector('.oaki-carousel-dots');
  let index=0,active=false,hover=false,startX=null;
  slides.forEach((slide,i)=>{
    const dot=document.createElement('button');dot.type='button';dot.setAttribute('aria-label',`Show exhibition slide ${i+1}: ${slide.getAttribute('aria-label').replace(/^\d+ of \d+,\s*/, '')}`);
    dot.addEventListener('click',()=>go(i));dots.append(dot);
  });
  const dotButtons=[...dots.querySelectorAll('button')];
  function syncOpeningVideo(){
    if(!openingVideo)return;
    if(active&&index===0&&!document.hidden)openingVideo.play().catch(()=>{});
    else openingVideo.pause();
  }
  function go(n){
    const previousIndex=index;
    index=(n+slides.length)%slides.length;
    track.style.transform=`translate3d(${-index*100}%,0,0)`;
    dotButtons.forEach((b,i)=>b.setAttribute('aria-current',String(i===index)));
    slides.forEach((s,i)=>s.setAttribute('aria-hidden',String(i!==index)));
    if(index===0&&previousIndex!==0&&openingVideo)openingVideo.currentTime=0;
    syncOpeningVideo();
  }
  section.querySelector('[data-ex-prev]').addEventListener('click',()=>go(index-1));
  section.querySelector('[data-ex-next]').addEventListener('click',()=>go(index+1));
  viewport.addEventListener('pointerdown',e=>{startX=e.clientX});
  viewport.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX;startX=null;if(Math.abs(dx)>45)go(index+(dx<0?1:-1))});
  viewport.addEventListener('pointercancel',()=>startX=null);
  section.addEventListener('mouseenter',()=>hover=true);
  section.addEventListener('mouseleave',()=>hover=false);
  new IntersectionObserver(entries=>{active=entries[0]?.isIntersecting??false;syncOpeningVideo()},{threshold:.35}).observe(section);
  document.addEventListener('visibilitychange',syncOpeningVideo);
  openingVideo?.addEventListener('ended',()=>{if(index===0)go(1)});
  document.addEventListener('keydown',e=>{if(!active)return;if(e.key==='ArrowLeft')go(index-1);if(e.key==='ArrowRight')go(index+1)});
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){setInterval(()=>{if(active&&index!==0&&!hover&&!document.hidden)go(index+1)},5500)}
  go(0);
})();

(() => {
  const frame=document.querySelector('.oaki-film-frame');
  const video=frame?.querySelector('.oaki-rooftop-video');
  const playButton=frame?.querySelector('.oaki-film-play');
  if(!video||!playButton)return;
  playButton.addEventListener('click',()=>video.play());
  video.addEventListener('play',()=>frame.classList.add('is-playing'));
  video.addEventListener('pause',()=>frame.classList.remove('is-playing'));
  video.addEventListener('ended',()=>frame.classList.remove('is-playing'));
  new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)video.pause()},{threshold:.15}).observe(frame);
})();
