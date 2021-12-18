function toggle() {
  var trailer = document.querySelector('.trailer')
  trailer.classList.toggle('active')
  var video = document.querySelector('.trailer')
  var video = document.querySelector('video')
  video.pause()
  video.currentTime = 0
}
