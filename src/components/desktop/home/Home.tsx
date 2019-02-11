import React, { Component } from 'react'
import classnames from 'classnames'
import FourBodies from './FourBodies'
import ebookImg from '../../../styles/imgs/rr-ebook.jpg'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import CheckCircle from '@material-ui/icons/CheckCircle'

interface Props {classes: any}

const ebookArr = [
	'Learn more about the roots of recovery and how they transform your healing.',
	'Reflect using guided jounaling prompts designed for any stage of recovery.',
	'Empower yourself with tools for deeper self awareness, trust and compassion.'
]

class Home extends Component<Props> {

	render() {
		const {classes} = this.props
		return (
			<Grid container>

				{/* Landing Page */}
				<Grid item xs={12} className={classnames(classes.colContainer, classes.header)}>
					<div className={classes.title}>recovery roots</div>
				</Grid>
			
				{/* Four Core Bodies */}
				<FourBodies />
				
				{/* eBook Sign Up */}
				<Grid item xs={12} className={classnames(classes.ebookContainer)}>
					<Grid item xs={6} style={{height: '100%'}}>
						<div className={classes.middle}></div>
					</Grid>
					<Grid item xs={6} style={{textAlign: 'center', justifyContent: 'center', display: 'flex',}}>
						<Card className={classes.ebookCard}>
							<img src={ebookImg} height={250} width={'auto'} />
							<div className={classes.ebookTitle}><span style={{color: 'darkgray'}}>FREE</span> Recovery Workbook</div>
							<List style={{listStyleImage: `url(${CheckCircle})`}} className={classes.list}>
								{ebookArr.map((text:string)=> {
									return (
										<ListItem style={{fontStyle: 'oblique'}}>
											<ListItemIcon>
												<CheckCircle style={{fill: 'darkolivegreen'}}/>
											</ListItemIcon>
											{text}
										</ListItem>
									)
								})}
							</List>
						</Card>
					</Grid>
				</Grid>
						
			</Grid>
		)
	}
}

const styles = createStyles({
	colContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		flexFlow: 'column nowrap',
		overflow: 'hidden',
	},
	rowContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	ebookContainer: {
		display: 'flex',
		flexFlow: 'row nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		backgroundColor: 'seashell',
	},
	header: {
		// backgroundImage: 'url(https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		backgroundImage: 'url(https://images.pexels.com/photos/1702333/pexels-photo-1702333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	introContainer: {
		 display: 'flex',
	    flexFlow: 'column nowrap',
	    justifyContent: 'space-evenly'
	},
	textContainer: {
		margin: 40,
	    display: 'flex',
	    flexFlow: 'column wrap',
	    justifyContent: 'flex-start',
	},
	title: {
		fontSize: '7em',
		letterSpacing: 40,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'black',
		padding: '20px 0 20px 40px '
	},
	middle: {
		height: '100%',
		width: '100%',
		backgroundImage: 'url(https://images.pexels.com/photos/1859622/pexels-photo-1859622.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	ebookCard: {
		padding: 40,
		width: '50%',
	},
	ebookTitle: {
		fontWeight: 'bold',
		fontSize: '2em',
		letterSpacing: 3,
		padding: '20px 0 10px'
	}
})

export default withStyles(styles)(Home)