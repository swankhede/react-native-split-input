# react-native-split-input

otp input for react native

## Installation

```sh
npm install react-native-split-input
```

## Usage

```js
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
```
List of Available Props



| Prop Name             | Default Value  | Description                                                   |
|-----------------------|-----------------|---------------------------------------------------------------|
| `digits`              | 6               | Number of input fields (split digits)                        |
| `value`               | -               | The current input value                                      |
| `secureTextEntry`     | false           | Enable secure text entry (e.g., for PIN entry)               |
| `ContentContainerStyle` | {}           | Style for the container of the entire component              |
| `inputContainerStyles` | {}           | Style for the container of individual input fields           |
| `inputStyle`          | {}              | Style for each input field                                   |
| `keyboardType`        | 'default'       | Keyboard type for the input fields (e.g., 'numeric', 'email') |
| `autoFocus`           | false           | Automatically focus the first input field                    |
| `onChangeText`        | -               | Callback function to handle text changes in the input fields |
| `focusBorderWidth`    | 2               | Width of the border when an input field is focused           |
| `focusBorderColor`    | -               | Color of the border when an input field is focused           |
| `focusBackgroundColor` | -              | Background color when an input field is focused              |
| `inputTextStyle`      | {}              | Style for the text within the input fields                   |

table is created with the ChatGPT
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
