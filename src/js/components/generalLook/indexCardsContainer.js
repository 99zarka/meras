import indexCard from './indexCard.js';

/**
 * Generates a container for index cards.
 * @param {Array<object>} cardsData - An array of data objects for each index card.
 * @returns {string} The HTML string for the index cards container.
 */
function indexCardsContainer(cardsData) {
  const cardsHtml = cardsData.map(card => indexCard(card)).join('');

  return /*html*/`
    <div id="index-cards" class="container-fluid mt-4">
      <div class="row justify-content-center">
        ${cardsHtml}
      </div>
    </div>
  `;
}

export default indexCardsContainer;
