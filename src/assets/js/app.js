const tabLinks = document.querySelectorAll('.js-tab .tab-nav__item');
const tabPanels = document.querySelectorAll('.js-tab .tab-panel');

const tabClick = ({ target }) => {
  const id = target.dataset.id;
  tabLinks.forEach(t => t.classList.remove('is-active'));
  target.classList.add('is-active');
  tabPanels.forEach(t => t.classList.add('is-hidden'));
  document.getElementById(id).classList.remove('is-hidden');
};

const bindTabs = () => {
  tabLinks.forEach(tab => {
    tab.addEventListener('click', tabClick);
  })
};

document.addEventListener('DOMContentLoaded', () => {
  bindTabs();
});