import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component
{
	render(){
		const { pathname } = this.props.location;
		const { handleNavClick } = this.props;
		const defaultActive = pathname === '/' ? "active-nav" : "";
		
		return(
					<ul className="navigation-list">
						<li className="navigation-item" data-target-tab="cms_mycontract" onClick={handleNavClick}>
							<Link activeClassName={defaultActive} to="/">all about my contract</Link>
						</li>
						<li className="navigation-item" data-target-tab="cms_jdomni" onClick={handleNavClick}>
							<Link activeClassName="active-nav" to="/JDomni">JD Omni</Link>
						</li>
						<li className="navigation-item" data-target-tab="cms_yourcontents" onClick={handleNavClick}> 
							<Link activeClassName="active-nav" to="/ManageContent">{<div>Manage your contents<span className="small-title">(photos, logo, video & menu)</span></div>}</Link>
						</li>
						<li className="navigation-item" data-target-tab="cms_banner" onClick={handleNavClick}>
							<Link activeClassName="active-nav" className={(pathname.indexOf('KnowBanner') !== -1) ? "active-nav":""} to="/KnowBanner">All you want to know about the banner</Link>
						</li>
						<li className="navigation-item" data-target-tab="cms_jdrr" onClick={handleNavClick}>
							<Link activeClassName="active-nav" to="/KnowJDRR">All you want to know about the JDRR</Link>
						</li>
						<li className="navigation-item" data-target-tab="cms_myaccount" onClick={handleNavClick}>
							<Link activeClassName="active-nav" to="/ComplaintsAboutAccount">complaints about my account</Link>
						</li>
						<li className="navigation-item" data-target-tab="cms_hrd" onClick={handleNavClick}>
							<Link activeClassName="active-nav" to="Feedback">how are we doing</Link>
						</li>
					</ul>
				
		);
	}
}
