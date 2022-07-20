import Header from './Header.js'
import Footer from './Footer.js'

export default function Main({ children }){
	return(
		<>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</>
	)
}