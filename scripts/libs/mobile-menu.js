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
        bodyFixedOn();
        if(this.DOM.container.classList.contains('menu-open')){
            bodyFixedOn();
        } else {
            bodyFixedOff();
        };
    }
    
    _remove() {
        this.DOM.container.classList.remove('menu-open');
        bodyFixedOff();
    }
    
    
    _addEvent() {
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
        this.DOM.cover.addEventListener('click', this._toggle.bind(this));
        this.DOM.mmbtn.addEventListener('click', this._remove.bind(this));
    }

}

// モバイルメニュー表示時の背景固定

let scrollPosition;
const ua = window.navigator.userAgent.toLowerCase();
const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
const body = document.querySelector('body');

function bodyFixedOn() {
    if(isiOS){
        scrollPosition = window.pageYOffset;
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
    }else {
        body.style.overflow = 'hidden';
    }
}

function bodyFixedOff() {
    if(isiOS){
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        window.scrollTo(0, scrollPosition);
    }else {
        body.style.removeProperty('overflow');
    }
}

