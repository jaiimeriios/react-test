import PropTypes from 'prop-types';

function Button({ btnText, clickEvent }) {
    return (
        <button className="btn" onClick={clickEvent}>
            {btnText}
        </button>
    );
}

Button.defaultProps = {
    btnText: 'button text',
    clickEvent: () => console.log('hazme funcionar'),
};

Button.propTypes = {
    btnText: PropTypes.string,
    clickEvent: PropTypes.func,
};

export default Button;
