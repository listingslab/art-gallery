// Goldlabel
import {goldlabelConfig} from "./goldlabel/goldlabelConfig"
import {SEO} from "./goldlabel/SEO"
import App from "./goldlabel/App"
import AppShell from "./goldlabel/AppShell"

// Hooks
import {useSiteMetadata} from "./goldlabel/hooks/useSiteMetadata"
import {usePwaSelect} from "./goldlabel/hooks/usePwaSelect"
import {usePwaDispatch} from "./goldlabel/hooks/usePwaDispatch"
import {useAllMarkdown} from "./goldlabel/hooks/useAllMarkdown"
import {useBookCovers} from "./goldlabel/hooks/useBookCovers"
import {usePagesByBookslug} from "./goldlabel/hooks/usePagesByBookslug"

// Redux
import {WrapRedux} from "./goldlabel/redux/WrapRedux"
import {
  store, 
  persistor,
} from "./goldlabel/redux/store"
import {boot} from "./goldlabel/redux/actions/boot"
import {selectPWA, setPwaKey} from "./goldlabel/redux/pwaReducer"
import {onUpdate} from "./goldlabel/redux/actions/onUpdate"
import {updateHistory} from "./goldlabel/redux/actions/updateHistory"
import {notify} from "./goldlabel/redux/actions/notify"
import {navigate} from "./goldlabel/redux/actions/navigate"
import {makeFingerprint} from "./goldlabel/redux/actions/makeFingerprint"
import {resetRedux} from "./goldlabel/redux/actions/resetRedux"
import {setRoute} from "./goldlabel/redux/actions/setRoute"
import {setShare} from "./goldlabel/redux/actions/setShare"
import {toggleBooks} from "./goldlabel/redux/actions/toggleBooks"
import {togglePages} from "./goldlabel/redux/actions/togglePages"
import {toggleSettings} from "./goldlabel/redux/actions/toggleSettings"
import {toggleAccount} from "./goldlabel/redux/actions/toggleAccount"
import {toggleAddListing} from "./goldlabel/redux/actions/toggleAddListing"
import {toggleNavOpen} from "./goldlabel/redux/actions/toggleNavOpen"
import {toggleDarkmode} from "./goldlabel/redux/actions/toggleDarkmode"

// Theme
import ThemeContext from "./goldlabel/theme/ThemeContext"
import MuiTheme from "./goldlabel/theme/MuiTheme"
import {makeTheme} from "./goldlabel/theme/makeTheme"
import Icon from "./goldlabel/theme/Icon"
import {Font} from "./goldlabel/theme/Font"

// Components
import Notifyer from "./goldlabel/components/Notifyer"
import SiteHeader from "./goldlabel/components/SiteHeader"
import SiteBottom from "./goldlabel/components/SiteBottom"
import Share from "./goldlabel/components/Share"
import Books from "./goldlabel/components/Books"
import Settings from "./goldlabel/components/Settings"
import SelectTheme from "./goldlabel/components/SelectTheme"
import ShowBooks from "./goldlabel/components/ShowBooks"
import ShowPages from "./goldlabel/components/ShowPages"
import AddListing from "./goldlabel/components/AddListing"
import Pages from "./goldlabel/components/Pages"

// Inputs
import {EditableBoolean} from "./goldlabel/components/inputs/EditableBoolean"
import {InputEmail} from "./goldlabel/components/inputs/InputEmail"
import {InputPassword} from "./goldlabel/components/inputs/InputPassword"
import {InputString} from "./goldlabel/components/inputs/InputString"

// auth
import Account from "./goldlabel/auth/Account"
import {Signup} from "./goldlabel/auth/Signup"
import {Signin} from "./goldlabel/auth/Signin"
import {firebaseLogin} from "./goldlabel/auth/firebaseLogin"
import {firebaseSignout} from "./goldlabel/auth/firebaseSignout"


export { // Goldlabel
  goldlabelConfig,
  AppShell,
  App,
  SEO,
}

export { // Auth
  Account,
  Signin,
  Signup,
  firebaseLogin,
  firebaseSignout,
}

export { // Inputs
  EditableBoolean,
  InputEmail,
  InputPassword,
  InputString,
}

export { // Components
  SiteHeader,
  Notifyer,
  Share,
  Books,
  ShowBooks,
  ShowPages,
  Settings,
  SelectTheme,
  AddListing,
  SiteBottom,
  Pages,
}

export { // Theme
  ThemeContext,
  MuiTheme,
  makeTheme,
  Icon,
  Font,
}

export { // Redux
  setPwaKey,
  store,
  persistor,
  WrapRedux,
  selectPWA,
  onUpdate,
  notify,
  navigate,
  boot,
  updateHistory,
  makeFingerprint,
  resetRedux,
  setShare,
  setRoute,
  toggleBooks,
  togglePages,
  toggleSettings,
  toggleAccount,
  toggleAddListing,
  toggleNavOpen,
  toggleDarkmode,
}

export { // Hooks
  useSiteMetadata,
  usePwaDispatch,
  usePwaSelect,
  useAllMarkdown,
  useBookCovers,
  usePagesByBookslug,
}

