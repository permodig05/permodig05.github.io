function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  function getCopyright(){
    var year = getCurrentYear();
    return "Copyright \u00A9 " + year + " All rights reserved.";
  }
  