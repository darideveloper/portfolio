let touchstartY = 0
let touchendY = 0
let start_height = window.outerHeight

const body = document.querySelector ("body")

async function vHandleGesture() {
  // Detect when user hide search bar

  if (! animation_running) {
    if (start_height == start_height) {
      if (!sliding) {
        animation_running = true
        if (touchendY < touchstartY) {
          await incress_screen_counter ()
        }
        if (touchendY > touchstartY) {
          await decress_screen_counter ()
        }
        change_screen ()
      }
    }
  }
}

body.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY
})

body.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY
  vHandleGesture ()
})
