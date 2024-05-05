import { ref } from "vue";
export default {
  props: [],
  emits: [],
  setup(props) {
    const cart = ref([]);
    try {
      cart.value = JSON.parse(sessionStorage["cart"]);
      console.log(cart.value);
    //   sessionStorage.clear();
    } catch (error) {
      console.error("No cart found \n" + error);
    }

    function calculateTotal() {
      let totalPrice = 0;
      for (let i = 0; i < cart.value.length; i++) {
        totalPrice += cart.value[i].price * cart.value[i].cartCount;
      }
      return Math.round(totalPrice * 100) / 100;
    }

    return {
      cart,
      calculateTotal,
    };
  },
  template: `
    <div style="color:red; font-weight:bold;" v-if="cart.length<1">
        No cart found! Please try again!
        <br><br>
    </div>
    <div v-else class="checkout">
        <div class="items">
        <h2>Cart</h2>
            <table>
                <tr>
                    <th class="aLeft" colspan="2">Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr v-for="item in cart">
                    <td><img :src="item.image[0].url" :alt="item.image[0].alt"></td>
                    <td class="aLeft">{{ item.name }}</td>
                    <td>£{{ item.price }}</td>
                    <td>{{ item.cartCount }}</td>
                    <td>{{ item.cartCount*item.price }}</td>
                </tr>
                <tr>
                    <th class="aRight" colspan="5">Total: £{{ calculateTotal() }}</th>
                </tr>
            </table>
        </div>

        <form class="checkoutForm">
            <h2>Checkout</h2>
            <h3>Shipping Address</h3>
            <div class="name">
                <div class="fname">
                    <label for="fname">First Name</label>
                    <input type="text" name="fname" placeholder="Firstname">
                </div>
                <div class="sname">
                    <label for="sname">Surame</label>
                    <input type="text" name="sname" placeholder="Surname">
                </div>
            </div>

            <div class="email">
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email">
            </div>

            <div class="address">
                <div class="line1">
                    <label for="line1">Address Line 1</label>
                    <input type="text" name="line1" placeholder="123 Street">
                </div>
                <div class="line2">
                    <label for="line2">Address Line 2</label>
                    <input type="text" name="line2" placeholder="Flat 7">
                </div>
            </div>
            <div class="address2">
                <div class="city">
                    <label for="city">City / Town</label>
                    <input type="text" name="city" placeholder="London">
                </div>
                <div class="postcode">
                    <label for="postcode">Postcode</label>
                    <input type="text" name="postcode" placeholder="Postcode">
                </div>
            </div>

            <div class="address3">
                <div class="country">
                    <label for="country">Country</label>
                    <input type="text" name="country" value="United Kingdom" disabled>
                </div>
            </div>

            <h3>Confirmation</h3>

        </form>
    </div>
    `,
};

