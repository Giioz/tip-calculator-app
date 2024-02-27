function handleClick(event) {
    const clickedLi = event.target;
    clickedLi.classList.toggle('active');
    document.querySelectorAll('li').forEach(li => {
      if (li !== clickedLi) {
        li.classList.remove('active');
      }
    });

  }