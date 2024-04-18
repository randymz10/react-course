import Proptypes from 'prop-types';

function Button({children, onClick}) {
    return (
        <button className="button" onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: Proptypes.array,
    onClick: Proptypes.func
}

export default Button
