import PubSub from '../helpers/pub_sub.js';

let InstrumentFamilyView = class{
    constructor(container) {
      this.container = container;
  }
};

InstrumentFamilyView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

InstrumentFamilyView.prototype.render = function (family) {

  var family = {name: family.name, description: family.description, instruments: family.instruments}
  this.container.innerHTML = '';

  const familyName = this.createElement('h2', name);
  this.container.appendChild(familyName);

  const familyDescription = this.createElement('p', description);
  this.container.appendChild(familyDescription);

  const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  this.container.appendChild(instrumentListTitle);

  const instrumentList = this.createInstrumentList(instruments);
  this.container.appendChild(instrumentList);
};

InstrumentFamilyView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

InstrumentFamilyView.prototype.createInstrumentList = function (instruments) {
  const list = document.createElement('ul');

  instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  });

  return list;
};

export class InstrumentFamilyView;
