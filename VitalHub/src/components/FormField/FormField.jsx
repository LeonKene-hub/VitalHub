import { Choice, ChoiceText, ContentBox, InputContent, Label, SelectBox } from "./Style"


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
                keyboardType={KeyType}
                value={fieldValue}
                editable={editable}
                maxLenght={maxLenght}
                onChangeText={onChangeText}

                {...editable ? (placeholder = { placeholder }) : (placeholder = "")}
            />
        </ContentBox>
    )
}//============================================================================================================
export const FormChoice = ({
    fieldWidth = 100,
    labelText
}) => {
    return (
        <ContentBox fieldWidth={fieldWidth}>
            <Label>
                {labelText}
            </Label>

            <SelectBox>
                <Choice>
                    <ChoiceText>Rotina</ChoiceText>
                </Choice>
                <Choice>
                    <ChoiceText>Exame</ChoiceText>
                </Choice>
                <Choice>
                    <ChoiceText>Urgencia</ChoiceText>
                </Choice>
            </SelectBox>
        </ContentBox>
    )
}