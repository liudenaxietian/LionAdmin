
const getter = {
    token: (state: any) => state.user.token,
    hasUserInfo: (state: any) => JSON.stringify(state.getters.userInfo) !== "{}",
    // cssVar: (state: any) => variables
}

export default getter;