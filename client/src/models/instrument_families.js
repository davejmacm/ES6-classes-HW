import PubSub from '../helpers/pub_sub.js';

let InstrumentFamilies = class {
  constructor(data) {
  this.data = data;
  }
};

get bind(){
  return this.bindEvents();
}
bindEvents() {
  PubSub.publish('InstrumentFamilies:data-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishFamilyDetail(selectedIndex);
  });
};
get familyDetail(){
  return this.publishFamilyDetail();
}
publishFamilyDetail(selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
};

export class InstrumentFamilies;
