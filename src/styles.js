import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerWrapper: {
        flex: 1,
        backgroundColor: '#111',
        padding: 10
    },
    container: {
        width: '100%',
        aspectRatio: 1,
        marginTop: 35,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    card: {
        width: '90%',
        margin: '5%',
        aspectRatio: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    }
});

export const buttonControls = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        aspectRatio: 1,
        width: '100%',
        backgroundColor: 'transparent'
    },
    button: {
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 999,
        color: '#fff'
    },
    buttonYes: {
        backgroundColor: '#43a047'
    },
    buttonNo: {
        backgroundColor: '#e53935'
    },
    buttonMaybe: {
        backgroundColor: '#29b6f6'
    },
    stats: {
        alignSelf: 'stretch',
        marginLeft: 10,
        color: 'rgba(1,1,1,0.25)'
    }
});
