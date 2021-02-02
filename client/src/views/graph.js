import {gql} from "apollo-boost";

export const CONTACT_ME = gql`
    query($email: String, $subject: String, $message: String) {
        contactMe(email: $email, subject: $subject, message: $message) {
            txt
        }
    }`;
