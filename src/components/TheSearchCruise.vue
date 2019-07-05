<template>
    <div>
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <div v-if="loading">Loading...</div>

            <div class='search' v-else>
                <div>
                    <label>
                        <input
                                class="inputs-from"
                                type="text"
                                v-model="searchFrom"
                        >
                    </label>
                    <div class="inputs__list"
                         v-for="item in filteredCitiesFrom"
                         :key="item.id">
                        <div @click="selectCities('from', item)">
                            {{item.name}},{{item.obl}}
                        </div>
                    </div>
                </div>
                <div>
                    <label>
                        <input type="text" v-model="searchWhere">
                    </label>
                    <div v-for="item in filteredCitiesWhere"
                         :key="item.id">
                        <div @click="selectCities('where', item)">
                            {{item.name}},{{item.obl}}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

  export default {
    name: "TheSearchCruise",
    components: {

    },
    data() {
      return {
        searchFrom: '',
        searchWhere: '',
        city: '',
        citiesList: null,
        errored: null,
        loading: null,
        selectedDate: {
          start: new Date(2018, 0, 9),
          end: new Date(2018, 0, 18)
        }
      }
    },

    computed: {
      /*citiesList() {
          return this.$store.getters.CITIES;
      },*/
      filteredCitiesFrom: function () {
        const s = this.searchFrom.toLowerCase();
        return this.citiesList.filter(n =>
          Object
            .values(n)
            .some(m =>
              m
                .toString()
                .toLowerCase()
                .includes(s)
            )
        );
      },
      filteredCitiesWhere() {
        const s = this.searchWhere.toLowerCase();
        return this.citiesList.filter(n =>
          Object
            .values(n)
            .some(m =>
              m
                .toString()
                .toLowerCase()
                .includes(s)
            )
        );
      }
    },

    methods: {
      selectCities(model, selectCities) {
        if (model === 'from') {
          this.searchFrom = selectCities.name + ', ' + selectCities.obl;
        } else {
          this.searchWhere = selectCities.name + ', ' + selectCities.obl;
        }

      }
    },

    mounted() {
      axios
        .get('https://my-json-server.typicode.com/WilliamRu/TestAPI/cities')
        .then(response => {
          this.citiesList = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
    }
</style>