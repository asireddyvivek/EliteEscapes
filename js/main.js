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
