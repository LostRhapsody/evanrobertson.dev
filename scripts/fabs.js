/* Explainer */
/* 
anything commented out is used for the expanding FAB menu.
Currently, this site just uses a single fab button.
To see an expanding FAB menu, see slothtime.
*/

var isFabMenuOpen; /* tracks if the FAB button menu is open */
var isFabsHovered; /* tracks if the fabs div is being hovered */
/* hide mini-fab buttons */
// $(".mini-fab").hide();

/* FAB Buttons */

/* ---------------------------------------------------------
Fab event explainer:
When fab menu is opened with hover, clicking is disabled.
This makes clicking on desktop essentially impossible, which
is fine, we can't really notice the difference.
We have to keep the click listener though for mobile.
 ---------------------------------------------------------*/

// /* show fab menu when hovered */
// $(".fabs").hover(
//    // function () {
//    //    isFabsHovered = true;
//    //    showFabMenu();
//    // },
//    // function () {
//    //    isFabsHovered = false;
//    //    showFabMenu();
//    // }
// );

/* show fab menu when clicked */
$(".fab").click(function () {
   $("#terminal").show();
   $("#fab_menu_btn").hide();
   $("#gallery").addClass("d-none");
   // if (isFabsHovered) return;
   // showFabMenu();
});

// function showFabMenu() {
//    isFabMenuOpen ? (isFabMenuOpen = false) : (isFabMenuOpen = true);
//    isFabMenuOpen ? $(".mini-fab").show() : $(".mini-fab").hide();
// }