jQuery("#simulation")
  .on("click", ".s-3ae50bea-d943-4cd8-b996-a0060fc0c2c6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-logo")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5238c159-f63a-47ff-97d1-1e2cdccd2b2e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-toggle_list_map")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "loggedUser" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-search_input",
                        "property": "jimGetValue"
                      },{
                        "action": "jimConcat",
                        "parameter": [ " ",{
                          "datatype": "property",
                          "target": "#s-search_input_1",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "userCreated" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5238c159-f63a-47ff-97d1-1e2cdccd2b2e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });