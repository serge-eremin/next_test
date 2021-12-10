import '../styles/global.css'

export default function myApp({Component, pageProps}) {
  return(
    <div>
        <Component {...pageProps} />
    </div>
  )
}