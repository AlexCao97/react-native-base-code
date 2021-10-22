import * as yup from 'yup';
import {Formik} from 'formik';

import React, {useState} from 'react';
import {View} from 'react-native';
import styles from 'scenes/Home/Home.styles';
import {Button, HelperText, TextInput, useTheme} from 'react-native-paper';
import {capitalize} from 'lodash';

const HomeView = () => {
  const {colors} = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => {
        console.log('values', values);
      }}
      onReset={({resetForm}) => {
        resetForm();
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
        handleReset,
      }) => (
        <View style={styles(colors).main}>
          <TextInput
            label="E-mail"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            mode="outlined"
            left={<TextInput.Icon name="account" />}
          />
          <HelperText type="error" visible={touched.email && errors.email}>
            {capitalize(errors.email)}
          </HelperText>
          <TextInput
            label="Password"
            mode="outlined"
            value={values.password}
            secureTextEntry={!showPassword}
            onBlur={() => setFieldTouched('password')}
            onChangeText={handleChange('password')}
            right={
              <TextInput.Icon
                name={!showPassword ? 'eye' : 'eye-off'}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              />
            }
            left={<TextInput.Icon name="lock" />}
          />
          <HelperText
            type="error"
            visible={touched.password && errors.password}>
            {capitalize(errors.password)}
          </HelperText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Button
              icon="camera"
              mode="outlined"
              disabled={!isValid}
              style={{
                width: '45%',
              }}
              onPress={handleSubmit}>
              Sign In
            </Button>
            <Button
              icon="camera"
              mode="outlined"
              onPress={handleReset}
              style={{
                width: '45%',
              }}
              disabled={!isValid}>
              Reset
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default HomeView;
