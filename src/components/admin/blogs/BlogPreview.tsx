import React, { Component } from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import TimeIcon from '@material-ui/icons/AccessTime'
import PersonIcon from '@material-ui/icons/Person'

interface Props {classes: any, blog:blog|null, user:user}
interface blog {
	id:number,
	title:string, 
    body:string, 
    headerImg:string, 
    uri:string, 
    category:string, 
    description:string, 
    render:boolean, 
    userId:number,
    createdAt:Date
}
interface user {
	firstName:string
	lastName:string
	email:string
}

class BlogPreview extends Component<Props> {
	render() {
		const {classes, blog, user} = this.props
		console.log(blog)
		if (blog) {
			return (
				<div className={classes.markdownDisplay} >
					<div>
						<img src={blog.headerImg} className={classes.img}/>
					</div>
					<div className={classes.title}>{blog.title}</div>
					<div className={classes.subHeader}>
						<PersonIcon style={{fill: 'black', marginRight: 5}}/>
						{user.firstName} {user.lastName}
						<TimeIcon style={{fill: 'black', margin: '0 5px 0 15px'}}/> 
						{moment(blog.createdAt).format("MMM Do YYYY")}
					</div>
					
					<ReactMarkdown source={blog.body}/>
				</div>
			)
		}
	}
}

const styles = createStyles({
	markdownDisplay: {
		display: 'flex',
		flexFlow: 'column nowrap',
		padding: 20,
	},
	img: {
		height: 'auto',
		width: '100%',
		borderRadius: 15,
	},
	title: {
		fontWeight: 'bold',
		fontSize: '3em',
		marginTop: 20,
	},
	subHeader: {
		textTransform: 'capitalize',
		margin: '20px 0 40px',
		display: 'flex',
		alignItems: 'center'
	}
})

export default withStyles(styles)(BlogPreview)