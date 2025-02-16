import { createStore } from 'vuex'

export default createStore({
  state: {
    fighters: [],
    fightersLoaded: false,
    bioOpen: false,
    sortType: 'Default',
    altOptionsShowing: false,
    mobileMenuShowing: false,
  },
  getters: {
    getFighters: (state) => {
      return state.fighters
    },
    getSelectedFighter: (state) => {
      let selectedFighter = state.fighters.find((fighter) => {
        return fighter.isSelected
      })

      if (selectedFighter !== undefined) {
        return selectedFighter
      } else {
        return ''
      }
    },
  },
  mutations: {
    SET_INITIAL_FIGTHERS: (state, fighters) => {
      fighters.map((fighter) => {
        fighter['isSelected'] = false
        state.fighters.push(fighter)
      })

      state.fightersLoaded = true
    },
    SET_SELECTED_FIGHTER: (state, selectedFighter) => {
      state.fighters.map((fighter) => {
        if (fighter.name == selectedFighter) {
          fighter.isSelected = true
        } else {
          fighter.isSelected = false
          fighter.alt = 0
        }
      })
    },
    SET_FIGHTER_ALT: (state, fighter) => {
      state.fighters.map((character) => {
        if (character.name == fighter.name) {
          character.alt = fighter.alt
        }
      })
    },
    SET_BIO_STATE: (state) => {
      state.bioOpen = !state.bioOpen
    },
    SET_SORT_TYPE_STATE: (state, sortType) => {
      state.sortType = sortType
    },
    SET_ALT_OPTIONS_STATE: (state) => {
      state.altOptionsShowing = !state.altOptionsShowing
    },
    SET_MOBILE_MENU_STATE: (state) => {
      state.mobileMenuShowing = !state.mobileMenuShowing
    },
  },
  actions: {
    setInitialFighterState: (context, fighters) => {
      context.commit('SET_INITIAL_FIGTHERS', fighters)
    },
    setSelectedFighterState: (context, fighter) => {
      context.commit('SET_SELECTED_FIGHTER', fighter)
    },
    setFighterAltState: (context, fighter) => {
      context.commit('SET_FIGHTER_ALT', fighter)
    },
    setBioOpenState: (context) => {
      context.commit('SET_BIO_STATE')
    },
    setSortTypeState: (context, sortType) => {
      context.commit('SET_SORT_TYPE_STATE', sortType)
    },
    setAltOptionsShowingState: (context) => {
      context.commit('SET_ALT_OPTIONS_STATE')
    },
    setMobileMenuShowingState: (context) => {
      context.commit('SET_MOBILE_MENU_STATE')
    },
  },
  modules: {},
})
