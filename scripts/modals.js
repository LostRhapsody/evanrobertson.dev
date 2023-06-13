const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
const galleryModalElement = document.getElementById('galleryModal');

$(".devcard").click(function(event){
   let target = event.currentTarget;
   let id     = target.id;
   let modalTitle;
   let modalText;
   let modalImage;
   let modalButton;
   switch(id) {
      case "slothtime-card":    
         modalTitle = "Slothtime";
         modalText  = 
         "A minimalist, customizable time tracking web app. Available on the web or as a PWA (Progressive Web App).<br/>" +
         "Github : <a target='#' class='link' href='https://github.com/LostRhapsody/slothtime'>github.com/LostRhapsody/slothtime</a><br/>" +
         "URL : <a target='#' class='link' href='https://slothtime.dev'>slothtime.dev<a/><br/>" +
         "<h2>Why Slothtime?</h2>" +
         "I created Slothtime because I wasn't a fan of the time tracking platform the company I work for was using.<br/>" + 
         "Lots of the employees just wrote down notes in notepad, then copy and pasted them into the time tracking application " + 
         "at their leisure.<br/><br/>I decided to take this up a notch by creating a web app to track tasks, time spent on them, " + 
         "and notes related to the task, all in an easy to use interface that you can quickly tab" + 
         " through and navigate with keyboard shortcuts.<br/><br/>" +
         "I also think tools you use throughout your day should be engaging and fun, so I added themes,<br/>" + 
         "built using the same theme template <a class='link' href='https://monkeytype.com' target='#'>monkeytype.com</a> uses (shoutout to monkey type for being a huge inspiration to slothtime).<br/>";
         modalImage = "./static/slothtime.jpeg";
         modalButton = "<a href='https://slothtime.dev' target='#'>Open Slothtime</a>";
         break;
      case "capydocs-card":
         modalTitle = "CapyDocs (WIP)";
         modalText  =  
            "A minimalist, lightweight testing and documenation web app. Soon to be available on the web or as a PWA (Progress Web App).<br/>" +
            "Github: <a class='link' target='#' href='https://github.com/LostRhapsody/capydocs'>github.com/LostRhapsody/capydocs</a><br/>" +
            "URL: <a class='link' target='#' href='https://capydocs.dev'>capydocs.dev</a><br/>" +
            "Why CapyDocs?<br/>" +
            "CapyDocs, short for Capybara Documenation, was an idea I had to elevate the software testing experience at my place of business.<br/>" + 
            "I wanted a small, lightweight, responsive, and easy to use web app to both standardize the testing of software as well as provide a more engaging experience.<br/>" +
            "A simple 'Test Group -> Test Case -> Test Steps' system combined with tracking test groups via an organization or personal account and the ability to easily " +
            "share those tests with people inside of your organization is the future goal.<br/>" +
            "In the longterm, I'd also like to introduce automated testing.<br/>"
         modalImage = "";
         modalButton = "<a href='https://capydocs.dev' target='#'>Open CapyDocs</a>";
         break;
      case "rhapsody-card":
         modalTitle = "Rhapsody Web Design (WIP)<br/>";
         modalText  = 
            "URL: <a class='link' href='https://rhapsodyweb.ca' target='#'>rhapsodyweb.ca</a><br/>" +
            "What is Rhapsody Web Design?<br/>" +
            "In short, not much. A side business I've opened primarly for doing websites for friends, families, and local small business that are interested.<br/>" +
            "If you're in the market for a handcrafted website that's fast, secure, stress free and easy to use with optional tech support, contact me at evan@rhapsodyweb.ca<br/>" +
            "I've worked on the websites for plenty of domestic and international businesses, several product pages for Shark|Ninja US, and many small from-scratch personal websites, like this one and my other projects.<br/>";
         modalImage = "";
         modalButton = "<a href='https://rhapsodyweb.ca' target='#'>Open Rhapsody Web Design</a>";
         break;
   }
   $(galleryModalElement).find("#modal-text")[0].innerHTML = modalText;
   $(galleryModalElement).find("#modal-title")[0].innerHTML = modalTitle;
   $(galleryModalElement).find("#modal-image")[0].src = modalImage;
   $(galleryModalElement).find("#modal-image")[0].style = "width:75%";
   $(galleryModalElement).find("#modal-web-button")[0].innerHTML = modalButton;
   galleryModal.show();
});