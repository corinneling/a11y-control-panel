// show user control panel
var toolsButton = document.getElementById('user-tools');
var toolsSVG = document.getElementById('tools-icon');


function toggleOptions() {
    var tools = document.getElementById('accessibility');
    var displaySetting = tools.style.display;

    if (displaySetting == 'block') {
      tools.style.display = 'none';
			toolsSVG.style.backgroundColor = 'rgb(44, 148, 255)';
      toolsSVG.style.fill = 'white';
		  toolsSVG.style.boxShadow = "1px 1px 1px 1px rgba(0,0,0,0.2)"
    }
    else {
      tools.style.display = 'block';
			toolsSVG.style.backgroundColor = 'white';
      toolsSVG.style.fill = 'rgb(44, 148, 255)';
		  toolsSVG.style.boxShadow = "none"
    }
 };

toolsButton.addEventListener('click', toggleOptions);


// contrast controls
let contrastBackground = document.getElementById("dark-contrast");
let originalBackground = document.getElementById("original-contrast");
let mainDiv = document.getElementById("main");


  function toggleContrast() {
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
  }

	function resetColors(){
		mainDiv.style.backgroundColor = "";
		document.body.style.backgroundColor = "";
  	mainDiv.style.color = "";
	}
contrastBackground.addEventListener('click', toggleContrast);
originalBackground.addEventListener('click', resetColors);

// font size controls
let smallFont = document.getElementById("small-font");
let largeFont = document.getElementById("large-font");
let originalFont = document.getElementById("refresh-font");
let mainChildren = document.getElementById("main").children;

function decreaseFontSize(){
		for (var i = 0; i < mainChildren.length; i++) {
			childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
			console.log(mainChildren[i].style.fontSize = (currentSize - 5) + 'px');
		}
};

smallFont.addEventListener('click', decreaseFontSize);

function increaseFontSize(){
		for (var i = 0; i < mainChildren.length; i++) {
			childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
			mainChildren[i].style.fontSize = (currentSize + 5) + 'px';
		}
};

largeFont.addEventListener('click', increaseFontSize);

function originalFontSize(){
		for (var i = 0; i < mainChildren.length; i++) {
			childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
			mainChildren[i].style.fontSize = "";
		}
};


originalFont.addEventListener('click', originalFontSize);


let changeFontFamily = document.getElementById("change-family");
let originalFontFamily = document.getElementById("original-family");

  function toggleFontFamily() {
    var fontUsed = mainDiv.style.fontFamily;

    if (fontUsed == "") {
			mainDiv.style.fontFamily = "Arial, sans-serif";
    } else {
			mainDiv.style.fontFamily = "";
		}
  }

changeFontFamily.addEventListener('click', toggleFontFamily);


let increaseLineHeight = document.getElementById("change-height");

increaseLineHeight.addEventListener('click', function(){
		let pHeight = mainDiv.getElementsByTagName("p");
		let i;
		for (i = 0; i < pHeight.length; i++) {
    		pHeight[i].style.lineHeight = "200%";
		}
});

let increaseSpacing = document.getElementById("increase-spacing");

increaseSpacing.addEventListener('click', function(){
		let pSpacing = mainDiv.getElementsByTagName("p");
		let i;
		for (i = 0; i < pSpacing.length; i++) {
    		pSpacing[i].style.letterSpacing = "1px";
		}
});
