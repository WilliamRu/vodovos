<template>
    <div>
        <TheHeader></TheHeader>
        <TheSearchCruise></TheSearchCruise>
    </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader'
import TheSearchCruise from '@/components/TheSearchCruise'

export default {
  name: 'TheMainPage',
  components: {
    TheHeader,
    TheSearchCruise
  }
}
</script>
