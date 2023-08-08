function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    c = color('rgb(0%, 0%, 100%)');
    fill(c);
    circle(30, 30, 50);
    circle(600, 30, 50);
    circle(30, 450, 50);
    circle(600, 450, 50);
    c = color('magenta');
    fill(c);
    rect(50, 15, 530, 30);
    rect(50, 435, 530, 30);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}