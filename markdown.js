
const licenses=require("./licenses.js");

// This will be our table of contents
// It's loaded one element at a time as we build the page
var toc=[];

// Here's a great ref for making a table of contents:
// https://gist.github.com/jonschlinkert/ac5d8122bfaaa394f896

// index.js passes us the page elements one at a time, along with the section they should go into
// And this generates the appropriate markup, and also stores a link to it in the table of contents
function addMarkdown(str, type){
    switch(type){
        case "title":{
            str="# "+str;
            break;
        }
        case "desc":{
            str="## Description"+"\n"+str;
            toc.push(`* [Description](#description)`);
            break;
        }
        case "install":{
            str="## Installation Instructions"+"\n"+str;
            toc.push(`* [Installation Instructions](#Installation%20Instructions)`);
            break;
        }
        case "usage":{
            str="## Usage Instructions"+"\n"+str;
            toc.push(`* [Usage Instructions](#Usage%20Instructions)`);
            break;
        }
        case "testing":{
            str="## Testing Instructions"+"\n"+str;
            toc.push(`* [Testing Instructions](#Testing%20Instructions)`);
            break;
       }
        case "contribution":{
            str="## How to Contribute"+"\n"+str;
            toc.push(`* [Contribution Instructions](#How%20to%20Contribute)`);
            break
        }
        case "license":{
            str="## License"+"\n"+str;
            toc.push(`* [License](#License)`);
            break;
        }
        case "email":{
            str="## Questions"+"\nPlease contact "+str+".";
            toc.push(`* [Questions](#Questions)`);
            break
        }
        case "githubName":{
            str="Other projects I've worked on are here: https://github.com/"+str+".";
            break;
        }
        case "badge":{
            str=licenses.getBadge(str);
            break;
        }
    }
    return str;
}

module.exports={
    addMarkdown:addMarkdown,
    toc:toc
};