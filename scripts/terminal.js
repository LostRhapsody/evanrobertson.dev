const alertModal = new bootstrap.Modal(document.getElementById('alert-modal'));

$("#terminal").focus();
$("#terminal").terminal({
   help:function() {
      this.echo(
         "help     - outputs a list of commands\n" +
         "projects - outputs a list of my projects\n" + 
         "project  - outputs specific information about a single project. Provide a project name as an argument. Ex: project slothtime\n" + 
         "open     - opens a new tab to a project. Provide a project name as an argument. Ex: open slothtime\n" +
         "           You can also exclude the keyword 'open' and just use the projects name. Ex: slothtime\n" +
         "PWA      - Basic explanation of what a PWA (Progressive Web App) is\n" +
         "clear    - Clear the contents of the web terminal and start fresh\n" +
         "gallery  - Ditch the terminal for a more traditional portfolio website to see my projects\n" 
      )
   },
   projects:function() {
      this.echo(
         "slothtime - A minimalist, customizable, easy and fast to use time tracking web app\n" + 
         "capydocs  - A more elegant and lightweight solution to traditional testing suite software\n" +
         "rhapsody  - A side business started primarily to help friends, families, and local businesses with their online presence.\n"
      )
   },
   project:function(project) {
      if(project == "slothtime" || project == "Slothtime" || project == "SlothTime") {
         this.echo($('<img src="./static/slothtime.jpeg" class="terminal-image"  alt:"The Slothtime web app main screen, showcasing a table of example time entries.">'));
         this.echo(
            "Slothtime\n" + 
            "A minimalist, customizable time tracking web app. Available on the web or as a PWA (Progressive Web App).\n" +
            "Github : https://github.com/LostRhapsody/slothtime\n" +
            "URL : https://slothtime.dev\n" +
            "Why Slothtime?\n" +
            "I created Slothtime because I wasn't a fan of the time tracking platform the company I work for was using.\n" + 
            "Lots of the employees just wrote down notes in notepad, then copy and pasted them into the time tracking application " + 
            "at their leisure.\nI decided to take this up a notch by creating a web app to track tasks, time spent on them, " + 
            "and notes related to the task, all in an easy to use interface that you can quickly tab" + 
            " through and navigate with keyboard shortcuts.\n\n" +
            "I also think tools you use throughout your day should be engaging and fun, so I added themes,\n" + 
            "built using the same theme template https://monkeytype.com uses (shoutout to monkey type for being a huge inspiration to slothtime).\n"
            
         )
      } else if (project == "capydocs" || project == "Capydocs" || project == "CapyDocs") {
         this.echo(
            "CapyDocs (WIP)\n" + 
            "A minimalist, lightweight testing and documenation web app. Soon to be available on the web or as a PWA (Progress Web App).\n" +
            "Github: https://github.com/LostRhapsody/capydocs\n" +
            "URL: https://capydocs.dev\n" +
            "Why CapyDocs?\n" +
            "CapyDocs, short for Capybara Documenation, was an idea I had to elevate the software testing experience at my place of business.\n" + 
            "I wanted a small, lightweight, responsive, and easy to use web app to both standardize the testing of software as well as provide a more engaging experience.\n" +
            "A simple Test Group -> Test Case -> Test Steps system combined with tracking test groups via an organization or personal account and the ability to easily " +
            "share those tests with people inside of your organization is the future goal.\n" +
            "In the longterm, I'd also like to introduce automated testing.\n"
         )
      } else if (project == "rhapsody" || project == "Rhapsody") {
         this.echo(
            "Rhapsody Web Design\n" +
            "What is Rhapsody Web Design?\n" +
            "In short, not much. A side business I've opened primarly for doing websites for friends, families, and local small business that are interested.\n" +
            "If you're in the market for a handcrafted website that's fast, secure, stress free and easy to use with optional tech support, contact me at evan@rhapsodyweb.ca\n" +
            "I've worked on the websites for plenty of domestic and international businesses, several product pages for Shark|Ninja US, and many small from-scratch personal websites, like this one and my other projects.\n" +
            "You can see the marketing page for Rhapsody Web Design here (WIP): https://rhapsodyweb.ca/\n"
         )
      }
       else {
         this.echo(
            "Not a valid option. Type 'projects' to view a list of valid projects.\n"
      )
      }
   },
   open:function(project){
      if (project == "slothtime" || project == "Slothtime" || project == "SlothTime") {
         window.open("https://slothtime.dev");
      }  else if (project == "capydocs" || project == "Capydocs" || project == "CapyDocs") {
         window.open("https://capydocs.dev");
      } else {
         this.echo(
            "Not a valid option. Type 'projects' to view a list of valid projects.\n"
         )  
      }
   },
   pwa:function(){
      this.echo(
         "PWA - Progressive Web App\n" + 
         "Leveraging several technologies, modern browsers can essentially cache an entire website to use offline like a desktop application.\n" + 
         "This provides the benefits of lightweight, responsive and fast websites with the convienience of having a tool available offline and " + 
         "easily accessible on your desktop.\n" +
         "For more info, check out mozilla's definition of it: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps\n"
      )
   },
   PWA:function(){
      this.echo(
         "PWA - Progressive Web App\n" + 
         "Leveraging several technologies, modern browsers can essentially cache an entire website to use offline like a desktop application.\n" + 
         "This provides the benefits of lightweight, responsive and fast websites with the convienience of having a tool available offline and " + 
         "easily accessible on your desktop.\n" +
         "For more info, check out mozilla's definition of it: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps\n"
      )
   },
   contact:function(){
      this.echo(
         "To contact me, email me at evan.robertson77@gmail.com\n" +
         "For website design inquries, I'm available at evan@rhapsodyweb.ca\n"
      )
   },
   slothtime:function() {
      window.open("https://slothtime.dev");
   },
   capydocs:function() {
      window.open("https://capydocs.dev");
   },
   rhapsody:function() {
      window.open("https://rhapsodyweb.ca");
   },
   gallery:function(){
      alertModal.show();      
      this.hide();
      $("#fab_menu_btn").show();
      $("#gallery").removeClass("d-none");   
   }
},{
   greetings: "Welcome to evanrobertson.dev, an interactive personal portfolio.\n" + 
              "Type 'help' to view a list of available commands\n" + 
              "Don't feel like typing commands? Just type 'gallery' to view a more traditional portfolio experience.\n"
});

function delay(time){
   return new Promise(resolve => setTimeout(resolve, time));
}

async function toggleTitle() {
   while (true) {
      await delay(800);
      title.innerHTML = "evanrobertson.dev" + "_";
      await delay(800);
      title.innerHTML = "evanrobertson.dev&nbsp";
   }
}

toggleTitle();
