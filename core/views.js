var views = {
    appendControlPanel: function () {
        var divMain = document.createElement("div")
        divMain.id = COMMAND_PANEL_DOM_ID
        divMain.className = "modal hide in"
        divMain.tabindex = "0"
        divMain['aria-hidden'] = false
        divMain.style.display = "none"

        var bankInfo = getBankAccountAddr()
        var selectIpList = '<select id="' + FIELD_BANK_IP_TARGET + '" class="controls fieldsContent">'
        for (ip in bankInfo) {
            selectIpList += '<option value="' + ip + '">' + ip + '</option>'
        }
        selectIpList += '</select>'
        divMain.innerHTML =
            '<div class="widget-title">' +
            '<h5>' + LANG.CONTROL_PANEL_TITLE + '</h5>' +
            '<span id="' + COMMAND_PANEL_CLOSE_BUTTON_DOM_ID + '" class="btn btn-danger" style="float: right">X</span>' +
            '<span id="' + INFO_ALERT + '" class="btn btn-warning" style="float: right">!</span>' +
            '<span id="' + CREDITS_INFO + '" class="btn btn-info" style="float: right">:)</span>' +
            '<span id="' + SET_CONFIG_PANEL + '" class="btn btn-secondary" style="float: right"><i class="fa fa-cog" aria-hidden="true"></i></span>' +
            '</div>' +
            '<div id="' + MAIN_SCREEN_DOM_ID + '" class="modal-body" style="max-height:405px">' +
            '<div id="' + MESSAGE_CONTAINER + '"></div>' +
            '<table class="table">' +
            '<tbody>' +
            '<tr class="info"><td>' +
            '<div style="text-align: center">' +
            '<button id="' + PERFORM_DELETE_SOFTWARE_ID + '" class="btn btn-success" style="float: left">' + LANG.PERFORM_DELETE_SOFTWARE + '</button> ' +
            '<button id="' + PERFORM_CHECK_BALANCE_ID + '" class="btn btn-warning">' + LANG.PERFORM_MEDIUM_MISSIONS + '</button> ' +
            '<button id="' + PERFORM_TRANSFER_MONEY_ID + '" class="btn btn-danger" style="float: right">' + LANG.PERFORM_HARD_MISSIONS + '</button>' +
            '<br /><br />' +
            '<button id="' + PERFORM_BANK_CAMPING + '" class="btn btn-info" style="float: left">' + LANG.INTERCEPT_TRANSACTIONS + '</button>' +
            selectIpList +

            '<label><input class="checkBoxes" id="' + SET_TRANSFER_TO_BTC + '"type="checkbox" ><span>' + LANG.TRANSFER_TO_BTC + '</span></label>' +
            '</div>' +
            '</td></tr>' +

            '<tr class="warning"><td>' +
            '<div style="text-align: center">' +
            '<button id="' + SET_CLEAN_OWN_LOGS_DOM_ID + '" class="btn btn-secondary" style="float: left">' + LANG.CLEAN_OWN_LOGS + '</button> ' +
            '<button id="' + SET_DDOS_DELETE_DOM_ID + '" class="btn btn-secondary">' + LANG.DDOS_DELETE + '</button>' +
            '<button id="' + SET_CLEAN_TARGET_LOGS_DOM_ID + '" class="btn btn-secondary" style="float: right">' + LANG.CLEAN_VICTIM_LOGS + ' </button> ' +
            '</div>' +
            '<br />' +
            '<div style="text-align: center">' +
            '<button id="' + SET_ACCESS_TARGET_CLEAN_LOGS_DOM_ID + '" class="btn btn-secondary" style="float: left">' + LANG.ACCESS_CLEAR + '</button> ' +
            '<button id="' + SET_ACCESS_TARGET_CLEAN_LOGS_DOM_ID_PORT + '" class="btn btn-secondary" style="float: right">' + LANG.ACCESS_CLEAR_PORT + '</button> ' +
            '</div>' +
            '</td></tr>' +

            '<tr class="info"><td>' +
            '<div style="text-align: center">' +
            '<button id="' + SET_SEARCH_FOR_IPS + '" class="btn btn-info">' + LANG.RUN_WEBCRAWLER + '</button> ' + LANG.WEBCRAWLER_INITIAL_HOSTS + '<input id="' + FIELD_IPS_START_SEARCHING + '" class="controls fieldsContent" placeholder="' + LANG.PASTE_IPS + '" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width: 25%">' +
            '<label><input type="checkbox" class="checkBoxes" id="' + SET_IGNORE_LIST + '">' + LANG.WEBCRAWLER_IGNORE_HOSTS + '<input id="' + FIELD_HOSTS_TO_IGNORE + '" class="controls fieldsContent" placeholder="' + LANG.PASTE_IPS + '" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width:25%"></label>' +
            //'<label><input class="checkBoxes" type="checkbox" id=' + SET_UPLOAD_MODE + '><span>' + LANG.WEBCRAWLER_UPLOAD_SOFTWARES + '</span><input id="' + FIELD_SOFTWARES_TO_INSTALL + '" class="controls fieldsContent" placeholder="' + LANG.WEBCRAWLER_UPLOAD_SOFTWARE_MODEL + '" type="text" style="vertical-align: top; margin-left: 10px; margin-right: 10px; width:25%"">' + LANG.WEBCRAWLER_UPLOAD_WAIT + '<input id="' + SET_TIME_LIMIT + '" class="controls fieldsContent" placeholder="' + LANG.SECONDS + '" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width:12%"></label>' +

            '<center><b>' + LANG.WEBCRAWLER_SCRIPT_TITLE + '</b> <a href="https://hexbotwiki.000webhostapp.com/doku.php?id=custom_rules" target="_blank"><i class="fa fa-question-circle" aria-hidden="true"></i></a></center>' +
            '<center><textarea id="' + WEBCRAWLER_SCRIPT + '" class="controls fieldsContent" style="width: 95%; resize: vertical; color:#80f980; background-color:black; font-family:monospace"></textarea>' +

            '<center><textarea id="' + WEBCRAWLER_SCRIPT_DEBUG + '" class="controls fieldsContent" style="width: 95%; resize: vertical; color:white; background-color:red; font-family:monospace"></textarea>' +

            '<center><textarea id="' + FIELD_IP_SEARCH_RESULT + '" class="controls fieldsContent" style="width: 95%; resize: vertical; font-family:monospace"></textarea>' +
            '<input id="' + REGEX_INPUT_DOM_ID + '" class="controls fieldsContent" type="search" style="width: 95%;" placeholder="' + LANG.WEBCRAWLER_FILTER_WITH + '"></center>' +
            '</div>' +
            '</td></tr>' +

            '<tr class="warning"><td>' +
            '<div style="text-align: center">' +
            '<button id="' + PERFORM_UPDATE_CRACKER + '" class="btn btn-info">' + LANG.UPDATE_CRACKER + '</button> ' +
            '</div>' +
            '</td></tr>' +

            '<tr class="info"><td>' +
                '<div style="text-align: center">' +
                    '<label> ' + LANG.DDOS_HOST + '<input id="' + FIELD_DDOS_IP + '" class="controls fieldsContent" placeholder="' + LANG.DDOS_IP + '" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width: 30%"></label>' +
                    '<label> ' + LANG.DDOS_TIMES + '<input type="number" min="0" max="50" step="1" value="0" size="6" id="' + FIELD_DDOS_TIMES+ '" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width: 7%"></label>' +
                    '<button id="' + SET_START_DDOSES + '" class="btn btn-info">' + LANG.RUN_DDOSER + '</button> ' +
                '</div>' +
            '</td></tr>' +

            '</tbody>' +
            '</table>' +
            '</div>' +
            '<div id="' + CREDITS_SCREEN_DOM_ID + '" class="modal-body">' +
            '<h1>' + LANG.CREDITS_TITLE + '</h1>' +
            '<div style="font-size: 15px;">' +
            '<a href="https://github.com/cmathiswausau">cmathiswausau</a> - ' + LANG.CREDITS_cmathiswausau + '<br />' +
            '<a href="https://github.com/dominicusdev">dominicusdev</a> - ' + LANG.CREDITS_dominicusdev + '<br />' +
            '<a href="https://github.com/gresendesa">gresendesa</a> - ' + LANG.CREDITS_gresendesa + '<br />' +
            '<a href="https://github.com/Klorker">Klorker</a> - ' + LANG.CREDITS_Klorker + '<br />' +
            '<a href="https://github.com/perfilrobo">perfilrobo</a> - ' + LANG.CREDITS_perfilrobo + '<br />' +
            '<a href="https://github.com/Quartz101">Quartz101</a> - ' + LANG.CREDITS_Quartz101 + '<br />' +
            '<a href="https://github.com/sjs1985">sjs1985</a> - ' + LANG.CREDITS_sjs1985 + '<br />' +
            '<a href="https://github.com/fkapitalism">fkapitalism</a> - ' + LANG.CREDITS_fkapitalism + '<br />' +
            '<a href="https://github.com/AssHole12">AssHole12</a> - ' + LANG.CREDITS_AssHole12 + '<br /><br />' +
            LANG.CREDITS_OTHERS +
            '</div><br />' +
            '<button id="back-to-main" class="btn btn-success">' + LANG.CREDITS_BACK_BUTTON + '</button>' +
            '</div>' +
            '<div id="' + CONFIG_PANEL + '" class="modal-body" style="max-height:405px">' +
            '<div style="font-size: 15px;" id="' + CONFIG_AREA + '">' +
            '<h2>' + LANG.CONFIG_AREA_TITLE + '</h2>' +
            '<div class="section-title">' +
            '<h4>' + LANG.CONFIG_GENERAL_TITLE + '</h4>' +
            '<div class="divider">' +
            '<label><input class="checkBoxes" id="' + SET_POPUP_AFTER_INSTRUCTION + '"type="checkbox"><span>' + LANG.CONFIG_POPUP_BOT + '</span></label>' +
            '</div>' +
            '<hr />' +
            '<h4>' + LANG.CONFIG_NOTIFIERS_TITLE + '</h4>' +
            '<div class="divider">' +
            '<label><input class="checkBoxes" type="checkbox" id=' + SET_MISSIONS_MONITOR + '><span>' + LANG.NOTIFY_MISSIONS + '</span></label>' +
            '<label><input class="checkBoxes" type="checkbox" id=' + SET_LOGS_MONITOR + '><span>' + LANG.NOTIFY_LOGS + '</span></label>' +
            '<label><input class="checkBoxes" type="checkbox" id=' + SET_NAME_NOTIFICATION + '><span>' + LANG.NOTIFY_NAME + '</span></label>' +
            '</div>' +
            '<hr />' +
            '<h4>' + LANG.CONFIG_FUNCTION_TITLE + '</h4>' +
            '<div class="divider">' +
            '<label><input class="checkBoxes" type="checkbox" id="' + MONARCHS_SEND_IP + '"><span>' + LANG.SEND_IP + '</span></label>' +
            '<label><input class="checkBoxes" type="checkbox" id="' + MONARCHS_SEND_USERNAME + '"><span>' + LANG.SEND_USERNAME + '</span></label>' +
            '<label><input class="checkBoxes" type="checkbox" id=' + AUTO_CHANGE_IP + '><span>' + LANG.AUTO_CHANGE_IP + '</span></label>' +
            '</div>' +
            '<hr />' +
            '<h4>' + LANG.CONFIG_WEBCRAWL_TITLE + '</h4>' +
            '<div class="divider">' +
            '<label><input class="checkBoxes" id="' + USEEXPLOIT + '" type="checkbox"><span>' + LANG.WEBCRAWLER_EXPLOIT + '</span></label>' +
            '<label><input class="checkBoxes" id="' + SET_SKIP_AFTER_UPLOAD + '" type="checkbox"><span>' + LANG.WEBCRAWLER_SKIP_AFTER_UPLOAD + '</span></label>' +
            //'<label><input class="checkBoxes" id="' + SET_HIDE_MODE + '"type="checkbox"><span>' + LANG.WEBCRAWLER_HIDE_UPLOAD + '</span></label>' +
            '<label><input class="checkBoxes" type="checkbox" id=' + SET_SIGNATURE + '>' + LANG.WEBCRAWLER_LEAVE_SIGNATURE + '<a href="http://www.symbols-n-emoticons.com/p/facebook-text-art-ascii.html" target="_blank"> ' + LANG.WEBCRAWLER_FIND_SIGNATURE + '</a><textarea id="' + FIELD_SIGNATURE + '" class="controls fieldsContent" style="width: 95%; resize: vertical;"></textarea></label>' +
            '</div>' +
            '<hr />' +
            '<h4>' + LANG.CONFIG_LANG_NAME + '</h4>' +
            '<div class="divider">' +
            '<label><input class="fieldsContent" id="' + LANGUAGE_FIELD + '" type="text"><span> <b>br</b>, <b>en</b>, <b>de</b>, <b>el</b> </span></label>' +
            '</div>' +
            '<button id="' + CONFIG_TO_MAIN + '" class="btn btn-success">' + LANG.CREDITS_BACK_BUTTON + '</button>' +
            '</div>' +
            '</div><br />' +

            //'</div>' +
            //'<div class="modal-footer">' +
            //	LANG.REPOSITORY_LINK +
            '</div>';
        document.getElementsByTagName("BODY")[0].appendChild(divMain);
    },

    showControlPanel: function () {
        var element = document.getElementById(COMMAND_PANEL_DOM_ID)
        if (element) {
            element.style.display = "block"
        }
    },

    hideControlPanel: function () {
        var element = document.getElementById(COMMAND_PANEL_DOM_ID)
        if (element) {
            element.style.display = "none"
        }
    },

    showBotButton: function () {
        aux = document.createElement("li"); //Create a STOP BOT button
        aux.id = BOT_BUTTON_DOM_ID
        aux.className = "btn btn-info";
        aux.innerHTML = '<a><span id="botButtonContent" class="text" style="color: white;">BOT</span></a>';
        var containerElement = document.getElementsByClassName("nav btn-group")[0]
        containerElement.insertBefore(aux, containerElement.firstChild)
        document.getElementById("botButtonContent").style.color = "white"
        containerElement.insertBefore(document.createElement("li"), containerElement.firstChild) //Just bypassing a bug
    },

    showAssistanceButton: function () {
        aux = document.createElement("li");
        aux.id = BOT_BUTTON_DOM_ID2;
        aux.className = "btn btn-danger";
        aux.innerHTML = '<a><span id="' + BOT_BUTTON_DOM_ID2 + '" class="text" style="color: white;">' + LANG.REQUEST_ASSIT + '</span></a>';
        var containerElement = document.getElementsByClassName("nav btn-group")[0];
        containerElement.insertBefore(aux, containerElement.firstChild);
        containerElement.insertBefore(document.createElement("li"), containerElement.firstChild);
    },

    colorSideBarMenu: function (menu) {
        getDOMElement("a", "href", menu, 0, true).style.backgroundColor = "rgb(125, 52, 52)"
    },

    discolorSideBarMenu: function (menu) {
        getDOMElement("a", "href", menu, 0, false).style.backgroundColor = null
        getDOMElement("a", "href", menu, 0, true).style.color = "#aaa"
    },

    appendAndShowSuspectAccesses: function (logs) {
        var newTextArea = document.createElement("textarea")
        newTextArea.disabled = true
        newTextArea.value = logs
        var container = getDOMElement("form", "action", "logEdit", 0, false)
        container.appendChild(document.createElement("BR"))
        container.appendChild(document.createElement("BR"))
        container.appendChild(newTextArea)
    },

    switchToMainScreen: function () {
        document.getElementById(CREDITS_SCREEN_DOM_ID).style.display = "none"
        document.getElementById(MAIN_SCREEN_DOM_ID).style.display = "block"
        document.getElementById(CONFIG_PANEL).style.display = "none"
    },

    switchToChatPanel: function () {
        document.getElementById(CREDITS_SCREEN_DOM_ID).style.display = "none"
        document.getElementById(MAIN_SCREEN_DOM_ID).style.display = "none"
        document.getElementById(CONFIG_PANEL).style.display = "block"
        document.getElementById(CONFIG_TO_MAIN).addEventListener("click", views.switchToMainScreen)
    },

    switchToMainScreenToCreditsScreen: function () {
        document.getElementById(CREDITS_SCREEN_DOM_ID).style.display = "block"
        document.getElementById(MAIN_SCREEN_DOM_ID).style.display = "none"
        document.getElementById(CONFIG_PANEL).style.display = "none"
        document.getElementById("back-to-main").addEventListener("click", views.switchToMainScreen)
    }
}
