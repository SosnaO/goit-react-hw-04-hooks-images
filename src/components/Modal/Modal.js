import {useEffect} from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ onClose, src, alt }) {
 const handleKeydown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown)
     })
       return createPortal(
            <div className="Overlay" onClick={handleBackdropClick}>
                <div className="Modal">
                    <img src={src} alt={alt} />
                </div>
            </div>, 
            modalRoot,
        );
    
};










// old code

// class Modal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown);
//     }
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown)
//     }
   
   
        // const { src, alt } = this.props;
// export default Modal;