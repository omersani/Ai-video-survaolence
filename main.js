objects = []
video = "";
status = "";

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 380);
    if(status != "")
    {
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status = number of objects";
            document.getElementById("number_of_objects").innerHTML = "Number of objects : " + objects.length;


            fill("#FF0000");
            percent = floor(object[1].confidence*100);
            text(objects[i].label + "" + percent + "%", + objects[i].x + 15, + objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult()
{
    if(error, results)
    {
        console.log(error);

    }
    console.log(results);
    object = results;
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);

}