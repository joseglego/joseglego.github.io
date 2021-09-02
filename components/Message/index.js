import ReactModal from 'react-modal';
import { FaExclamationTriangle, FaCheck, FaCircleNotch, FaInfo, FaTimes } from 'react-icons/fa';

import styles from './Message.module.css';

function Message ({ ariaClose, icon, message, onClose, showMessage, title }) {
  const customStyles = {
    content: {

    }
  };

  const colorClass = styles[icon];
  return (
    <ReactModal
      isOpen={showMessage}
      style={customStyles}
      closeTimeoutMS={500}
      className={`ReactModal__Content ${styles.messageContent}`}
      overlayClassName={{
        base: `ReactModal__Overlay ${styles.messageOverlay}`,
        afterOpen: styles.messageOverlayAfterOpen,
        beforeClose: styles.messageOverlayBeforeClose
      }}>
      <div className={styles.messageContainer}>
        <button className={styles.closeButton} onClick={onClose} aria-label={ariaClose || 'Close Message'}>
          <FaTimes />
        </button>
        {icon && (
          <div className={`${styles.icon} ${colorClass}`}>
            {icon === 'error' && <FaTimes />}
            {icon === 'info' && <FaInfo />}
            {icon === 'processing' && <FaCircleNotch />}
            {icon === 'success' && <FaCheck />}
            {icon === 'warning' && <FaExclamationTriangle />}
          </div>
        )}
        {title ? <h2 className={colorClass}>{title}</h2> : null}
        {message}
      </div>
    </ReactModal>
  );
}

export default Message;
