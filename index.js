document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const currentPath = window.location.href;
    const [pageHtml] = currentPath.split('/').slice(-1);
    const pageName = pageHtml.split('.')[0];
    const testImgSrc = `/test/${pageName}.png`;

    const doesFileExist = (url) => {
        var xhr = new XMLHttpRequest();

        xhr.open('HEAD', url, false);
        xhr.send();

        if (xhr.status == "404") {
            return false
        } else {
            return true
        }
    }

    const updateOpacity = (key, currentOpacity) => {
        let result; 

        if ([',', '.'].includes(key)) {
            if (key === ',') {
                result = Math.max(0, currentOpacity - 0.1);
            } else { 
                result = Math.min(1, currentOpacity + 0.1);
            }
            result = Number(result.toFixed(2));


            result = Number(result.toFixed(2));
        } else {
            result = currentOpacity
        }

        testImg.style.opacity = result;
        testOpacity.textContent = result;
    }

    const updateWinSize = () => {
        testWinSize.textContent = `현재 너비 : ${window.innerWidth}px`
    }

    const toggleTestUi = () => {
        const isDisplay = testImg.style.display === 'block';
        const isVisible = isDisplay ? 'none' : 'block';

        [testImg, testOpacity, testWinSize].forEach((el) => {
            el.style.display = isVisible;
        })
    }

    if (!doesFileExist(testImgSrc)) return;

    // CreateElement
    const testImg = document.createElement('img');
    const testOpacity = document.createElement('p');
    const testWinSize = document.createElement('p');

    let opacity = 0.5;

    testImg.src = testImgSrc;

    body.append(testImg, testOpacity, testWinSize)
    body.style.position = 'relative';

    testImg.style.cssText = `
        position: absolute;
        left : 50%;
        top : 0;
        transform : translateX(-50%);
        opacity : ${opacity};
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

    // Init 
    updateWinSize();
    updateOpacity('', opacity);

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const currentOpacity = parseFloat(testImg.style.opacity) || 0;

        if (['t', 'T', 'ㅅ'].includes(key)) {
            toggleTestUi();
        }

        if (testImg.style.display === 'block') {
            updateOpacity(key, currentOpacity)
        }
    })

    window.addEventListener('resize', () => {
        updateWinSize();
    })
})