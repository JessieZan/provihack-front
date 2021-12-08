import './styles.css';

const ActionButton = (props) => {
  return (
    <button onClick={props.onClick} className='secondary-btn '>
      {props.children}
    </button>
  );
};

export default ActionButton;
