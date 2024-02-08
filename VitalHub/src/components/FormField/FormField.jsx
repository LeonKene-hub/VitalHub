import { ContentBox, InputContent, Label } from "./Style"


export const FormField = ({
    labelText = "Teste label",
    fieldWidth = 100,
    fieldValue = null,
    editable = false,
    onChangeText = null,
    KeyType = 'default',
    placeholder,
    maxLenght
}) => {
    return (
        <ContentBox
            fieldWidth={fieldWidth}
        >
            <Label>
                {labelText}
            </Label>

            <InputContent
                multiline={true}
                KeyType={KeyType}
                value={fieldValue}
                editable={editable}
                maxLenght={maxLenght}
                fieldWidth={fieldWidth}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </ContentBox>
    )
}