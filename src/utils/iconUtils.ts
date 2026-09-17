import React from 'react';
import * as FaIcons from 'react-icons/fa';

// Type for all available icons
type IconName = keyof typeof FaIcons;

// Function to get icon component by name
export const getIcon = (iconName: string): React.ComponentType<any> => {
    const IconComponent = FaIcons[iconName as IconName];

    if (!IconComponent) {
        console.warn(`Icon "${iconName}" not found, using default icon`);
        return FaIcons.FaQuestion; // Default fallback icon
    }

    return IconComponent;
};

// Function to render icon with props
export const renderIcon = (iconName: string, props?: any): React.ReactElement => {
    const IconComponent = getIcon(iconName);
    return React.createElement(IconComponent, props);
}; 