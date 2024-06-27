import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>  {/* Main Footer */}
<footer className="main-footer">
  <strong>Copyright © 2022 <Link to ="/">MyTrackBoard</Link>.</strong>
  All rights reserved.
  <div className="float-right d-none d-sm-inline-block">
    <b>Version</b> 1.0.0
  </div>
</footer>
</div>
  )
}

export default Footer