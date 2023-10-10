

import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './CustomSafeView.style'


interface Props{
    children : ReactNode
}

const CustomSafeView : React.FC<Props> = ({children}) => {
  return (

    <SafeAreaView style={styles.SafeViewContainer}>
        {children}
    </SafeAreaView>

  )
}
export default CustomSafeView