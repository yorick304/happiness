export default {
  methods: {
    areaMap() {
      let $ = {}
      $.all = function(selector, contextElement) {
        let nodeList, list = []
        if (contextElement) {
          nodeList = contextElement.querySelectorAll(selector)
        } else {
          nodeList = document.querySelectorAll(selector)
        }
        if (nodeList && nodeList.length > 0) {
          list = Array.prototype.slice.call(nodeList)
        }
        return list
      }
      $.delegate = function($el, eventType, selector, fn) {
        if (!$el) { 
          return 
        }
        $el.addEventListener(eventType, function(e) {
          let targets = $.all(selector, $el)
          if (!targets) {
            return
          }
          // findTarget:
          for (let i=0; i<targets.length; i++) {
            let $node = e.target;
            while ($node) {
              if ($node == targets[i]) {
                fn.call($node, e)
                break //findTarget;
              }
              $node = $node.parentNode;
              if ($node == $el) {
                break
              }
            }
          }
        }, false)
      }
      let urls = []
      let imgs = $.all('img',$.all('#imgBox')[0])
      imgs.forEach(function(v,i){
          urls.push(v.src)
      })
    
      $.delegate(document.querySelector('#imgBox'), 'click','img',function(){
          let current = this.src
          let obj = {
            urls : urls,
            current : current
          }
          window.previewImage.start(obj)
      }) 
    }
  }
}