AFRAME.registerComponent("terrain-rotation-read", {

schema:{

    speedOfRotation:{type:'number', default:0}
},


tick:function(){

    var mapRotation= this.el.getAttribute('rotation')
    mapRotation.y +=this.data.speedOfRotation

    this.el.setAttribute("rotation",{
        x:mapRotation.x, y:mapRotation.y, z:mapRotation.z
      })

},


init: function(){
  
    window.addEventListener('keydown', (e)=>{
  
      if(e.key==='ArrowRight'){
        
        if(this.data.speedOfRotation<.1){
          this.data.speedOfRotation +=.01
        }
      }
  
      if(e.key==='ArrowLeft'){
        
        if(this.data.speedOfRotation>-.1){
          this.data.speedOfRotation -=.01
        }
      }
  
  
    })
  
  }
  
  })




  
AFRAME.registerComponent('personRotationReader', {

    schema:{
      speedOfRotation:{type:"number",default:0}
    },
  
    init: function(){
      window.addEventListener('keydown', (e)=>{
  
        this.data.speedOfRotation=this.el.getAttribute('rotation')
        var personRotation= this.data.speedOfRotation
  
  
        if(e.key==='ArrowRight'){
        
          if(personRotation.x<10){
            personRotation.x +=.5
  
            this.el.setAttribute('rotation', planeRotation)
          }
        }
    
        if(e.key==='ArrowLeft'){
          
          if(personRotation.x>-10){
            personRotation.x-=.5
  
            this.el.setAttribute('rotation', rotation)
          }
        }
  
  
      })
    }
    
  })
  
  