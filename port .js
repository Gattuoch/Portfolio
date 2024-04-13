

//Header toggle
let menuBtn = document.getElementById('menuBtn');
 menuBtn.addEventListener('click',function(e){
 document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
});
//Type Effect
let typed = new Typed('.auto-input',{
    strings: ['Gattuoch', ' Software Engineering Student.', 'Future ul Designer!', 'Future Programmer!'],
    typedSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
//active link state on scroll
//Get All links
let navLinks = document.querySelectorAll('nav ul li a')
// get all 
let sections = document.querySelectorAll('section')
//console.log(sections)
window.addEventListener('scroll',function(){
    const scrollpos = window.scrollY + 20
    sections.forEach(section =>{
      if( scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)){
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                link.classList.add('active')
            }
        });
      }  
    });

});
 
