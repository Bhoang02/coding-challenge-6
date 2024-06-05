// U89173488

// step 2
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    // Draw the ball on the canvas
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    // Update the ball's position and handle collisions
    update(canvas) {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

// Set up the canvas and animation
const canvas = document.getElementById('animationCanvas');
const context = canvas.getContext('2d');

const ball = new Ball(200, 160, 20, 2, 2, 'red');

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(context);
    ball.update(canvas);
}

// Start the animation using setInterval for smooth animation
setInterval(animate, 16);

