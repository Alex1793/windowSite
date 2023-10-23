function tabs (tabsContainerSelector, tabsSelector, tabsContentSelecor, activeClass) {
    const tabsContainer = document.querySelector(tabsContainerSelector),
          tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelecor);
   
    function hideTabsContent () {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        })

        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
    }   

    function showTabsContent (i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass)
    }

    hideTabsContent();
    showTabsContent();


    tabsContainer.addEventListener('click', (e) => {
        const target = e.target;
        const tabsClass = tabsSelector.replace(/\./gi, '');

        if(target || target.classList.contains(tabsClass) || target.parentNode.classList.contains(tabsClass)) {

            tabs.forEach((item, i) => {
                if(target === item || item === target.parentNode) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            })
        }
    })
}

export default tabs;

