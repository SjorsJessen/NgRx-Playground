export interface Book {
  id: string,
  volumeInfo: VolumeInfo
}

interface VolumeInfo {
  title: string,
  authors: Array<string>
}
