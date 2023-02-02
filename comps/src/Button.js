import PropTypes from 'prop-types'

// Wrapper
export default function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}){
    return (
        // Underlying Element
        <button >
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
