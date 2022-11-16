import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: string
      orange: string
      white: string 
      lightBlue: string
      darkBlue: string
    }
  }
}
