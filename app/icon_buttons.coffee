hostATag = document.createElement('a')
hrefToHost = (href) ->
  hostATag.href = href
  hostATag.host


class IconButton
  constructor: (options) ->
    @_targetElement = options.targetElement
    @_targetOffset = options.targetOffset

    @$el = $ """
      <factlink-icon-button>
        <factlink-icon-button-bubble>
          #{options.content}
          <factlink-icon-button-bubble-triangle></factlink-icon-button-bubble-triangle>
        </factlink-icon-button-bubble>
      </factlink-icon-button>
    """
    global.$factlinkCoreContainer.append(@$el)

    @_setStyles()

    @$el.on 'mousemove touchstart touchmove', options.onmouseenter
    @$el.on 'mouseleave', options.onmouseleave
    @$el.on 'click', options.onclick

    @_tether = new global.Tether(@_tether_options())

  resetOffset: (targetOffset) ->
    return if targetOffset == @_targetOffset
    @_targetOffset = targetOffset
    @_tether.setOptions(@_tether_options())

  _tether_options: () ->
    element: @$el[0]
    target: @_targetElement
    attachment: 'top left'
    targetAttachment: 'top right'
    classPrefix: 'factlink-tether'
    targetOffset: @_targetOffset || '0 0'

  destroy: ->
    @_tether.destroy()
    @$el.remove()

  fadeIn: ->
    @$el.addClass 'factlink-control-visible'

  fadeOut: ->
    @$el.removeClass 'factlink-control-visible'

  _setStyles: ->
    style = window.getComputedStyle(@_targetElement)
    targetColor = style.color

    # See https://gamedev.stackexchange.com/questions/38536/given-a-rgb-color-x-how-to-find-the-most-contrasting-color-y/38561#38561
    targetRGB = targetColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+(\.\d+)?)?\)$/)
    r = targetRGB[1]/255; g = targetRGB[2]/255; b = targetRGB[3]/255;
    targetBrightness = 0.2126*r*r + 0.7152*g*g + 0.0722*b*b

    @$el.css
      'line-height': style.lineHeight
      'font-size': style.fontSize
      'font-family': style.fontFamily

    @$el.find('factlink-icon-button-bubble').css
      'background-color': targetColor
      'color': if targetBrightness > 0.5 then 'black' else 'white'
      'font-size': Math.max 12, Math.min 16, Math.round 0.8*parseInt(style.fontSize)

    @$el.find('factlink-icon-button-bubble-triangle').css
      'border-top-color': targetColor

    @$el.css @_siteSpecificStyles()

  _siteSpecificStyles: ->
    switch hrefToHost window.location.href
      when 'medium.com'
        'margin-left': '2em'
      else
        {}


class global.ParagraphIconButtonContainer
  constructor: (paragraphElement, onClick) ->
    @$paragraph = $(paragraphElement)

    @_iconButton = new IconButton
      content: '+'
      targetElement: @$paragraph[0]
      onmouseenter: => @_attentionSpan?.gainAttention()
      onmouseleave: => @_attentionSpan?.loseAttention()
      onclick: onClick

    @_attentionSpan = new global.AttentionSpan
      wait_for_neglection: 500
      onAttentionGained: => @_iconButton.fadeIn(); @_visible = true
      onAttentionLost: => @_iconButton.fadeOut(); @_visible = false

    @$paragraph.on 'mousemove touchstart touchmove', @_showOnlyThisParagraphButton
    @$paragraph.on 'mouseleave', => @_attentionSpan.loseAttention()
    $(document).on 'hideAllParagraphButtons', @_onHideAllParagraphButtons

  _showOnlyThisParagraphButton: =>
    return if @_visible

    $(document).trigger 'hideAllParagraphButtons'
    @_attentionSpan.gainAttention()

  _onHideAllParagraphButtons: =>
    @_attentionSpan.loseAttentionNow()

  # TODO: currently unused
  destroy: ->
    @_iconButton.destroy()
    @_attentionSpan?.destroy()
    # TODO: unbind events
