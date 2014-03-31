(function () {

  window.Car = function (color, person) {
    // TODO
    this.state = "off" ;
    this.color = color;
    this.driver = person;
    this.ignite = function(){
      if (this.driver && this.driver.hasDriversLicense == true){
      this.state = 'running';
      return "Vroom!";
      }
      else if (!this.driver) {
        return "There is no driver to start the car!"
      }
      else {
        return "Sorry, you do not have a license."
      }
    };
  };

})();
