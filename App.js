import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from './database';
export default class App extends Component{
    constructor(){
super();
this.state={
text:'',
isSearchedPressed:false,
word:'',
lexicalCategory:'',
definition:""
}
    }
    getWord=(text)=>{
        var text = text.toLowerCase()
        try{
            var word=dictionary[text]["word"]
            var lexicalCategory=dictionary[text]["lexicalCategory"]
            var definition= dictionary[text]["defintion"]
            this.setState({
                "word" : word,
                "lexicalCategory" : lexicalCategory,
                "definition" : definition


            })
        }
        catch(err){
            alert("Sorry This word is not available for now")
            this.setState({
                'text':'',
                'isSearchPressed':false
            })
        }
    }







   
render(){
return(
    <View style={styles.container}>

<Header
backgroundColor={'#9c8210'}
centerComponent={{
    text:'Dictionary App',
    style:{color:'#fff', fontSize:20},
}}
/>

        <View style={styles.inputBoxContainer}>
<TextInput
var 
style={styles.inputBox}
onChangeText={text => {
this.setState({
text:text,
isSearchePressed:false,
word:"Loading...",
lexicalCategory:'',
examples:[],
definition:""
});
}}
value={this.state.text}
/>
</View>

    

<TouchableOpacity
style={styles.SearchButton}
onPress={() => {
this.setState({isSearchedPressed:true});
this.getWord(this.state.text)
}}>
    <Text style={styles.buttonText}>Search</Text>
</TouchableOpacity>





<View style={styles.detailsContainer}>
    <Text style={styles.detailsTitle}>
        Word:{""}
    </Text>
    <Text style={{fontSize:18}}>
        {this.state.word}
    </Text>
</View>

<View style={styles.detailsContainer}>
    <Text style={styles.detailsTitle}>
        Type:{""}
    </Text>
    <Text style={{fontSize:18}}>
        {this.state.lexicalCategory}
    </Text>
</View>   

<View style={{flexDirection:'row',flexWrap:'wrap'}}>
    <Text style={styles.detailsTitle}>
        Definition:{""}
    </Text>
    <Text style={{fontSize:18}}>
        {this.state.definition}
    </Text>
</View>   


    


</View>
);
}
}




const styles = StyleSheet.create({
container: {
flex:1
},
inputBoxContainer: {
flex:0.3,
alignItems:'center',
justifyContent:'center'
},
inputBox: {
    width:'80%',
    alignSelf:'center',
    height:40,
    marginTop:100,
    textAlign:'center',
    borderWidth:4,
    outline:'none'
},
SearchButton: {
width:'50%',
height:55,
alignSelf:'center',
padding:10,
margin:10,
},
buttonText:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
},
detailsContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
},
detailsTitle:{
    textAlign:"center",
    fontSize:30,
    color:"white",
}
})
