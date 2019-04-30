import authConfig from "./../../../../auth_config.json";
import auth0 from "auth0-js";
import EventBus from "@/event-bus";

const webAuth = new auth0.WebAuth({
  domain: authConfig.domain,
  redirectUri: `${window.location.origin}/callback`,
  clientID: authConfig.clientId,
  audience: authConfig.audience,
  responseType: "token id_token",
  scope: "openid profile email"
});

const state = {
  userProfile: {},
  accessToken: null,
  idToken: null,
  tokenExpiry: null
};

const mutations = {
  SET_ACCESS_TOKEN(state, payload) {
    state.accessToken = payload;
  },
  SET_USER_PROFILE(state, payload) {
    state.userProfile = payload;
  },
  SET_ID_TOKEN(state, payload) {
    state.idToken = payload;
  },
  SET_TOKEN_EXPIRY(state, payload) {
    state.tokenExpiry = payload;
  }
};
const actions = {
  localLogin(context, payload) {
    context.commit("SET_ID_TOKEN", payload.idToken);
    context.commit("SET_ACCESS_TOKEN", payload.accessToken);
    context.commit("SET_USER_PROFILE", payload.idTokenPayload);

    // Convert the JWT expiry time from seconds to milliseconds
    context.commit(
      "SET_TOKEN_EXPIRY",
      new Date(payload.idTokenPayload.exp * 1000)
    );

    localStorage.setItem("loggedIn", "true");

    EventBus.$emit("login");
  },
  updateAuthenticationStatus(context, payload) {
    context.commit("UPDATE_AUTHENTICATION_STATUS", payload);
  },
  logOut(context) {
    localStorage.removeItem("loggedIn", "true");
    context.state.accessToken = null;
    context.state.idToken = null;
    context.state.tokenExpiry = null;
    context.state.profile = null;

    webAuth.logout({
      returnTo: window.location.origin,
      clientID: authConfig.clientId
    });
  },
  handleAuthentication(context) {
    return new Promise((resolve, reject) => {
      webAuth.parseHash((err, authResult) => {
        if (err) {
          reject(err);
        } else {
          context.dispatch("localLogin", authResult);
          resolve(authResult.idToken);
        }
      });
    });
  },
  renewTokens(context) {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem("loggedIn") !== "true") {
        return reject("Not logged in");
      }

      webAuth.checkSession({}, (err, authResult) => {
        if (err) {
          reject(err);
        } else {
          context.dispatch("localLogin", authResult);
          resolve(authResult);
        }
      });
    });
  },
  login(context, customState) {
    webAuth.authorize({
      appState: customState
    });
  }
};
const getters = {
  userProfile: state => state.userProfile,
  accessToken: state => state.accessToken,
  isAuthenticated: state => {
    return (
      Date.now() < state.tokenExpiry &&
      localStorage.getItem("loggedIn") === "true"
    );
  }
};

const authModule = {
  state,
  mutations,
  actions,
  getters
};

export default authModule;
