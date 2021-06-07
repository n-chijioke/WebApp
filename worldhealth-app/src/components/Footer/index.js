import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterLink, 
    FooterLinkItems, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkTitle, 
    FooterWrap, 
    SocialIconLink, 
    SocialIcons, 
    SocialLogo, 
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Videos</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        cyjroxweb:  
                        </SocialLogo>
                        <WebsiteRights>cyjrox o { new Date().getFullYear() } 
                        All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="//www.twitter.com/briandesignz" target="_blank" 
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
    );
};

export default Footer;
