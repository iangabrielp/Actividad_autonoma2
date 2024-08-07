import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { InputComponents } from '../components/InputComponents'
import { styles } from '../theme/app.theme'
import { ButtonComponent } from '../components/ButtonComponents'

export const Pantalla2Screens = () => {

  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const divide = () => {
    const numerador = parseFloat(num1);
    const denominador = parseFloat(num2);

    if (isNaN(numerador) || isNaN(denominador)) {
      setResult('Por favor, ingrese números válidos');
      return;
    }

    if (numerador === 0 && denominador === 0) {
      setResult('INDETERMINACIÓN');
    } else if (denominador === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      const divisionResult = numerador / denominador;
      setResult(divisionResult.toString());
    }
  };
  return (
    <View >
      <View>
        <Text style={styles.title}>Vamos a Dividir</Text>
      </View>
      <View style={styles.contentInput}>
        <InputComponents input='Numero 1' value={num1} onChange={setNum1} />
        <InputComponents input='Numero 2' value={num2} onChange={setNum2} />
      </View>
      <ButtonComponent textButton='Dividir' onPress={divide} />
      {result !== null && <Text style={styles.result}> Total: {result}</Text>}
    </View>
  )
}

