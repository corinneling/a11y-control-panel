// show user control panel
const aesthetica11y = {
  loadCSS: function() {
    var head = document.querySelector('head');
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://corinneling.github.io/aesthetica11y-control-panel/styles/style.css';
    head.appendChild(link);
  },
  loadHTML: function() {
    const controls = [{
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"/></svg>`,
        tooltip: 'Switch page contrast to dark or light'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"/></svg>`,
        tooltip: 'Switch back to original page contrast'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424 318.2c13.3 0 24-10.7 24-24v-76.4c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h400z"/></svg>`,
        tooltip: 'Decrease font size'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"/></svg>`,
        tooltip: 'Increase font size'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.333 512"><path d="M500.333 0h-47.411c-6.853 0-12.314 5.729-11.986 12.574l3.966 82.759C399.416 41.899 331.672 8 256.001 8 119.34 8 7.899 119.526 8 256.187 8.101 393.068 119.096 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-33.971-33.971c-4.466-4.466-11.64-4.717-16.38-.543C341.308 415.448 300.606 432 256 432c-97.267 0-176-78.716-176-176 0-97.267 78.716-176 176-176 60.892 0 114.506 30.858 146.099 77.8l-101.525-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12z"/></svg>`,
        tooltip: 'Refresh to original font size'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 32h416c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16h-35.496c-8.837 0-16-7.163-16-16V96H261.743v128H296c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H152c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h34.257V96H67.496v48c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16zm427.315 340.682l-80.001-79.995C353.991 283.365 336 288.362 336 304v48H112v-47.99c0-14.307-17.307-21.319-27.314-11.313L4.685 372.692c-6.245 6.245-6.247 16.379 0 22.626l80.001 79.995C94.009 484.635 112 479.638 112 464v-48h224v47.99c0 14.307 17.307 21.319 27.314 11.313l80.001-79.995c6.245-6.245 6.248-16.379 0-22.626z"/></svg>`,
        tooltip: 'Increase spacing between paragraph letters'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M16 32h288c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16h-35.496c-8.837 0-16-7.163-16-16V96h-54.761v320H232c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H88c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h34.257V96H67.496v48c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16zm475.308 4.685l79.995 80.001C581.309 126.693 574.297 144 559.99 144H512v224h48c15.639 0 20.635 17.991 11.313 27.314l-79.995 80.001c-6.247 6.247-16.381 6.245-22.626 0l-79.995-80.001C378.691 385.307 385.703 368 400.01 368H448V144h-48c-15.639 0-20.635-17.991-11.313-27.314l79.995-80.001c6.247-6.248 16.381-6.245 22.626 0z"/></svg>`,
        tooltip: 'Increase spacing paragraph between lines'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z"/></svg>`,
        tooltip: 'Change page text to Dyslexie font'
      }
    ];
    // And then create our markup:
    const markup = `
    <a data-tooltip="Panel to Control Page Styling" data-placement="top" id="user-tools" class="aesthetica11y-receptacle-for-main-aesthetica11y-icon">
    <svg id="tools-icon" class="main-aesthetica11y-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z"/></svg>
    </a>
    <div id="accessibility">
      <div class="aesthetica11y-receptacle-for-aesthetica11y-user-control-panel">
        <ul class="aesthetica11y-list-of-icons-for-page-controls">
        ${controls.map(controls =>
                `<li>
                <a href="#" data-tooltip="${controls.tooltip}" data-placement="left">
                ${controls.icon}
                </a>
                </li>`
         ).join('')}
     </ul>
     </div>
     </div>


    `;
    document.body.innerHTML += markup;
  },
  controlPanelEvents: function() {
    let links = document.querySelectorAll('a');
    let properties = [this.prop0, this.prop1, this.prop2, this.prop3, this.prop4, this.prop5, this.prop6, this.prop7, this.prop8]
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', properties[i]);
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
    let mainDiv = document.getElementById("main");
    let contrastBackground = document.body.style.backgroundColor;

    if (contrastBackground == 'black') {
      document.body.style.backgroundColor = 'white';
      mainDiv.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'black';
      mainDiv.style.color = 'white';
    }
  },
  prop2: function() {
    let mainDiv = document.getElementById("main");
    mainDiv.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    mainDiv.style.color = "";
  },
  prop3: function() {
    let mainChildren = document.getElementById("main").children;
    for (var i = 0; i < mainChildren.length; i++) {
      childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      mainChildren[i].style.fontSize = (currentSize - 5) + 'px';

    }
  },
  prop4: function() {
    let mainChildren = document.getElementById("main").children;
    for (var i = 0; i < mainChildren.length; i++) {
      childrenFont = window.getComputedStyle(mainChildren[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      mainChildren[i].style.fontSize = (currentSize + 5) + 'px';
    }
  },
  prop5: function() {
    let mainChildren = document.getElementById("main").children;
    for (var i = 0; i < mainChildren.length; i++) {
      mainChildren[i].style.fontSize = "";
    }
  },
  prop6: function() {
    let p = document.querySelectorAll("p");
    for (i = 0; i < p.length; i++) {
      p[i].style.letterSpacing = "1px";
    }
  },
  prop7: function() {
    let p = document.querySelectorAll("p");
    for (i = 0; i < p.length; i++) {
      p[i].style.lineHeight = "200%";
    }
  },
  prop8: function() {
    let h = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    let p = document.querySelectorAll("p");
    for (i = 0; i < p.length; i++) {
      if (p[i].style.fontFamily == "") {
        p[i].style.fontFamily = "Dyslexie";
      } else {
        p[i].style.fontFamily = "";
      }
    }
    for (i = 0; i < h.length; i++) {
      if (h[i].style.fontFamily == "") {
        h[i].style.fontFamily = "Dyslexie";
      } else {
        h[i].style.fontFamily = "";
      }
    }
  }
}

aesthetica11y.loadCSS();
aesthetica11y.loadHTML();
aesthetica11y.controlPanelEvents();
