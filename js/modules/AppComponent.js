export default {
    template: `
    <section>
        <h1>This is the app page</h1>

        <form id="my-form">
            <label for="name">Enter Your Name: </label>
            <input v-model="user" type="text" name="username" required placeholder="username">

            <label for="password">Enter Your Password: </label>
            <input v-model="password" type="password" name="password" required placeholder="password">

            <input @click.prevent="submitUserData" type="submit" value="Sing Up / Log In">
        </form>
    </section>
    `,

    data: function() {
        return {
            user: "",
            password: ""
        }
    },

    methods: {
        submitUserData() {
            // do a fetch here using the POST method
            // refer to the Node Mailer example from last semester as to how you would get data from a form into a Fetch call using POST
            console.log('hit the API Pan is asking for, which should be in the root Vue instance');

            document.querySelector('form').reset();

            // reset the username and password data in our app
            this.user = "";
            this.password = "";
        }
    },

    created: function() {
        console.log('our app component rendered');
    },
}