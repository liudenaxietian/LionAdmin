const getter = {
    token: (state: any) => state.user.token,
    hasUserInfo: (state: any) => JSON.stringify(state.getters.userInfo) !== "{}",
}

export default getter;