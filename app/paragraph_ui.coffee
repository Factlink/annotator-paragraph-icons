window.paragraphUi = ->
  start: (app) ->
    paragraphButtons = new global.ParagraphButtons (el) ->
      app.runHook 'createFromParagraph', [el]

    paragraphButtons.addParagraphButtons()
