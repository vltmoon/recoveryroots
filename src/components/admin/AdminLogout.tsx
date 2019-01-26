import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setUser } from '../../actions/userAction'
import { setBlog } from '../../actions/blogAction'

interface Props {setUser:any, setBlog:any}
interface State {}

interface user {firstName:string, lastName:string, email:string}
const user:user = {firstName: '', lastName: '', email: ''}

class Logout extends Component<Props, State> {
	render() {
		window.localStorage.removeItem('app-token')
		this.props.setBlog([])
		this.props.setUser({})
		return <Redirect to='/admin/login' />
	}
}

const mapDispatchToProps = {setUser, setBlog}
export default connect(null, mapDispatchToProps)(Logout)