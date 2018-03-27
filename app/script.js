// show user control panel
let mainChildren = document.getElementById("main").children;
let mainDiv = document.getElementById("main");
let links = document.querySelectorAll('a');
let p = mainDiv.getElementsByTagName("p");

const aesthetica11y = {
  controlPanelEvents: function() {
    links[0].addEventListener('click', this.toggleOptions);
    links[1].addEventListener('click', this.togglePageContrast);
    links[2].addEventListener('click', this.resetPageContrast);
    links[3].addEventListener('click', this.decreaseFontSize);
    links[4].addEventListener('click', this.increaseFontSize);
    links[5].addEventListener('click', this.originalFontSize);
    links[6].addEventListener('click', this.toggleFontFamily);
    links[7].addEventListener('click', this.fixLineHeight);
    links[8].addEventListener('click', this.fixLineSpacing);
  },
  toggleOptions: function() {
    let tools = document.getElementById('accessibility');
    let displaySetting = tools.style.display;
    let toolsSVG = document.getElementById('tools-icon');

    if (displaySetting == 'block') {
      tools.style.display = 'none';
      toolsSVG.style.backgroundColor = 'rgb(44, 148, 255)';
      toolsSVG.style.fill = 'white';
      toolsSVG.style.boxShadow = "1px 1px 1px 1px rgba(0,0,0,0.2)"
    } else {
      tools.style.display = 'block';
      toolsSVG.style.backgroundColor = 'white';
      toolsSVG.style.fill = 'rgb(44, 148, 255)';
      toolsSVG.style.boxShadow = "none"
    }
  },
  togglePageContrast: function() {
    var contrastBackground = mainDiv.style.backgroundColor;

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
  resetPageContrast: function() {
    mainDiv.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    mainDiv.style.color = "";
  },
  decreaseFontSize: function() {
    for (var i = 0; i < mainChildren.length; i++) {
      childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      mainChildren[i].style.fontSize = (currentSize - 5) + 'px';

    }
  },
  increaseFontSize: function() {
    for (var i = 0; i < mainChildren.length; i++) {
      childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      mainChildren[i].style.fontSize = (currentSize + 5) + 'px';
    }
  },
  originalFontSize: function() {
    for (var i = 0; i < mainChildren.length; i++) {
      childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      mainChildren[i].style.fontSize = "";
    }
  },
  toggleFontFamily: function() {
    var fontUsed = mainDiv.style.fontFamily;
    if (fontUsed == "") {
      mainDiv.style.fontFamily = "Arial, sans-serif";
    } else {
      mainDiv.style.fontFamily = "";
    }
  },
  fixLineHeight: function() {
    for (i = 0; i < p.length; i++) {
      p[i].style.lineHeight = "200%";
    }
  },
  fixLineSpacing: function() {
    for (i = 0; i < p.length; i++) {
      p[i].style.letterSpacing = "1px";
    }
  }
}

aesthetica11y.controlPanelEvents();
