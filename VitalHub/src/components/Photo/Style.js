import styled from "styled-components";
import Modal from "react-native-modal";

export const ModalPhoto = styled(Modal)`
    position: fixed;
    align-items: center;
    flex: 0.9;
    width: 90%;
    background-color: #FBFBFB;
    border-radius: 10px;
    flex-direction: column;
    top: 50px;
    margin-top: 16px;
`

export const PhotoFile = styled.Image`
    flex: 0.8;
    width: 90%;
`

export const CloseButton = styled.TouchableOpacity`
    background-color: red;
    height: 30px;
    width: 60px;
`

export const SaveButton = styled(CloseButton)`
    background-color: cyan;
`

export const Line = styled.View`
    flex: 0.1;
    width: 90%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    border: 1px blue;
` 