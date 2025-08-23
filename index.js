// 마지막 path 값 확인
var path = window.location.href;
var [pagePath] = path.split('/').slice(-1);
var purePageStr = pagePath.split('.')[0]

var testImg;
var testImgSrc = `/test/${purePageStr}.png`;

// 파일 존재 여부 확인
function doesFileExist(url) {
    var xhr = new XMLHttpRequest();

    xhr.open('HEAD', url, false);
    xhr.send();

    if (xhr.status == "404") {
        return false
    } else {
        return true
    }
}

window.addEventListener('load', function() {
    if (doesFileExist(testImgSrc)) {
        testImg = this.document.createElement('img');
        testImg.src = testImgSrc;
        var testOpacity = this.document.createElement('p');


        this.document.querySelector('body').appendChild(testImg);
        this.document.querySelector('body').appendChild(testOpacity);
        this.document.querySelector('body').style.position = 'relative';

        
        testImg.style.cssText = `
            position: absolute;
            left : 50%;
            top : 0;
            transform : translateX(-50%);
            opacity : 0.5;
            display : block;
        `;

        testOpacity.style.cssText = `
            position : absolute;
            top : 20px;
            right : 100px;
            color : red;
            font-size : 20px;
            font-weight : bold;
        `

        let txt = this.document.createTextNode("0.5") 
        testOpacity.appendChild(txt)

        this.document.addEventListener('keydown', function(event) {
            var key = event.key;
            let currentOpacity = parseFloat(testImg.style.opacity) || 0; 
            let newOpacity;

            if (key === 't' || key === 'T' || key === 'ㅅ') {
                if (testImg.style.display === 'none') {
                    testImg.style.display = 'block';
                } else {
                    testImg.style.display = 'none';
                }
            }

            if (key === ',' && testImg.style.display === 'block') {
                newOpacity = Math.min(currentOpacity + 0.1, 1); 
                testImg.style.opacity = newOpacity;
                testOpacity.innerText = newOpacity;
            } 

            if (key === '.' && testImg.style.display === 'block') {
                newOpacity = Math.min(currentOpacity - 0.1, 1); 
                testImg.style.opacity = newOpacity;
                testOpacity.innerText = newOpacity;
            }

        })
    }
});



