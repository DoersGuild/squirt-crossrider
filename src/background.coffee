appAPI.ready ($) ->
    "use strict"

    gremlinsActive = {}

    # Set resource icon
    appAPI.browserAction.setResourceIcon 'images/icon.png'

    # Sets the tooltip for the button
    appAPI.browserAction.setTitle 'Click to Squirt'

    appAPI.browserAction.setBadgeText 'Ready'
    appAPI.browserAction.setBadgeBackgroundColor [0, 255, 0, 150]

    appAPI.browserAction.onClick () ->
        appAPI.message.toActiveTab
            "start" : true
        return

    appAPI.tabs.onTabSelectionChanged  (tabInfo) ->
        # Get current tab's status when switching to it
        appAPI.browserAction.setBadgeText ''
        appAPI.message.toActiveTab
            "getStatus" : true
        console.log "Tab selection changed; Requesting status", tabInfo
        return

    appAPI.message.addListener (msg) ->
        # Set the badge text
        console.log "Msg from tab", msg

        appAPI.browserAction.setBadgeText 'Ready'

        return


    return
