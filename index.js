$('.thumbnail').on('click', e => {
    console.log(e.target);
    let imgSrc = $(e.currentTarget).find('img').attr('src');
    
    let imgAlt = $(e.currentTarget).find('img').attr('alt');
    console.log(imgSrc, imgAlt);
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  });
  
  /* got the current target, find the current image withing the thumnail, got the attritbutes and stored them in their own tags, and update the new attributes in the larger image */
  