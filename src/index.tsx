import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const SplitInput = ({
  digits = 6,
  value,
  secureTextEntry = false,
  ContentContainerStyle = {},
  inputContainerStyles = {},
  inputStyle = {},
  keyboardType = 'default',
  autoFocus = false,
  onChangeText,
  focusBorderWidth = 2,
  focusBorderColor,
  focusBackgroundColor,
}: any) => {
  const inputArray = new Array(digits).fill(0);
  const inputRef = useRef<any>();
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isFilled, setIsFilled] = useState(false);


  useEffect(() => {
    if (value.length == digits) {
      setIsFilled(true)
      inputRef.current.blur();
      setCurrentIndex(-1);
      return;
    } else {
      if (autoFocus) {
        if (!value) {
          setCurrentIndex(0);
          inputRef.current.focus();
        }
      } else if(!autoFocus && value.length!=0) {
        setCurrentIndex(value.length);
      }else if(isFilled){
        setCurrentIndex(value.length);
      }
    }
  }, [value]);

  useEffect(() => {
    let showSubscription = Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
      inputRef?.current?.blur();
    });

    return () => {
      showSubscription.remove();
    };
  }, []);

  const handleTextChange = (val: any) => {
    if (val.length > digits) {
      inputRef.current.blur();
      return;
    }
    onChangeText(val);
  };

  const handlePress = () => {
    inputRef.current.focus();

    if (currentIndex == -1 && !value) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(value.length - 1);
    }
  };
  const Input = ({index}: any) => {
    return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        key={index}
        style={{
          borderWidth: currentIndex == index ? focusBorderWidth : 2,
          padding: 10,
          width: 50,
          height: 50,
          borderColor: currentIndex == index ? focusBorderColor : null,
          backgroundColor:
            currentIndex == index ? focusBackgroundColor : 'transparent',
          ...inputStyle,
        }}>
        <Text>{value[index]}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{...ContentContainerStyle}}>
      {/* hidden Tex input */}
      <TextInput
        style={styles.hiddenInput}
        value={value}
        maxLength={digits}
        ref={inputRef}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        onChangeText={val => handleTextChange(val)}
        keyboardType={keyboardType}
      />

      <View style={[styles.inputContainer, inputContainerStyles]}>
        {inputArray.map((input, index) => (
          <Input index={index} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  hiddenInput: {
    position: 'absolute',
    width: 0,
    height: 0,
    color: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default SplitInput;
