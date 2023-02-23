// import PropTypes from 'prop-types'
import className from 'classnames'

// Wrapper
export default function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    // Class for buttons
    const classes = className(rest.className, 'px-3 py-1.5 border flex items-center ', {
        'bg-blue-500 border-blue-600 text-white hover:bg-blue-600 active:bg-blue-700' : primary,
        'bg-gray-700 border-gray-900 text-white hover:bg-gray-800 active:bg-blue-900' : secondary,
        'bg-green-500 border-green-600 text-white hover:bg-green-600 active:bg-green-700' : success,
        'bg-yellow-500 border-yellow-600 text-white hover:bg-yellow-600 active:bg-yellow-700' : warning,
        'bg-red-500 border-red-600 text-white hover:bg-red-600 active:bg-red-700' : danger,
        'bg-white hover:text-white' : outline,
        'rounded-full' : rounded,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
    })

    return (
        // Underlying Element
        <button {...rest} className={classes} >
            {children}
        </button>
    )
}
    
Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger)
        if (count > 1){
            return new Error(`Only one of primary, secondary, success, warning, danger can be true`)
        }
    }
}
