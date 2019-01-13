const aesthetica11y = {
  loadCSS: function() {
    var head = document.querySelector('head');
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://a11y-control-panel.netlify.com/css/style.css';
    head.appendChild(link);
  },
  loadHTML: function() {
    const controls = [{
        icon: 'color',
        tooltip: 'Change coloring of this control panel'
      },
      {
        icon: `contrast`,
        tooltip: 'Switch page contrast to dark or light'
      },
      {
        icon: `decrease`,
        tooltip: 'Decrease body font size'
      },
      {
        icon: `increase`,
        tooltip: 'Increase body font size'
      },
      {
        icon: `underline`,
        tooltip: 'Add underline to links'
      },
      {
        icon: `letter-spacing`,
        tooltip: 'Increase spacing between text letters'
      },
      {
        icon: `line-height`,
        tooltip: 'Increase spacing between text lines'
      },
      {
        icon: `font`,
        tooltip: 'Change page text to OpenDyslexic font'
      },
      {
        icon: `refresh`,
        tooltip: 'Refresh page styling'
      }
    ];
    const markup = `
    <div tabindex="4" id="a11y-control-panel-wrapper">
      <button class="aesthetica11y-main-icon" aria-expanded="false" aria-label="Open" data-tooltip="Panel to Control Page Styling" data-placement="top"></button>
      <div class="aesthetica11y-container">
        <ul class="aesthetica11y-list">
        ${controls.map(controls =>
          `<li class="aesthetica11y-list__item">
            <button class="aesthetica11y__button icon-${controls.icon}" aria-label="${controls.tooltip}" data-tooltip="${controls.tooltip}" data-placement="left"></button>
          </li>`
          ).join('')}
        </ul>
      </div>
     </div>
    `;
    document.body.innerHTML += markup;
  },
  openControlPanel: function() {
    const mainLink = document.querySelector('.aesthetica11y-main-icon');
    const panelContainer = document.querySelector('.aesthetica11y-container');
    mainLink.addEventListener('click', () => {
      panelContainer.style.display == 'block' ? panelContainer.style.display = 'none' : panelContainer.style.display = 'block';
    });
  },
  controlPanelEvents: function() {
    const links = document.querySelectorAll('.aesthetica11y__button');
    for (var i = 0; i < links.length; i++) {
      const properties = [this.prop1, this.prop2, this.prop3, this.prop4, this.prop5, this.prop6, this.prop7, this.prop8, this.prop9];
      links[i].addEventListener('click', properties[i]);
    }
  },
  prop1: function() {
    const icons = document.querySelectorAll('.aesthetica11y__button');
    for (var i = 0; i < icons.length; i++) {
      icons[i].style.backgroundColor == "" ? icons[i].style.backgroundColor = "#2B2B2B" : icons[i].style.backgroundColor = "";
    }
  },
  prop2: function() {
    const bdy = document.querySelectorAll("body, div, section, main, aside, footer");
    const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span");
    for (var i = 0; i < bdy.length; i++) {
      if (bdy[i].style.backgroundColor == 'black') {
        bdy[i].style.backgroundImage = "none";
        bdy[i].style.backgroundColor = 'white';
        bdy[i].style.color = 'black';
        txt[i].style.color = 'black';
      } else {
        bdy[i].style.backgroundImage = "none";
        bdy[i].style.backgroundColor = 'black';
        bdy[i].style.color = 'white';
        txt[i].style.color = 'white';
      }
    }
  },
  prop3: function() {
    const txt = document.querySelectorAll("p, li, a, span")
    for (let i = 0; i < txt.length; i++) {
      childrenFont = window.getComputedStyle(txt[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      txt[i].style.fontSize = (currentSize - 2) + 'px';
    }
  },
  prop4: function() {
    const txt = document.querySelectorAll("p, li, a, span")
    for (var i = 0; i < txt.length; i++) {
      childrenFont = window.getComputedStyle(txt[i]).getPropertyValue('font-size');
      currentSize = parseFloat(childrenFont);
      txt[i].style.fontSize = (currentSize + 2) + 'px';
    }
  },
  prop5: function() {
    const a = document.querySelectorAll("a")
    for (var i = 0; i < a.length; i++) {
      a[i].style.textDecoration == "" ? a[i].style.textDecoration = "underline" : a[i].style.textDecoration = "";
    }
  },
  prop6: function() {
    const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, span");
    for (i = 0; i < txt.length; i++) {
      txt[i].style.letterSpacing == "" ? txt[i].style.letterSpacing = "1px" : txt[i].style.letterSpacing = "";
    }
  },
  prop7: function() {
    const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, span");
    for (i = 0; i < txt.length; i++) {
      txt[i].style.lineHeight == "" ? txt[i].style.lineHeight = "1.75" : txt[i].style.lineHeight = "";
    }
  },
  prop8: function() {
    const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, span");
    for (i = 0; i < txt.length; i++) {
      txt[i].style.fontFamily == "" ? txt[i].style.fontFamily = "Dyslexie" : txt[i].style.fontFamily = "" 
    }
  },
  prop9: function() {
    const els = document.querySelectorAll("*");
    els.forEach((el) => {
      el.removeAttribute("style");
    });
  }
}

aesthetica11y.loadCSS();
aesthetica11y.loadHTML();
aesthetica11y.openControlPanel();
aesthetica11y.controlPanelEvents();
