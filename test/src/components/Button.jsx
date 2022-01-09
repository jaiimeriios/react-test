import PropTypes from 'prop-types';

function Button({ btnText, onClick }) {
    return (
        <button className="btn" onClick={onClick}>
            {btnText}
        </button>
    );
}

Button.defaultProps = {
    btnText: 'button text',
    onClick: () => console.log('hazme funcionar'),
};

Button.propTypes = {
    btnText: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
