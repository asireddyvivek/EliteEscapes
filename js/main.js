/* JavaScript for sidebar */
function hideSidebar() {
    const menu = document.querySelector(".sidebar");
    menu.style.display = "none";
    console.log('Sidebar closed');
}

function showSidebar() {
    const menu = document.querySelector(".sidebar");
    menu.style.display = "flex";
    console.log('Sidebar opened');
}

/* JavaScript for feedback form */
function showFeedbackForm() {
    document.getElementById("feedback-overlay").style.display = "flex";
    console.log('Feedback form shown');
}

function closeFeedbackForm() {
    document.getElementById("feedback-overlay").style.display = "none";
    console.log('Feedback form closed');
}

var addItemId = 0;
function addtoCart() {
    //window.location.href = `index.html?data=${encodeURIComponent('hi')}`;
    //console.log('done');
    var item = document.getElementById('currentPackage');
    localStorage.setItem('item', item);
    localStorage.setItem('img', item.children[0].getAttribute('alt'));
    localStorage.setItem('price', item.children[0].getAttribute('price'));
    console.log(localStorage.getItem('img'));
    window.location.href = "bookings.html";
}
