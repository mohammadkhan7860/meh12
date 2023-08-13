function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sM2gClGVq/model.json', modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'I can Hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";

        img = document.getElementsById('alien1');
        img1 = document.getElementsById('alien2');
        img2 = document.getElementsById('alien3');
        img3 = document.getElementsById('alien4');

        if (results[0].label == "Clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == "Bell") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == "Snapping") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }

        else {
                img.src = 'aliens-01.png';
                img1.src = 'aliens-02.png';
                img2.src = 'aliens-03.png';
                img3.src = 'aliens-04.gif';
            }
        
    }
}