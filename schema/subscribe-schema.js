// Apollo Client Dependencies
import { gql } from "@apollo/client";

// Schema initialization
/**
 * @Schema Create subscriber in newsletter.
 */
export const POST_SUBSCRIBE_BY_EMAIL = gql`
    mutation subscribeNewsletter($email: String) {
        subscribe(input: {
            email: $email
        }) {
            status {
                code
                message
                response
            }
        }
    }
`;