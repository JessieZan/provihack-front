import './styles.css';

const ActionButton = (props) => {
  return (
    <button onClick={props.onClick} className='action-btn'>
      {props.children}
    </button>
  );
};

export default ActionButton;
