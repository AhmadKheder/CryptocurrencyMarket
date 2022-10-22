<template>
<div class="tableContainer">
    <b-table :striped="striped" :bordered="bordered" :borderless="borderless" :outlined="outlined" :small="small" :hover="hover" :dark="dark" :fixed="fixed" :foot-clone="footClone" :no-border-collapse="noCollapse" :items="items" :fields="fields" :head-variant="headVariant" :table-variant="tableVariant"></b-table>
</div>
</template>

<script>
import axios from 'axios';
// import { title } from 'process';

export default {
    name: 'Tablex',

    head() {
        title: "assad"
    },
    data() {
        return {
            cryptocurrenciess: [],

            fields: [{
                    key: 'name',
                    sortable: true
                },
                {
                    key: 'current_price',
                    sortable: true
                    
                },
                {
                    key: 'price_change_percentage_24h'
                },
                {
                    key: 'market_cap_change_24h'
                },
                {
                    key: 'total_volume'
                },
                {
                    key: 'circulating_supply'
                },
                {
                    key: 'Last7Days'
                },
            ],
            items: () => {
                let currencies = []

                this.$store.state.cryptocurrencies.forEach(element => {

                    currencies.push(

                        {
                            id: element.id,
                            symbol: element.symbol,
                            name: element.name,
                            image: element.image,
                            current_price: element.current_price,
                            market_cap: element.market_cap,
                            market_cap_rank: element.market_cap_rank,
                            fully_diluted_valuation: element.fully_diluted_valuation,
                            total_volume: element.total_volume,
                            high_24h: element.high_24h,
                            low_24h: element.low_24h,
                            price_change_24h: element.price_change_24h,
                            price_change_percentage_24h: element.price_change_percentage_24h,
                            market_cap_change_24h: element.market_cap_change_24h,
                            market_cap_change_percentage_24h: element.market_cap_change_percentage_24h,
                            circulating_supply: element.circulating_supply,
                            total_supply: element.total_supply,
                            max_supply: element.max_supply,
                            ath: element.ath,
                            ath_change_percentage: element.ath_change_percentage,
                            ath_date: element.ath_date,
                            atl: element.atl,
                            atl_change_percentage: element.atl_change_percentage,
                            atl_date: element.atl_date,
                            roi: element.roi,
                            last_updated: element.last_updated,
                        },
                    )

                });
                return currencies
            },
            rows: () => {
                this.$store.state.cryptocurrencies.forEach(element => {
                    this.items.push({
                        name: element.name,
                        current_price: element.current_price,
                        price_change_percentage_24h: element.price_change_percentage_24h,
                        market_cap_change_24h: element.market_cap_change_24h,
                        total_volume: element.total_volume,
                        circulating_supply: element.circulating_supply,
                        Last7Days: element.name,
                    })

                });
                return this.$store.state.cryptocurrencies
            },
            tableVariants: [
                'primary',
                'secondary',
                'info',
                'danger',
                'warning',
                'success',
                'light',
                'dark'
            ],
            striped: true,
            bordered: false,
            borderless: false,
            outlined: false,
            small: false,
            hover: false,
            dark: true,
            fixed: false,
            footClone: false,
            headVariant: null,
            tableVariant: '',
            noCollapse: false
        }
    },
    async created() {

        try {

            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            this.cryptocurrenciess = res.data
            this.$store.commit('set_cryptocurrencies', this.cryptocurrenciess)
        } catch (err) {
            console.log(err)
        }
    },

}
</script>

<style>
.tableContainer {
    display: flex;

}
</style>
