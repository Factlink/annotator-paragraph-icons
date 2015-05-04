# Create the FactlinkJailRoot container
global.$factlinkCoreContainer = $("<factlink-core-container></factlink-core-container>")
$('body').append global.$factlinkCoreContainer

# Prevent event bubbling outside our container
mouse_touch_drag_events = """
  mouseup mousedown click mouseenter mouseleave mousemove mouseout mouseover dblclick
  show contextmenu
  drag dragstart dragenter dragover dragleave dragend drop
  touchstart touchmove touchleave touchenter touchend touchcancel
"""

global.$factlinkCoreContainer.on mouse_touch_drag_events, (event) -> event.stopPropagation()
