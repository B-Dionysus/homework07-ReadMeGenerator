
const licenses=require("./licenses.js");
var toc=[];
function getTOC(){
    return toc;
}


// Here's a great ref for making a table of contents:
// https://gist.github.com/jonschlinkert/ac5d8122bfaaa394f896

function addMarkdown(str, type){
    console.log(str+" in "+type);
    switch(type){
        case "title":{
            str="# "+str;
            toc.push(`[${str}](#${str})`);
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
        case "githubname":{
            str="Other projects I've worked on are here:(https://github.com/"+str+")";
            break;
        }
        case "license":{

            break;
        }
        case "email":{
            str="## Questions"+"\nPlease contact "+str;
            toc.push(`* [Questions](#Questions)`);
            break
        }
        case "badge":{
            str=licenses.findLicenseBadge(str);
            break;
        }
    }
    return str;
}

module.exports={
    addMarkdown:addMarkdown,
    toc:toc
};