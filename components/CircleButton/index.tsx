import { MaterialIcons } from '@expo/vector-icons'
import { View, StyleSheet, Pressable } from 'react-native'

interface CircleButtonProps {
  onPress?: () => void
}

export default function CircleButton(props: CircleButtonProps) {
  const { onPress } = props

  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderRadius: 42,
    borderColor: '#ffd33d',
    padding: 3,
  },
  circleButton: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
  },
})
