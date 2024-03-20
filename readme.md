# Modul 294 Lösungen

## Lösung Name Generator
[Playground](https://play.vuejs.org/#eNqVVM1S2zAQfpUdXxJaSIZpuaQhFFra0mlph/SGOQh744jIkkaSg0Mm796VbBlDGWZ60mr32/9P2ianWo/WFSaTZGozw7UDi67Ss1TyUivjYAsGF7CDhVElDAg6SGWmpHUgWYlw7M3DNDk5OUmTvVRGoyY1r9ES4DqVAINvG42D/SCe8YdW+qFEFK/UQrTiVyZYvfkH/IXJqKseOjdk0W2uBM9b+UI6NK18mjm+jrnn90rZpb/cPBZrq8XTYjUzq9bB6i5tJlQVEwildCuu0dgYXrBNl7cT4pkr10lZL34WvTfMxPg2YyKqLS9k1yUN1tpWvmcmYvyuuq4WlaSelYQC3RWTuSppHsOS1Xuw9WhDKzYSfjK3HC2oEzMMognQ4R68AY/9kMrds2gSDXNIiBCmv+kLmWNN83uSMZJgJFAWbgkHcEgUiY7N1F90jAt57ugpN1ozUXnixejXvQpu4G23zeteAhoL9TIdNxwndtPFYakFtUM3gOnycPYZuYS5Y4YeACyRW+umY9IHu55ttw3ld7vp2D8QUt5WztFgPmaCZ6vjNHmcUJrMLj04aDgapOQNmjyn415uulq3EY2om8nesmxVGFXJfAKCF0tXGLahfQBoludcFhM4HB0ZLIPOYe0OGOHkBDL0zA/qW2VyNAeG5byyEzjSdU9NAXQN1j8Z8MHbXbcNNUX8n3+IMDFK0Z/xclVtDtpC6DfZT5wlKix4MbqzStIfFBzTJFOl5gLNL+15Z9Nk0oT0NiaEuv8edM5UGNgffJaYrV7Q39na69LkNz0cNGtMk85GqybaNebz+SUV3DOWKq8EoV8xXiENoPI1NrAzWhiV3cOFai/CT0pb+2PPa4fSxqZ8oR65C/g0od/10yutP5b7bvQ++NFEk91ft33s3Q==)

## Lösung Wetterstation
[Playground](https://play.vuejs.org/#eNqdVVtu2zAQvMpCP7GbWI6dFi1c2X0ESdEESIsmRYFCP7K0shhLlEAubQeGbpMD9AzNxbp62U4tpEW+RHJmZ4fLJbW2PmSZvTBojSxH+0pkBBrJZBNXiiRLFcEaFIZH4KdJZggDyCFUaQIHHHTgSlf6qdQEPsZaGA3jgt0ZHHcbIPQihTJCQYw1Ih1XAnS6MJ5Ap1OH2gsvNggvYGC/6cIhnAy7NqXnYsX0YZf1GsU5xgshd9Uqpcc6PRi+PrEHr3YChb4205+o0v3YdWFIhH95ceC4W0HA2yKjJLjWhedaxVIOzMU9+AqFrAmuzNuyD9sLsZca3tXZYLTRLfVCI30SqQQ/8uQMO16SGkm108cyh2OoUPbiSqdfHTEfLk8Ikyz2CHkG4ESD8gvwA4lQafKKFCXUrzGHvGmM4Mee1mPXKmeuVYc5pOpRMY4mN6yOyuOqAB/WaeXK6TOyZQWT9XrTOXn++9cpE4JGsL9RfFr7fNNhbfI7/VdkOH9Ohsuy49rU614slC//T/m75OrCJwyVQJUZOW91vW3VPG/T5UFR/WociEWDTw0RN8Z7Pxb+nM+o7pDeoLs5KIAzDUuhApg/3MdsppGuYv+h1Cq0fLhXSauQ06/Msd9tt/FU013tfpoGd80lIlxRz4vFTI64LYpCva0vEoBdNV/NXIqAohG/EcfZquQAJJ6aCQ4slsAzlO7FUtSWKMaQ9qlBG1WJWbTDrUt02AzqiMpIr9Ct3DQRfP3KbVtHFml+FEIxs291KvntLUO5yPwsiBjVl6y4fNq1Ro2oa3lxnC4vyjVSBo+adT9Cf96yfqtXxZprfVWoUS34qm4wYotIFXx2fcVb3AGTNDDFxX4C/IY6jU35QJS0j0YGbHuHV7r9XP5BhJzd6LMVodTNpgqjZVFKvmvxv+T0ia1v7Z7YL5un1cr/AHzALzU=)

## v-if v-for

```
<script setup>
import { ref } from 'vue'
const numbers = ref([ 1, 2, 3, 4 ])
</script>

<template>
  <ul>
    <li v-for="myNumber in numbers">
      <span v-if="myNumber % 2 == 0">Gerade Nummer: {{ myNumber }}</span>
      <span v-if="myNumber % 2 != 0">Ungerade Nummer: {{ myNumber }}</span>
    </li>
  </ul>
</template>
```

## Bitcoin-Investment (Zwischenlösung)
```
<script setup>
import { ref, computed } from 'vue'

const bitcoinPrice = 16914

const investments = ref([
  // { count: 4, price: 15000 },
])

const inputCount = ref('')
const inputPrice = ref('')

const kontostand = computed(() => {
  let totalCount = 0;
  for(let i=0;i<investments.value.length;i++) {
    totalCount += investments.value[i].count
  }
  return totalCount
})

function add () {
  investments.value.push({ count: inputCount.value, price: inputPrice.value })
}
</script>

<template>
  <h1>
    Bitcoin-Investment-Rechner
  </h1>
  
  <form @submit.prevent="add" class="investment-form box">
    <h3>
      Neues Investment erfassen
    </h3>
    <div class="flex">
    	<div class="flex-1">
        <label for="count">Anzahl gekaufte Bitcoins</label>
    		<input type="number" id="count" v-model="inputCount">
      </div>
    	<div class="flex-1">
        <label for="price">Bitcoin-Kurs</label>
    		<input type="number" id="price" v-model="inputPrice">
      </div>
      <button type="submit">
        Erfassen
      </button>
    </div>
  </form>
  
  <div class="box">
    <dl>
      <dt>Dein Kontostand</dt>
      <dd>{{ kontostand }} BTC</dd>
      
      <dt>Investiert</dt>
      <dd>??? CHF</dd>
      
      <dt>Wert heute</dt>
      <dd>??? CHF</dd>
      
      <dt>Gewinn</dt>
      <dd>??? CHF</dd>
    </dl>
  </div>
  
  <ul class="box">
    <li v-for="investment in investments">
    	{{ investment.count }} BTC zum Preis von {{ investment.price }} Fr.
    </li>
  </ul>
</template>
```