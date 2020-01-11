import React from "react"
/* Third-Party */
import { Link } from "react-router-dom";
import * as typeformEmbed from '@typeform/embed'
import injectSheet from 'react-jss'
/* Utils */
import Typography from "utils/typography/typography"
import SocialIcons from "utils/social-icons/social-icons"
/* Images */
import logo from "./logo.svg"

const styles = theme => ({
  footer: {
    padding: {
      top: 60,
      right: 150,
      bottom: 60,
      left: 150
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    color: '#FFFFFF'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    padding: {
      top: 36
    }
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    padding: {
      top: 36
    },
    borderTop: '1px solid rgba(255, 255, 255, 0.25)'
  },
  sitemap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: {
      right: '5%',
      bottom: 40,
      left: '5%',
    }
  },
  list: {
    margin: 0,
    padding: {
      top: 0,
      right: 40,
      bottom: 0,
      left: 40
    },
    "& a": {
      display: 'block',
      margin: {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0
      },
      color: 'inherit',
      transition: 'opacity 0.6s ease-in-out',
      "&:hover": {
        opacity: 0.7
      }
    }
  },
  legal: {
    "& a": {
      color: 'inherit',
      textDecoration: 'none',
      "&:first-child": {
        "&:after":  {
          content: '"/"',
          margin: {
            top: 0,
            right: 10,
            bottom: 0,
            left: 10
          }
        }
      }
    }
  },
  icons: {
    padding: {
      top: 24,
      bottom: 24
    }
  },
  noSpace: {
    margin: 0,
    padding: 0
  },
  "@media (max-width: 768px)": {
    footer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40
    },
    top: {
      flexDirection: 'column'
    },
    bottom: {
      flexDirection: 'column'
    },
    sitemap: {
      padding: {
        top: 10,
        right: 0,
        bottom: 10,
        left: 0
      }
    },
    list: {
      padding: {
        top: 0,
        right: 40,
        bottom: 0,
        left: 0
      }
    },
    legal: {
      padding: {
        bottom: 10
      }
    }
  }
})

const Footer = ({
  classes
}) => {

  const phone = '(830) 321-0359'
  const email = 'hello@pixoulinc.com'

  const openReferralForm = () => {
    typeformEmbed.makePopup('https://pixoulinc.typeform.com/to/rzapFB', {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true
    })
  }

  return(
    <footer className={classes.footer}>
      <div className={classes.top}>
          <div className={classes.brand}>
            <img src={logo} alt={logo}/>
            <Typography variant="body2" color="white" opacity={0.5}>
              We match industry leaders with top-tier designers, developers, and project managers on demand.
            </Typography>
            <div className={`${classes.list} ${classes.noSpace}`}>
               <Typography variant="caption" component="a" href={`mailto:${email}`}>Email: {email}</Typography>
               <Typography variant="caption" component="a" href={`tel:${phone}`}>Phone: {phone}</Typography>
            </div>
          </div>

          <div className={classes.sitemap}>
            <div className={classes.list}>
              <Typography variant="caption" weight="bold">Pixoul, Inc.</Typography>
              <Typography variant="caption" component={Link} to={'/home'}>Home</Typography>
              <Typography variant="caption" component={Link} to={'/about'}>About</Typography>
              <Typography variant="caption" component={Link} to={'/faq'}>FAQ</Typography>
            </div>

            <div className={classes.list}>
              <Typography variant="caption" weight="bold">Solution</Typography>
              <Typography variant="caption"component={Link} to={'/talent'}>Talent</Typography>
              <Typography variant="caption" component={Link} to={'/process'}>Process</Typography>
            </div>

            <div className={classes.list}>
              <Typography variant="caption" weight="bold">Resources</Typography>
              <Typography variant="caption" component="a" onClick={openReferralForm}>Referrals</Typography>
            </div>
          </div>

          <div className={classes.social}>
            <Typography variant="caption" opacity={0.5}>Follow Us:</Typography>
            <div className={classes.icons}><SocialIcons /></div>
          </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.legal}>
          <Typography variant="overline" opacity={0.5} component={Link} to={'/terms'}>Terms and Conditions</Typography>
          <Typography variant="overline" opacity={0.5} component={Link} to={'/privacy-policy'}>Privacy Policy</Typography>
        </div>
        <Typography variant="overline" opacity={0.5}>
          &#169; 2020 Pixoul, Inc.  All rights reserved.
        </Typography>
      </div>

    </footer>
  )
}

// This goes inside the resources list under sitemap once blog is ready
//<Typography variant="caption" component={Link} to={'/blog'}>Blog</Typography>

export default injectSheet(styles)(Footer)
