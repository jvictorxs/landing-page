function ScrollSuave(){
  const linkInterno = document.querySelectorAll(' a[href^="#"]');

  function scrollToSection(e){
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href)

    console.log(section)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linkInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}
ScrollSuave();