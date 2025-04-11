import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#ebe3d8',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Add some padding at the bottom
  },
  backButton:{
    marginTop:60,
    marginLeft:20,
  },
  inner: {
    flex: 1,
    marginTop:20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize:25,
    fontWeight:'bold',
  },
  cameraBtn: {
    justifyContent:'center',
    alignItems:'center',
    padding: 12,
    backgroundColor: 'white',
    borderWidth:10,
    borderColor:'#ffbb00',
    borderRadius: 50,
    marginBottom: 20,
    width: 100,
    height:100,
  },
  buttonSave: {
    padding: 12,
    backgroundColor: '#ffbb00',
    borderRadius:20,
    marginTop: 20,
    width: '50%',
    borderWidth:2,
  },
  buttonSaveDisabled: {
    backgroundColor: 'rgba(179, 143, 0, 0.16)', // darker yellow when disabled
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imgWithDetailsContainer: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
  },
  imageContainer: {
    marginTop:20,
    width: 300,
    height: 250,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#1e1e1e',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#999',
    fontWeight:'300',
    fontSize:16,
  },
  addressText: {
    marginTop:10,
    fontSize: 20,
    color: '#444',
    marginBottom: 10,
  },
  input: {
    marginTop:15,
    borderWidth:2,
    width: '90%',
    height: 100,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    textAlignVertical: 'top',
  },
});

export default styles;
