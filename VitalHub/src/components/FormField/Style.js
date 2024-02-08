import styled from "styled-components"

export const ContentBox = styled.View`
    width: ${props => `${props.fieldWidth}%`};
    border:1px solid red ;
`

export const Label = styled.Text`
    font-family: "Quicksand_600SemiBold";
`

export const InputContent = styled.TextInput.attrs({
    placeholderTextColor: '#000000'
})`
    width: ${props => `${props.fieldWidth}%`};
    margin-top: 10px;
    background-color: #F5F3F3;
    border-radius: 5px;
    padding:10px 10px;
    text-align: justify;
`