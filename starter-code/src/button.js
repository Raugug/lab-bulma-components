import React from "react";
import 'bulma/css/bulma.css';

export const CoolButton = ({isRounded, isSmall, isDanger, isSuccess, isPrimary=true, className, children}) => {
    let myclass= {
        isRounded: "button is-rounded",
        isSmall: "button is-small",
        isDanger: "button is-danger",
        isSuccess: "button is-success"
    }

    const buttons = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
    };
    console.log(isSuccess);
    if ({isSuccess}){
        return (<button className={"button is-small "+buttons.isSuccess}>{children}</button>)
    } else if ({isDanger}){
        return (
            <button className={"button is-small "+buttons.isDanger}>{children}</button>
        )
    }
}