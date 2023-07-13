import { useState } from 'react'
import { FlatList, Platform, Pressable, Text, StyleSheet } from 'react-native'

interface EmojiListProps {
  onSelect: (emoji: string) => void
}

export default function EmojiList(props: EmojiListProps) {
  const { onSelect } = props
  const [emoji] = useState(['✂️', '👆🏻', '🍚', '💯', '🐸', '✋🏻', '🎆'])

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable onPress={() => onSelect(item)}>
            <Text key={index} style={styles.text}>
              {item}
            </Text>
          </Pressable>
        )
      }}
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 100,
    marginRight: 20,
  },
})
