import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import Navigation from './navigation'
import Modal from 'react-native-modal'
import { useSelector, useDispatch } from 'react-redux'
import { color } from './constants'; 
import { clearModal, disMis } from './redux/actions/actionsModal'

const index = () => {


    const isLoading = useSelector(state => state.modal.isGlobalLoading)
    const isVisible = useSelector(state => state.modal.isVisible)
    const isCancel = useSelector(state => state.modal.isCancel)
    const transparent = useSelector(state => state.modal.transparent)
    const animationType = useSelector(state => state.modal.animationType)
    const ModalComponent = useSelector(state => state.modal.component)

    const dispatch = useDispatch()


    return (
        <View style={{ flex: 1 }}>
            <Modal
                style={{ flex: 1, margin: 0, }}
                animationIn={'fadeIn'}
                statusBarTranslucent={true}
                isVisible={isVisible}
                customBackdrop={
                    <TouchableWithoutFeedback onPress={() => {
                        if (isCancel)
                            dispatch(disMis())
                    }}>

                        <View style={{ backgroundColor: transparent ? color.transparent : color.transparentBlackHard, flex: 1 }}></View>

                    </TouchableWithoutFeedback>
                }
                onDismiss={() => {
                    dispatch(clearModal())
                }}>

                <ModalComponent />

            </Modal>

            <Navigation />
            
            {isLoading && <ActivityIndicator animating={isLoading}
                size={'large'}
                style={{
                    width: 50,
                    height: 50,
                    position: "absolute",
                    top: '50%',
                    end: '50%',
                    marginTop: -25,
                    marginEnd: -25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />}

        </View>
    )
}

export default index

const styles = StyleSheet.create({})
