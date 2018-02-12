$(()=> {

console.log('If you are reading this: gooberfuludjflkasjdf!')
  $(".page").hide().fadeIn(1000)

  $("#change").hover(()=>{
          oldt = $("#change").text()
          $("#change").text("//4A5245")
                  console.log(oldt)
          },()=>{
                  $("#change").text(oldt)
                  console.log(oldt)
          })




})
