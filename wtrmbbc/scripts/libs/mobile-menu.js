class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.mmbtn = document.querySelector('.mobile-menu');
        this.DOM.container = document.querySelector('#global-container');    
        this.eventType = this._getEventType();       
        this._addEvent();
    }
    
    _getEventType() {
        return window.ontouchstart ? 'touchstart': 'click';
    }
    
    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }
    
    _remove() {
        this.DOM.container.classList.remove('menu-open');
    }
    
    
    _addEvent() {
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
        this.DOM.cover.addEventListener('click', this._toggle.bind(this));
        this.DOM.mmbtn.addEventListener('click', this._remove.bind(this));
    }
}

