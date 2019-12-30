import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
      key: 'cincoeditora',
      paths: [
        'system.dismissedPrompts'
      ]
  })(store)
}
