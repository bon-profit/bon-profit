jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-back")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
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
    } else if(jFirer.is("#s-more_options")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d0a0141a-1e3b-4d16-9feb-16a99e970127"
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
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-events_rect")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-name" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "selectedRes",
                        "value": {
                          "field": "name"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-food_type" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "selectedRes",
                        "value": {
                          "field": "cuisine"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rectangle_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimDivide",
                          "parameter": [ {
                            "action": "jimSelectData",
                            "parameter": {
                              "datatype": "variable",
                              "element": "selectedRes",
                              "value": {
                                "field": "rating"
                              }
                            }
                          },"10" ]
                        },{
                          "datatype": "property",
                          "target": "#s-starts_image",
                          "property": "jimGetWidth"
                        } ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "22"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-points_from_reviews" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSelectData",
                        "parameter": {
                          "datatype": "variable",
                          "element": "selectedRes",
                          "value": {
                            "field": "rating"
                          }
                        }
                      },{
                        "action": "jimConcat",
                        "parameter": [ " points from ",{
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimSelectData",
                            "parameter": {
                              "datatype": "variable",
                              "element": "selectedRes",
                              "value": {
                                "field": "reviews"
                              }
                            }
                          }," reviews" ]
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
                    "target": [ "#s-price" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "Price ranges from ",{
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimSelectData",
                          "parameter": {
                            "datatype": "variable",
                            "element": "selectedRes",
                            "value": {
                              "field": "minprice"
                            }
                          }
                        },{
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ " to ",{
                              "action": "jimSelectData",
                              "parameter": {
                                "datatype": "variable",
                                "element": "selectedRes",
                                "value": {
                                  "field": "maxprice"
                                }
                              }
                            } ]
                          }," \u20ac / person" ]
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
                    "target": [ "#s-Image_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "selectedRes",
                        "value": {
                          "field": "photo_path"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-address" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "selectedRes",
                        "value": {
                          "field": "address"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-lon_lat" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimSelectData",
                          "parameter": {
                            "datatype": "variable",
                            "element": "selectedRes",
                            "value": {
                              "field": "latitude"
                            }
                          }
                        }," , " ]
                      },{
                        "action": "jimSelectData",
                        "parameter": {
                          "datatype": "variable",
                          "element": "selectedRes",
                          "value": {
                            "field": "longitude"
                          }
                        }
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-phone" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "selectedRes",
                        "value": {
                          "field": "phone"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-email" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "selectedRes",
                        "value": {
                          "field": "email"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-reviews_title" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "User reviews for ",{
                        "action": "jimSelectData",
                        "parameter": {
                          "datatype": "variable",
                          "element": "selectedRes",
                          "value": {
                            "field": "name"
                          }
                        }
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-reviews" ],
                    "value": {
                      "action": "jimSortDataAscendant",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datagrid",
                          "datamaster": "reviews",
                          "element": "#s-reviews",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "rest_id"
                            },{
                              "action": "jimSelectData",
                              "parameter": {
                                "datatype": "variable",
                                "element": "selectedRes",
                                "value": {
                                  "field": "id"
                                }
                              }
                            } ]
                          }
                        },
                        "value": {
                          "field": "id"
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
    } else if(jFirer.is("#s-services_accessibility")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "selectedRes",
                    "value": {
                      "field": "accessibility"
                    }
                  }
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_accessibility > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_accessibility": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_accessibility": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_accessibility": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-services_dogs_allowed")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "selectedRes",
                    "value": {
                      "field": "dogs"
                    }
                  }
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_dogs_allowed > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_dogs_allowed": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_dogs_allowed": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_dogs_allowed": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-services_gluten_free")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "selectedRes",
                    "value": {
                      "field": "gluten"
                    }
                  }
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_gluten_free > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_gluten_free": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_gluten_free": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_gluten_free": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-services_credit_card")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "selectedRes",
                    "value": {
                      "field": "card"
                    }
                  }
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_credit_card > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_credit_card": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_credit_card": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-services_credit_card": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "reviewCreated"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "467"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 6000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "-60"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "467"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "reviewCreated" ],
                    "value": "false"
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