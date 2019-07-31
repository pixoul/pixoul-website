import { connect } from 'react-redux'
import { toggleMenu } from "./actions"

import Menu from "./menu"
import "./styles.scss"

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.navigation.open,
    links: state.navigation.links
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleMenu: (open) => {
      dispatch(toggleMenu(open))
    }
  }
}

const NavigationMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default NavigationMenu
