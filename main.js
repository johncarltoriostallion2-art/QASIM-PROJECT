(function(){
  var h=document.querySelector('header.hd');function s(){h&&h.classList.toggle('scrolled',scrollY>30)}s();addEventListener('scroll',s,{passive:true});
  var b=document.getElementById('burger'),m=document.getElementById('menu');b&&b.addEventListener('click',function(){m.classList.toggle('open')});
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  document.querySelectorAll('.car').forEach(function(c){var t=c.querySelector('.track');function step(){var f=t.firstElementChild;return f?f.getBoundingClientRect().width+20:300}
    c.querySelector('.prev').onclick=function(){t.scrollBy({left:-step(),behavior:'smooth'})};c.querySelector('.next').onclick=function(){t.scrollBy({left:step(),behavior:'smooth'})}});
  var f=document.getElementById('bookForm');
  if(f){var tabs=f.querySelectorAll('.bk-tabs button');tabs.forEach(function(x){x.onclick=function(){tabs.forEach(function(z){z.classList.remove('on')});x.classList.add('on')}});
    f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),t=f.querySelector('.bk-tabs .on').dataset.t;
      var msg='Assalamu alaikum, Qasim Travel & Tours! '+(d.get('name')?'My name is '+d.get('name')+'. ':'')+'I would like to inquire about: '+t+'\nFrom: '+d.get('from')+'\nTo: '+d.get('to')+'\nDepart: '+(d.get('depart')||'Flexible')+'\nReturn: '+(d.get('ret')||'Flexible')+'\nTravelers: '+d.get('pax');
      window.open('https://wa.me/639383395849?text='+encodeURIComponent(msg),'_blank')})}
  var c=document.getElementById('contactForm');
  c&&c.addEventListener('submit',function(e){if(location.protocol==='file:')return;e.preventDefault();
    fetch(c.action.replace('formsubmit.co/','formsubmit.co/ajax/'),{method:'POST',body:new FormData(c),headers:{Accept:'application/json'}})
    .then(function(){document.getElementById('formOk').style.display='block';c.reset()}).catch(function(){c.submit()})});
})();
(function(){var t=document.getElementById('totop');if(!t)return;addEventListener('scroll',function(){t.classList.toggle('on',scrollY>600)},{passive:true});t.addEventListener('click',function(e){e.preventDefault();scrollTo({top:0,behavior:'smooth'})})})();
(function(){var g=document.getElementById('mgal');if(!g)return;var items=[].slice.call(g.querySelectorAll('.mi'));
  document.querySelectorAll('.gchip').forEach(function(c){c.onclick=function(){document.querySelectorAll('.gchip').forEach(function(x){x.classList.remove('on')});c.classList.add('on');var f=c.dataset.f;items.forEach(function(m){m.classList.toggle('hide',f!=='all'&&m.dataset.b!==f)})}});
  var lb=document.getElementById('lb'),im=lb.querySelector('img'),bt=lb.querySelector('.bt'),cap=lb.querySelector('figcaption b'),cnt=lb.querySelector('figcaption small'),cur=0,vis=[];
  function show(i){vis=items.filter(function(m){return !m.classList.contains('hide')});cur=(i+vis.length)%vis.length;var m=vis[cur],img=m.querySelector('img');im.src=img.src;im.alt=img.alt;bt.textContent=m.querySelector('.bt').textContent;cap.textContent=m.querySelector('figcaption b').textContent;cnt.textContent=(cur+1)+' / '+vis.length}
  function open(m){vis=items.filter(function(x){return !x.classList.contains('hide')});show(vis.indexOf(m));lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
  function close(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  items.forEach(function(m){m.addEventListener('click',function(){open(m)})});
  lb.querySelector('.lb-x').onclick=close;lb.querySelector('.lb-p').onclick=function(e){e.stopPropagation();show(cur-1)};lb.querySelector('.lb-n').onclick=function(e){e.stopPropagation();show(cur+1)};
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
  var sx=0;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});lb.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});
})();
