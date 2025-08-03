import indexCardsContainer from './generalLook/indexCardsContainer.js';

export function getGeneralLookHTML() {
    const cardsData = [
        { iconSrc: './src/images/indexCards/dollar1.svg', title: 'المستهدف', value: '2,922.28', percentage: '+2.3%', bgColorClass: 'card-bg-1' },
        { iconSrc: './src/images/indexCards/wallet.svg', title: 'إجمالي المبيعات', value: '2,922.28', percentage: '+2.3%', bgColorClass: 'card-bg-2' },
        { iconSrc: './src/images/indexCards/dollar2.svg', title: 'المحقق', value: '2,922.28', percentage: '+2.1%', bgColorClass: 'card-bg-3' },
        { iconSrc: './src/images/indexCards/dollar3.svg', title: 'قيمة الحافز', value: '2,922.28', percentage: '+2.1%', bgColorClass: 'card-bg-4' },
    ];

    const indexCardsHtml = indexCardsContainer(cardsData);

    return /*html*/`
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
                            <div id="canvas2-wrapper" style="min-height: 270px; display: flex; align-items: center; justify-content: center;">
                                <canvas id="myChart2" class="w-100"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 bg-white">
                        ${indexCardsHtml}
                    </div>
                </div>

            </div>
        </div>
    `;
}
