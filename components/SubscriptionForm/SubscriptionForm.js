// Styling Dependencies
import { useStyles } from './styles';
import styles from '@/styles/product/Product.module.css';

// Material UI Components Dependencies
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

// Apollo Client & Schema Dependencies
import { useMutation } from '@apollo/client';
import { POST_SUBSCRIBE_BY_EMAIL } from './schema';

export default function SubscriptionForm() {
    // Initialize Material UI styling
    const productStyles = useStyles();
    
    /**
     * @func Initialize useMutation
     * @type [mutateFunction: function, mutateObject: object ]
     * @desc mutateFunction: mutate function that can be called at any time to execute the muatation
     * @desc mutateObject: an object with field that represents the current status of the mutation's
     * execution (data, loading, etc)
     */
    const [subscription, { loading, data, error }] = useMutation(POST_SUBSCRIBE_BY_EMAIL);
    // Track mutation status
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;


    /**
     * @func Send subscription data
     */
    function subscribeNewsletter(e) {
        e.preventDefault();
        
        const email = e.target[0].value;
        
        subscription({ variables: { email: email } });
    }

    console.log('Mutation Data: ', data);
    
    return (
        <form
            className={styles.subscriptionsForm}
            onSubmit={e => (subscribeNewsletter(e))}
        >
            <TextField
                className={productStyles.newsletterInput}
                required
                id="newsletter-email"
                label="Email"
                type="email"
            />
            <Button
                className={productStyles.newsletterButton}
                variant="contained"
                type="submit"
            >
                Subscribe
            </Button>
        </form>
    )
}