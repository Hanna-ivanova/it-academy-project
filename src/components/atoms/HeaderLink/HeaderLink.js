import { Component } from '../../../core/Component';
import './HeaderLink.scss';

class HeaderLink extends Component {
  static get observedAttributes() {
    return ['class', 'href', 'content'];
  }

  onClick = (evt) => {
    if (!this.props.href) {
      evt.preventDefault();
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    const className = this.props.class ? this.props.class : '';
    const href = this.props.href ? this.props.href : '';
    const content = this.props.content;

    return `
        <a class="${className} header-link" href="${href}">${content}</a>
        `;
  }
}

customElements.define('header-link', HeaderLink);
