const inquirer=require("inquirer");
const fs=require("fs");
const markdown=require("./markdown");
const licenses = require("./licenses");


init();

function init(){
    console.log("Greetings, user! And congratulations on your new project!");
    getInput();
}

//We need to prompt the user for the following:
// WHEN I enter my project title
// description, installation instructions, usage information, contribution guidelines, and test instructions
// choose a license for my application from a list of options
// WHEN I enter my GitHub username
// WHEN I enter my email address
function getInput(){
    inquirer .prompt([
        {
            name:"email",
            type:"input",
            message:"What is your email address?",
            // Doing actual email validation is beyond the scope of this assignment, but
            // we can at least check that there is an @ sign!
            validate:function(input){
                if(input.indexOf("@")===-1) return "Please enter a valid email address.";
                else return true;
            }
        },
        {
            name:"githubName",
            type:"input",
            message:"What is your github username?"
        },
        {
            name:"title",
            type:"input",
            message:"What is the title of this project?"
        },
        {
            name:"desc",
            type:"editor",
            message:"Please enter a description of this project."
        },
        {
            name:"usage",
            type:"input",
            message:"What instructions does the user need to run this project?"
        },
        {
            name:"testing",
            type:"input",
            message:"What are the general testing guidelines?"
        },
        {
            name:"contribution",
            type:"input",
            message:"What should someone know if they would like to contribute?"
        },
        {
            name:"install",
            type:"input",
            message:"How should the user install this project?"
        },
        {
            name:"license",
            type:"list",
            message:"How are you licensing this?",
            // This returns an array of all of the names for various licenses
            choices:licenses.getNames(),
        },
        
    ]) .then(processAnswers);
}
// WHEN I enter my project title
// description, installation instructions, usage information, contribution guidelines, and test instructions
// choose a license for my application from a list of options
// WHEN I enter my GitHub username
// WHEN I enter my email address
function processAnswers(resp){
    // The page has three major parts: The head, with the title and the description
    let head=markdown.addMarkdown(resp.title, "title")+"\n";
    head+=markdown.addMarkdown(resp.license, "badge")+"\n";
    head+=desc=markdown.addMarkdown(resp.desc, "desc")+"\n";
    // Followed by the table of contents. But we have to add this later, after everything's been put in there
    let tableOfContents="## Table of Contents\n";
    // And then the page, with everything else
    let page=markdown.addMarkdown(resp.install, "install")+"\n";
    page+=markdown.addMarkdown(resp.usage, "usage")+"\n";
    page+=markdown.addMarkdown(resp.testing, "testing")+"\n";
    page+=markdown.addMarkdown(resp.contribution, "contribution")+"\n";
    page+=markdown.addMarkdown(resp.license, "license")+"\n";
    page+=markdown.addMarkdown(resp.email, "email")+"\n";
    page+=markdown.addMarkdown(resp.githubName, "githubName");

    // Now we can add the rest of the table of contents
    for(entry of markdown.toc){
        tableOfContents+=entry+"\n";
    }
    // And then we just write it all to the file
    // If there is an error (err) then we print it to the screen, otherwise we print "Success!"
    fs.writeFile("README.md", head+tableOfContents+page, err=> err ? console.log(err) : console.log("Success!"));      
}




// And the file must build the following:

// title is displayed as the title of the README
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// github username this is added to the section of the README entitled Questions, with a link to my GitHub profile
// email address is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
