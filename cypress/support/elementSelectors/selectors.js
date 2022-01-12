  
  export default {
  // Login Window
   LOGIN_USERNAME: '#LoginUsername',
   LOGIN_PASSWORD: '[data-bind="value: Password"]',
   LOGIN_FORGETPSWD: '[data-bind="click: HideLoginTroublePopup"]',
   LOGIN_SUBMIT:'[data-bind="disable: ShowLockoutTime"]',
   //LOGIN_WARNING :'#lbContinue',

   //Educator WelcomePage
   NAV_REPORTS:'Reports',
   CLICK_LOGOUT:'[title="Sign Out"]',


   //ReportsDropDown
   NAV_ATTENDANCELOG :'Attendance Log',

   //AttendanceLog
   DROPDOWN_GROUPS :'#ctl00_conBody_drpGroups',
   TABLE_STUDENT : '#ctl00_conBody_dtgLog >tbody>tr>td',

   //Student WelcomePage
   LOGIN_WARNING : '#btnContinue',
   CLICK_LOGOUT_OPTION : 'Logout',
   HEADER_TITLE : '[data-toggle="dropdown"]',

    //Inst and Stud Trouble Login error Message,
    LOGIN_ERROR_MESSAGE : '#loginTrouble>div>p'

  }
