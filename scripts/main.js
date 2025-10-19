import { series } from "./data.js";
import { Serie } from "./serie.js";
var seriesTbody = document.getElementById('series');
var seasonsAverage = document.getElementById("seasons-average");
renderSeriesInTable(series);
seasonsAverage.innerHTML = "".concat(getSeasonsAverage(series));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th>".concat(serie.id, "</th>\n                               <td>").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var average = 0;
    series.forEach(function (serie) { return average += serie.seasons; });
    average = average / series.length;
    return average;
}
//# sourceMappingURL=main.js.map