(function () {

  window.Person = function (name) {
    // TODO
    this.name = name;
    this.hasDriversLicense = false;
    this.receiveLicense = function(){
      this.hasDriversLicense = true;
    }
  };

})();
