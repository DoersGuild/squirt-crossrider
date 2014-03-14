appAPI.ready ($) ->
    # Do something (ideal for handling browser button, global timers, etc.)
    "use strict"

    appAPI.message.addListener (msg) ->
        console.log "Received", msg
        if msg.getStatus
            # Send it the current text status
            appAPI.message.toBackground
                ready: true
        else
            try
                appAPI.resources.addInlineJS 'js/squirt.js'
            catch err
                console.warn err.message
        return

    return
