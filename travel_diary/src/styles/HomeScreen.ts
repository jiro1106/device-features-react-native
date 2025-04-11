import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#ebe3d8', 
    },
    line: {
        height: 1, 
        backgroundColor: 'black', 
        width: '100%', 
    },
    headerContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: 50, 
        paddingBottom: 20, 
        backgroundColor: '#ebe3d8', 
        alignItems: 'flex-start', 
        paddingHorizontal: 15, 
        height:120,
      },
      toggleIcon:{
        marginRight:15,
        marginTop:10,
      },
    logo: {
        width:90,
        height:90,
        marginTop:-20,
    },
    addEntryBtn:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        padding: 10,
        backgroundColor: '#ffbb00',
        borderRadius:20,
        borderWidth:2,
        gap:10,
        marginBottom: 20,
        width:'50%',
        marginLeft:100,
    },
    cameraIcon:{
        marginLeft:10,
    },
    addEntryText:{
        fontSize:15,
        marginLeft:5,
        alignItems:'flex-start',
        fontWeight:'bold',

    },
    entryParentContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebe3d8',
    },
    entryContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
        backgroundColor:'#bb976b',
        borderRadius:15,
        borderWidth:2,
        width:'90%',
    },
    addressContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:3,
        marginBottom:10,
        position: 'relative', 
        bottom: -6,  
        left: -9,    
        fontSize: 17,
        fontWeight:'500',
        color: 'white',
        padding: 5,  
        borderRadius: 5, 
        width: '90%',  
    },
    entryText:{
        fontWeight:400,
        fontSize:15,
        color:'white',
    },
    entryImg:{
        width:'90%',
        height:300,
        borderWidth:2,
        borderRadius:10,
    },
    entryDescription: {
        position: 'relative',  // Absolute positioning inside the container
        bottom: -10,  // 10px from the bottom of the container
        left: 0,    // 10px from the left of the container
        fontSize: 17,
        fontWeight:'500',
        color: 'white',
        padding: 5,  // Optional padding for the text
        borderRadius: 5, // Optional rounded corners for background
        width: '90%',  // Ensure it doesn't extend outside the container
      },
    removeBtn:{
        flexDirection:'row',
        alignItems: 'center', 
        marginTop: 20, 
        gap:10,
        backgroundColor:'black',
        borderRadius:10,
        padding:12,
        marginLeft:-194,
        marginBottom:20,
    },
    removeText: {
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    },
    noEntry: {
        textAlign:'center',
        marginTop:50,
        fontSize:30,
    }
  });