(function () {

  var QueryWrapper = function (elems) {


    this.each = function(aFunc){
        for (var m = 0; m < elems.length; m++){
          aFunc(elems[m], m);
        }
    };

    this.show = function(){
      if (Array.isArray(elems)){
        for (var i = 0; i < elems.length; i++){
          elems[i].style.display = "initial";
        }
      }
      else
        {elems.style.display = "initial";}
    };

    this.hide = function(){
        for (var i = 0; i < elems.length; i++){
          elems[i].style.display = "none";
        }
    };

    this.css = function(property, value){
        for (var i = 0; i < elems.length; i++){
          elems[i].style[property] = value;
        }
    };

    this.addClass = function(newClass){
        for (var i = 0; i < elems.length; i++){
          elems[i].className += " " + newClass;
      }
    };

    this.get = function(index){
      return elems[index];
    };

    this.length = elems.length;

  };

  var myQuery = function (selector) {
    var isClass = /^\./;
    var isID = /^#/;
    var isTag = /^[a-z]/i;
    var check = 0;

    if (isClass.test(selector)){
      check = "isClass";
    }
    else if(isID.test(selector)){
      check = "isID";
    }
    else if(isTag.test(selector)){
      check = "isTag";
    }

    switch (check) {
      case ("isClass"):
        var className = selector.slice(1);
        var classArr = document.getElementsByClassName(className);
        if (classArr.length != 0)
          {return new QueryWrapper(classArr);}
        else
          {return "No such class.";}
      break;

      case ("isID"):
        var idName = selector.slice(1);
        var idEl = [document.getElementById(idName)];
        if (idEl)
          {return new QueryWrapper(idEl);}
        else
          {return "No such id.";}
      break;

      case ("isTag"):
        var tagObj = document.getElementsByTagName(selector);
        if (tagObj.length != 0)
          {return new QueryWrapper(tagObj);}
        else
          {return "No such tag.";}
      break;

      default:
        window.alert("Selector is not a DOM node.");
    }
  };

  window.$ = myQuery;
  $.version = 'beta';

  $.each = function(arr, func){
      for (var iter = 0; iter < arr.length; iter++){
        func(arr[iter]);
      }
    }

})();


/*
MYQUERY
1. Parse the selector.
  a. Use Regex to parse out ., #, and the absence thereof
  b. place that regex in a switch statement

2. Search the dom by id, class, or tag

3. Store the result of that search in an array variable

4. return new QueryWrapper elements

*/

/*
QUERYWRAPPER
1. Define what each function does to the array of elements

2. With this functionality in place, go back and refactor
the code such that methods are chainable.

*/
