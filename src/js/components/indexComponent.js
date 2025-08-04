const dataItems = [
    { icon: "bi-arrow-up-circle", color: "text-success", text: "PKD 4.2%" },
    { icon: "bi-arrow-up-circle", color: "text-success", text: "PKD 4.2%" },
    { icon: "bi-arrow-up-circle", color: "text-success", text: "PKD 4.2%" },
    { icon: "bi-arrow-up-circle", color: "text-success", text: "PKD 4.2%" },
    { icon: "bi-arrow-up-circle", color: "text-success", text: "PKD 4.2%" },
    { icon: "bi-arrow-up-circle", color: "text-success", text: "PKD 4.2%" }
];

export function getIndexHTML() {
    return /*html*/`
        <div class="row mb-3">
            <div class="col-12 index-container white-bg rounded-4 p-0">
                <div class="d-flex align-items-center flex-row rounded-top-4 p-3" id="contentHeader">
                    <div class="d-flex flex-column col-2 align-items-center">
                        <img src="src/images/logo3.svg" alt="Logo 3" class="img-fluid mb-2" style="max-height: 50px;">
                        <small class="text-muted" id="current-datetime">10:30 AM || 26 May 2024</small> <!-- Replace with dynamic date/time if needed -->
                    </div>
                    <div class="d-flex flex-row flex-wrap justify-content-between w-100" style="font-weight: bold;">
                        ${dataItems.map(item => /*html*/`
                            <div class="d-flex align-items-center me-3 mb-2 mb-sm-0">
                                <i class="bi ${item.icon} fs-5 ${item.color} ms-2"></i>
                                <span class="">${item.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="placeholder"></div>



            </div>
        </div>
    `;
}
