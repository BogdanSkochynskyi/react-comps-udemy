import className from 'classnames';

function Button( {children, rounded, outline, primary, secondary, success, warning, danger} ) {
    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
        'rounded-full': rounded,
    })
    return <button className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
        if(count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be used in component.')
        }
    }
}

export default Button;