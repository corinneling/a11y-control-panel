// show user control panel
let mainChildren = document.getElementById("main").children;
let mainDiv = document.getElementById("main");
let links = document.querySelectorAll('a');
let p = document.querySelectorAll("p");

const aesthetica11y = {
  controlPanelEvents: function() {
    let properties = [this.prop0, this.prop1, this.prop2, this.prop3, this.prop4, this.prop5, this.prop6, this.prop7, this.prop8]
    for (var i = 0; i < links.length; i++) {
      console.log(links[i].addEventListener('click', properties[i]));
    }
  },
  prop0: function() {
    let tools = document.getElementById('accessibility');
    let toolsSVG = document.getElementById('tools-icon');
    if (tools.style.display == 'block') {
      tools.style.display = 'none';
      toolsSVG.style.backgroundColor = 'rgb(44, 148, 255)';
      toolsSVG.style.fill = 'white';
    } else {
      tools.style.display = 'block';
      toolsSVG.style.backgroundColor = 'white';
      toolsSVG.style.fill = 'rgb(44, 148, 255)';
    }
  },
  prop1: function() {
    let contrastBackground = mainDiv.style.backgroundColor;

    if (contrastBackground == 'black') {
      mainDiv.style.backgroundColor = 'white';
      document.body.style.backgroundColor = 'white';
      mainDiv.style.color = 'black';
    } else {
      mainDiv.style.backgroundColor = 'black';
      document.body.style.backgroundColor = 'black';
      mainDiv.style.color = 'white';
    }
  },
  prop2: function() {
    mainDiv.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    mainDiv.style.color = "";
  },
  prop3: function() {
    for (var i = 0; i < mainChildren.length; i++) {
      childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      mainChildren[i].style.fontSize = (currentSize - 5) + 'px';

    }
  },
  prop4: function() {
    for (var i = 0; i < mainChildren.length; i++) {
      childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      mainChildren[i].style.fontSize = (currentSize + 5) + 'px';
    }
  },
  prop5: function() {
    for (var i = 0; i < mainChildren.length; i++) {
      mainChildren[i].style.fontSize = "";
    }
  },
  prop6: function() {
    for (i = 0; i < p.length; i++) {
      p[i].style.letterSpacing = "1px";
    }
  },
  prop7: function() {
    for (i = 0; i < p.length; i++) {
      p[i].style.lineHeight = "200%";
    }
  },
  prop8: function() {
    if (mainDiv.style.fontFamily == "") {
      mainDiv.style.fontFamily = "Arial, sans-serif";
    } else {
      mainDiv.style.fontFamily = "";
    }
  }
}

aesthetica11y.controlPanelEvents();
