import React from 'react'
import { Button, StatusBar, Text, View } from 'react-native'

function StatusBarExemple() {
  return (
    <View>
        <StatusBar backgroundColor={'gray'} barStyle={'light-content'} hidden={false} animated={true}/>
        <Button title='red' onPress={()=>StatusBar.setBackgroundColor('red')}/>
        <Button title='gray' onPress={()=>StatusBar.setBackgroundColor('gray')}/>
        <Button title='Hide' onPress={()=>StatusBar.setHidden(true)}/>
        <Button title='Show' onPress={()=>StatusBar.setHidden(false)}/>
        <Button title='Dark' onPress={()=>StatusBar.setBarStyle('dark-content')}/>
        <Button title='Light' onPress={()=>StatusBar.setBarStyle('light-content')}/>
    </View>
  )
}

export default StatusBarExemple