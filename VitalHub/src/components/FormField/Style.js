import styled from "styled-components"

export const ContentBox = styled.View`
    width: ${props => `${props.fieldWidth}%`};
    margin-top: 20px;
`

export const Label = styled.Text`
    font-family: "Quicksand_600SemiBold";
`

export const InputContent = styled.TextInput`
    margin-top: 10px;
    background-color: ${props => props.editable ? "#FFFFFF" : "#F5F3F3"} ;
    border: ${props => props.editable ? "2px solid #60BFC5" : "none"} ;
    border-radius: 5px;
    padding:10px 10px;
    text-align: justify;
    color: black;
`