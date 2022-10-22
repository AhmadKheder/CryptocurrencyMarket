export const state= ()=>({
    cryptocurrencies:[]
})

export const mutations={
    set_cryptocurrencies(state,cryptocurrencies){
        state.cryptocurrencies = cryptocurrencies
    }
}

