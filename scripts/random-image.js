imgArray = [
    "oc-0048.png",
    "oc-0050.png",
    "oc-0094.png",
    "oc-0095.png"
    //"oc-0115.png",
    //"oc-0126.png",
    //"oc-0127.png"
]

function images(){
    // the random images
    var randomNumber1 = Math.floor(Math.random() * imgArray.length);
    // get images at randomNumber1
    selectedImages = imgArray[randomNumber1]
    // display the images()
    document.getElementsByClassName("image")[0].src = 'assets/img/random/' + selectedImages;
  }
  
  window.onload = images;