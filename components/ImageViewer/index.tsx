import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

interface ImageViewerProps {
  source: ImageSourcePropType
}

export default function ImageViewer(props: ImageViewerProps) {
  const { source } = props

  return <Image source={source} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
