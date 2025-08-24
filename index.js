// 마지막 path 값 확인
const path = window.location.href;
const [pagePath] = path.split('/').slice(-1);
const purePageStr = pagePath.split('.')[0]
const testImgSrc = `/test/${purePageStr}.png`;

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

// 불투명도 조절
function HandleAdjustOpacity(key, currentOpacity) {
    let result; 

    let controlValue;

    if (key === ',') {
        controlValue = -0.1;
    } else if (key === '.') {
        controlValue = 0.1;
    } else {
        return currentOpacity;
    }

    result = Math.min(currentOpacity + controlValue , 1);
    result = Number(result.toFixed(2));

    return result;
}

window.addEventListener('load', function() {

    if (doesFileExist(testImgSrc)) {
        const body = this.document.querySelector('body')
        let winSize;

        // Img 생성 및 경로 할당
        let testImg = this.document.createElement('img');
        testImg.src = testImgSrc;

        // Img Meta Data 태그 추가
        var testOpacity = this.document.createElement('p');
        var testWinSize = this.document.createElement('p');

        body.appendChild(testImg);
        body.appendChild(testOpacity);
        body.appendChild(testWinSize);
        body.style.position = 'relative';

        testImg.style.cssText = `
            position: absolute;
            left : 50%;
            top : 0;
            transform : translateX(-50%);
            opacity : 0.5;
            display : none;
        `;

        testOpacity.style.cssText = `
            position : absolute;
            top : 20px;
            right : 100px;
            color : red;
            font-size : 20px;
            font-weight : bold;
            display: none;
        `

        testWinSize.style.cssText = `
            position : absolute;
            top : 20px;
            right : 140px;
            color : red;
            font-size : 20px;
            font-weight : bold;
            display: none;
        `

        let opacityTxt = this.document.createTextNode("0.5") 
        testOpacity.appendChild(opacityTxt)

        winSize = this.window.innerWidth;
        let winSizeTxt = this.document.createTextNode(`현재 너비 : ${winSize}px`)
        testWinSize.appendChild(winSizeTxt)

        this.document.addEventListener('keydown', function(event) {
            const isTestImgShow = testImg.style.display === 'block';
            let key = event.key;
            let currentOpacity = parseFloat(testImg.style.opacity) || 0; 
            let newOpacity;

            if (key === 't' || key === 'T' || key === 'ㅅ') {
                if (!isTestImgShow) {
                    testImg.style.display = 'block';
                    testOpacity.style.display = 'block';
                    testWinSize.style.display = 'block';
                } else {
                    testImg.style.display = 'none';
                    testOpacity.style.display = 'none';
                    testWinSize.style.display = 'none';
                }
            }

            if (isTestImgShow) {
                newOpacity = HandleAdjustOpacity(key, currentOpacity);
                testImg.style.opacity = newOpacity;
                testOpacity.innerText = newOpacity
            }
        })
    }

    // 사이즈 업데이트
    window.addEventListener('resize', function() {
        const w = this.innerWidth;
        testWinSize.innerText = `현재 너비 : ${w}px `;
    });
});






