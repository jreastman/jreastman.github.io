$(()=> {
// Minimal eye candy
  $(".page").hide().fadeIn(1000)

// Changes header's h2 to it's hex representation
  $("#change").hover(()=>{
          oldt = $("#change").text()
          $("#change").text("//4A5245")
                  console.log(oldt)
          },()=>{
                  $("#change").text(oldt)
                  console.log(oldt)
          })

// Router
  page('/', index)
  page('/js', ()=> {
          console.log("4a5245")
                  })


})
