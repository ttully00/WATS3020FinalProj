class Tab {
    constructor(tabid, tabname, content) {
        this.tabid = tabid;
        this.tabname = tabname;
        this.content = content;
    }
}
const Tabs = [];

Tabs.push(new Tab('#tab-1', '2017Chevrolet', "American Cars"));
Tabs.push(new Tab('#tab-2', 'Nissan', "Foreign Cars"));
Tabs.push(new Tab('#tab-3', 'BMW', "Luxury Cars"));

document.addEventListener("DOMContentLoaded", function () {
    for (let tab of Tabs) {


        let el = document.querySelector(`${tab.tabid} h3`);
        el.innerHTML = tab.tabname;
        el = document.querySelector(`${tab.tabid} p`);
        el.innerHTML = tab.content;
    }
    // store tabs variable
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");

    function myTabClicks(tabClickEvent) {

        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }

        var clickedTab = tabClickEvent.currentTarget;

        clickedTab.classList.add("active");

        tabClickEvent.preventDefault();

        var myContentPanes = document.querySelectorAll(".tab-pane");

        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }

        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);

        activePane.classList.add("active");

    }

    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }
});
