{"version":3,"sources":["Google.js","App.js","serviceWorker.js","index.js"],"names":["Google","require","state","isLoggedIN","isLoggedINtwitter","isLoggedINgoogle","isLoggedINfacebook","email","name","image","nameF","nametwitter","imageurl","emailfb","lastContent","Twitterlogin","Googlelogin","logout","fbContent","content","responseGoogle","response","console","log","setState","profileObj","imageUrl","this","className","onClick","style","justifyContent","margin","alignItems","alt","src","width","height","marginTop","marginBottom","fontSize","appId","autoLoad","fields","callback","picture","cssClass","icon","marginLeft","textButton","clientId","render","renderProps","disabled","onSuccess","buttonText","onFailure","authCallback","err","screen_name","consumerKey","consumerSecret","callbackUrl","children","id","Component","App","React","Boolean","window","location","hostname","match","ReactDOM","StrictMode","document","getElementById","navigator","serviceWorker","ready","then","registration","unregister","catch","error","message"],"mappings":"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","file":"static/js/main.74aae43e.chunk.js","sourcesContent":["import React, { Component } from 'react';\r\nimport {GoogleLogin } from 'react-google-login'\r\nimport TwitterLogin from 'react-twitter-login'\r\nimport FacebookLogin from 'react-facebook-login'\r\nvar FontAwesome = require('react-fontawesome')\r\n\r\nclass Google extends Component{\r\n  state={\r\n    isLoggedIN:false,\r\n    isLoggedINtwitter: false,\r\n    isLoggedINgoogle: false,\r\n    isLoggedINfacebook:false,\r\n    email: \"\",\r\n    name:\"\",\r\n    image:\"\",\r\n    nameF:\"\",\r\n    nametwitter:\"\",\r\n    imageurl:\"\",\r\n    emailfb:\"\"\r\n\r\n  }\r\n   render(){\r\n     let lastContent\r\n    let Twitterlogin,navbar\r\n    let Googlelogin,logout\r\nlet fbContent,content\r\n\r\nlet responseFacebook=(response) => {\r\n  this.setState({\r\n      isLoggedIN:true,\r\n      isLoggedINfacebook:true,\r\n      nameF: response.name,\r\n      imageurl:response.picture,\r\n      email:response.emailfb\r\n\r\n   })\r\n}\r\n\r\n\r\n\r\n\r\n    const  authHandler= (err,response)=>{\r\n          console.log(err,response)\r\n          this.setState({\r\n              isLoggedINtwitter:true,\r\n              isLoggedIN:true,\r\n              nametwitter:response.screen_name\r\n          })\r\n      }\r\n\r\n\r\n\r\n      const responseGoogle = (response) => {\r\n        console.log(response)\r\n        \r\n        this.setState({\r\n          isLoggedINgoogle:true,\r\n          isLoggedIN:true,\r\n          name: response.profileObj.name,\r\n          email:response.profileObj.email,\r\n          image:response.profileObj.imageUrl\r\n       \r\n        })\r\n      }\r\n      logout=()=>{\r\n        this.setState({\r\n          isLoggedIN:false,\r\n          isLoggedINgoogle:false,\r\n          isLoggedINtwitter:false,\r\n          isLoggedINfacebook:false\r\n        })\r\n      }\r\n\r\n   \r\n\r\n\r\n\r\n\r\n      if(this.state.isLoggedINtwitter){\r\n        Twitterlogin=(\r\n          <div >\r\n              <h4>Welcome {this.state.nametwitter}</h4>\r\n\r\n                    <button className=\"btn btn-danger\" onClick={logout}>Logout</button>\r\n\r\n          </div>\r\n      )\r\n      }\r\n\r\n\r\n\r\n    if(this.state.isLoggedINgoogle){\r\n    \r\n      Googlelogin=(\r\n          <div className=\"aftergooglelogin\">\r\n            <h4 style={{justifyContent:\"center\",margin:\"0\"}}>Welcome {this.state.name}</h4>\r\n            <img style={{alignItems:\"center\"}} className=\"googleimg\" alt={this.state.name} src={this.state.image} style={{width:\"150px\",height:\"150px\"}} />\r\n            <div>\r\n            <button  className=\"btn btn-danger\" onClick={logout} style={{marginTop:\"10px\",marginBottom:\"10px\"}}>Logout</button>\r\n            \r\n              </div>\r\n            </div>\r\n        )  \r\n  }\r\n\r\n\r\nif(this.state.isLoggedINfacebook){\r\n  fbContent=(\r\n    <div>\r\n      <h4>Welcome {this.state.nameF}</h4>\r\n      <div>\r\n        <p>{this.state.email}</p>\r\n        </div>\r\n    <button className=\"btn btn-danger\" onClick={logout}>Logout</button>\r\n            \r\n    </div>\r\n  )\r\n}\r\n\r\n\r\n\r\nif(!this.state.isLoggedIN){\r\n  \r\n  \r\n   \r\n  content=(\r\n    <div className=\"content \" style={{fontSize:\"20px\"}}>\r\n        \r\n        Choose any one login method to get your Credentials\r\n   \r\n      </div>\r\n  )\r\n  \r\n  fbContent=(\r\n    <div >\r\n    <FacebookLogin\r\n    appId=\"2829196113969850\"\r\n    autoLoad={false}\r\n    fields=\"name,email,picture\"\r\n    callback={responseFacebook}\r\n    cssClass=\"btnFacebook\"\r\n    icon={<i className=\"fa fa-facebook\" style={{marginLeft:'5px'}}>\r\n    </i>}\r\n    textButton = \"&nbsp;&nbsp;Sign In with Facebook\"        \r\n    />\r\n</div>    \r\n    \r\n    \r\n    )\r\n    \r\n \r\n   \r\n  Googlelogin=(\r\n <GoogleLogin\r\n    clientId=\"994413254701-1f6ok1focicpgreh4m2d7v2166p9urcb.apps.googleusercontent.com\"\r\n    render={renderProps => (\r\n      <button className=\"btnGoogle\" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className=\"fa fa-google-plus\" style={{ marginLeft: \r\n        '5px' }}/> \r\n        <span>&nbsp;&nbsp;Sign In with Google</span>                                                               \r\n </button>\r\n    )}\r\n    onSuccess={responseGoogle}\r\n    buttonText=\"Login with Google\"\r\n    onFailure={responseGoogle}\r\n  />\r\n     \r\n        \r\n    \r\n    )\r\n   \r\n  \r\n  Twitterlogin=(\r\n   \r\n    <TwitterLogin\r\n    authCallback={authHandler}\r\n    consumerKey={\"W4c3Zfyt1Q1MCuzKk5ps5SuSm\"}\r\n    consumerSecret={\"JjzOVXAn56a6vuGFJzPHrc9a0alKQq1HRvG0iD1bFzcHJOy974\"}\r\n    callbackUrl={\"https://pavang707.github.io/login\"}\r\n    children={<button className=\"btntwitter\"><i className=\"fa fa-twitter\" style={{ marginLeft: \r\n      '5px' }}/>\r\n       <span>&nbsp;&nbsp;Sign In with Twitter</span>\r\n      </button>}\r\n      \r\n  /> \r\n  )\r\n  \r\n\r\n    \r\n\r\n  lastContent=(\r\n    <div id=\"lastcontent\" style={{fontSize:\"15px\" ,alignItems:\"center\"}}>\r\n      By Continuing your agree to our <b >Terms and Condition</b>\r\n      \r\n      </div>\r\n  )\r\n \r\n    }\r\n//finish isloggedin false\r\n      \r\n\r\n    return(\r\n\r\n   <div className=\"jumbotron \" id=\"whole\">\r\n       \r\n           \r\n       {content}    \r\n   \r\n    <div className=\"row\">\r\n    <div className=\"col-12 \"id=\"cr7\">\r\n      {Googlelogin}       \r\n  \r\n     </div> \r\n     <div className=\"col-12 google\"id=\"cr7\">\r\n   \r\n     {fbContent}\r\n\r\n </div>\r\n <div className=\"col-12\"id=\"cr7\">\r\n \r\n {Twitterlogin}\r\n \r\n </div>\r\n <div id=\"lastcontent\">\r\n   {lastContent}\r\n   </div>\r\n\r\n      </div>\r\n   \r\n   </div>\r\n         \r\n        \r\n     \r\n    )\r\n  }\r\n}\r\n\r\nexport default Google;","import './App.css';\nimport Google from './Google'\nimport React from 'react';\nimport FacebookLoginWithButton from 'react-facebook-login';\nimport GoogleLoginButton from 'react-social-login-buttons'\nclass App extends React.Component {\n    \n  render() {\n    return (\n\n      <>\n      \n      <div className=\"bbt\">\n      <Google/>\n         </div>\n       \n       \n      </>\n      \n      \n    )\n  }\n}\n\nexport default App","// This optional code is used to register a service worker.\n// register() is not called by default.\n\n// This lets the app load faster on subsequent visits in production, and gives\n// it offline capabilities. However, it also means that developers (and users)\n// will only see deployed updates on subsequent visits to a page, after all the\n// existing tabs open on the page have been closed, since previously cached\n// resources are updated in the background.\n\n// To learn more about the benefits of this model and instructions on how to\n// opt-in, read https://bit.ly/CRA-PWA\n\nconst isLocalhost = Boolean(\n  window.location.hostname === 'localhost' ||\n    // [::1] is the IPv6 localhost address.\n    window.location.hostname === '[::1]' ||\n    // 127.0.0.0/8 are considered localhost for IPv4.\n    window.location.hostname.match(\n      /^127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/\n    )\n);\n\nexport function register(config) {\n  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {\n    // The URL constructor is available in all browsers that support SW.\n    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);\n    if (publicUrl.origin !== window.location.origin) {\n      // Our service worker won't work if PUBLIC_URL is on a different origin\n      // from what our page is served on. This might happen if a CDN is used to\n      // serve assets; see https://github.com/facebook/create-react-app/issues/2374\n      return;\n    }\n\n    window.addEventListener('load', () => {\n      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;\n\n      if (isLocalhost) {\n        // This is running on localhost. Let's check if a service worker still exists or not.\n        checkValidServiceWorker(swUrl, config);\n\n        // Add some additional logging to localhost, pointing developers to the\n        // service worker/PWA documentation.\n        navigator.serviceWorker.ready.then(() => {\n          console.log(\n            'This web app is being served cache-first by a service ' +\n              'worker. To learn more, visit https://bit.ly/CRA-PWA'\n          );\n        });\n      } else {\n        // Is not localhost. Just register service worker\n        registerValidSW(swUrl, config);\n      }\n    });\n  }\n}\n\nfunction registerValidSW(swUrl, config) {\n  navigator.serviceWorker\n    .register(swUrl)\n    .then(registration => {\n      registration.onupdatefound = () => {\n        const installingWorker = registration.installing;\n        if (installingWorker == null) {\n          return;\n        }\n        installingWorker.onstatechange = () => {\n          if (installingWorker.state === 'installed') {\n            if (navigator.serviceWorker.controller) {\n              // At this point, the updated precached content has been fetched,\n              // but the previous service worker will still serve the older\n              // content until all client tabs are closed.\n              console.log(\n                'New content is available and will be used when all ' +\n                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'\n              );\n\n              // Execute callback\n              if (config && config.onUpdate) {\n                config.onUpdate(registration);\n              }\n            } else {\n              // At this point, everything has been precached.\n              // It's the perfect time to display a\n              // \"Content is cached for offline use.\" message.\n              console.log('Content is cached for offline use.');\n\n              // Execute callback\n              if (config && config.onSuccess) {\n                config.onSuccess(registration);\n              }\n            }\n          }\n        };\n      };\n    })\n    .catch(error => {\n      console.error('Error during service worker registration:', error);\n    });\n}\n\nfunction checkValidServiceWorker(swUrl, config) {\n  // Check if the service worker can be found. If it can't reload the page.\n  fetch(swUrl, {\n    headers: { 'Service-Worker': 'script' },\n  })\n    .then(response => {\n      // Ensure service worker exists, and that we really are getting a JS file.\n      const contentType = response.headers.get('content-type');\n      if (\n        response.status === 404 ||\n        (contentType != null && contentType.indexOf('javascript') === -1)\n      ) {\n        // No service worker found. Probably a different app. Reload the page.\n        navigator.serviceWorker.ready.then(registration => {\n          registration.unregister().then(() => {\n            window.location.reload();\n          });\n        });\n      } else {\n        // Service worker found. Proceed as normal.\n        registerValidSW(swUrl, config);\n      }\n    })\n    .catch(() => {\n      console.log(\n        'No internet connection found. App is running in offline mode.'\n      );\n    });\n}\n\nexport function unregister() {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready\n      .then(registration => {\n        registration.unregister();\n      })\n      .catch(error => {\n        console.error(error.message);\n      });\n  }\n}\n","import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();\n"],"sourceRoot":""}
