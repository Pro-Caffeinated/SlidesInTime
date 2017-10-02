import React, { Component } from 'react';
import '../css/style.css';
import { Link } from 'react-router'
import { Button, ButtonGroup} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Start extends Component{
	constructor() {
		super();
		this.state = {
			theme: 'light',
			submit: 'primary'
		};
		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme(name){
		this.setState({
			theme: name,
			submit: 'default'
		});
		if (name == 'light'){
			this.setState({
				submit: 'primary'
			});
		}
		else if (name == 'dark'){
			this.setState({
				submit: 'success'
			});
		}
		else if (name == 'yellow'){
			this.setState({
				submit: 'danger'
			});
		}
		else if (name == 'blue'){
			this.setState({
				submit: 'default'
			});
		}
	}

	render() {
		let theme = this.state.theme;
		let bgTheme = 'dark';
		if (theme == 'dark' || theme == 'blue' || theme == 'black'){
			bgTheme = 'light'
		}
		return (
			<div className={'StartPage ' + bgTheme}>
				<div className={'SlideView ' + this.state.theme}>
					<div className={'SlideContent dark' + this.state.theme}>
						<div className='TitleView'>
							<h1>Slides In Time</h1>
							<h3>Literally reading off the slides</h3>
							<br/>
							<h5>Select Theme</h5>
							<div className='themeSelect'>
								<ButtonGroup>
								    <Button className={(this.state.theme === 'light') ? 'active' : ''} onClick={() => this.changeTheme('light')}>Light</Button>
								    <Button className={(this.state.theme === 'dark') ? 'active' : ''} onClick={() => this.changeTheme('dark')}>Dark</Button>
								    <Button className={(this.state.theme === 'blue') ? 'active' : ''} onClick={() => this.changeTheme('blue')}>Blue</Button>
								    <Button className={(this.state.theme === 'black') ? 'active' : ''} onClick={() => this.changeTheme('black')}>Black</Button>
								    <Button className={(this.state.theme === 'yellow') ? 'active' : ''} onClick={() => this.changeTheme('yellow')}>Yellow</Button>
								</ButtonGroup>
							</div>
							<br/><br/>
							<LinkContainer to={'/slides/' + this.state.theme + '/'}>
							  <Button bsStyle={this.state.submit}>Start</Button>
							</LinkContainer>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Start;
