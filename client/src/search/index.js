import lunr from "lunr";

// client side search

export default function(ref, fields, data) {
    return lunr(function () {
        this.ref(ref);
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            this.field(field)
        }
        data.forEach(doc => {
            this.add(doc)
        })
    })
}
