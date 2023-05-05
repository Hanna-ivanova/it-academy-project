export class Component extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.state = {};
    this.isShadow = false;
  }

  setState(callback) {
    this.state = callback(this.state);
    if (this.isShadow) {
      this.shadowRoot.innerHTML = this.render();
    } else {
      this.innerHTML = this.render();
    }
  }

  connectedCallback() {
    if (this.isShadow) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = this.render();
    } else {
      this.innerHTML = this.render();
    }
    this.componentDidMount();
  }

  disconnectedCallback() {
    this.componentWillUnmount();
  }

  attributeChangedCallback(name, oldvalue, newvalue) {
    this.componentWillUpdate(name, oldvalue, newvalue);
    this.getAttributeNames().forEach((attributeName) => {
      this.props[attributeName] = this.getAttribute(attributeName);
    });
  }

  componentDidMount() {}
  componentWillUnmount() {}
  componentWillUpdate() {}
  render() {}
}
