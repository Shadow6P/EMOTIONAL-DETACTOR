Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function toma_foto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

function modelLoaded() {
    console.log("Miss cual es su otra respuesta?");
}
prediction_1 = "";
prediction_2 = "";
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/7kaqHSZkq/model.json", modelLoaded);

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        if (results[0].label == "Feliz") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if (results[0].label == "Triste") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if (results[0].label == "Enojado") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
        if (results[1].label == "Feliz") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if (results[1].label == "Triste") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if (results[1].label == "Enojado") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
    }
}
function check (){
    img=document.getElementById ('captured_image');
    classifier.classify(img,gotResult);
}