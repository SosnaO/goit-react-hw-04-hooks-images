import React, { Component} from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    render(){
        const { src, alt } = this.props;
        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    <img src={src} alt={alt} />
                </div>
            </div>, 
            modalRoot,
        );
    }
}
export default Modal;