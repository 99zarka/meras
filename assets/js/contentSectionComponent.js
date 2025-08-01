export function getContentSectionHTML() {
    return /*html*/`
        <div class="row mb-3">
            <div class="col-12 bg-white rounded-4 p-0">
                <div class="d-flex align-items-center flex-row rounded-top-4 p-3" id="contentHeader">
                    <div class="d-flex flex-column col-2 align-items-center">
                        <img src="assets/logo3.svg" alt="Logo 3" class="img-fluid mb-2" style="max-height: 50px;">
                        <small class="text-muted" id="current-datetime">10:30 AM || 26 May 2024</small> <!-- Replace with dynamic date/time if needed -->
                    </div>
                    <div class="d-flex flex-row flex-wrap justify-content-between w-100" style="font-weight: bold;">
                        <!-- Repeat this block 6 times -->
                        <div class="d-flex align-items-center me-3 mb-2 mb-sm-0">
                            <i class="bi bi-arrow-up-circle fs-5 text-success ms-2"></i>
                            <span class="text-dark">PKD 4.2%</span>
                        </div>
                        <div class="d-flex align-items-center me-3 mb-2 mb-sm-0">
                            <i class="bi bi-arrow-up-circle fs-5 text-success ms-2"></i>
                            <span class="text-dark">PKD 4.2%</span>
                        </div>
                        <div class="d-flex align-items-center me-3 mb-2 mb-sm-0">
                            <i class="bi bi-arrow-up-circle fs-5 text-success ms-2"></i>
                            <span class="text-dark">PKD 4.2%</span>
                        </div>
                        <div class="d-flex align-items-center me-3 mb-2 mb-sm-0">
                            <i class="bi bi-arrow-up-circle fs-5 text-success ms-2"></i>
                            <span class="text-dark">PKD 4.2%</span>
                        </div>
                        <div class="d-flex align-items-center me-3 mb-2 mb-sm-0">
                            <i class="bi bi-arrow-up-circle fs-5 text-success ms-2"></i>
                            <span class="text-dark">PKD 4.2%</span>
                        </div>
                        <div class="d-flex align-items-center me-3 mb-2 mb-sm-0">
                            <i class="bi bi-arrow-up-circle fs-5 text-success ms-2"></i>
                            <span class="text-dark">PKD 4.2%</span>
                        </div>
                    </div>
                </div>

                <div class="placeholder"></div>



            </div>
        </div>

        <!-- Content Section -->
        <div class="row mb-3 vh-100">
            <div class="col-12 bg-white rounded-4 p-0">

                <div class="row p-3 my-3">
                    <div class="col-12 col-lg-6">
                        <!-- Add selector above chart -->
                        <div class="rounded-shadow">
                            <div class="" style="top: 30px; left: 20px;">
                                <select class="form-select" 
                                    style="width: auto; 
                                           color: #5E6E74;
                                           background-color: #f7f7f7; 
                                           border-radius: 10px;
                                           border: none;
                                           background-image: url('data:image/svg+xml,%3Csvg width=%2211%22 height=%226%22 viewBox=%220 0 11 6%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0.552887 0.687744L5.32523 5.32266L10.0976 0.687744%22 stroke=%22%235E6E74%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E');
                                           background-position: left 0.75rem center;
                                           padding-left: 2rem;
                                           padding-right: 1rem;">
                                    <option value="monthly" selected>شهري</option>
                                    <option value="quarterly" disabled>ربع سنوي</option>
                                </select>
                            </div>
                            <div id="canvas2-wrapper" style="min-height: 240px; display: flex; align-items: center; justify-content: center;">
                                <canvas id="myChart2" class="w-100"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="placeholder col-12 col-lg-6 bg-white"></div>
                </div>

            </div>
        </div>
    `;
}
