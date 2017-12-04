jQuery("#simulation")
  .on("click", ".s-cf04ad44-13c1-40ab-87d8-87a0af3d1dfc .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-row_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "selectedRes" ],
                    "value": {
                      "datatype": "gridcell",
                      "datamaster": "rest",
                      "element": "#s-list"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
    } else if(jFirer.is(".s-click_area")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "selectedRes" ],
                    "value": {
                      "datatype": "gridcell",
                      "datamaster": "rest",
                      "element": "#s-list"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "listMapToggle"
                },"list" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listMapToggle" ],
                    "value": "map"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-toggle_list_map" ],
                    "value": "Show List"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "listMapToggle" ],
                    "value": "list"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-toggle_list_map" ],
                    "value": "Show Map"
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
    } else if(jFirer.is("#s-logo")) {
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
    }
  })
  .on("keyup.jim", ".s-cf04ad44-13c1-40ab-87d8-87a0af3d1dfc .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-search_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "updateFilter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "updateFilter"
                      },"1" ]
                    }
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
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-address_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "updateFilter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "updateFilter"
                      },"1" ]
                    }
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
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-price_min_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "updateFilter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "updateFilter"
                      },"1" ]
                    }
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
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-price_max_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "updateFilter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "updateFilter"
                      },"1" ]
                    }
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
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-cf04ad44-13c1-40ab-87d8-87a0af3d1dfc .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-row_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ ".s-Rectangle_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimSelectData",
                        "parameter": {
                          "datatype": "gridcell",
                          "datamaster": "rest",
                          "element": "#s-list",
                          "value": {
                            "action": "jimMultiply",
                            "parameter": [ {
                              "action": "jimDivide",
                              "parameter": [ {
                                "field": "rating"
                              },"10" ]
                            },{
                              "datatype": "property",
                              "target": ".s-starts_image",
                              "property": "jimGetWidth"
                            } ]
                          }
                        }
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "22"
                    }
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
    } else if(jFirer.is(".s-click_area")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ ".s-Rectangle_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimSelectData",
                        "parameter": {
                          "datatype": "property",
                          "target": ".s-click_area",
                          "property": "jimGetValue",
                          "value": {
                            "action": "jimMultiply",
                            "parameter": [ {
                              "action": "jimDivide",
                              "parameter": [ {
                                "field": "rating"
                              },"10" ]
                            },{
                              "datatype": "property",
                              "target": ".s-starts_image",
                              "property": "jimGetWidth"
                            } ]
                          }
                        }
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "22"
                    }
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
    } else if(jFirer.is("#s-search_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-search_input" ],
                    "value": {
                      "datatype": "variable",
                      "element": "search"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "updateFilter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "updateFilter"
                      },"1" ]
                    }
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
  })
  .on("change", ".s-cf04ad44-13c1-40ab-87d8-87a0af3d1dfc .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_1",
                  "property": "jimGetSelectedValue"
                },"Address" ]
              },
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-location_input" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-address_input" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": [ "#s-location_input" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-location_input" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-address_input" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-address_input" ],
                    "value": ""
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
    } else if(jFirer.is("#s-cuisine_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "updateFilter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "updateFilter"
                      },"1" ]
                    }
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
    } else if(jFirer.is("#s-rating_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "updateFilter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "updateFilter"
                      },"1" ]
                    }
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
  })
  .on("variablechange.jim", ".s-cf04ad44-13c1-40ab-87d8-87a0af3d1dfc .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ListPanel")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "updateFilter"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-list" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "rest",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "tags"
                            },{
                              "datatype": "property",
                              "target": "#s-search_input",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "address"
                              },{
                                "datatype": "property",
                                "target": "#s-address_input",
                                "property": "jimGetValue"
                              } ]
                            },{
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimAnd",
                                  "parameter": [ {
                                    "action": "jimContains",
                                    "parameter": [ {
                                      "field": "cuisine"
                                    },{
                                      "datatype": "property",
                                      "target": "#s-cuisine_input",
                                      "property": "jimGetSelectedValue"
                                    } ]
                                  },{
                                    "action": "jimGreaterOrEquals",
                                    "parameter": [ {
                                      "field": "rating"
                                    },{
                                      "datatype": "property",
                                      "target": "#s-rating_input",
                                      "property": "jimGetSelectedValue"
                                    } ]
                                  } ]
                                },{
                                  "action": "jimGreaterOrEquals",
                                  "parameter": [ {
                                    "field": "minprice"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-price_min_input",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              },{
                                "action": "jimLessOrEquals",
                                "parameter": [ {
                                  "field": "maxprice"
                                },{
                                  "datatype": "property",
                                  "target": "#s-price_max_input",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            } ]
                          } ]
                        }
                      }
                    }
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
    } else if(jFirer.is("#s-MapPanel")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "listMapToggle") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "listMapToggle"
                },"list" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ListPanel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "listMapToggle"),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-MapPanel" ]
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