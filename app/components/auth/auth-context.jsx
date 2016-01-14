class AuthContext{

  constructor(){
    console.log("CREATING AuthContext -- SHOULD BE A SINGLETON");
  }

  setStore(store){
    this.store = store;
  }

  getStore(){
    return this.store;
  }

  loggedIn(){
    return this.store.getState().user.loggedIn;
  }
}

// AuthCtx as a SINGLETON

let authCtx = new AuthContext();

export default authCtx;
