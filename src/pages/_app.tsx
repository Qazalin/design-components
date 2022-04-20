import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/lato"
import "@fontsource/raleway"
import { theme } from "../../ui"
import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
