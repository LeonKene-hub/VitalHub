import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const LinearContainer = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: -0.05, y: 1.08 },
    end: { x: 1, y: 0 },
})
    `
height: 20%;
width: 100%;
align-items: center;
justify-content: center;
border-radius: 0px 0px 15px 15px;
`

export const Line = styled.View`
    width: 90%;
    //height: 60px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    //border: 1px solid black;
`

export const BoxUser = styled.View`
    width: 70%;
    height: 60px;
    flex-direction: row;
    //border: 1px solid orange;
`

export const ImageUser = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 5px;
    //border: 1px solid green;
`

export const DataUser = styled.View`
    height: 60px;
    margin-left: 10px;
    justify-content: center;
    //border: 1px solid red;
`

export const Wellcome = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 14px;
    color: #4E4B59;
`

export const UserName = styled.Text`   
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    color: #FBFBFB;
`