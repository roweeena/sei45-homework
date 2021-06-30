// http://127.0.0.1:3000/
console.log('Cat Walk')

document.addEventListener('DOMContentLoaded', function() {

  let cnt = 0
  let timerId = 0
  let screenWidth = window.innerWidth-230

  const catWalk = function() {
    cnt+=3;
    let img = document.getElementById('img1')
    img.style.left = cnt + 'px';
    if (cnt>=screenWidth) {
      cnt=0
      img.style.left = cnt + 'px'
    }
  }
  console.log('screenWidth: ' + screenWidth)
  timerId = setInterval( catWalk, 50 )


  disintegrate.init()

  document.getElementById('img1').addEventListener('click', e => {
    const disObj = disintegrate.getDisObj(e.target)

    clearInterval(timerId);
    document.getElementById("sound").pause();
    document.body.style.backgroundImage = "url('";
    disintegrate.createSimultaneousParticles(disObj)
    e.target.remove()
    document.body.style.backgroundImage = "url('./img/cat-bg1.jpg')";

  })

  const thanosSnap = function() {
    this.name = 'ThanosSnap'
    this.animationDuration = 1500
    this.size = 3
    this.speedX = Math.random()
    this.speedY = Math.random() * -1
    this.first = true
    this.draw = (ctx, percentComplete) => {
      if (this.first) {
        this.startX += (Math.random() - 0.5) * 10
        this.startY += (Math.random() - 0.5) * 10
        this.first = false
      }
      ctx.beginPath()
      ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size)
      const r = this.rgbArray[0]
      const g = this.rgbArray[1]
      const b = this.rgbArray[2]
      const a = 1 - percentComplete
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
      ctx.fill()
      this.speedX *= 1.07
      this.speedY *= 1.07
      this.size *= 0.95
      this.startX += this.speedX
      this.startY += this.speedY
    }
  }
  disintegrate.addParticleType(thanosSnap)

})
