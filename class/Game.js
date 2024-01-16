class Hero {
  constructor(ctx, color) {
    this.ctx = ctx
    this.color = color
    this.x = 5
    this.y = 5
    this.speed = 0.2
    this.map = new Set()
  }

  draw() {
    document.body.addEventListener('keyup', (e) => {
      this.direction = null
      this.map.delete(e.key)
    })

    document.body.addEventListener('keydown', (event) => {
      if (this.map.size < 3)
        this.map.add(event.key)
    })

    this.move()
    
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, 2, 2)
  }

  checkCollision(x,y) {
    if (this.x > 33) this.x = 33
    if (this.x < 0) this.x = 0
    if (this.y > 38) this.y = 38
    if (this.y < 0) this.y = 0
  }

  normalize() {
    return this.speed/2+this.speed*2.5/10
  }

  move() {
    if (this.map.size) {
      if (this.map.has('d')) {
        if (this.map.has('w') || this.map.has('s')) {
          this.x += this.normalize()
          if (this.map.has('w')) this.y -= this.normalize()
          else this.y += this.normalize()
        }
        else this.x += this.speed
      }

      if (this.map.has('a')) {
        if (this.map.has('w') || this.map.has('s')) {
          this.x -= this.normalize()
          if (this.map.has('w')) this.y -= this.normalize()
          else this.y += this.normalize()
        }
        else this.x -= this.speed
      }

      if (this.map.has('w') && this.map.size === 1)
        this.y -= this.speed
      if (this.map.has('s') && this.map.size === 1)
        this.y += this.speed
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