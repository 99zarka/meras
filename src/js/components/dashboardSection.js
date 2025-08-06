import { getIndexHTML } from "./dashboard/indexComponent.js";

export function getDashboardSectionHTML() {
    return /*html*/`
        <div class="row mb-3">
            <div class="col-12 index-container white-bg rounded-4 p-0">
                <div class="d-flex align-items-center flex-row rounded-top-4 p-3" id="contentHeader">
                    ${getIndexHTML()}
                </div>

                <div class="" id="dashboard">

                </div>



            </div>
        </div>
    `;
}
