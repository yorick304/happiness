export default {
    left: 0,
    top: 0,
    scaleVal: 1,  //缩放
    rotateVal: 0,   //旋转
    curStatus: 0,   //记录当前手势的状态, 0:拖动, 1:缩放, 2:旋转
    init($targetObj, callback) {
        touch.on($targetObj, 'touchstart', function (ev) {
            this.curStatus = 0;
            ev.preventDefault();//阻止默认事件
        });
        if (!window.localStorage.cat_touchjs_data)
            callback && callback(0, 0, 1, 0);
        else {
            var jsonObj = JSON.parse(window.localStorage.cat_touchjs_data)
            this.left = parseFloat(jsonObj.left)
            this.top = parseFloat(jsonObj.top)
            this.scaleVal = parseFloat(jsonObj.scale)
            this.rotateVal = parseFloat(jsonObj.rotate)
            callback && callback(this.left, this.top, this.scaleVal, this.rotateVal)
        }
    },
    //拖动
    drag($targetObj, callback) {
        touch.on($targetObj, 'drag', (ev) => {
            $targetObj.style['left'] = (this.left + ev.x) +'px'
            $targetObj.style['top'] = (this.top + ev.y) + 'px'
        })
        touch.on($targetObj, 'dragend', (ev) => {
            this.left = (this.left + ev.x) + 'px'
            this.top = (this.top + ev.y) + 'px'
            callback && callback(this.left, this.top);
        })
    },
    scale($targetObj, callback) {
        let initialScale = this.scaleVal || 1
        let currentScale
        touch.on($targetObj, 'pinch', (ev) => {
            if (this.curStatus == 2) {
                return
            }
            this.curStatus = 1
            currentScale = ev.scale - 1
            currentScale = initialScale + currentScale
            if (currentScale < 1) {
                this.scaleVal = 1
                $targetObj.style['left'] = 0
                $targetObj.style['top'] = 0
                return
            }
            this.scaleVal = currentScale
            let transformStyle = 'scale(' + this.scaleVal + ') rotate(' + this.rotateVal + 'deg)'
            $targetObj.style['transform'] = transformStyle
            $targetObj.style['-webkit-transform'] = transformStyle
            callback && callback(this.scaleVal);
        })
        touch.on($targetObj, 'pinch', (ev) => {
            if (this.curStatus == 2) {
                return
            }
            initialScale = currentScale
            this.scaleVal = currentScale
            callback && callback(this.scaleVal)
        })
    }
}