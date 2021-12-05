import Button from './Button';

function Nav({ buttonClick, showAdd }) {
    return (
        <>
            <h2>Add Task</h2>
            <Button
                color={showAdd ? 'lightcoral' : 'lightseagreen'}
                text={showAdd ? 'Hide' : 'Show'}
                onClick={buttonClick}
            />
        </>
    );
}

export default Nav;
