import {indexData} from '../../data/indexData.js';
import { logo3 } from '../../data/getSVG.js';

export function getIndexHTML() {
    return /*html*/ `
    <div class="row">
        <div class="col-12 col-md-2 mb-3 mb-md-0 d-flex flex-column align-items-center justify-content-center">
            <div class="img-fluid mb-2" style="max-height: 50px;">
                ${logo3}
            </div>
            <small class="text-muted text-center" id="current-datetime">10:30 AM || 26 May 2024</small> <!-- Replace with dynamic date/time if needed -->
        </div>
        <div class="col-12 col-md-10 d-flex flex-row flex-wrap justify-content-between" style="font-weight: bold;">
            ${indexData.map(
                (item) => /*html*/ `
                    <div class="d-flex flex-row align-items-center me-3 mb-2 mb-sm-0 flex-wrap">
                        <i class="bi ${item.icon} fs-5 ${item.color} ms-2"></i>
                        <span class="">${item.text}</span>
                    </div>
                    `).join("")}
        </div>
    </div>
    `;
}
