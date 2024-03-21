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

## Bitcoin-Investment (Gesamtlösung)
[Playground](https://play.vuejs.org/#eNqtV21v2zYQ/iuEiiFOU9nO0hWd4wRr03TtOnRFW2Af6n6QJcpiQ5ECRdlJA//3PXyRRL+kabchQCvp7h4+d3zuSN9Gz6pquGxoNImmdapYpUlNdVOdzwQrK6k0uSWK5o9IKsuq0TQja5IrWZIDBB3MxEykUtSazJlOJRPvFEspOSPHT349ftxbmVjSWpdU6BpG4A0+zcTnw9AB4BeyEdrbDw5gDWwt8D7bi0S3pkZkNGeCZgH2lRRa1joRGZzaNAaDQ3J2Tm5nghBONdFSJ7wlMD41n3OpBsbEzsanbBqkMFwmvKFDTsVCF6fs6OjQ4ZAQ5egszNqFfGKfh6mxGu+1+Ueh1koEcTOx3iiLQWAU23AP9bY+/426Q7mLemWtD380Lwu6mdcKGb2iSGY3rX63HDbWC7XV7fyCrpgQu/EdtA+PgyK6T5ZH3ohUMylIkmUEkbYKu4WqmroY3GINJDcJVOrMj4gtiTdYfq0hgyYnRNAVMeocdDr1FIZa/inThFPz7YNWTCwGsyij8YvLWXRITK1Qx+nItSSaES+alhWHO94ImRbH9n9CnrvqxK878vF7mhaCKus38o72BbooyW91My+ZxnbSJbzPZhFqMItIypO6xltfhdj6z+X1LPKLTYsT/0TIW9rQmvTLEqpyIFBwta6jzneasWUHn3Pa4830ji0+7qw2lidzyo2iYXcii86fia9JwaGBq6TJoSJfg3o6st4dOOBt5Ym+qSjiRVPOUZeIsKxHI8u4lBnlNvV2gwMO0xEo/ju+Vh4wt3v0plE/yNEjbHN0PfW/cDRKhRVCbMr7uDlfx8w/bxEzer6DF97mjdboOY/mdLjB7HJDQibehbRC6uCmI6PNXtlhxhuCzdpszLM+f0GZIG+6GQNA012tPTu/vQ3Pi/WaPP94AaescwrBnPbNZNmHEwxv4Fy8enknzt/GpzBDax9OPyzvgfndjsR9EH5Y7sTj0ZWnL6x9a/j+YnKG/Xay6acEEg0nZ9DbXRGMwZ0QvqTka1OSd4qymiwhiE1Hd87A8aUakqTcshrdwdgmwJlPoDGZTEfBlMRrrW+4G5gTJSUuMy4sjq1Y44KyRYHBfvK0urYHp4V92Loh97hmXzGcJ3hWGVUxPp3aGlnPucxuWucyUQsmJuTpuLruHFyjeY+M1aB2Aywu0yu7XhsGXMi8nJDHnog5wzGAsTqOkeNfQnquIz1mhdlt+fWBbVLLRA02Ez30HklV0UQlwhxdQgrqP7sUsVx1TWrJWUYeJEmyYYxVkrGmDpdbsUwXCBqPf+o5+kb3JO9aL0mvFgqqyCbkwcnTJ8f53FtSySWIPMjz/LuTCitBzH763miz2kl0JxfLfIgd7vY/JJiPzd/2Yj9jt78X9WgD3G+8llWA4py3T+A9EY+/HVGc7Aty7F2EORZ2hGk+thrhbCFihnZCLvYMoSLzti8N5lp+E+MmprEkBE31ilLhzYtkNyV3CrULmjdIprdnXZO0bRRwzTq1255YeSnMJW8J3dkrmZ4IqQeTnKlax2nBeNbdeO/eAFwJt9gYTY1DTpiQewmj5RlWsnMn0JwbBmyna6HTEJUzRxezd5ttN3/cnAh6lI7NXwuCO6OdedGjSNfYoJwthl9qKfADzyKZa09ZMU7VX5W5AGNeT9o1cBPkXK7+sN+0wj22/Z4WNL3a8/1LjdNhggfM8pqqJc7+zqZRGIrj3ZgvP7yl13jujLg0NBze3zC+p0iwMRyd23P0IWgHfpbta/szFdX8WF9eQ451m5Qhaoti/WcRfrBefCP1nu7JED9dbTHX0fof8+jzOA==)

## Tasks
[Playground](https://play.vuejs.org/#eNqdV9tu20YQ/ZWJgEIyIsnKpS+qHTRtXaRFYQdJ3qqioMSluPFyl9hdKkoM/U2+oU9984/17I2kLMtJkxi2OJczZ2ZnZqmbwcu6nm4aNpgPzsxK89qSYbapXywkr2qlLd2QZsWYVqqqG8ty2lGhVUVDOA0XciFXShpLNjPXhs6d7ejPhSS4Wba1cxq+yQyTVN1+Lpkcjin+y5VkcyoyYdiYSr4u/641V5rbj62UGcurDCHn9IR24z3QX3UmP93+Y7hZlSSYlh47gFrdHGIG4UOQF1xeZ03RJ/kwzS9DvlzCU5DOGrPUXK57JP8X5F8n+4V+B/hY6+EQuk7zCnivARe1PsqewUXA5kpGk1kfW9lMXOqr4l08zXToo9EJnb8IhzzdZKJhU8Hk2pYttoTXL8jsiOeNq4tgFvJGOu6zH5ykUHrkpJZU0Uc/CQ5EvBjZqatYK6EA8fhxeNy5P/6XRttqGbQLubuf2dM+Ned1mFjBhWV6tHXybYjdJbuQRSNXvnxWXTbVEpbLyA1c08eWzRNPjxiO4Y5mFonjJzE1GDeWH1TwfppWvfXmo1E2JsR16pbRdK+vTmjS6bI7upPe+auaSRd+r0mOnaRvls7yqriK3o781x/vo4PzfQD48TnZaTseRzrguH9oi94ZZnmOrHzkfm3rxpSjNMVp4ILucGR7U5dM9ka8N837AxisyVEK4bsoqOBigP9RsY8PpYdO2gNElD/2VZuoZpXasJEzP8wXDvcMAKYULTV1RaBH58HEP4EvwM9Ow3WBiwIPllW1QJJ4IjrL+YZWIjPmfDFAZ9mMS6YXA6+EunwaPxG9bIp1tmRScGN9QlCftvoocJdRML+5ubNodjvaID3IQwZhUJ046A2XOTEtWM7XdkqXCteFKrDk587nnn7f7cpEw4WNn/sJoamryVqrpm4zgoVAFsI1PCwcFeguWcO053F26tWdNZcYqX1EVyetxGJAPG8xyH6smXtC2fG0mVQqZyKqXbt0RT0Fx28lHFsU+cPirW1kziQu1tvP9lMj19/Avg/4YA5d5Y9l0ufppq6fQyDiIwZVirUq2ep6qbYH8dIk9VBeqZKRk2GekXEikXI+VtDMD5bp01k21qKFflwJvrqGnd8uPQPyzYAFIj81xe2/eB1oXU+D750S9Gag6dVfcGTVtRpx2b86kPM8Mb2hITcTt46GYfv4XTumoVtik7TEkm5vs2Gl9pnHWn+pvh4fjmkiw/rAOI6SoF2HbtRODovW31QA+gMveYiGdbNXIX9CvC1XrE6q29lpbx/h0diPIqymaSxHum0cvUnOVkr7JpyTwKqa2BLTsi79HeZvFu+6V7MEUKDxJx8YVLgqlkrk3sm9pAil59i7QdChdNOYIHJuwBVXyVKo1fVx8zAJx52IqkyvuZwsFSpVzelpvb0PLc5qQvrAc1viTXM2+y7C1GhcvK16APo+ghCVMctnCfcgYLK9EzCOytdQt6oGFfTAkYySpovQ3i8JPrjAdgb2WWNVC7WdxFyfz6CL4rvph6vNN8xgPLAG+AVfT98bJfEdycdwl1pVc3ztuKrjEsB1Esd1gDd+9eF3L/Ov80nuZ+Ye+XuDMZrjw2vNDNMbjE+rs8iFYWs69cXbS79BWyXmrhGwfkD5hhklmrBendlPWO2g3bPzbH/z3/Rw5O/MxdZi96ekHFFfFG+/GOA7388PpN7RfTZ9nt5vB7v/ACpg0s0=)

## Komponenten
[Playground](https://play.vuejs.org/#eNp9UsFOAjEQ/ZWxFzVBNkRPm9VEDAl6UCIkXHrZsLNQ7La17QKG7L87LbBgJFya9M17nfdmumXPxnRXNbKUZW5mhfHg0NfmiStRGW09DFFKPdVWFlBaXcF1NzlCQXrNVZbstKSii8fKyNwj3QCyE73HjX/kbIrScwapW+j1ZAd5WyNBCUmypNWzDvvb6ozLAkuhcGS1cTfb0DA0SWHsrVDzTgAObVKIdWL8GEyhr7XEXEUKgMXvWlgsUihz6XCP0uN5LUkZ/EWsobO5vZCY+2zRg9WdKCnWoTVncRYAw5ziwHYbXULTXMURJYvev+DezbQqxby7dFpR7uids5mujJBoP4wXWjnO2lSchbfXbxFr/UbNAmdfZ/Cl2wSMs5FFh3ZFG2hrPrdzJN+hPBi/xwxtsdJFLYl9ofiJTss6eNzR+rUqyPYJL7p9jX+MNjVxg41H5Q6h4ofYzzuwafkvF6If7d53H6KO1sSaX/749pw=)

## Beispiel: Events und Properties
[Playground](https://play.vuejs.org/#eNqVUk1PAjEQ/SuTxgQMhjV6I4tBkYMelIg36wF2Byjstk0/kGSz/91pYZEoIfG02/fevJl5bcXute5uPLIeS21mhHZg0Xl9x6UotTIOKjA4hxrmRpXQImnrQA2Vlw7Nnuom+3PwIxEAl5mS1kEWcOgHo/b1JZdpsmtFTejgsNTF1CGdANLlzd1EyEWBaUK/EWra9KJPn7P45QwG0zxvjp0OAUksaHwelZ/92wc6fbjZW6XJYTZ2xY62O5EWQI5zIXFUCmfbHy2ybH3Srg0+NkoHPDaJzFEKvzKYeeeUhEFWiGxNg10gmbaj5SVnUQO78EFQvFW1T7iuY3myq/+zgLN0HXOx6K6skrRCFcOitUstCjSv2gm6Ls56EJnATYtCfT1HzBmPVw2eLTFbn8BXdhswzsYGLZoNcnbg3NQskOIO9Gjyglv6P5Clyn1B6jPkG1pV+DDjTvbgZU5jH+nitE/xbdITerejrUNpm6XCoEFZRz1ndI/DM6v/jHvbvY11XNas/gb1Ng88)