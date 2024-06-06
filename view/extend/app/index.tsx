import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Index() {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? 
      (<></>) 
      : (
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
          <View style={styles.container}>
            <KeyboardAwareScrollView>
              <View style={styles.header}>
                <Image
                  alt="App Logo"
                  resizeMode="contain"
                  style={styles.headerImg}
                  source={{
                    uri: 'https://assets.withfra.me/SignIn.2.png',
                  }} />

                <Text style={styles.title}>
                  <Text style={{ color: '#075eec' }}>Extend</Text>
                </Text>

                <Text style={styles.subtitle}>
                </Text>
              </View>

              <View style={styles.form}>
                {/* <View style={styles.input}>
                  <Text style={styles.inputLabel}>邮箱地址</Text>

                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={email => setForm({ ...form, email })}
                    placeholder="john@example.com"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.email} />
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>密码</Text>

                  <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={password => setForm({ ...form, password })}
                    placeholder="********"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    value={form.password} />
                </View> */}

                <View style={styles.formAction}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('press!');
                      setLogin(true)
                    }}>
                    <View style={styles.wechatBtn}>
                      <Text style={styles.btnText}>微信登陆</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAwareScrollView>

            {/* <TouchableOpacity
              onPress={() => {
                // handle link
              }}
              style={{ marginTop: 'auto' }}>
              <Text style={styles.formFooter}>
              忘记密码 ?{' '}
                <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
              </Text>
            </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      </>
    )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: '100%'
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: '100%',
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  // wechat button
  wechatBtn: {
    marginTop: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
});