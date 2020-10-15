// This is mainly just a giant array of licsense name:badge pairs, taken from 
// this helpful website: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

const licenseArray=[{'Apache 2.0 License':'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
{'Boost Software License 1.0':'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
{'BSD 3-Clause License':'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
{'BSD 2-Clause License':'[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
{'CC0':'[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'},
{'License: CC0-1.0':'[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/,publicdomain/zero/1.0/)'},
{'Attribution 4.0 International':'[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'},
{'License: CC BY 4.0':'[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'},
{'Attribution-ShareAlike 4.0 International':'[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)'},
{'License: CC BY-SA 4.0':'[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)'},
{'Attribution-NonCommercial 4.0 International':'[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)'},
{'License: CC BY-NC 4.0':'[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)'},
{'Attribution-NoDerivates 4.0 International':'[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)'},
{'License: CC BY-ND 4.0':'[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)'},
{'Attribution-NonCommmercial-ShareAlike 4.0 International':'[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'},
{'License: CC BY-NC-SA 4.0':'[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'},
{'Attribution-NonCommercial-NoDerivatives 4.0 International':'[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'},
{'License: CC BY-NC-ND 4.0':'[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'},
{'Eclipse Public License 1.0':'[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},
{'GNU GPL v3':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
{'GNU GPL v2':'[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'},
{'GNU AGPL v3':'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'},
{'GNU LGPL v3':'[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'},
{'GNU FDL v1.3':'[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'},
{'IBM Public License Version 1.0':'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'},
{'ISC License (ISC)':'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
{'The MIT License':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
{'Mozilla Public License 2.0':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},
{'Attribution License (BY)':'[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'},
{'Open Database License (ODbL)':'[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'},
{'Public Domain Dedication and License (PDDL)':'[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'},
{'The Perl License':'[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
{'The Artistic License 2.0':'[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
{'SIL Open Font License 1.1':'[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'},
{'The Unlicense':'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'},
{'The Do What the Fuck You Want to Public License':'[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'},
{'The zlib/libpng License':'[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'}];

// We loop throught the array, checking each elements key against the provided name, and we return the badge
// I'm pretty sure that either my data structure or my traversal could be improved--it looks ugly and hard to read
function getBadge(name){                
    for(l of licenseArray){
        if(name===Object.entries(l)[0][0]) return Object.entries(l)[0][1];
    }
}
// We generate an array of just the license names
function getNames(){
    let names=[];
    for(x of licenseArray){
        names.push(Object.keys(x)[0]);
    }
    return names;
}
module.exports={
    licenseArray,
    getBadge,
    getNames
}

