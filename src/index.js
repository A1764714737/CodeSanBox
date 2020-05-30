const $ = require("jquery");

let bStr = "<div style='text-align: center'>";
$.each([1, 2, 3, 5], function(aIdx, aItem) {
  bStr += "<p>" + aItem + "</p>";
});
bStr += "</div>";
console.log(bStr);

$("#app").html(bStr);
