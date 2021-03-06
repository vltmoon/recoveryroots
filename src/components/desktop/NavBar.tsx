import React, { Component, Fragment } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import classnames from 'classnames'
import Home from './home/Home'
import About from './About'
import Blogs from './blogs/Blogs'
import Blog from './blogs/Blog'
import Contact from './Contact'
import Community from './Community'
import Footer from '../Footer'
import PDFViewer from '../PDFViewer'
import logo from '../../styles/imgs/transparent-logo.png'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

interface Props {classes: any, history:any}
interface State {}

class NavBar extends Component<Props, State> {

	state = {
		scroll: 0
	}

	componentDidMount() {
		window.addEventListener('scroll', ()=> this.setState({scroll: window.scrollY}) )
	}




	render() {
		const {classes, history} = this.props
		const path = history.location.pathname
		return (
			<Fragment>
				<div className={this.state.scroll > 0 ? classnames(classes.navbar, classes.scrolled) : classes.navbar} >
						<Link
							to='/about' 
							className={path === '/about' ? 
							classnames(classes.link, classes.path)
							: classes.link}
						>
							about
						</Link>
						<Link 
							to='/contact'
							className={path === '/contact' ? 
							classnames(classes.link, classes.path)
							: classes.link}
						>
							contact
						</Link>
						<Link 
							to='/'
							className={path === '/' ? 
							classnames(classes.link, classes.path)
							: classes.link}
						>
							<img height={25} src={logo}/>
						</Link>
						<Link 
							to='/community'
							className={path === '/community' ? 
							classnames(classes.link, classes.path)
							: classes.link}
						>
							community
						</Link>
						<Link 
							to='/blog'
							className={path === '/blog' ? 
							classnames(classes.link, classes.path)
							: classes.link}
						>
							blog
						</Link>
					
				</div>
				<div className={classes.contentContainer}>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/blog' exact component={Blogs} />
					<Route path='/blog/:uri' component={Blog} />
					<Route path='/community' component={Community} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/disclaimer' exact render={()=> <PDFViewer type={'disclaimer'}/>} />
					<Route path='/privacy-policy' exact render={()=> <PDFViewer type={'privacy'}/>} />
					<Route path='/terms-and-conditions' exact render={()=> <PDFViewer type={'terms'}/>} />
					<Footer />
				</div>
			</Fragment>
		)
	}
}

const styles = createStyles({
	contentContainer: {
		display: 'flex',
		flexFlow: 'column wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	navbar: {
		position: 'fixed',
		paddingTop: 10,
		width: '100%',
		display: 'flex',
		flexFlow: 'row nowrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		fontSize: '.8em',
	},
	btn: {
		backgroundColor: 'chocolate',
		textTransform: 'lowercase',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
		paddingBottom: 3,
	},
	path: {
		borderBottom: '1px solid black',
	},
	scrolled: {
		backgroundColor: 'rgba(0,0,0,.1)',
		paddingBottom: 10,
		zIndex: 1
	}
})

export default withStyles(styles)(NavBar)