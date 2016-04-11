var titleElm = document.querySelector('[data-title]')
var titleAsArray = 'marcusnielsenorg'.split('')

Rx.Observable.zip(
Rx.Observable.fromArray(titleAsArray),
Rx.Observable.interval(250),
function (a, b) {
  return a
}  
).scan(function(state, nextValue) {
  return state + nextValue
})
.concat(
  Rx.Observable.of('marcusnielsen org')
  .delay(500)
)
.concat(
  Rx.Observable.of('marcusnielsen.org')
  .delay(500)
  .do(function() {
    
  })
)
.subscribe(function(data) {
  titleElm.text = data
})