import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'white',
    },
    imgContainer:{
        flex:0.6,
        backgroundColor:'white',
    },
    background: {
        width: '100%',               
        height: '100%',                                
        resizeMode: 'cover',        
      },
    bottomContainer: {
        marginTop:-50,
        flex:0.4,
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#ebe3d8',
        borderRadius:40,
        borderWidth:2,
    },
    logo: {
        width:100,
        height:100,
    },
    samplePictures: {
        marginTop:20,
        flexDirection:'row',
        gap:15,
    },
    eachImg: {
        width:110,
        height:110,
        borderRadius:15,
        borderWidth:2,
    },
    title: {
        textAlign:'center',
        marginTop:-20,
        fontSize:30,
        fontWeight:'300',
    },
    redirectBtn: {
        marginTop:30,
        borderRadius:15,
        backgroundColor:'black',
        width:'92%',
    },
    redirectText: {
        color:'white',
        fontSize:20,
        padding:20,
        fontWeight:'bold',
        textAlign:'center',

    },
  });