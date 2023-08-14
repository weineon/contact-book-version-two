import React from 'react';
import { SAppInput } from './styled';

const AppInput = React.forwardRef((props, ref) => {
    const {
        label,
        errorTitle,
        value,
        ...otherProps
    } = props;

    return (
        <SAppInput.Container>
            {label && (
                <SAppInput.Label>
                    {label}
                </SAppInput.Label>
            )}
            <SAppInput.Input {...otherProps} ref={ref} value={value || ''} />
            {errorTitle && (
                <SAppInput.Error>
                    {errorTitle}
                </SAppInput.Error>
            )}
        </SAppInput.Container>
    );
});

export default AppInput;
