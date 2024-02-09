import { Button, ButtonTitle, ButtonGoogle, ButtonGoogleTitle } from "./Style"

export const NormalButton = ({
    title,
    fieldWidth = 100,
    onPress
}) => {
    return(
        <Button fieldWidth={fieldWidth} onPress={onPress}>
            <ButtonTitle>{title}</ButtonTitle>
        </Button>
    )
}

export const GoogleButton = ({
    title,
    fieldWidth,
    onPress
}) => {
    return(
        <ButtonGoogle fieldWidth={fieldWidth} onPress={onPress}>
            <ButtonGoogleTitle>{title}</ButtonGoogleTitle>
        </ButtonGoogle>
    )
}