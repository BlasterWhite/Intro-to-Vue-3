app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
        <h3>Reviews :</h3>
        <ul>
            <li v-for="review in reviews">
                <p>{{ review.name }}</p>
                <p>{{ review.review }}</p>
                <p>Rating: {{ review.rating }}</p>
                <hr>
            </li>
        </ul>
    </div>`,
})