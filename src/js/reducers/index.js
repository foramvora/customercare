import { combineReducers } from "redux"

import contractDetails from "./contractReducer"
import submitDetails from "./submitReducer"
//import omniDetails from "./omniReducer"
import bannerDetails from "./bannerReducer"
import contentDetails from "./contentReducer"
import complaintHistory from "./complaintHistoryReducer"
import staffComplaint from "./staffComplaintReducer"
import blockUnblock from "./blockUnblockMobileReducer"
import activePanel from "./accountComplaintsReducer"
import jdrrCertificate from "./jdrrReducer"

export default combineReducers({
  contractDetails,
  submitDetails,
  //omniDetails,
  contentDetails,
  bannerDetails,
  complaintHistory,
  staffComplaint,
  blockUnblock,
  activePanel,
  jdrrCertificate,
})