$(()=> {

console.log('If you are reading this: gooberfuludjflkasjdf!')
  $('.page').hide().fadeIn(1000)
  
  $(() => {
    $(" .header > #block, .foot > #block").hover(()=> {
      $(".foot > #block, .header > #block").effect("bounce", "slow")
    })
  })


})
