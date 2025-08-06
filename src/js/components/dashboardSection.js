import { getDashboardComponentHTML } from "./dashboard/dashboardComponent.js";
import { getIndexHTML } from "./dashboard/indexComponent.js";

export function getDashboardSectionHTML() {
    return /*html*/`
        <div class="row mb-3 position-relative">
            <div class="col-12 index-container white-bg rounded-4 p-0">
                <div class="d-flex align-items-center justify-content-center flex-row rounded-top-4 p-3 mb-3" id="contentHeader">
                    ${getIndexHTML()}
                </div>


                <button class="btn btn-link position-absolute start-50 translate-middle-x dashboard-toggle p-2 rounded-pill"
                        type="button"
                        style="bottom: -15px;width: 100px; height: 30px;"
                        data-bs-toggle="collapse"
                        data-bs-target="#dashboardCollapse"
                        aria-expanded="true"
                        aria-controls="dashboardCollapse">
                    <div class="dashboard-toggle-icon w-100 rounded-pill bg-white h-50"></div>
                </button>
                <div class="collapse show" id="dashboardCollapse">
                    <div class="" id="dashboard">
                        ${getDashboardComponentHTML()}
                    </div>
                </div>



            </div>
        </div>
    `;
}
