class Hero {
  constructor(ctx, color) {
    this.ctx = ctx
    this.color = color
    this.x = 5
    this.y = 5
    this.speed = 0.2
    this.direction = 'right',
    this.isMove = false
  }

  draw() {
    document.body.addEventListener('keyup', (e) => {
      //this.move(e.key)
      this.isMove = false
      console.log('dejo')
    })

    document.body.addEventListener('keydown', (event) => {
      this.move(event.key)
    })

    /* if (this.x >= 33 && this.isMove) this.direction = 'left'
    if (this.x <= 0 && this.isMove) this.direction = 'right' */
    
    if (this.direction === 'right' && this.isMove)
      this.x+=this.speed
    if (this.direction === 'left' && this.isMove)
      this.x-=this.speed
    if (this.direction === 'up' && this.isMove)
      this.y-=this.speed
    if (this.direction === 'down' && this.isMove)
      this.y+=this.speed

    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, 2, 2)
  }

  checkCollision(x,y) {
    if (this.x > 33) this.x = 33
    if (this.x < 0) this.x = 0
    if (this.y > 38) this.y = 38
    if (this.y < 0) this.y = 0
  }

  move(key) {
    if (key.toLowerCase() === 'd' || key === 'ArrowRight') {
      this.direction = 'right'
      this.isMove = true
    }
    if (key.toLowerCase() === 'a' || key === 'ArrowLeft') {
      this.direction = 'left'
      this.isMove = true
    }
    if (key.toLowerCase() === 'w' || key === 'ArrowUp') {
      this.direction = 'up'
      this.isMove = true
    }
    if (key.toLowerCase() === 's' || key === 'ArrowDown') {
      this.direction = 'down'
      this.isMove = true
    }
  }
}

export class Game {
  constructor(ctx, width, height, background) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.background = background
    this.hero = new Hero(this.ctx, 'green')
  }

  init() {
    this.draw()

    window.requestAnimationFrame(() => this.init())
  }

  draw() {
    this.ctx.fillStyle = this.background
    this.ctx.fillRect(0, 0, this.width, this.height)

    this.hero.draw()
    this.hero.checkCollision(this.width)
  }
}