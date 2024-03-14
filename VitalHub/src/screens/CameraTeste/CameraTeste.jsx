import { Camera, CameraType, CameraPictureOptions } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react';

import { ButtonCamera, ButtonContainer, CameraBody } from './Style';
import { View } from 'react-native';
import { PhotoTaked } from '../../components/Photo/Photo';

export const CameraTeste = () => {
    const [type, setType] = useState(CameraType.back);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const camRef = useRef(null)
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [modalPhoto, setModalPhoto] = useState(false)
    /*
        
    */

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();

            const { status : mediaStatus } = await MediaLibrary.requestPermissionsAsync();
            requestPermission(status === 'granted')
        })();
    }, []);

    if (!permission) {
        //Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View>
                <Text style={{ textAlign: 'center' }}>Precisamos de permissao para usar a camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri)
            setModalPhoto(true)
        }
    }
    async function savePicture() {
        const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
        .then(() => {
            alert('foto tirada')
        })
        .catch(error => {
            console.log("error", error)
        })
    }


    return (
        <>
            <CameraBody type={type} ref={camRef} ratio='16:9'>

                <ButtonContainer>
                    <ButtonCamera onPress={toggleCameraType}>
                        <FontAwesome name="refresh" size={23} color="white" />
                    </ButtonCamera>

                    <ButtonCamera onPress={takePicture}>
                        <FontAwesome name='camera' size={23} color="white" />
                    </ButtonCamera>

                    <ButtonCamera>
                        <FontAwesome name="photo" size={23} color="white" />
                    </ButtonCamera>
                </ButtonContainer>
            </CameraBody>

            <PhotoTaked
                RequestSave={savePicture}
                uriPhoto={capturedPhoto}
                visible={modalPhoto}
                onRequestClose={() => setModalPhoto(false)}
            />

        </>
    )
}

// import { Camera, CameraType } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export defaul t function App() {
//   const [type, setType] = useState(CameraType.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraType() {
//     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });
