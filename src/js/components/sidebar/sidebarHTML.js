export function getSidebarHTML() {
    return /*html*/`
        <nav class="col-md-3 col-xl-2 d-none d-md-block sidebar overflow-auto position-sticky"  style="scrollbar-width: none; width: 280px; padding:8px;" data-position="0">
            <div class="rounded-4 text-white" style="background-color: #331D1F;">
                <!-- Organization Logo -->
                <div class="p-3 d-flex justify-content-center">
                    <img src="src/images/logo2.svg" alt="Organization Logo" class="img-fluid rounded">
                </div>

                <!-- User Profile -->
                <div class="d-flex justify-content-between align-items-center p-2 m-2 bg-transparent rounded-4" style="border: 1px solid rgba(255, 255, 255, 0.05);">
                    <div class="d-flex align-items-center">
                        <img src="src/images/profilepic.jpg" alt="User Profile" class="rounded-circle ms-2">
                        <div>
                            <h6 class="mb-0">محمد جلال</h6>
                            <small class="text-white-50">اخر تحديث 1/1/2025</small>
                        </div>
                    </div>
                    <a href="signin.html" class="text-white"><img src="src/images/logout.svg" alt="log out icon" class="img-fluid"></a>
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
