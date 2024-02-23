import styled from "styled-components"

export const ContentBox = styled.View`
    width: ${props => `${props.fieldWidth}%`};
    margin-top: 20px;
`

export const Label = styled.Text`
    font-family: "Quicksand_600SemiBold";
`

export const InputContent = styled.TextInput.attrs({
    placeholderTextColor: '#77CACF'
})`
    margin-top: 10px;
    background-color: ${props => props.editable ? "#FFFFFF" : "#F5F3F3"} ;
    border: ${props => props.editable ? "2px solid #60BFC5" : "none"} ;
    border-radius: 5px;
    padding:10px 10px;
    text-align: justify;
    color: black;
    font-family: "MontserratAlternates_600SemiBold";
`

export const SelectBox = styled.View`
    margin-top: 10px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const Choice = styled.TouchableOpacity`
    width: 30%;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border: 2px solid #60BFC5;
`

export const ChoiceText = styled.Text`
    color: #77CACF;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 14px;
`