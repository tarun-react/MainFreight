import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CustomButton from "AppLevelComponents/UI/CustomButton";
import { withNavigation } from 'react-navigation';
class SubmitBackBtn extends Component {

  navigateback = () => {
    this.props.navigation.goBack()
  }

  submit = () =>{
    alert('submit')
  }

  renderHorizontal(){
    return(
      <>


                <CustomButton
                  containerStyle={styles.btn}
                  buttonStyle={styles.btn}
                  btnType="white"
                  onPress={this.navigateback}
                  text="back"
                />

<CustomButton
                  containerStyle={styles.btn}
                  buttonStyle={styles.btn}
                  onPress={()=> onSubmit && onSubmit()}
                  text="submit"
                />

                </>
    )
  }

  renderVeritical(){
    return(
      <>
<CustomButton
                 containerStyle={styles.btn}
                  buttonStyle={styles.btn}
                  onPress={()=> onSubmit && onSubmit()}
                  text="submit"
                />

                <CustomButton
                  containerStyle={styles.btn}
                  buttonStyle={styles.btn}
                  btnType="white"
                  onPress={this.navigateback}
                  text="back"
                />
                </>
    )
  }
    render() {
      const {horizontal,onSubmit} = this.props
      let styles = horizontal ? {flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',} : {}
        return (
            <View style={styles} >
                  {horizontal ? this.renderHorizontal() : this.renderVeritical()}
                </View>
        )
    }
}

const styles = {
  btn:{
    marginTop:5,
    width:'70%',
    height:35,
    marginBottom:30,
    alignSelf: 'center',
  }
}

export default withNavigation(SubmitBackBtn)
