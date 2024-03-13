import styled from "styled-components";
import Modal from "react-native-modal";

export const ModalPhoto = styled(Modal)`
    align-items: center;
    //justify-self: center;
    //position: fixed;
    flex: 0.6;
    width: 90%;
    background-color: #FBFBFB;
    border-radius: 10px;
    flex-direction: column;
`

export const PhotoFile = styled.Image`
    flex: 0.7;
    width: 90%;
`

export const CloseButton = styled.TouchableOpacity`
    background-color: red;
    position: absolute;
    height: 30px;
    width: 50px;
    bottom: 15px;
`