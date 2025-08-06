import { getUserData } from '../../data/userData.js';

export function getSidebarHTML() {
    const userData = getUserData();
    return /*html*/`
        <div class="sidebar-toggle-menu d-md-none position-fixed top-0 p-3 w-100 d-flex align-items-center">
            <button class="btn btn-outline-light sidebar-toggle-button d-flex justify-content-center align-items-center" type="button" id="sidebar-toggle-btn" >
                <div class="icon-container"><i class="bi bi-list  align-middle text-center"></i></div>
            </button>
            <div class="flex-grow-1 text-center">
                <a href="./index.html">
                    <img src="src/images/logo2.svg" alt="Organization Logo" class="img-fluid" style="height: 30px;">
                </a>
            </div>
        </div>
        <nav class="col-12 d-none d-md-block sidebar pt-md-2 overflow-auto position-sticky pe-md-2" data-position="0">
            <div class="rounded-4 text-white" style="background-color: #331D1F;">
                <!-- Organization Logo -->
                <div class="p-3 d-md-flex justify-content-center d-none">
                    <a href="./index.html">
                        <img src="src/images/logo2.svg" alt="Organization Logo" class="img-fluid rounded">
                    </a>
                </div>

                <!-- User Profile -->
                <div class="d-flex justify-content-between align-items-center p-2 m-2 bg-transparent rounded-4" style="border: 1px solid rgba(255, 255, 255, 0.05);">
                    <div class="d-flex align-items-center">
                        <img src="${userData.profilePicture}" alt="User Profile" class="rounded-circle ms-2">
                        <div>
                            <h6 class="mb-0">${userData.fullName}</h6>
                            <small class="text-white-50">اخر تحديث ${new Date(userData.lastUpdate).toLocaleDateString()}</small>
                        </div>
                    </div>
                    <a href="signin.html" class=""><img src="src/images/logout.svg" alt="log out icon" class="img-fluid"></a>
                </div>

                <!-- Chart Canvas -->
                <div class="p-3 p-2 m-3 rounded-4 text-success" style="border: 1px solid #868384; background-color: #10090a;" id="chart-container">
                    <div class="row text-success" id="chart-area"  style="font-size: x-small;">

                        <div class="col d-flex align-items-center">
                            <div class="p-0 ms-2">
                                <div class="mb-0">4.2%</div>
                                <div class="">منذ شهر</div>
                            </div>
                            <div class="text-end">
                                <i class="bi bi-arrow-up-circle fs-5"></i>
                            </div>
                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="col-12 text-center p-0">KPI</div>
                                <div class="col-12 text-center">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <span class="text-white user-select-none" id="achieved-span" style="cursor: pointer;">المــحــــــــقــق</span>
                                        <img src="src/images/sidebar/swap.svg" alt="swap icon" class="img-fluid mx-2 user-select-none" style="cursor: pointer;" id="swap-icon">
                                        <span class="text-secondary user-select-none" id="target-span" style="cursor: pointer;">المستهدف</span>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="canvas-wrapper" style="min-height: 130px; display: flex; align-items: center; justify-content: center;">
                        <canvas id="myChart" style="height: 130px; width: 100%;"></canvas>
                    </div>


                </div>

                <hr class="m-3">

                <ul class="nav flex-column p-0 m-3" id="sidebar-menu" style="font-size: small;">
                    <!-- Sidebar items will be inserted here by JavaScript -->
                </ul>

            </div>
        </nav>
    `;
}
