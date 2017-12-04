(function(window, undefined) {
  var dictionary = {
    "d0a0141a-1e3b-4d16-9feb-16a99e970127": "review",
    "3493b673-cdc0-4324-a31e-b891065446c2": "login",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "details",
    "3ae50bea-d943-4cd8-b996-a0060fc0c2c6": "register",
    "cf04ad44-13c1-40ab-87d8-87a0af3d1dfc": "list",
    "5238c159-f63a-47ff-97d1-1e2cdccd2b2e": "home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);