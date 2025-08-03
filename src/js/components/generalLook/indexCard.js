/**
 * Generates an individual index card HTML structure.
 * @param {object} cardData - The data for the index card.
 * @param {string} cardData.iconSrc - The source URL for the card's icon.
 * @param {string} cardData.title - The title of the card.
 * @param {string} cardData.value - The value displayed on the card.
 * @param {string} cardData.percentage - The percentage value to display.
 * @param {string} cardData.bgColorClass - The Bootstrap background color class for the card.
 * @returns {string} The HTML string for an index card.
 */
function indexCard(cardData) {
  return /*html*/`
    <div class="col-md-6 col-lg-6 col-xl-6 mb-4">
      <div class="position-relative z-0 rounded-4 border-0 shadow overflow-hidden p-3 d-flex flex-column justify-content-between z-0 ${cardData.bgColorClass}">
      <div class="icon-circle position-absolute d-flex align-items-center justify-content-center rounded-circle bg-white">
        <img src="${cardData.iconSrc}" alt="${cardData.title} Icon">
      </div>
        <div class="d-flex flex-column align-items-start justify-content-between p-0" dir="ltr">
          <span class="percentage-badge text-success bg-white bg-opacity-50 mb-3 py-1 px-2 fw-bold" style="border-radius: 10px;">${cardData.percentage}</span>
          <h5 class="text-white">${cardData.title}</h5>
          <p class="text-black fs-1 fw-bold"  dir="ltr">
            ${cardData.value}
            <span class="currency fs-4 fw-medium">SAR</span>
          </p>
        </div>
      </div>
    </div>
  `;
}

export default indexCard;
