import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';

const FaceScanScreen = () => {
    const [facing, setFacing] = useState<CameraType>('front');
    const [permission, requestPermission] = useCameraPermissions();
    const [isVerified, setIsVerified] = useState(false);
    const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
    const cameraRef = useRef<any>(null); 

    if (!permission) return <View />;
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    async function handleFaceScan() {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync(); 
            setCapturedPhoto(photo.uri);
            setIsVerified(true); 
        }
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                {/* Face scan border overlay */}
                <View style={styles.overlay}>
                    <View style={styles.topTextContainer}>
                        <Text style={styles.instructionText}>
                            For enhanced security, please proceed with a facial scan to finalize setup
                        </Text>
                    </View>
                    <View style={styles.faceBorder} />
                    <TouchableOpacity style={styles.scanButton} onPress={handleFaceScan}>
                        <Image source={require('../../assets/Union.png')} resizeMode="contain" style={styles.image} />
                    </TouchableOpacity>
                </View>
            </CameraView>

            {/* Verification Success Modal */}
            <Modal visible={isVerified} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Verification Successful</Text>
                        <Text style={styles.modalText}>Your scan is verified and your account is ready</Text>
                        
                        {/* Show captured photo */}
                        {capturedPhoto && (
                            <Image source={{ uri: capturedPhoto }} style={styles.capturedImage} />
                        )}

                        <TouchableOpacity style={styles.proceedButton} onPress={() => setIsVerified(false)}>
                            <Text style={styles.proceedText}>Proceed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    message: { textAlign: 'center', paddingBottom: 10 },
    camera: { flex: 1 },
    overlay: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    topTextContainer: { position: 'absolute', top: 50, width: '80%', textAlign: 'center' },
    instructionText: { fontSize: 16, color: '#fff', textAlign: 'center' },
    faceBorder: {
        width: 300,
        height: 450,
        borderWidth: 4,
        borderColor: '#4A90E2',
        borderRadius: 20,
        position: 'absolute',
    },
    scanButton: {
        position: 'absolute',
        bottom: 40,
        backgroundColor: '#4A90E2',
        padding: 15,
        borderRadius: 50,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: { width: '100%' },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    modalText: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
    capturedImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    proceedButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    proceedText: { color: '#fff', fontSize: 16 },
});

export default FaceScanScreen;
