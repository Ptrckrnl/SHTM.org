(function(){
  var toggle=document.querySelector('.nav__toggle'), list=document.getElementById('nav-list');
  toggle.addEventListener('click',function(){
    var open=list.classList.toggle('is-open'); toggle.setAttribute('aria-expanded',open);
  });
  list.addEventListener('click',function(e){ if(e.target.matches('a')){list.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');} });

  var form=document.getElementById('inquiry-form'), status=document.getElementById('form-status');
  function check(id,msg,test){
    var el=document.getElementById(id), err=document.getElementById(id+'-error'), ok=test(el.value.trim());
    el.setAttribute('aria-invalid',!ok); err.textContent=ok?'':msg; return ok;
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var a=check('name','Enter your full name.',function(v){return v.length>1});
    var b=check('email','Enter a valid email address.',function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)});
    var c=check('message','Write a message of at least 10 characters.',function(v){return v.length>=10});
    if(a&&b&&c){ status.textContent='Inquiry sent. The department office will reply by email.'; form.reset(); }
    else status.textContent='';
  });

  document.querySelectorAll('[data-topic]').forEach(function(a){
    a.addEventListener('click',function(){
      document.getElementById('topic').value=a.getAttribute('data-topic');
      var m=document.getElementById('message'); if(!m.value.trim()) m.value=a.getAttribute('data-msg')||'';
    });
  });
})();