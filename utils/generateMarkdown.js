// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function lookupLicenseMarkup(license) {
  switch (license) {
    case "Apache License 2.0": {
      return ("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
    }
    case "GNU GPL v3.0": {
      return ("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
    }
    case "MIT License": {
      return ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
    }
    case "BSD 2-Clause Simplified License": {
      return ("[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)");
    }
    case "BSD 3-Clause New License": {
      return ("[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
    }
    case "Boost Software License 1.0": {
      return ("[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");
    }
    case "Creative Commons Zero v1.0 Universal": {
      return ("[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)");
    }
    case "Eclipse Public License 1.0": {
      return ("[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)");
    }
    case "GNU Affero GPL V3.0": {
      return ("[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)");
    }
    case "GNU GPL v2.0": {
      return ("[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");
    }
    case "GNU Lesser GPL v3": {
      return ("[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)");
    }
    case "Mozilla Public License 2.0": {
      return ("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");
    }
    case "The Unlicense": {
      return ("[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
    }
  }
  return "";
}

module.exports = {
  lookupLicenseMarkup
};