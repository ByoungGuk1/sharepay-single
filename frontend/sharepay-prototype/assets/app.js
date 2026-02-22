(function(){
  const path = location.pathname.replace(/\\/g,'/');
  // top nav
  const top = document.querySelectorAll('[data-topnav]');
  top.forEach(a=>{
    const key = a.getAttribute('data-topnav');
    const rules = {
      home: ['/index.html','/'],
      personal: ['/wallet/personal/'],
      group: ['/wallet/group/'],
      community: ['/community/'],
      my: ['/my/'],
    };
    const matched = (rules[key]||[]).some(r=> path.endsWith(r) || path.includes(r));
    if(matched) a.classList.add('active');
  });

  // sidebar
  const sideActive = document.body.getAttribute('data-side-active');
  if(sideActive){
    document.querySelectorAll('[data-side]').forEach(a=>{
      if(a.getAttribute('data-side') === sideActive) a.classList.add('active');
    });
  }
})();