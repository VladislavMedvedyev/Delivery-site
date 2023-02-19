// **********************************************Price Section**********************************************
function changePriceToggler() {
    const priceSectionMonthlyButtonEl = document.querySelector('[data-monthly-button]');
    const priceSectionYearlyButtonEl = document.querySelector('[data-yearly-button]');

    priceSectionMonthlyButtonEl.classList.toggle('non-active');
    priceSectionMonthlyButtonEl.classList.toggle('active');
    priceSectionYearlyButtonEl.classList.toggle('non-active');
    priceSectionYearlyButtonEl.classList.toggle('active');
}

function changePrice() {
    const monthlyPriceBasicEl = document.querySelector('[data-monthly-price-basic]');
    const yearlyPriceBasicEl = document.querySelector('[data-yearly-price-basic]');
    const monthlyPriceProcEl = document.querySelector('[data-monthly-price-pro]');
    const yearlyPriceProEl = document.querySelector('[data-yearly-price-pro]');
    const monthlyPricePremiumEl = document.querySelector('[data-monthly-price-premium]');
    const yearlyPricePremiumEl = document.querySelector('[data-yearly-price-premium]');

    monthlyPriceBasicEl.classList.toggle('hidden');
    yearlyPriceBasicEl.classList.toggle('hidden');
    monthlyPriceProcEl.classList.toggle('hidden');
    yearlyPriceProEl.classList.toggle('hidden');
    monthlyPricePremiumEl.classList.toggle('hidden');
    yearlyPricePremiumEl.classList.toggle('hidden');
}

const priceSectionTogglerEl = document.querySelector('[data-price-section-toggler]');
priceSectionTogglerEl.addEventListener('click', () => {
    changePriceToggler();
    changePrice();
});

// **********************************************FAQ Section**********************************************

const questionsItem1El = document.querySelector('[data-questions-item-1]');
questionsItem1El.addEventListener('click', ()=> {
    const item1temTogglerShowEl = document.querySelector('[data-item-1-toggler-show]');
    const item1TogglerHideEl = document.querySelector('[data-item-1-toggler-hide]');
    const item1TextEl = document.querySelector('[data-item-1-text]');
    
    item1temTogglerShowEl.classList.toggle('hidden');
    item1temTogglerShowEl.classList.toggle('questions__questions-item_toggler');
    item1TogglerHideEl.classList.toggle('hidden');
    item1TogglerHideEl.classList.toggle('questions__questions-item_toggler');
    item1TextEl.classList.toggle('hidden');
    item1TextEl.classList.toggle('questions-item__text');
});

const questionsItem2El = document.querySelector('[data-questions-item-2]');
questionsItem2El.addEventListener('click', ()=> {
    const item2temTogglerShowEl = document.querySelector('[data-item-2-toggler-show]');
    const item2TogglerHideEl = document.querySelector('[data-item-2-toggler-hide]');
    const item2TextEl = document.querySelector('[data-item-2-text]');
    item2temTogglerShowEl.classList.toggle('hidden');
    item2temTogglerShowEl.classList.toggle('questions__questions-item_toggler');
    item2TogglerHideEl.classList.toggle('hidden');
    item2TogglerHideEl.classList.toggle('questions__questions-item_toggler');
    item2TextEl.classList.toggle('hidden');
    item2TextEl.classList.toggle('questions-item__text');
});

const questionsItem3El = document.querySelector('[data-questions-item-3]');
questionsItem3El.addEventListener('click', ()=> {
    const item3temTogglerShowEl = document.querySelector('[data-item-3-toggler-show]');
    const item3TogglerHideEl = document.querySelector('[data-item-3-toggler-hide]');
    const item3TextEl = document.querySelector('[data-item-3-text]');
    item3temTogglerShowEl.classList.toggle('hidden');
    item3temTogglerShowEl.classList.toggle('questions__questions-item_toggler');
    item3TogglerHideEl.classList.toggle('hidden');
    item3TogglerHideEl.classList.toggle('questions__questions-item_toggler');
    item3TextEl.classList.toggle('hidden');
    item3TextEl.classList.toggle('questions-item__text');
});

const questionsItem4El = document.querySelector('[data-questions-item-4]');
questionsItem4El.addEventListener('click', ()=> {
    const item4temTogglerShowEl = document.querySelector('[data-item-4-toggler-show]');
    const item4TogglerHideEl = document.querySelector('[data-item-4-toggler-hide]');
    const item4TextEl = document.querySelector('[data-item-4-text]');
    item4temTogglerShowEl.classList.toggle('hidden');
    item4temTogglerShowEl.classList.toggle('questions__questions-item_toggler');
    item4TogglerHideEl.classList.toggle('hidden');
    item4TogglerHideEl.classList.toggle('questions__questions-item_toggler');
    item4TextEl.classList.toggle('hidden');
    item4TextEl.classList.toggle('questions-item__text');
});

const questionsItem5El = document.querySelector('[data-questions-item-5]');
questionsItem5El.addEventListener('click', ()=> {
    const item5temTogglerShowEl = document.querySelector('[data-item-5-toggler-show]');
    const item5TogglerHideEl = document.querySelector('[data-item-5-toggler-hide]');
    const item5TextEl = document.querySelector('[data-item-5-text]');
    item5temTogglerShowEl.classList.toggle('hidden');
    item5temTogglerShowEl.classList.toggle('questions__questions-item_toggler');
    item5TogglerHideEl.classList.toggle('hidden');
    item5TogglerHideEl.classList.toggle('questions__questions-item_toggler');
    item5TextEl.classList.toggle('hidden');
    item5TextEl.classList.toggle('questions-item__text');
});