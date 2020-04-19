import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

import Label from './components/Label';
import Button from './components/Button';
import OutlineButton from './components/OutlineButton';
import Icon from './components/Icon';
import RebassButton from './components/RebassButton';
import StatefulButton from './components/StatefulButton';
import CallbackButton from './components/CallbackButton';

document.querySelectorAll('[data-component="Button"]').forEach(button => {
    var { className, id, onclick, innerHTML } = button;
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Button
                className={className}
                id={id ? id : null}
                children={innerHTML}
                onClick={onclick ? onclick : null}
            />
        </ThemeProvider>
    , button);

    // remove from original element
    button.removeAttribute("class");
    button.removeAttribute("id");
    button.removeAttribute("onclick");
})

document.querySelectorAll('[data-component="RebassButton"]').forEach(button => {
    const {component, ...attrs} = button.dataset;
    var { onclick } = button;
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <RebassButton
                className={button.className}
                id={button.id ? button.id : null}
                children={button.innerHTML}
                onClick={onclick ? onclick : null}
                {...attrs}
            />
        </ThemeProvider>
    , button);
    
    // remove from original element
    button.removeAttribute("class");
    button.removeAttribute("id");
    button.removeAttribute("onclick");
    button.removeAttribute("data-variant");
})

document.querySelectorAll('[data-component="OutlineButton"]').forEach(button => {
    var { onclick } = button;
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <OutlineButton
                className={button.className}
                id={button.id}
                children={button.innerHTML}
                onClick={onclick ? onclick : null}
            />
        </ThemeProvider>
    , button);
    
    // remove from original element
    button.removeAttribute("class");
    button.removeAttribute("id");
    button.removeAttribute("onclick");
})

document.querySelectorAll('[data-component="Icon"]').forEach(icon => {
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Icon
                className={icon.className}
                id={icon.id}
                icon={icon.dataset.icon}
                children={icon.innerHTML}
            />
        </ThemeProvider>
    , icon);
    
    // remove from original element
    icon.removeAttribute("class");
    icon.removeAttribute("id");
    icon.removeAttribute("onclick");
})

document.querySelectorAll('[data-component="StatefulButton"]').forEach(button => {
    var { onclick } = button;
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <StatefulButton
                className={button.className}
                id={button.id ? button.id : null}
                children={button.innerHTML}
                onClick={onclick ? onclick : null}
            />
        </ThemeProvider>
    , button);

    // remove from original element
    button.removeAttribute("class");
    button.removeAttribute("id");
    button.removeAttribute("onclick");
})

document.querySelectorAll('[data-component="CallbackButton"]').forEach(button => {
    var { onclick } = button;
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <CallbackButton
                className={button.className}
                id={button.id ? button.id : null}
                children={button.innerHTML}
                onSubmitted={window[button.dataset.callback]}
            />
        </ThemeProvider>
    , button);

    // remove from original element
    button.removeAttribute("class");
    button.removeAttribute("id");
    button.removeAttribute("onclick");
})

document.querySelectorAll('[data-component="Label"]').forEach(label => {
    const {component, style, ...attrs} = label.dataset;
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Label
                className={label.className}
                id={label.id ? label.id : null}
                children={label.innerHTML}
                inlineStyles={style}
                {...attrs}
            />
        </ThemeProvider>
    , label);

    // remove from original element
    label.removeAttribute("class");
    label.removeAttribute("id");
})