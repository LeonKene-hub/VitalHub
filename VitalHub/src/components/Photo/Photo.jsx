import { CloseButton, ModalPhoto, PhotoFile } from "./Style"


export const PhotoTaked = ({
    uriPhoto = "",
    visible = false,
    onRequestClose
}) => {
    return(
        <ModalPhoto
            isVisible={visible}
        >
            <PhotoFile source={{ uri: `${uriPhoto}` }}/>
            {/* source={{ uri: "https://i.imgflip.com/35bdwf.jpg?a475080" }} */}
            {/* source={{ uri: `${uriPhoto}` }} */}

            <CloseButton onPress={onRequestClose}></CloseButton>
        </ModalPhoto>
    )
}