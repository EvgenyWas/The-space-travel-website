// Numbered buttons of technology page
const tabLists = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabLists.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

function changeTabFocus(event) {
    const keydownLeft = 37;
    const keydownRight = 39;

    if (event.keyCode === keydownLeft || event.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute('tabindex', -1);

        if (event.keyCode === keydownLeft) {
            tabFocus--;
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            };
        } else if (event.keyCode === keydownRight) {
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            };
        };
    
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    };
};

function changeTabPanel(event) {
    const targetTab = event.target;
    const targetPanel = targetTab.getAttribute('aria-controls');
    const targetImage = targetTab.getAttribute('data-image')
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute('aria-selected', false);

    targetTab.setAttribute("aria-selected", true);

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);

    hidePicture(mainContainer, 'picture');
    showPicture(mainContainer, [`#${targetImage}`]);
};

function hideContent(parent, content) {
    parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
};

function hidePicture(parent, content) {
    parent
    .querySelectorAll(content)
    .forEach(picture => picture.setAttribute("style", "display: none"));
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
};

function showPicture(parent, content) {
    parent
    .querySelectorAll(content)
    .forEach(picture => picture.removeAttribute('style'));
};