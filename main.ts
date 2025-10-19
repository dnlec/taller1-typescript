import { series } from "./data.js";
import { Serie } from "./serie.js";


let seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAverage: HTMLElement = document.getElementById("seasons-average")!;

renderSeriesInTable(series);

seasonsAverage.innerHTML = `${getSeasonsAverage(series)}`


function renderSeriesInTable(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th>${serie.id}</th>
                               <td>${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getSeasonsAverage(series: Serie[]): number {
    let average: number = 0;
    series.forEach((serie) => average += serie.seasons);
    average = average / series.length;
    return average;
}