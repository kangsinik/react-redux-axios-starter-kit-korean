import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const styles = {
  mainBodyStyle: {
    // height: 'calc( 100vh - 30px )',
    minHeight: 'calc( 100vh - 30px )',
    padding: '15px 30px 30px 30px',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
}

export const CoreLayout = ({children}) => (
  <div>
    <Header />
    <div style={styles.mainBodyStyle}>
      <div style={{marginTop: '100px'}}>
        {children}
      </div>
    </div>
    <div style={{width: '100%', height: '30px'}}>
      <Footer />
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
