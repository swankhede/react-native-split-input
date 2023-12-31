import React, { useState } from 'react';
import(SafeAreaView) from 'react-native';
import SplitInput from 'react-native-split-input'

const App = () => {
  
  const [value,setValue]=useState<any>('')
  const handleTexChange=(val:any)=>{
   
      let reg=/^[0-9]{0,}$/
      console.log("reg",reg.test(val))
      if(reg.test(val)){
        setValue(val)
      
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <SplitInput
      digits={6}
      value={value}
      setValue={setValue}
      keyboardType={'numeric'}
      autoFocus={false}
      onChangeText={(val:any)=>handleTexChange(val)}
      focusBorderColor={'cyan'}
      focusBackgroundColor={'grey'}
      focusBorderWidth={2}
      
      />
      
    </SafeAreaView>
  );
};

export default App;